+++
date = "2026-09-25"
aliases = ["/zh/projects/seres-termicos/v08-espaciotiempo/"]
title = "第16章 — 时间的痕迹"
description = '将热场的近期历史表示为体积。'
weight = 0
lastmod = "2026-10-27"
draft = false
url = '/zh/projects/simus/bestiario/v08-espaciotiempo/'
math = true
[build]
list = 'never'
+++

热模型仍是 $80\times60$ 单元的二维场。显示体积保存 64 个历史切片：$\mathcal T(i,j,m)=\theta_{i,j}(n_m)$。第三轴表示记录的时间，而不是热扩散的第三个空间方向。

循环缓冲区填满后会覆盖最旧的记录。历史速度控件改变切片的记录方式，并不确定以秒计的实验标定时间间隔。移动源在记录中形成可见轨迹；这不是相对论模拟，也不是四维物理空间模拟。

储备和出生规则仍受“统计个体”章节中所述限制。实时表格读取当前二维场，并显示已经保存的切片数。暂停和手动推进作用于原程序的动画；显示像素会合成多个历史层的贡献。

完整叙事、方程说明和控件目前使用西班牙语。

[打开完整的西班牙语章节](/projects/simus/bestiario/tiempo/) · [返回幻想生物志](/zh/projects/simus/bestiario/)

{{< sim src="/simus/seres-termicos/v08-espaciotiempo.html" title="时间的痕迹" >}}
