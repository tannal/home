---
title: 'KVM简介第一篇——Libvirt'
description: 这是QEMU/KVM系列文章的第一篇
date: '2022-11-10'
author: 'tannal'
---
## 常见的 Hypervisor/Driver
<ul class="ml-8">
  <li class="list-disc">Xen</li>
  <li class="list-disc">VMware</li>
  <li class="list-disc">LXC</li>
  <li class="list-disc">QEMU</li>
  <li class="list-disc">VirtualBox</li>
  <li class="list-disc">Microsoft Hyper-V（BSD hypervisor）</li>
  <li class="list-disc">IBM PowerVM</li>
  <li class="list-disc">OpenVZ</li>

</ul>

## libvirt 简介
虽然是用C语言编写的，但是也有其他语言的Bindings，比如Java，Perl，C#，Python，Ruby
<ul class="ml-8">
  <li class="list-disc">一个稳定的管理VM的API界面</li>
  <li class="list-disc">构建在hypervisor上面</li>
  <li class="list-disc">Client-Server架构</li>
  <li class="list-disc">实现vm的配置、添加、修改、监控、迁移等功能</li>
</ul>


## libvirt 结构
<ul class="ml-8">
  <li class="list-disc">driver-based architecture</li>
  <li class="list-disc">构建在hypervisor上面</li>
  <li class="list-disc">Client-Server架构</li>
  <li class="list-disc">实现vm的配置、添加、修改、监控、迁移等功能</li>
</ul>

![driver-based-architecture-图片来自Master KVM Virtualization by Vedran Dakic | Humble Devassy Chirammal | Prasad Mukhedkar | Anil Vettathu](/assets/images/driver-based-architecture.png)


Hypervisor是第一级driver，而诸如CPU、网络、disk等各种设备是第二级的driver（secondary-level driver)
:::div{class="py-4"}
  ::tabs
    :::tab{name="ts" title="C"}
      ```c
      struct _virConnectDriver {
          /* Whether driver permits a server in the URI */
          bool localOnly;
          /* Whether driver needs a server in the URI */
          bool remoteOnly;
          /* Whether driver can be used in embedded mode */
          bool embeddable;
          /*
          * NULL terminated list of supported URI schemes.
          *  - Single element { NULL } list indicates no supported schemes
          *  - NULL list indicates wildcard supporting all schemes
          */
          const char **uriSchemes;
          virHypervisorDriver *hypervisorDriver;
          virInterfaceDriver *interfaceDriver;
          virNetworkDriver *networkDriver;
          virNodeDeviceDriver *nodeDeviceDriver;
          virNWFilterDriver *nwfilterDriver;
          virSecretDriver *secretDriver;
          virStorageDriver *storageDriver;
      };
      ```
    :::
  ::
:::


### Libvirt支持的Hypervisor以及对应源码的目录
- • esx/: VMware ESX and GSX support using vSphere API over SOAP
- • hyperv/: Microsoft Hyper-V support using WinRM
- • lxc/: Linux native containers
- • openvz/: OpenVZ containers using CLI tools
- • phyp/: IBM Power Hypervisor using CLI tools over SSH
- • qemu/: QEMU/KVM using the QEMU CLI/monitor
- • remote/: Generic libvirt native RPC client
- • test/: A mock driver for testing
- • uml/: User-mode Linux
- • vbox/: VirtualBox using the native API
- • vmware/: VMware Workstation and Player using the vmrun tool
- • xen/: Xen using hypercalls, XenD SEXPR, and XenStore
- • xenapi: Xen using libxenserver

### 第二级driver以及对应目录
- • cpu/: CPU feature management
- • interface/: Host network interface management
- • network/: Virtual NAT networking
- • nwfilter/: Network traffic filtering rules
- • node_device/: Host device enumeration
- • secret/: Secret management
- • security/: Mandatory access control drivers
- • storage/: Storage management drivers

### 五个主要的对象以及它们之间的关系
![](/assets/images/api-objs.png)

<ul class="ml-8">
  <li class="list-disc">virConnectPtr: Libvirt需要连接到一个hypervisor，该对象代表了这种连接</li>
  <li class="list-disc">virDomainPtr: host和guest都被叫做domain，该对象表示一个主机</li>
  <li class="list-disc">virStorageVolPtr: 代表存储系统的一卷（volume）</li>
  <li class="list-disc">virStoragePoolPtr: 一个volume是一个storage pool的一部分</li>
  <li class="list-disc">virNetworkPtr: 代表一个虚拟网络</li>
</ul>

## qemu

### qemu是什么？
QEMU由Fabrice Bellard撰写，同时他也是ffmpeg的作者，以GPL协议开源。
当它以emulater的角色工作时，它采用动态二进制翻译让机器可以跑另一种指令集的程序/OS。
负责翻译工作的部分叫做TCG，它其实是个JIT（just in time）编译器。
当它以virtualizer的角色工作时，就需要监控vm，与KVM通信合作。
### virsh
一个命令行程序用于管理虚拟机（libvirt-client）
即使emulater也是virtualizer
