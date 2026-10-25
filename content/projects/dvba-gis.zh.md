+++
title = 'SIG Vial PBA：道路管理'
description = '省级道路网络的网络地图与现场调查。'
weight = 20
lastmod = '2026-10-25'
draft = false
+++

SIG Vial PBA 为 Dirección de Vialidad de la Provincia de Buenos Aires 整合区域信息、现场调查和作业任务跟踪。项目起步于萨拉迪略第六分区，并在其他分区试点使用。

## 从地图到现场

平台将省级道路、次级道路和行政区边界，与带地理位置的现场调查和照片结合起来。用户可以按道路、行政区、任务和日期筛选。道路记录包括长度、路面、宽度和路肩信息，里程位置依据官方里程标进行校准。

移动端渐进式网页应用支持现场工作，包括基本离线功能、照片和 GPS 定位。作业流程连接任务分配、执行与审核；PDF 和 CSV 输出用于报告。

## 技术实现

地图使用 Leaflet、JavaScript，以及由 QGIS 处理的 GeoJSON 和 GeoPackage 数据。Supabase 提供 PostgreSQL 数据库、身份验证、文件存储和行级访问策略。角色和所属分区决定用户对作业记录的访问权限。

公共地图无需登录；作业功能需要身份验证。开发过程中使用 AI 辅助编程，实施决策与审核由作者负责。

## 获奖

作品 **SIG Vial PBA: Plataforma web integral para el relevamiento y gestión vial provincial** 于 2026 年 10 月获得第 41 届道路主题竞赛一等奖。[机构报道](https://www.vialidad.gba.gov.ar/noticias/2572)。

[打开平台](https://lemeit.github.io/DVBA/) · [源代码](https://github.com/lemeit/DVBA)

---

本中文概述介绍项目目标与主要功能。[阅读完整的西班牙语项目文档](/projects/dvba-gis/)。
