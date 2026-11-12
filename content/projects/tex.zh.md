+++
title = "TeX · LaTeX 文档"
description = "在浏览器中编辑 LaTeX 文档，预览 PDF，使用模板并在本地保存项目。"
summary = "在浏览器中编辑 LaTeX 文档，预览 PDF，使用模板并在本地保存项目。"
date = "2026-11-05"
lastmod = "2026-11-12"
weight = 15
draft = false
+++

<img src="/images/logos/tex.svg" alt="TeX" width="72" height="56">

[**打开 TeX**](https://tex.lemeit.ar/) · [英文项目文档](https://wiki.lemeit.ar/en/tex/)

TeX 是 Lemeit 的浏览器文档工具，提供 LaTeX 编辑器、PDF 预览和入门模板。应用界面目前为西班牙语，项目仍在开发中。

## 功能

- 编辑文档并预览 PDF，支持手动或自动编译。
- 使用模板，或导入包含兼容文本、参考文献和图片的 ZIP 项目。
- 选择主文档，管理多个文件。
- 下载 PDF、导出 ZIP 项目或可重新打开的 TeX 备份。
- 查看内置帮助和编译日志。

## 本地保存与离线使用

LaTeX 引擎在浏览器中运行，不使用编译服务器。项目保存在当前浏览器中，不会在设备之间自动同步。请导出备份；清除浏览器数据可能删除保存的文档。

首次访问需要网络。离线准备功能可保存应用和当前项目所需的资源；尚未下载的资源仍可能需要网络。

## 限制与链接

不执行脚本、Biber、XeLaTeX 或外部程序。兼容性取决于引擎和可用的软件包。

- [编辑器](https://tex.lemeit.ar/)。
- [西班牙语 PDF 指南](https://tex.lemeit.ar/guia-tex.pdf)。
- [可编辑的指南 ZIP](https://tex.lemeit.ar/guia-tex.zip)。
- [英文文档](https://wiki.lemeit.ar/en/tex/)。
- [lemeit-tex 代码仓库（受限访问）](https://github.com/lemeit/lemeit-tex)。

GitHub 保存代码并运行测试，Cloudflare 提供应用文件，浏览器编译 LaTeX。GitHub Actions 负责验证；Cloudflare Workers Builds 已连接 `main`，经授权合并后自动发布。合并与部署完成是不同的步骤。
