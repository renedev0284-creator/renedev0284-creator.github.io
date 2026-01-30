# Mi Blog Personal

Blog personal construido con Jekyll y alojado en GitHub Pages. Inspirado en el diseño minimalista de Tania Rascia.

## 🚀 Instalación Local (Opcional)

Si quieres previsualizar el blog localmente antes de publicar:

### Requisitos previos
- Git instalado
- Ruby instalado (versión 2.7 o superior)

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/tuusuario/tuusuario.github.io.git
cd tuusuario.github.io
```

2. **Instalar dependencias**
```bash
bundle install
```

3. **Ejecutar servidor local**
```bash
bundle exec jekyll serve
```

4. **Ver el blog**
Abre tu navegador en: `http://localhost:4000`

## ✍️ Cómo escribir un nuevo post

### Método 1: Directamente en GitHub (más fácil)

1. Ve a la carpeta `_posts` en GitHub
2. Click en "Add file" → "Create new file"
3. Nombre del archivo: `YYYY-MM-DD-titulo-del-post.md`
4. Copia esta plantilla:

```markdown
---
layout: post
title: "Título de tu post"
date: 2025-01-30 10:00:00 -0600
tags: [tag1, tag2, tag3]
---

Primer párrafo de tu post...

## Subtítulo

Contenido...
```

5. Escribe tu contenido en Markdown
6. Click en "Commit changes"
7. Espera 2-3 minutos → Tu post estará publicado

### Método 2: Localmente con Git

1. Crea un archivo en `_posts/YYYY-MM-DD-titulo.md`
2. Escribe tu contenido
3. Guarda el archivo
4. Sube los cambios:

```bash
git add _posts/
git commit -m "Nuevo post: [título]"
git push origin main
```

## 📝 Formato Markdown básico

```markdown
# Título H1
## Título H2
### Título H3

**Texto en negrita**
*Texto en cursiva*

- Lista
- De
- Items

1. Lista
2. Numerada

[Texto del enlace](https://url.com)

![Descripción imagen](/assets/images/imagen.jpg)

> Cita textual

`código inline`

```
bloque de código
```
```

## 🎨 Personalización

### Cambiar información personal

Edita el archivo `_config.yml`:

```yaml
title: Tu Nombre - Tu Tagline
description: Tu descripción
author: Tu Nombre
email: tu@email.com
twitter_username: tuusuario
github_username: tuusuario
```

### Cambiar colores

Edita `assets/css/style.css` en la sección de variables:

```css
:root {
  --accent-color: #5850ec; /* Color principal */
  --text-color: #2d3748;   /* Color de texto */
  /* ... más variables */
}
```

### Modificar página About

Edita el archivo `about.md` con tu información personal.

## 📂 Estructura del proyecto

```
tunombre.github.io/
├── _config.yml          # Configuración del sitio
├── _layouts/            # Plantillas HTML
│   ├── default.html     # Layout principal
│   └── post.html        # Layout para posts
├── _posts/              # Tus artículos van aquí
│   └── YYYY-MM-DD-titulo.md
├── assets/
│   └── css/
│       └── style.css    # Estilos del sitio
├── index.html           # Página de inicio
├── blog.html            # Listado completo de posts
├── about.md             # Página "Acerca de"
├── Gemfile              # Dependencias Ruby
└── README.md            # Este archivo
```

## 🌐 Dominio personalizado (opcional)

Para usar tu propio dominio:

1. Compra un dominio (ej: tudominio.com)
2. En tu registrador de dominios, crea un registro CNAME:
   - Host: `@` o `www`
   - Value: `tuusuario.github.io`
3. En GitHub, Settings → Pages → Custom domain
4. Ingresa tu dominio
5. Espera propagación DNS (puede tomar 24-48 horas)

## 📊 Analytics (opcional)

Para agregar Google Analytics:

1. Crea una cuenta en Google Analytics
2. Obtén tu ID de seguimiento (ej: G-XXXXXXXXXX)
3. Agrega antes de `</head>` en `_layouts/default.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 💡 Tips para escribir

1. **Mantén simplicidad**: No necesitas plugins complejos al inicio
2. **Publica regularmente**: Mejor un post corto que ninguno
3. **No edites mientras escribes**: Primero escribe, luego edita
4. **Usa borradores**: Crea carpeta `_drafts/` para posts no publicados
5. **Documenta tu proceso**: El "cómo lo hice" es contenido valioso

## 🐛 Solución de problemas

**El sitio no se actualiza**
- Espera 2-3 minutos después del push
- Revisa GitHub Actions (pestaña Actions en tu repo)
- Verifica que el nombre del repo sea exactamente `tuusuario.github.io`

**Errores de formato en posts**
- Verifica que el front matter (entre `---`) esté correcto
- Asegúrate de que la fecha use formato `YYYY-MM-DD`
- Revisa que no haya caracteres especiales en el nombre del archivo

**El CSS no se carga**
- Limpia caché del navegador (Ctrl + Shift + R)
- Verifica la ruta en `_layouts/default.html`

## 📚 Recursos útiles

- [Documentación oficial de Jekyll](https://jekyllrb.com/docs/)
- [Guía de Markdown](https://www.markdownguide.org/basic-syntax/)
- [GitHub Pages docs](https://docs.github.com/en/pages)
- [Temas Jekyll gratuitos](http://jekyllthemes.org/)

## 📄 Licencia

Este proyecto es de código abierto. Siéntete libre de usar este código como base para tu propio blog.

---

**¿Preguntas?** Abre un issue en este repositorio o contáctame en [tu@email.com](mailto:tu@email.com)
