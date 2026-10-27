+++
date = "2026-09-25"
aliases = ["/zh/projects/seres-termicos/v06-ciclovida/"]
title = "第13章 — 统计个体"
description = '热场中的个体能量预算、出生与死亡。'
weight = 0
lastmod = "2026-10-27"
draft = false
url = '/zh/projects/simus/bestiario/v06-ciclovida/'
math = true
[build]
list = 'never'
+++

每个个体都有身份、位置和有限储备。实际离散更新为 $E_i^{n+1}=E_i^n-0.15\mu$：扣减发生在每个模型步，而不是经过实验标定的每一秒。控制参数固定时，初始储备 $E_b$ 在 $\lceil E_b/(0.15\mu)\rceil$ 步后耗尽。

个体在二维场中留下高斯源，其幅度取决于 $E_i/E_{0,i}$。场中增加的热量并不等于从储备中扣除的同一笔能量。随机出生由外部规则规定。初始储备固定、繁殖阈值高于初值且储备只减不增时，个体无法达到该阈值；不能将外部出生称为涌现出的繁殖。

对应章节提供方程、计算示例和实时数值表，支持暂停及手动推进。每次手动推进运行原程序的一帧，其中包含两个模型步。

完整叙事、方程说明和控件目前使用西班牙语。

[打开完整的西班牙语章节](/projects/simus/bestiario/individuos/) · [返回幻想生物志](/zh/projects/simus/bestiario/)

{{< sim src="/simus/seres-termicos/v06-ciclovida.html" title="统计个体" >}}
