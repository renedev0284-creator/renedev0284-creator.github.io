#!/bin/bash
# Script para generar páginas de tags automáticamente

# Crear directorio de tags si no existe
mkdir -p tag

# Limpiar páginas antiguas
rm -f tag/*.md

# Obtener todos los tags de los posts
echo "Generando páginas de tags..."

# Array para almacenar tags únicos
declare -A tags

# Buscar todos los posts y extraer tags
for file in _posts/*.md; do
  # Extraer tags del front matter
  awk '/^tags:/{flag=1;next}/^[a-z_-]+:/{flag=0}flag' "$file" | \
  sed 's/^[[:space:]]*-[[:space:]]*//' | \
  while read -r tag; do
    if [ ! -z "$tag" ]; then
      # Sanitizar nombre del tag
      tag_slug=$(echo "$tag" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd '[:alnum:]-')
      
      # Crear página del tag si no existe
      if [ ! -f "tag/${tag_slug}.md" ]; then
        cat > "tag/${tag_slug}.md" << EOF
---
layout: tag
title: "${tag}"
tag: ${tag}
permalink: /tag/${tag_slug}/
---
EOF
        echo "✓ Creado: tag/${tag_slug}.md"
      fi
    fi
  done
done

echo "¡Listo! Páginas de tags generadas en /tag/"