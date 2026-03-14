# Blog de René Moya

Blog personal con diseño inspirado en Made Mistakes. Construido con Jekyll y alojado en GitHub Pages.

## 🚀 Instalación Rápida

### Subir a GitHub

1. **Sube todos estos archivos a tu repositorio:**
   ```
   renedev0284-creator.github.io/
   ```

2. **Activa GitHub Pages:**
   - Settings → Pages
   - Source: Branch `main` → `/root`
   - Save

3. **Espera 3-5 minutos**
   - Tu blog estará en: https://renedev0284-creator.github.io

## 📝 Escribir un nuevo post

### Método GitHub (más fácil)

1. Ve a la carpeta `_posts` en GitHub
2. Click "Add file" → "Create new file"
3. Nombre: `2025-01-30-titulo-del-post.md`
4. Usa esta plantilla:

```markdown
---
layout: post
title: "Título de tu post"
date: 2025-01-30 10:00:00 -0600
tags: [tag1, tag2]
---

Primer párrafo...

## Subtítulo

Contenido...
```

5. Commit → Espera 2 min → ¡Publicado!

### Método VS Code (local)

```bash
# 1. Crear archivo en _posts/
# Nombre: 2025-01-30-titulo.md

# 2. Escribir contenido

# 3. Push
git add .
git commit -m "Nuevo post: [título]"
git push
```

## Validación del build

La forma más estable de validar este blog ahora mismo es con GitHub Actions.
El repo ya incluye un workflow que corre `bundle exec jekyll build` en Linux con Ruby 3.3 cada vez que haces `push`, abres un `pull request` o lo lanzas manualmente.

### Ver el resultado

1. Ve a la pestaña `Actions` del repositorio
2. Abre el workflow `Jekyll Build`
3. Revisa si el job `build` pasó o falló

### Nota sobre Windows

En esta máquina se pudo instalar Ruby y Bundler, pero el stack local de Jekyll en Windows dio problemas de compatibilidad y encoding.  
Si más adelante quieres correrlo local de forma confiable, la recomendación práctica es usar WSL con Ruby 3.3.

## 🎨 Personalización

### Cambiar tu información

Edita `_config.yml`:

```yaml
title: René Moya
description: Tu descripción
email: tu@email.com
twitter_username: tuusuario
github_username: renedev0284-creator
```

### Cambiar colores

Edita `assets/css/style.css` en la sección `:root`:

```css
:root {
  --color-accent: #d94f5c;  /* Color principal */
  --color-bg: #fdfcfb;      /* Fondo */
  --color-text: #1a1a1a;    /* Texto */
}
```

### Editar página About

Edita `about.md` con tu información personal.

## 🌐 Dominio Personalizado

Para usar `blog.renemoya.com`:

1. **En Cloudflare DNS:**
   ```
   Type: CNAME
   Name: blog
   Target: renedev0284-creator.github.io
   Proxy: DNS only (gris)
   ```

2. **En GitHub Pages:**
   - Settings → Pages → Custom domain
   - Escribe: `blog.renemoya.com`
   - Save
   - Activa "Enforce HTTPS"

3. **Espera 5-10 minutos** → Listo

## 📂 Estructura

```
blog/
├── _config.yml          # Configuración
├── _layouts/            # Plantillas HTML
│   ├── default.html
│   └── post.html
├── _posts/              # Tus artículos
├── assets/
│   └── css/
│       └── style.css    # Estilos
├── index.html           # Página inicio
├── blog.html            # Listado posts
├── about.md             # Acerca de
└── Gemfile              # Dependencias
```

## ✨ Características

- ✅ Diseño editorial elegante
- ✅ Tipografía refinada (Fraunces + Newsreader)
- ✅ Layout asimétrico
- ✅ Dark mode automático
- ✅ Responsive
- ✅ SEO optimizado
- ✅ RSS feed
- ✅ Navegación entre posts

## 🆘 Solución de problemas

**El sitio no aparece:**
- Espera 5 minutos
- Verifica Settings → Pages esté activado
- Confirma que branch sea `main`

**CSS no carga:**
- Ctrl + Shift + R (limpiar caché)
- Verifica que `assets/css/style.css` existe

**Errores en posts:**
- Verifica front matter (entre `---`)
- Fecha formato `YYYY-MM-DD`
- Nombre archivo: `YYYY-MM-DD-titulo.md`

## 📧 Contacto

René Moya
- Email: tu@email.com
- GitHub: [@renedev0284-creator](https://github.com/renedev0284-creator)

---

Hecho con ❤️ usando Jekyll y GitHub Pages
