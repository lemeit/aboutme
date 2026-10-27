+++
aliases = ["/zh/projects/seres-termicos/v07-3d/"]
title = "第十三幕 第一场 — 容纳它们的世界"
description = '具有外部与内部视角的三维热场。'
weight = 0
lastmod = '2026-10-25'
draft = false
url = '/zh/projects/simus/bestiario/v07-3d/'
math = true
[build]
list = 'never'
+++

本模拟属于[热生物](/zh/projects/simus/bestiario/)的**宇宙**路径。球形区域代替了早期版本的矩形网格。

## 模拟

控件使用西班牙语。拖动鼠标可旋转外部视角；按 **Tab** 可切换内部视角所跟随的个体。

{{< sim src="/simus/seres-termicos/v07-3d.html" title="热生物：v07 球形宇宙" >}}

## 两种视角

外部视角将场显示为发光的体积，具有冷暖颜色和发光边缘。内部小窗从某个个体的位置观察同一个环境：其他个体表现为发光的团块，边界则像模糊的地平线。

## 模型与渲染

在三维网格上，扩散使用七点拉普拉斯差分格式。对均匀网格，显式扩散系数必须满足：

$$\frac{\alpha\Delta t}{\Delta x^2}\leq\frac16.$$

CPU 更新场，再将其作为三维纹理上传，用 WebGL2 渲染。体积光线步进沿每条视线累积发光与不透明度。接近零的值是透明的，正值和负值使用不同的色彩范围。

个体在球形边界处反射。边界和场的规则定义了一个理想化的计算世界，而不是对真实等离子体的建模。

[返回项目](/zh/projects/simus/bestiario/) · [下一项：时空](/zh/projects/simus/bestiario/v08-espaciotiempo/)

---

本中文概述介绍项目目标与主要功能。[阅读完整的西班牙语项目文档](/projects/simus/bestiario/v07-3d/)。
