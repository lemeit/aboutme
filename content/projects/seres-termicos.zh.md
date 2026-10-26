+++
title = '热生物'
description = '文学、热扩散与探索性模拟。'
weight = 5
lastmod = '2026-10-25'
draft = false
+++

本项目统一采用序章与第一至第十四幕的叙事名称。文件名和版本号仅作技术标识；参见[名称对照表](/projects/seres-termicos/denominaciones/)。入门[可视化课程](/simus/seres-termicos/termodinamica.html)目前使用西班牙语。



**热生物（Seres Térmicos）**通过计算模型探索一个文学意象：Jorge Luis Borges 与 Margarita Guerrero 在 *El libro de los seres imaginarios*（1957 年）中描述的热生物。

项目探讨冷热图样如何让人联想到身体、行为及其所处的世界。这些是探索性的数学模型，并不是热生物真实存在的实验证据。

## 五条探索路径

1. **热场：**使用傅里叶热方程模拟扩散与局部热源。
2. **涌现图样：**Gray–Scott 与 FitzHugh–Nagumo 反应扩散系统。
3. **个体：**具有身份、位置和有限能量预算的实体，包括出生、繁殖规则和死亡。
4. **关节化身体：**内部热传导、类似器官的结构，以及对热环境作出反应的运动。
5. **宇宙：**三维环境，以及将场的历史表示为时空体积的方法。

## 探索模拟

- **[v06：生命周期](/zh/projects/seres-termicos/v06-ciclovida/)**：二维热场中的个体能量预算。
- **[v07：球形宇宙](/zh/projects/seres-termicos/v07-3d/)**：从外部与个体视角观察三维场。
- **[v08：时空](/zh/projects/seres-termicos/v08-espaciotiempo/)**：将二维场的近期历史表示为三维体积。

模拟控件使用西班牙语。中文页面解释观察要点，并链接到完整的西班牙语技术文档。

## 模型与数值方法

扩散重新分配标量场；局部源项、耗散和行为规则决定各模型的演化。显式数值积分需要合适的时间步长：对均匀网格上的标准扩散差分格式，无量纲扩散系数在二维中不应超过 1/4，在三维中不应超过 1/6。

部分模型使用带正负号的场来直观表示冷热。其含义取决于各模拟的假设，不能与绝对温标混淆。

## 开发与署名

文学来源署名为 Borges 和 Guerrero。第一至第五条路径的开发使用了 Claude（Anthropic），并参考了探索性的 ChatGPT 草案；关节化身体 B1 模型与整合工作使用了 GLM（Zhipu AI），由作者进行迭代和审核。

[模拟源代码](https://github.com/lemeit/simus) · [模拟合集](https://lemeit.github.io/simus/) · [设计探索](https://design.lemeit.ar/)

---

本中文概述介绍项目目标与主要功能。[阅读完整的西班牙语项目文档](/projects/seres-termicos/)。
