+++
aliases = ["/zh/projects/seres-termicos/v06-ciclovida/"]
title = "第十一幕 — 可计数的个体"
description = '热场中的个体能量预算、出生与死亡。'
weight = 0
lastmod = '2026-10-25'
draft = false
url = '/zh/projects/simus/bestiario/v06-ciclovida/'
math = true
[build]
list = 'never'
+++

本模拟属于[热生物](/zh/projects/simus/bestiario/)的**个体**路径。与反应扩散纹理不同，每个生物都有身份、位置和有限的能量预算。

## 模拟

控件使用西班牙语。

{{< sim src="/simus/seres-termicos/v06-ciclovida.html" title="热生物：v06 生命周期" >}}

## 观察要点

- 随机涨落引入新个体。
- 每个个体以自己的频率脉动。
- 源项的幅度随剩余能量下降，身体因此逐渐淡出。
- 实时图表跟踪出生、死亡和种群变化；种群可能完全消失。

## 模型

场的演化由扩散、线性耗散和各个体源项之和决定：

$$\frac{\partial T}{\partial t}=\alpha\nabla^2T-\lambda T+\sum_i S_i.$$

每个源项具有高斯空间轮廓，并受到剩余能量和振荡的调制。能量以恒定速率下降，$dE_i/dt=-\mu$，因此不受其他规则影响时的寿命为 $E_0/\mu$。出生是随机的，繁殖遵循模型中的能量阈值和分配规则。能量耗尽的个体会被移除。

显式欧拉积分使用五点拉普拉斯差分格式，时间步长满足二维扩散的稳定性限制。

[返回项目](/zh/projects/simus/bestiario/) · [下一项：球形宇宙](/zh/projects/simus/bestiario/v07-3d/)

---

本中文概述介绍项目目标与主要功能。[阅读完整的西班牙语项目文档](/projects/simus/bestiario/v06-ciclovida/)。
