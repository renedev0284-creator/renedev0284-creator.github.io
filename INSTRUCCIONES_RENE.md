# 🎯 Instrucciones para René - Blog Final

## ✅ Lo que tienes ahora

Un ZIP con **todos los archivos listos** para usar directamente. Sin nombres raros, sin `-mademistakes`, todo con los nombres correctos.

## 📦 Pasos para publicar tu blog

### 1. Descargar y descomprimir

1. Descarga `blog-rene-final.zip`
2. Descomprímelo
3. Verás una carpeta `blog-final/` con todo dentro

### 2. Subir a GitHub con VS Code

**Opción A - Repo nuevo (lo más fácil):**

```bash
# 1. Abre VS Code en la carpeta blog-final/
cd blog-final

# 2. Inicializa Git
git init

# 3. Conecta con tu repo
git remote add origin https://github.com/renedev0284-creator/renedev0284-creator.github.io.git

# 4. Agrega todos los archivos
git add .

# 5. Primer commit
git commit -m "Setup inicial del blog"

# 6. Sube todo
git branch -M main
git push -u origin main --force
```

**Opción B - Desde la interfaz de VS Code:**

1. Abre la carpeta `blog-final/` en VS Code
2. Click en "Source Control" (icono de rama a la izquierda)
3. Click en "Initialize Repository"
4. En la terminal (Ctrl + `):
   ```bash
   git remote add origin https://github.com/renedev0284-creator/renedev0284-creator.github.io.git
   ```
5. Escribe mensaje: "Setup inicial del blog"
6. Click en ✓ (Commit)
7. Click en los 3 puntitos (...) → Push → Force Push

### 3. Activar GitHub Pages

1. Ve a: https://github.com/renedev0284-creator/renedev0284-creator.github.io
2. Click en **Settings** (arriba a la derecha)
3. En el menú izquierdo → **Pages**
4. En "Source":
   - Branch: **main**
   - Folder: **/ (root)**
   - Click **Save**

### 4. Esperar y verificar

- Espera **3-5 minutos**
- Refresca la página de Settings → Pages
- Debería decir: "Your site is live at https://renedev0284-creator.github.io" ✅
- Visita tu blog y verifica que se vea bien

## 🌐 Conectar tu dominio blog.renemoya.com

### 1. En Cloudflare

1. Ve a tu dashboard de Cloudflare
2. Selecciona `renemoya.com`
3. DNS → Records → Add record
4. Configura:
   ```
   Type: CNAME
   Name: blog
   Target: renedev0284-creator.github.io
   Proxy status: DNS only (🌥️ gris, NO 🟠 naranja)
   TTL: Auto
   Save
   ```

### 2. En GitHub Pages

1. Settings → Pages
2. Custom domain: `blog.renemoya.com`
3. Save
4. Espera verificación (1-2 min)
5. Activa **Enforce HTTPS** ✅

### 3. Esperar propagación

- **5-10 minutos** con Cloudflare
- Luego visita: https://blog.renemoya.com

## 📝 Escribir tu primer post real

### En GitHub (sin instalar nada):

1. Ve a tu repo
2. Carpeta `_posts/`
3. Click "Add file" → "Create new file"
4. Nombre: `2025-01-31-mi-primer-post-real.md`
5. Copia esta plantilla:

```markdown
---
layout: post
title: "Mi primer post real"
date: 2025-01-31 18:00:00 -0600
tags: [inicio, meta]
---

Hoy es el día que empiezo oficialmente a escribir en público...

## Por qué empiezo hoy

[Escribe tus razones]

## Lo que quiero lograr

- Escribir consistentemente
- Documentar mi aprendizaje
- Mejorar como escritor

---

*Este es el inicio del viaje.*
```

6. Commit changes
7. Espera 2-3 min → Refresh tu blog

### En VS Code (local):

1. Abre `_posts/` en VS Code
2. Crea archivo: `2025-01-31-mi-primer-post.md`
3. Escribe tu contenido
4. Terminal:
   ```bash
   git add .
   git commit -m "Nuevo post: Mi primer post real"
   git push
   ```

## ✏️ Personalizar tu información

### 1. Edita `_config.yml`

Cambia estas líneas:

```yaml
email: rene@renemoya.com  # Tu email real
twitter_username: tuusuario  # Tu usuario de Twitter
```

### 2. Edita `about.md`

- Actualiza tu biografía
- Agrega tu email real
- Cambia tus redes sociales

### 3. Guarda y push

```bash
git add .
git commit -m "Actualizar información personal"
git push
```

## 🎨 Cambiar colores (opcional)

Si quieres cambiar el color rojo coral por otro:

1. Abre `assets/css/style.css`
2. Busca la línea:
   ```css
   --color-accent: #d94f5c;  /* Color principal */
   ```
3. Cámbialo por otro color (ejemplo: `#5850ec` para azul)
4. Guarda, commit y push

## ✅ Checklist Final

Marca cuando completes cada paso:

- [ ] Descargué y descomprimí el ZIP
- [ ] Subí todo a GitHub con VS Code
- [ ] Activé GitHub Pages en Settings
- [ ] Mi blog está visible en https://renedev0284-creator.github.io
- [ ] Conecté mi dominio blog.renemoya.com (opcional)
- [ ] Edité mi información personal
- [ ] Borré los posts de ejemplo
- [ ] Escribí mi primer post real
- [ ] ¡Empecé a escribir regularmente!

## 🆘 Si algo sale mal

**El sitio no carga:**
- Espera 5 minutos más
- Verifica que Settings → Pages esté activado
- Confirma que todos los archivos se subieron

**Error 404:**
- Verifica que `index.html` esté en la raíz (no en subcarpetas)
- Refresca después de 3 minutos

**El CSS no se ve:**
- Ctrl + Shift + R para limpiar caché
- Verifica que `assets/css/style.css` existe en el repo

## 🎯 Lo siguiente

1. **HOY**: Sube el blog y activa Pages
2. **MAÑANA**: Escribe y publica tu primer post real
3. **ESTA SEMANA**: Escribe 2-3 posts más
4. **SIGUIENTE**: Establece una rutina de escritura

---

**¡Éxito!** Ya tienes todo listo. Solo falta subirlo y empezar a escribir 🚀

¿Dudas? Avísame en cualquier paso.
