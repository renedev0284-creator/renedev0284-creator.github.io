# 🎨 Cambiar al Diseño Made Mistakes

## Vista Previa

Primero, abre el archivo `VISTA_PREVIA_MADEMISTAKES.html` en tu navegador para ver el nuevo diseño.

## Diferencias clave vs diseño anterior

### Diseño Made Mistakes (Nuevo):
- ✨ Tipografía elegante y refinada (Fraunces + Newsreader)
- 🎯 Layout asimétrico con fechas a la izquierda
- 🎨 Paleta de colores suaves y sofisticada
- ✍️ Enfoque editorial y literario
- 🌊 Animaciones sutiles y fluidas
- 📐 Uso generoso de espacio en blanco
- 🎭 Dark mode automático incluido

### Diseño Tania Rascia (Anterior):
- Tipografía moderna (Inter + Merriweather)
- Layout simétrico y directo
- Colores más tech-friendly
- Enfoque minimalista funcional

## Cómo cambiar al nuevo diseño

### Opción 1: Reemplazar todo (Recomendado)

Renombra los archivos nuevos para que sean los principales:

```bash
# En tu repositorio local o directamente en GitHub

# 1. Renombrar archivos nuevos
mv assets/css/style-mademistakes.css assets/css/style.css
mv _layouts/default-mademistakes.html _layouts/default.html
mv _layouts/post-mademistakes.html _layouts/post.html
mv index-mademistakes.html index.html
mv blog-mademistakes.html blog.html
mv about-mademistakes.md about.md

# 2. Borrar archivos antiguos (opcional, puedes guardarlos como backup)
# Los archivos sin "-mademistakes" en el nombre

# 3. Commit y push
git add .
git commit -m "Actualizar diseño a estilo Made Mistakes"
git push
```

### Opción 2: Cambiar manualmente en GitHub

1. Ve a tu repo en GitHub
2. Para cada archivo:
   - Abre el archivo con `-mademistakes`
   - Copia todo el contenido
   - Abre el archivo original (sin `-mademistakes`)
   - Pega y sobrescribe el contenido
   - Commit
3. Espera 2-3 minutos → Tu blog estará actualizado

### Opción 3: Mantener ambos diseños

Si quieres poder cambiar entre diseños:

1. Mantén ambos archivos CSS
2. En `_layouts/default.html`, cambia la línea del CSS:

```html
<!-- Para Made Mistakes -->
<link rel="stylesheet" href="{{ '/assets/css/style-mademistakes.css' | relative_url }}">

<!-- Para Tania Rascia -->
<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">
```

## Archivos incluidos en el nuevo diseño

```
Nuevos archivos:
├── assets/css/style-mademistakes.css     # CSS principal
├── _layouts/default-mademistakes.html    # Layout base
├── _layouts/post-mademistakes.html       # Layout de posts
├── index-mademistakes.html               # Página inicio
├── blog-mademistakes.html                # Página blog
├── about-mademistakes.md                 # Página about
└── VISTA_PREVIA_MADEMISTAKES.html        # Vista previa
```

## Personalización del nuevo diseño

### Cambiar colores

Edita `assets/css/style-mademistakes.css` en la sección `:root`:

```css
:root {
  --color-accent: #d94f5c;        /* Color principal */
  --color-accent-soft: #f2b5bb;   /* Versión suave del acento */
  --color-bg: #fdfcfb;            /* Fondo principal */
  --color-text: #1a1a1a;          /* Color de texto */
}
```

### Cambiar fuentes

Las fuentes actuales son:
- **Display**: Fraunces (títulos)
- **Body**: Newsreader (contenido)
- **Sans**: DM Sans (navegación, metadatos)

Para cambiar, edita el `<link>` de Google Fonts en `_layouts/default-mademistakes.html`

### Desactivar dark mode

Si no quieres el dark mode automático, elimina esta sección al final del CSS:

```css
@media (prefers-color-scheme: dark) {
  /* ... todo este bloque ... */
}
```

### Ajustar animaciones

Si las animaciones te parecen demasiado o muy pocas:

```css
/* Desactivar animaciones */
@keyframes fadeInUp {
  from, to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* O hacer más rápidas */
.intro {
  animation: fadeInUp 0.4s ease-out; /* Era 0.8s */
}
```

## Características especiales del diseño Made Mistakes

### 1. Layout asimétrico
Las fechas aparecen a la izquierda de cada post, creando una línea temporal visual.

### 2. Línea de acento animada
Nota la línea roja debajo del header que se anima al cargar.

### 3. Hover effects sofisticados
- Línea vertical aparece al pasar el mouse sobre posts
- Navegación tiene underline animado
- Tags cambian de color suavemente

### 4. Tipografía variable
Usa fuentes variables (Fraunces) que se ajustan perfectamente a diferentes tamaños.

### 5. Dark mode inteligente
Se activa automáticamente según las preferencias del sistema del usuario.

## Comparación lado a lado

| Característica | Tania Rascia | Made Mistakes |
|---------------|--------------|---------------|
| **Estilo general** | Moderno tech | Editorial literario |
| **Tipografía** | Inter/Merriweather | Fraunces/Newsreader |
| **Layout** | Simétrico | Asimétrico |
| **Espacio** | Eficiente | Generoso |
| **Colores** | Tecnológicos | Suaves/Refinados |
| **Animaciones** | Mínimas | Sutiles y fluidas |
| **Dark mode** | No | Sí automático |
| **Mejor para** | Blogs tech | Escritura literaria |

## Mi recomendación

Dado que eres **escritor en desarrollo** y quieres enfocarte en el contenido de calidad:

👉 **Usa Made Mistakes**

Por qué:
- La tipografía es más apropiada para lectura larga
- El diseño editorial invita a leer con calma
- El espacio generoso hace que el contenido respire
- Es más distintivo y memorable
- Se siente más "premium" y cuidado

## Siguiente paso

1. **Abre** `VISTA_PREVIA_MADEMISTAKES.html` para ver el diseño
2. **Decide** si te gusta más que el anterior
3. **Sigue** la Opción 1 arriba para hacer el cambio
4. **Personaliza** los colores si quieres (opcional)

¿Dudas o quieres ajustar algo del diseño? ¡Avísame!
