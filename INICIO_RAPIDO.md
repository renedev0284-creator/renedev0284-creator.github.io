# 🚀 Guía de Inicio Rápido

## Opción 1: Setup en 5 minutos (Solo GitHub, sin instalar nada)

### Paso 1: Crear el repositorio
1. Ve a https://github.com/new
2. Nombre del repositorio: `tuusuario.github.io` (reemplaza `tuusuario` con tu username de GitHub)
3. Público ✅
4. NO inicialices con README
5. Click en "Create repository"

### Paso 2: Subir estos archivos
1. Descarga todos los archivos de este proyecto
2. En la página del repositorio vacío, click en "uploading an existing file"
3. Arrastra TODOS los archivos (excepto este INICIO_RAPIDO.md)
4. Commit message: "Primer commit del blog"
5. Click en "Commit changes"

### Paso 3: Activar GitHub Pages
1. En tu repo → Settings (arriba a la derecha)
2. Scroll down → Pages (menú izquierdo)
3. Source: Deploy from a branch
4. Branch: `main` → carpeta `/root`
5. Save

### Paso 4: ¡Listo!
Espera 2-3 minutos y visita: `https://tuusuario.github.io`

## Opción 2: Setup Local (para trabajar sin internet)

### Requisitos
- Git instalado: https://git-scm.com/downloads
- Ruby instalado: https://rubyinstaller.org/ (Windows) o ya viene en Mac/Linux

### Pasos
```bash
# 1. Clonar tu repositorio
git clone https://github.com/tuusuario/tuusuario.github.io.git
cd tuusuario.github.io

# 2. Instalar dependencias
bundle install

# 3. Ver el blog localmente
bundle exec jekyll serve

# 4. Abrir en navegador
# http://localhost:4000
```

## 📝 Cómo escribir tu primer post

### Método rápido (en GitHub)
1. Ve a tu repo en GitHub
2. Click en la carpeta `_posts`
3. Click en "Add file" → "Create new file"
4. Nombre: `2025-01-30-mi-primer-post.md` (ajusta la fecha)
5. Copia esto:

```markdown
---
layout: post
title: "Mi primer post"
date: 2025-01-30 10:00:00 -0600
tags: [inicio]
---

¡Este es mi primer post en mi blog personal!

## Por qué empecé este blog

Escribe aquí tus razones...

## Lo que quiero lograr

- Escribir consistentemente
- Documentar mi aprendizaje
- Crear mi espacio en internet
```

6. Click en "Commit changes"
7. Espera 2-3 minutos → Refresh tu blog

### Método con scripts (local)
```bash
# Crear nuevo post
./nuevo-post.sh "Título de mi post"

# Edita el archivo que se creó
# nano _posts/2025-01-30-titulo-de-mi-post.md

# Publicar
./publicar.sh
```

## ✏️ Personalizar tu blog

### 1. Información personal
Edita `_config.yml`:
```yaml
title: Tu Nombre - Escritor & Marketer
description: Tu descripción personal
author: Tu Nombre
email: tu@email.com
```

### 2. Página About
Edita `about.md` con tu biografía

### 3. Colores y diseño
Edita `assets/css/style.css` → sección `:root {}`

## 🎯 Flujo de trabajo diario

1. **Escribe** un nuevo post (usa la plantilla)
2. **Guarda** el archivo en `_posts/`
3. **Publica** con `git push` o el script `./publicar.sh`
4. **Espera** 2-3 minutos
5. **Revisa** tu blog en vivo

## 💡 Tips para empezar

✅ **Publica antes de sentirte listo** - El primer post no tiene que ser perfecto
✅ **Empieza simple** - No necesitas todas las features desde el día 1
✅ **Escribe regularmente** - La consistencia importa más que la perfección
✅ **Documenta tu proceso** - "Cómo hice X" es contenido valioso
✅ **Sé tú mismo** - Tu voz única es tu mejor activo

## 🆘 Problemas comunes

**El sitio no aparece**
- Espera 5 minutos (GitHub Pages toma tiempo)
- Verifica que el repo se llame exactamente `tuusuario.github.io`
- Ve a Settings → Pages y confirma que esté activado

**Error en el formato del post**
- El front matter (entre `---`) debe estar correcto
- La fecha debe ser formato `YYYY-MM-DD`
- No uses caracteres especiales en el nombre del archivo

**Los estilos no se cargan**
- Limpia el cache del navegador (Ctrl + Shift + R)
- Verifica que `assets/css/style.css` existe

## 📚 Próximos pasos

Una vez que tu blog esté funcionando:

1. **Escribe tu primer post real** (borra los de ejemplo)
2. **Personaliza el diseño** según tu gusto
3. **Agrega tu dominio personalizado** (opcional)
4. **Conecta analytics** (opcional)
5. **¡ESCRIBE REGULARMENTE!**

## ❓ ¿Necesitas ayuda?

- 📖 Lee el README.md completo
- 🔍 Revisa Jekyll docs: https://jekyllrb.com/docs/
- 💬 Abre un issue en GitHub
- 📧 Contáctame: tu@email.com

---

**¡Feliz escritura! 🎉**
