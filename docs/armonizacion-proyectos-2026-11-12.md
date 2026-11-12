# Revisión documental de los proyectos Lemeit — 12/11/2026

Alcance: los doce repositorios vinculados al portal y su infraestructura documental, no todos los repositorios personales ni una auditoría de seguridad. Se revisaron los README vigentes de GitHub, las fichas de Profe Lamaita y la navegación de la wiki. Las correcciones se realizan en ramas y PR; no modifican código de aplicaciones ni cambian datos, cálculos, frecuencias de ingesta o configuraciones.

| Repositorio | Resultado de la revisión |
|---|---|
| aboutme | Añadir ΣIM en ES/EN/ZH, enlazar la wiki y el repositorio independiente; actualizar el despliegue de TeX a Workers Builds; registrar accesos compartidos. |
| lemeit-wiki | Añadir sección ΣIM ES/EN, portada, menú y README; actualizar el recorrido de cinco proyectos de la portada. |
| lemeit-sim | Conservar identidad propia y versión funcional; corregir el texto alternativo del badge 0.7.2 y añadir ficha, wiki y portada. |
| lemeit-tex | Añadir badges de sitio/wiki/portal; conservar la marca bicolor, sus motores y el flujo de publicación vigente. |
| eureka | Añadir badges de sitio/wiki/portal, conservando sus fuentes y documentación técnica. |
| lemeit-aq | Explicitar labelColor=555555 en badges; conservar inventario, API, proveedores e ingesta. |
| lemeit-emas | Separar badges y explicitar labelColor; describir el origen común app.lemeit.ar sin afirmar una fusión de repositorios o datos. |
| lemeit-wq | Igual criterio de badges/origen común; conservar API parcial, fuentes y licencia. |
| gateway | Añadir accesos de sitio y wiki sin tocar ruteo ni despliegue. |
| simus | Usar nombre Bestiario · Seres Térmicos y ruta canónica; distinguirlo de ΣIM. |
| lemeit-design | Revisado sin cambios: ya contiene la guía de badges y conserva su función de sistema visual compartido. |
| DVBA | Revisado sin cambios: identidad institucional y documentación propia; no corresponde sustituirla por la del portal Lemeit. |

## Criterios

- Patrón compartido de badges: flat-square, etiqueta gris #555555, valor verde azulado #009688; naranja para un dato destacado, como API pública/parcial. No convertir el badge de API parcial en API completa.
- ΣIM y DVBA mantienen identidades particulares. Una ficha del portal utiliza el lenguaje visual de su contenedor sin modificar el producto.
- No atribuir una licencia única a componentes que tengan licencias distintas. Conservar GPL en ΣIM, MIT donde ya se declara y atribuciones de Bigler, DWSIM y bibliotecas.
- Los repositorios privados se identifican como acceso restringido en fichas públicas.
- GitHub integrado no significa despliegue completado. TeX compila en el navegador; ΣIM depende de un motor DWSIM externo. Bestiario es un recorrido separado.
- No ejecutar consultas de datos ambientales para verificar enlaces: pueden consumir cuota o registrar visitas. La revisión no mide frescura ni recalcula resultados experimentales.

## Validación

La entrega comprueba Hugo y la navegación de fichas/listado ES/EN/ZH, cobertura de las fuentes chinas y móvil; la wiki usa MkDocs estricto ES/EN. Los cambios de README se limitan a texto y enlaces, revisados por diff; no implican una nueva certificación de las pruebas o del funcionamiento de cada aplicación.
