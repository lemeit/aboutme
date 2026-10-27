+++
aliases = ["/zh/projects/seres-termicos/v08-espaciotiempo/"]
title = "第十三幕 第二场 — 时间的痕迹"
description = '将热场的近期历史表示为体积。'
weight = 0
lastmod = '2026-10-25'
draft = false
url = '/zh/projects/simus/bestiario/v08-espaciotiempo/'
math = true
[build]
list = 'never'
+++

本模拟属于[热生物](/zh/projects/simus/bestiario/)的**宇宙**路径。它不只是观察二维场的当下演化，而是将近期画面沿代表时间的第三条轴堆叠起来。

## 模拟

控件使用西班牙语。按**空格键**可暂停累积，以便观察整个体积。

{{< sim src="/simus/seres-termicos/v08-espaciotiempo.html" title="热生物：v08 时空" >}}

## 观察要点

一个个体的历史形成一条**世界管（worldtube）**。出生是起点，死亡是终点。静止个体生成竖直管道，运动个体则生成倾斜或弯曲的管道。能量变化影响直径，繁殖形成分支。

## 模型

显示的体积由二维场的一系列采样构成：

$$\mathcal{T}(x,y,\tau)=T(x,y,t_0+\tau\Delta t).$$

环形缓冲区保存近期画面，每次加入新画面时替换最旧的一帧。第三条轴记录时间，并不代表额外的物理空间维度。底层模拟与历史体积，是同一过程的两种观察方式。

这与通过弱扩散保留轨迹不同：这里通过缓冲区显式存储历史。文学构想也参考了 Kurt Vonnegut 在 *Slaughterhouse-Five*（1969 年）中将生命视为在时间中延展的形象。

[返回项目](/zh/projects/simus/bestiario/) · [球形宇宙](/zh/projects/simus/bestiario/v07-3d/)

---

本中文概述介绍项目目标与主要功能。[阅读完整的西班牙语项目文档](/projects/simus/bestiario/v08-espaciotiempo/)。
