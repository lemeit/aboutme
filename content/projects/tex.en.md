+++
title = "TeX · LaTeX documents"
description = "Browser-based LaTeX editor with PDF preview, templates and locally stored projects."
summary = "Browser-based LaTeX editor with PDF preview, templates and locally stored projects."
date = "2026-11-05"
lastmod = "2026-11-05"
weight = 15
draft = false
+++

<img src="/images/logos/tex.svg" alt="TeX" width="72" height="56">

[**Open TeX**](https://tex.lemeit.ar/) · [Project documentation](https://wiki.lemeit.ar/en/tex/)

TeX is a Lemeit tool for preparing LaTeX documents in the browser. It combines an editor, PDF preview and starter templates.

## Features

- Edit text and preview the PDF side by side, with manual or automatic compilation.
- Start from a template or import a compatible ZIP project with text files, bibliography and figures.
- Select the main document and manage multi-file projects.
- Export the PDF, a ZIP project or a TeX backup that can be reopened.
- Read the integrated help and compilation log.

## Local storage and offline use

The LaTeX engine runs in the browser, without a compilation server. Projects are stored locally and do not sync between devices. Export backups: clearing browser data may delete saved documents.

The first visit requires internet access. Offline preparation saves the application and resources needed by the prepared project. Resources not yet downloaded may still require a connection.

## Scope

The editor is under development and its interface is in Spanish. It does not run scripts, Biber, XeLaTeX or external programs. Project compatibility depends on the available engine and packages.

## Links

- [Editor](https://tex.lemeit.ar/).
- [Printable guide in Spanish](https://tex.lemeit.ar/guia-tex.pdf).
- [Editable guide ZIP](https://tex.lemeit.ar/guia-tex.zip).
- [Documentation](https://wiki.lemeit.ar/en/tex/).
- [lemeit-tex repository (restricted access)](https://github.com/lemeit/lemeit-tex).

GitHub stores the code and runs checks, Cloudflare serves the application, and the browser compiles LaTeX. **Deployment is explicit:** pushing to GitHub does not automatically update the live site.
