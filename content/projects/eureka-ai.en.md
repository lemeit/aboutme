+++
title = "EUREKA AI"
description = "A science tutor using Socratic guidance."
weight = 10
lastmod = '2026-10-25'
draft = false
+++

EUREKA AI is an AI-supported science tutor for secondary-school and university students in Argentina. It covers physics, chemistry, mathematics, physical chemistry, biophysics and carbon chemistry.

The tutor guides students through a problem: it introduces the relevant concept and formula, works through an initial step, and invites the student to continue. The aim is to practise a method of reasoning, rather than simply copy an answer.

## Student tools

- Questions using text, photographs and PDF documents.
- Mathematical notation and chemical structures.
- Recent conversation history and teacher–student messages.
- Feedback on responses and an examination mode with question banks and results.

## Teacher tools

Teachers can review activity and conversations, organise curricula by institution, manage exercises and practical assignments, and review student feedback. Batch generation can prepare initial guidance for exercises, with caching, rate limiting and retries.

## Implementation

The interface uses HTML and JavaScript on Cloudflare Pages. A Worker connects to AI services, while Firebase Authentication and Firestore handle accounts and data. The configured model path uses Gemini 2.5 Flash with a GPT OSS fallback through Groq. PubChem and ChemSpider support chemical information.

AI-generated guidance requires critical review, especially when a calculation or explanation is uncertain. The application currently operates in Spanish.

[Open EUREKA AI](https://tutor.lemeit.ar/)

---

This English overview presents the project’s purpose and main features. [Read the full project documentation in Spanish](/projects/eureka-ai/).

