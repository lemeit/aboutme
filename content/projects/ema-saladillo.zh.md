+++
title = 'EMAS：气象站'
description = '整合当地气象站数据的仪表板。'
weight = 2
lastmod = '2026-10-25'
draft = false
+++

EMAS 汇集萨拉迪略及周边地区多个来源的气象观测。通过统一界面，用户可以更方便地查看当地天气条件与历史记录。

## 数据来源

| 气象站 | 来源 |
|---|---|
| EMA-EET | 学校气象站，通过 SNIH/INA 获取 |
| EMA-CFR | Centro de Formación Rural，从网页提取 |
| EMA-DC | Defensa Civil／机场，对 Meteobridge 输出进行 OCR 识别 |
| EMA-CS | Clima Saladillo，Falucho，通过 Meteotemplate JSON 获取 |
| EMA-25C | 25 de Mayo 的 25Clima，通过 Weather Underground 获取 |

25 de Mayo 的站点正在接入；是否长期纳入仪表板，取决于与运营方确认数据访问方式。各来源的数据可用性和更新时间可能不同。

## 仪表板功能

响应式仪表板、气象站地图、历史曲线、风玫瑰图和 CSV 导出。公共 API 支持按日期范围查询。空间插值用于辅助探索观测数据，不能代替各地点的实测值。

## 技术实现

Python 采集程序结合 HTTP 请求、HTML 解析和 Tesseract OCR。定时 GitHub Actions 收集观测数据。历史数据于 2026 年 8 月从 Supabase 迁移到 Cloudflare D1，Worker 提供 API 和兼容路由。浏览器界面使用 JavaScript 与 CARTO 地图代理。

[打开仪表板](https://app.lemeit.ar/emas/) · [源代码](https://github.com/lemeit/lemeit-emas)

相关项目：[空气质量](/zh/projects/aq-saladillo/)与[水质](/zh/projects/wq-saladillo/)。

---

本中文概述介绍项目目标与主要功能。[阅读完整的西班牙语项目文档](/projects/ema-saladillo/)。
