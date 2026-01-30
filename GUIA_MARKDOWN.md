# 📝 Guía Rápida de Markdown para tu Blog

## Elementos Más Usados

### Títulos
```markdown
# H1 - Título principal (solo uno por post)
## H2 - Sección principal
### H3 - Subsección
#### H4 - Sub-subsección
```

### Énfasis de texto
```markdown
**negrita**
*cursiva*
***negrita y cursiva***
~~tachado~~
`código inline`
```

### Listas
```markdown
- Item sin orden
- Otro item
  - Sub-item

1. Item numerado
2. Otro item
```

### Enlaces e imágenes
```markdown
[Texto del enlace](https://url.com)
![Alt text](/ruta/imagen.jpg)
```

### Citas
```markdown
> Esta es una cita
```

### Código
````markdown
```javascript
// Bloque de código
const x = 10;
```
````

### Separador
```markdown
---
```

## Tips Rápidos

### ✅ Buenas prácticas
- Usa un solo H1 por post (el título)
- Deja líneas en blanco entre elementos
- Usa H2 para secciones principales
- Incluye imágenes descriptivas
- Agrega código cuando sea relevante

### ❌ Evita
- Múltiples H1
- Paredes de texto sin subtítulos
- Imágenes sin texto alternativo
- Código sin especificar el lenguaje

## Shortcuts de Escritura

### Estructura básica de post
```markdown
---
layout: post
title: "Tu título"
date: 2025-01-31 10:00:00 -0600
tags: [tag1, tag2]
---

Introducción...

## Primera sección

Contenido...

## Segunda sección

Más contenido...

---

*Llamada a la acción final*
```

### Para guardar imágenes
1. Crea carpeta `assets/images/` si no existe
2. Sube tus imágenes ahí
3. Referencialas: `![Descripción](/assets/images/mi-imagen.jpg)`

### Para código
Siempre especifica el lenguaje:
````markdown
```python
print("Hola mundo")
```
````

Lenguajes soportados: `javascript`, `python`, `html`, `css`, `bash`, `php`, `sql`, `markdown`, `json`, `yaml`

## Emojis Útiles

Copia y pega según necesites:

**Notas y avisos:**
- 📌 Nota general
- ⚠️ Advertencia
- 💡 Tip/Idea
- ❗ Importante
- ✅ Correcto/Hecho
- ❌ Incorrecto/Error
- 🎯 Objetivo
- 🚀 Acción/Empezar

**Contenido:**
- 📝 Escritura
- 💻 Código/Tech
- 📚 Aprendizaje
- 🎨 Diseño
- 📊 Datos/Stats
- 🔧 Herramientas
- 📱 Mobile/Apps
- 🌐 Web/Internet

**Proceso:**
- ⏰ Tiempo
- 🔄 Proceso
- ⬆️ Mejora
- ⬇️ Reducción
- ➡️ Siguiente
- ⬅️ Anterior
- 🔍 Buscar/Investigar
- 💭 Pensar/Reflexión

## Ejemplos Rápidos

### Post tipo tutorial
```markdown
## Qué aprenderás

- Punto 1
- Punto 2
- Punto 3

## Requisitos previos

Antes de empezar necesitas:
- Requisito 1
- Requisito 2

## Paso 1: Configuración

Descripción...

```bash
comando aqui
```

## Paso 2: Implementación

Código...
```

### Post tipo reflexión
```markdown
## El problema

Descripción del problema...

> Cita relevante que ilustra el punto

## Mi experiencia

Anécdota personal...

## Lo que aprendí

- Lección 1
- Lección 2
- Lección 3

## Conclusión

Reflexión final...
```

### Post tipo lista
```markdown
## Las 10 mejores [cosas]

### 1. Primera cosa

Por qué es importante...

### 2. Segunda cosa

Explicación...

[continúa...]
```

## Comandos Git para publicar

```bash
# Crear nuevo post
# Archivo: _posts/YYYY-MM-DD-titulo.md

# Subir cambios
git add .
git commit -m "Nuevo post: [título]"
git push
```

¡Listo para escribir! 🚀
