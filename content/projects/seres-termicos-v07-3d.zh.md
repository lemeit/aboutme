+++
date = "2026-09-25"
aliases = ["/zh/projects/seres-termicos/v07-3d/"]
title = "第15章 — 容纳它们的世界"
description = '具有外部与内部视角的三维热场。'
weight = 0
lastmod = "2026-10-27"
draft = false
url = '/zh/projects/simus/bestiario/v07-3d/'
math = true
[build]
list = 'never'
+++

数值场使用 $64\times48\times32$ 的矩形网格和六邻点扩散更新。先加入源，再计算 $\theta^{n+1}=\theta^n+0.10\alpha L_3\theta^n-\lambda\theta^n$；边界面复制相邻内部单元的值。

个体的球形活动边界与图像中的球形外观，并不意味着在球形区域上求解热扩散。反射规则反转速度的法向分量：$\mathbf v'=\mathbf v-2(\mathbf v\cdot\mathbf n)\mathbf n$。

外部与内部相机从不同位置观察同一个模型。光线步进会将多个深度的贡献合成为一个像素，因此亮度不是单个体素的直接读数。实时表格按网格索引读取实际场值，暂停和手动推进可用于比较。一帧可能包含多个数值步。

完整叙事、方程说明和控件目前使用西班牙语。

[打开完整的西班牙语章节](/projects/simus/bestiario/universo/) · [返回幻想生物志](/zh/projects/simus/bestiario/)

{{< sim src="/simus/seres-termicos/v07-3d.html" title="容纳它们的世界" >}}
