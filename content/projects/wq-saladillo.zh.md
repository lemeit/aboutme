+++
date = "2026-08-23"
summary = "整理萨拉迪略供水水质数据，结合市政检测报告、阿根廷及省级参考限值，并自动导入 PDF 报告。"
title = "Agua Saladillo"
description = "整理萨拉迪略供水水质数据，结合市政检测报告、阿根廷及省级参考限值，并自动导入 PDF 报告。"
weight = 3
lastmod = "2026-10-27"
draft = false
+++

Agua Saladillo 整理市政府以 PDF 报告发布的水质分析结果，便于按采样点、参数和日期查询。采样点包括取水井、学校、幼儿园和住宅。

## 提供的信息

数据包括砷、硝酸盐、亚硝酸盐、氟化物和金属等理化参数，以及总大肠菌群、*Escherichia coli*（大肠埃希菌）和 *Pseudomonas aeruginosa*（铜绿假单胞菌）等微生物学结果。具体项目取决于原始报告。

用户可以筛选记录、在 Leaflet 地图上查看采样点、比较历史值、排序并导出 CSV。参考线帮助用户与西班牙语法规说明中列出的阈值进行比较；解释结果时，仍需结合原始报告及其背景。

## 从 PDF 到审核后的数据

市政报告是非结构化文档。手动触发的流程下载新文件，使用 Gemini 从不同格式的报告中提取结构化结果。提取的数据会先进入暂存区，**经人工审核后再发布**，不会自动直接写入公共仪表板。

该项目将文档处理、结构化环境数据和公共网络界面联系起来。

[打开仪表板](https://app.lemeit.ar/wq/) · [源代码](https://github.com/lemeit/lemeit-wq)

相关项目：[空气质量](/zh/projects/aq-saladillo/)与[气象站](/zh/projects/ema-saladillo/)。

---

本中文概述介绍项目目标与主要功能。[阅读完整的西班牙语项目文档](/projects/wq-saladillo/)。
