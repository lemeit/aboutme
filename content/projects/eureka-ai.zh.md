+++
title = 'EUREKA AI'
description = '采用苏格拉底式引导的科学学习辅导工具。'
weight = 10
lastmod = '2026-10-25'
draft = false
+++

EUREKA AI 是面向阿根廷中学生和大学生的 AI 科学学习辅导工具，涵盖物理、化学、数学、物理化学、生物物理和碳化学。

它通过逐步引导帮助学生解题：先介绍相关概念与公式，示范起始步骤，再鼓励学生继续。目标是练习推理方法，而不是简单复制答案。

## 学生功能

- 使用文字、照片和 PDF 提问。
- 显示数学表达式和化学结构。
- 查看近期对话，使用师生消息功能。
- 对回答提供反馈，并使用包含题库和结果记录的考试模式。

## 教师功能

教师可以查看活动与对话，按机构组织课程，管理练习和实践作业，并查看学生反馈。批量生成功能可以预先准备练习的初始引导，配合缓存、速率限制和重试机制。

## 技术实现

前端使用 HTML 和 JavaScript，托管在 Cloudflare Pages。Worker 连接 AI 服务；Firebase Authentication 和 Firestore 管理账户与数据。配置使用 Gemini 2.5 Flash，并通过 Groq 提供 GPT OSS 备用模型。PubChem 和 ChemSpider 用于化学信息支持。

AI 生成的引导需要审慎核查，尤其是在计算或解释存在不确定性时。应用目前使用西班牙语。

[打开 EUREKA AI](https://tutor.lemeit.ar/)

---

本中文概述介绍项目目标与主要功能。[阅读完整的西班牙语项目文档](/projects/eureka-ai/)。
