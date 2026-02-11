# Guía de Enlaces Internos en Jekyll

Esta guía te muestra cómo crear enlaces internos entre posts, páginas y secciones en tu blog Jekyll.

---

## 📚 Tabla de Contenidos

1. [Enlaces Entre Posts](#enlaces-entre-posts)
2. [Enlaces a Páginas Estáticas](#enlaces-a-páginas-estáticas)
3. [Enlaces a Tags](#enlaces-a-tags)
4. [Enlaces a Secciones (Anclas)](#enlaces-a-secciones-anclas)
5. [Comparación de Métodos](#comparación-de-métodos)
6. [Ejemplos Prácticos](#ejemplos-prácticos)
7. [Errores Comunes](#errores-comunes)

---

## Enlaces Entre Posts

### Método 1: `post_url` (⭐ Recomendado)

**Sintaxis:**
```markdown
[Texto del enlace]({% post_url YYYY-MM-DD-nombre-del-archivo %})
```

**Ejemplo:**
```markdown
Como mencioné en mi [sistema anti-procrastinación]({% post_url 2026-01-31-sistema-anti-procrastinacion %}), 
el secreto está en la consistencia.
```

**Ventajas:**
- ✅ Jekyll valida que el post exista al compilar
- ✅ Se actualiza automáticamente si cambias el permalink
- ✅ No se rompe si cambias la estructura de URLs
- ✅ Funciona con cualquier configuración de permalinks

**Ejemplo con tus posts:**
```markdown
Lee mi [guía de Scrivener]({% post_url 2026-02-02-como-compilar-en-scrivener %}).

O mi post sobre [mitos de productividad]({% post_url 2026-02-04-mitos-sobre-la-productividad %}).

También escribí sobre [cómo configuré este blog]({% post_url 2026-01-30-como-configure-mi-blog %}).
```

---

### Método 2: Ruta Relativa Directa

**Sintaxis:**
```markdown
[Texto del enlace](/YYYY/MM/DD/slug-del-post/)
```

**Ejemplo:**
```markdown
Desarrollé [un sistema](/2026/01/31/sistema-anti-procrastinacion/) que me cambió la vida.
```

**Ventajas:**
- ✅ Más corto y legible
- ✅ Fácil de escribir

**Desventajas:**
- ❌ No valida si el post existe
- ❌ Se rompe si cambias permalinks
- ❌ Debes conocer la estructura de URLs

---

### Método 3: Con `relative_url` Filter

**Sintaxis:**
```markdown
[Texto del enlace]({{ site.baseurl }}{% post_url YYYY-MM-DD-nombre %})
```

**Ejemplo:**
```markdown
Como expliqué en [este post]({{ site.baseurl }}{% post_url 2026-01-31-sistema-anti-procrastinacion %}),
necesitas un sistema claro.
```

**Cuándo usar:**
- Si tu blog está en un subdirectorio (ej: `usuario.github.io/blog/`)
- Si usas `baseurl` en `_config.yml`

---

## Enlaces a Páginas Estáticas

### Método 1: Ruta Absoluta

```markdown
Puedes [contactarme](/contacto/) para consultas.

Lee más [sobre mí](/sobre-mi/) en esta página.

Visita mi [portafolio](/portafolio/).
```

### Método 2: Con `relative_url`

```markdown
[Contacto]({{ '/contacto/' | relative_url }})

[Sobre mí]({{ '/sobre-mi/' | relative_url }})
```

---

## Enlaces a Tags

```markdown
Más artículos sobre [escritura](/tag/escritura/).

Posts sobre [productividad](/tag/productividad/).

Todo lo relacionado con [desarrollo](/tag/desarrollo/).

Explora [sistemas](/tag/sistemas/) y [herramientas](/tag/herramientas/).
```

---

## Enlaces a Secciones (Anclas)

### Crear un Ancla

```markdown
## Mi Sección Importante {#mi-seccion}

O simplemente:

## Introducción

(Jekyll genera automáticamente el ID como `#introduccion`)
```

### Enlazar al Ancla

**En el mismo post:**
```markdown
Como mencioné [arriba](#introduccion), el problema es...

Ve a la sección de [conclusiones](#conclusiones).
```

**En otro post:**
```markdown
Lee la [sección de herramientas]({% post_url 2026-01-31-sistema-anti-procrastinacion %}#herramientas).

O directamente:
Lee la [sección de herramientas](/2026/01/31/sistema-anti-procrastinacion/#herramientas).
```

---

## Comparación de Métodos

| Método | Validación | Auto-actualización | Legibilidad | Recomendado |
|--------|------------|-------------------|-------------|-------------|
| `post_url` | ✅ | ✅ | ⭐⭐⭐ | ✅ Posts |
| Ruta relativa | ❌ | ❌ | ⭐⭐⭐⭐⭐ | ✅ Tags/Páginas |
| `relative_url` | ❌ | ⭐ | ⭐⭐ | Subdirectorios |

---

## Ejemplos Prácticos

### Caso 1: Referencias Cruzadas Entre Posts

```markdown
---
title: Cómo Escribo Consistentemente
---

Durante años luché con la procrastinación hasta que desarrollé 
[mi sistema]({% post_url 2026-01-31-sistema-anti-procrastinacion %}).

El sistema tiene tres componentes:

1. **Captura rápida**: Uso OneNote como explico en 
   [este post]({% post_url 2026-01-30-el-que-sabe-se-divierte %}).

2. **Organización**: Con [Scrivener]({% post_url 2026-02-02-como-compilar-en-scrivener %}).

3. **Publicación**: En [este blog]({% post_url 2026-01-30-como-configure-mi-blog %}).

El resultado es que ahora escribo sin los 
[mitos que me frenaban]({% post_url 2026-02-04-mitos-sobre-la-productividad %}).
```

---

### Caso 2: Serie de Posts

```markdown
---
title: "Parte 3: Publicación"
---

Esta es la tercera parte de mi serie sobre escritura:

1. [Parte 1: Captura]({% post_url 2026-01-30-el-que-sabe-se-divierte %})
2. [Parte 2: Organización]({% post_url 2026-02-02-como-compilar-en-scrivener %})
3. **Parte 3: Publicación** (estás aquí)

En la [parte anterior]({% post_url 2026-02-02-como-compilar-en-scrivener %}), 
vimos cómo compilar. Ahora veremos cómo publicar.
```

---

### Caso 3: Recursos y Referencias

```markdown
---
title: Recursos Recomendados
---

## Herramientas

- [Scrivener para escritura]({% post_url 2026-02-02-como-compilar-en-scrivener %})
- [GitHub Pages para blogs]({% post_url 2026-01-30-como-configure-mi-blog %})
- [OneNote para captura]({% post_url 2026-01-30-el-que-sabe-se-divierte %})

## Estrategias

- [Sistema anti-procrastinación]({% post_url 2026-01-31-sistema-anti-procrastinacion %})
- [Mitos de productividad]({% post_url 2026-02-04-mitos-sobre-la-productividad %})

## Por Tema

- [Todos los posts de escritura](/tag/escritura/)
- [Productividad](/tag/productividad/)
- [Desarrollo](/tag/desarrollo/)
```

---

### Caso 4: Índice al Principio del Post

```markdown
---
title: Guía Completa de Scrivener
---

## Índice

1. [Instalación](#instalacion)
2. [Configuración Básica](#configuracion)
3. [Organización de Proyectos](#organizacion)
4. [Compilación](#compilacion)
5. [Tips Avanzados](#tips)

---

## Instalación {#instalacion}

Para instalar Scrivener...

[↑ Volver al índice](#índice)

---

## Configuración {#configuracion}

Una vez instalado...

[↑ Volver al índice](#índice)
```

---

### Caso 5: Call-to-Action al Final

```markdown
---
title: Mi Sistema Anti-Procrastinación
---

[Contenido del post...]

---

## Siguiente Paso

Ahora que conoces el sistema, aprende a:

- [Configurar tu blog en GitHub Pages]({% post_url 2026-01-30-como-configure-mi-blog %})
- [Usar Scrivener para escribir]({% post_url 2026-02-02-como-compilar-en-scrivener %})
- [Destruir los mitos de productividad]({% post_url 2026-02-04-mitos-sobre-la-productividad %})

O explora más sobre [productividad](/tag/productividad/) y [escritura](/tag/escritura/).

¿Preguntas? [Contáctame](/contacto/)
```

---

## Errores Comunes

### ❌ Error 1: Incluir la extensión `.md`

```markdown
<!-- MAL -->
{% post_url 2026-01-31-sistema-anti-procrastinacion.md %}

<!-- BIEN -->
{% post_url 2026-01-31-sistema-anti-procrastinacion %}
```

---

### ❌ Error 2: Incluir la carpeta `_posts`

```markdown
<!-- MAL -->
{% post_url _posts/2026-01-31-sistema-anti-procrastinacion %}

<!-- BIEN -->
{% post_url 2026-01-31-sistema-anti-procrastinacion %}
```

---

### ❌ Error 3: Olvidar las barras en rutas relativas

```markdown
<!-- MAL -->
[Contacto](contacto)

<!-- BIEN -->
[Contacto](/contacto/)
```

---

### ❌ Error 4: Anclas con mayúsculas o espacios

```markdown
<!-- MAL -->
## Mi Sección Importante
[Ir a](#Mi Sección Importante)

<!-- BIEN -->
## Mi Sección Importante
[Ir a](#mi-sección-importante)

<!-- O especificar el ID manualmente -->
## Mi Sección Importante {#mi-seccion}
[Ir a](#mi-seccion)
```

---

## Tips y Trucos

### 1. Crear Enlaces de "Lectura Relacionada"

```markdown
## Lectura Relacionada

Si te gustó este post, también te puede interesar:

- 📝 [Cómo Escribir Consistentemente]({% post_url 2026-01-31-sistema-anti-procrastinacion %})
- 💻 [Mi Setup de Escritura]({% post_url 2026-02-02-como-compilar-en-scrivener %})
- 🎯 [Destruyendo Mitos]({% post_url 2026-02-04-mitos-sobre-la-productividad %})
```

---

### 2. Breadcrumbs (Migas de Pan)

```markdown
[Inicio](/) > [Blog](/blog/) > [Productividad](/tag/productividad/) > Sistema Anti-Procrastinación
```

---

### 3. Enlaces con Emoji

```markdown
🔗 [Sistema Anti-Procrastinación]({% post_url 2026-01-31-sistema-anti-procrastinacion %})

📚 Lee también: [Guía de Scrivener]({% post_url 2026-02-02-como-compilar-en-scrivener %})

⭐ Post destacado: [Mitos de Productividad]({% post_url 2026-02-04-mitos-sobre-la-productividad %})
```

---

### 4. Enlaces con Descripción

```markdown
**Lectura recomendada:** [Sistema Anti-Procrastinación]({% post_url 2026-01-31-sistema-anti-procrastinacion %})  
*Un método de 15 minutos diarios que cambió mi forma de escribir.*
```

---

## Estilizar Enlaces (CSS Opcional)

Si quieres que tus enlaces internos se vean diferentes:

```css
/* Enlaces a tags con icono */
a[href^="/tag/"]::before {
  content: "🏷️ ";
}

/* Enlaces internos con flecha */
a[href*="/2026/"]::after {
  content: " →";
  color: var(--color-orange);
}

/* Enlaces a anclas con icono */
a[href^="#"]::before {
  content: "⚓ ";
  opacity: 0.5;
}
```

---

## Plantilla de Referencias Cruzadas

Copia y pega en tus posts:

```markdown
---
title: Título del Post
---

[Contenido principal del post...]

---

## Posts Relacionados

{% comment %}
Reemplaza con los slugs de tus posts reales
{% endcomment %}

- [Post Relacionado 1]({% post_url YYYY-MM-DD-slug-1 %})
- [Post Relacionado 2]({% post_url YYYY-MM-DD-slug-2 %})
- [Post Relacionado 3]({% post_url YYYY-MM-DD-slug-3 %})

## Explorar Más

- [Tag Relevante 1](/tag/nombre-tag-1/)
- [Tag Relevante 2](/tag/nombre-tag-2/)

## ¿Preguntas?

[Contáctame](/contacto/) o explora [todos mis posts](/blog/).
```

---

## Comandos Útiles

### Encontrar todos los posts disponibles:

```bash
ls -1 _posts/
```

### Buscar un post específico:

```bash
ls -1 _posts/ | grep "sistema"
```

### Ver todos los slugs:

```bash
ls -1 _posts/ | sed 's/_posts\///g' | sed 's/.md//g'
```

---

## Resumen de Recomendaciones

| Tipo de Enlace | Método Recomendado | Ejemplo |
|----------------|-------------------|---------|
| **Entre posts** | `post_url` | `{% post_url 2026-01-31-sistema %}` |
| **Tags** | Ruta relativa | `/tag/escritura/` |
| **Páginas** | Ruta relativa | `/contacto/` |
| **Anclas** | Hash directo | `#seccion` |
| **Subdirectorios** | `relative_url` | `{{ '/contacto/' \| relative_url }}` |

---

## Checklist de Enlaces

Antes de publicar un post con enlaces internos:

- [ ] Todos los `post_url` usan el nombre correcto (sin `.md`)
- [ ] Las rutas relativas tienen `/` al inicio y final
- [ ] Los enlaces a anclas usan minúsculas
- [ ] Probé todos los enlaces localmente
- [ ] Los enlaces se ven bien en mobile
- [ ] Agregué "Lectura Relacionada" al final del post

---

**Última actualización:** {{ "now" | date: "%d/%m/%Y" }}

**Nota:** Esta guía está en la raíz del proyecto para referencia rápida.