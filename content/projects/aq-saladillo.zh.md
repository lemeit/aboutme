+++
date = "2026-08-23"
summary = "利用 PurpleAir 和 AirGradient 传感器开展校园环境监测，提供颗粒物、CO₂、NOₓ 和实时空气质量数据。"
title = "Aire Escolar"
description = "利用 PurpleAir 和 AirGradient 传感器开展校园环境监测，提供颗粒物、CO₂、NOₓ 和实时空气质量数据。"
weight = 1
lastmod = "2026-10-27"
draft = false
+++

Aire Escolar 是一项公民科学倡议，将环境监测引入阿根廷布宜诺斯艾利斯省的教育场景。它延续了 **Ciencia Ciudadana Ambiental: Escuelas de Saladillo en Acción por un Aire Limpio** 倡议。

项目计划在城乡学校内部及周边部署低成本传感器，让学生参与监测、数据分析和社区宣传。长期目标是提供基础信息，为未来可能制定的地方空气质量政策提供参考。

## 传感器与测量

网络使用 PurpleAir 和 AirGradient 设备。根据设备类型，可获取颗粒物（PM₁、PM₂.₅ 和 PM₁₀）、温度、湿度、气压、CO₂，以及 VOC 或 NOₓ 指数。并非每台传感器都提供所有变量；污染物指数也不能等同于浓度测量值。

PurpleAir 设备通过 2024 年 PurpleAir Collective 计划获赠。项目既包括已运行设备，也包括待安装设备。UTN La Plata 的一台 AirGradient 设备不在萨拉迪略仪表板的覆盖范围内。

## 数据仪表板

- 空气质量信息卡与监测点地图。
- 历史曲线、独立坐标轴，以及支持设备的传感器通道比较。
- CSV 导出、明暗主题和公共 API。

系统定期采集数据，使用 Cloudflare D1 存储，并通过 Worker 提供 API。前端使用 JavaScript、Chart.js 和 Leaflet。

## 社区与教育背景

我曾担任 2023 年 OpenAQ 社区大使，是 ECSA 空气质量工作组成员，并参与 CanAirIO、AireCiudadano 和 Sensor.Community。教育方案将传感器读数、课堂探究和社区讨论结合起来。计划中的部署与未来合作仍是目标，并非已经完成的成果。

[打开仪表板](https://app.lemeit.ar/aq/) · [公共 API](https://app.lemeit.ar/aq/api.html) · [源代码](https://github.com/lemeit/lemeit-aq)

相关项目：[气象站](/zh/projects/ema-saladillo/)与[水质](/zh/projects/wq-saladillo/)。

---

本中文概述介绍项目目标与主要功能。[阅读完整的西班牙语项目文档](/projects/aq-saladillo/)。
