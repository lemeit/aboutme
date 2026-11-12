+++
title = "ΣIM · 过程模拟"
description = "使用 DWSIM 引擎的教育过程模拟器，提供西班牙语网页界面。"
summary = "使用 DWSIM 引擎的教育过程模拟器，提供西班牙语网页界面。"
date = "2026-11-12"
lastmod = "2026-11-12"
weight = 18
draft = false
+++

<img src="/images/logos/sim.svg" alt="ΣIM · Simulación de procesos" width="280">

[**打开 ΣIM**](https://sim.lemeit.ar/) · [示例](https://sim.lemeit.ar/ejemplos.html) · [英文文档](https://wiki.lemeit.ar/en/sim/)

ΣIM 是一个用于教学的过程模拟项目，可连接设备和物流，设置条件，并使用 DWSIM 研究物料与能量衡算。项目仍在开发中，不提供 DWSIM 桌面编辑器的全部功能。

## 功能与范围

包含物料流、能量流、混合器、分流器、加热器、冷却器、多组分混合物，以及文档范围内的转化率反应器和平衡反应器。

浏览器显示流程图和结果，外部 DWSIM 引擎执行计算。用户手动选择 Windows 或 Debian 引擎；计算需要可用的引擎。打开编辑器或查看设备目录不代表已经完成模拟。

当前范围为稳态过程，不含循环回路。示例是模型计算结果，不是实验测量或独立物理验证。应用界面和示例指南目前为西班牙语。

## 名称与链接

名称 **ΣIM** 由希腊大写字母 sigma 与拉丁字母 I、M 组成。本项目与 [Bestiario · Seres Térmicos](/zh/projects/simus/bestiario/) 的物理模型互动故事不同。

- [模拟器](https://sim.lemeit.ar/)。
- [示例指南](https://sim.lemeit.ar/ejemplos.html)。
- [设备目录](https://sim.lemeit.ar/catalogo.html)。
- [英文文档](https://wiki.lemeit.ar/en/sim/)。
- [源代码与技术文档](https://github.com/lemeit/lemeit-sim)。

项目使用 DWSIM，保留各组件的署名与许可证。仓库声明 GPL-3.0-or-later；完整条款见仓库中的 LICENSE。
