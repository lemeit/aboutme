+++
title = 'EUREKA AI'
date = '2026-06-18'
lastmod = '2026-08-25'
weight = 10
draft = false
tags = ['IA', 'educación', 'Firebase', 'Cloudflare', 'Gemini']
description = 'Tutor de ciencias con método socrático para estudiantes secundarios y universitarios.'
+++

Tutor de ciencias con inteligencia artificial pensado para estudiantes argentinos de nivel
secundario y universitario, que acompaña la resolución de ejercicios de física, química,
matemática, fisicoquímica, biofísica y química del carbono. En vez de dar la respuesta completa,
aplica el método socrático: guía al estudiante paso a paso, le explica el concepto y la fórmula
que necesita, resuelve con él el primer paso como ejemplo, y lo deja continuar solo — así el
ejercicio se convierte en una oportunidad de aprender el método en lugar de una respuesta para
copiar.

## Funcionalidad

- Chat como interacción principal: el estudiante escribe su consulta (o adjunta foto/PDF del enunciado) y recibe una respuesta guiada, con fórmulas en LaTeX y diagramas de estructura química cuando corresponde
- Memoria de la última conversación de cada alumno, para retomarla al volver a entrar
- Mensajería directa alumno-profesor, con notificación de mensajes sin leer
- Calificación 👍/👎 de cada respuesta, que alimenta un sistema de revisión de calidad
- Modo examen con banco de preguntas propio y registro de resultados
- **Panel de Administración** (profesor): resumen de actividad, bandeja de mensajes, historial de consultas con filtros por materia/tema, gestión de usuarios, seguimiento de actividad y feedback por sesión, editor de curriculum para cargar ejercicios y TPs por institución, y banco de respuestas cacheadas
- **Agente de generación en lote** (lo más nuevo): el profesor elige un curriculum y un TP, y el sistema pre-genera automáticamente el planteo inicial de cada ejercicio (con reintentos ante límites de uso) y lo deja cacheado, para que los alumnos lo reciban al instante en vez de esperar la generación en vivo

## Stack

- Frontend propio en HTML/CSS/JS, publicado en Cloudflare Pages con despliegue automático desde GitHub
- Backend en un Cloudflare Worker que actúa como proxy seguro hacia los modelos de IA
- Auth y base de datos en Firebase (Firebase Auth + Firestore)
- Modelo principal: Gemini 2.5 Flash de Google (incluye análisis de imágenes y PDFs); respaldo de velocidad y contingencia con GPT-OSS de OpenAI servido por Groq (reemplazó a Llama 3.3, discontinuado por Groq)
- Estructuras químicas vía PubChem, con ChemSpider como fuente alternativa

## Links

- [Tutor](https://tutor.lemeit.ar)