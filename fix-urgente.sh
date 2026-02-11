#!/bin/bash
# Script CORREGIDO para generar páginas de tags

echo "🗑️  Limpiando páginas antiguas de tags..."
rm -rf tag/
mkdir -p tag

echo "📝 Generando páginas de tags..."

# Extraer tags únicos de todos los posts
tags=$(grep -h "^tags:" _posts/*.md | sed 's/tags://g' | tr ',' '\n' | tr -d '[]' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//' | sort -u)

# Crear página para cada tag
while IFS= read -r tag; do
    if [ ! -z "$tag" ]; then
        # Limpiar tag para nombre de archivo (solo letras, números y guiones)
        tag_slug=$(echo "$tag" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//;s/-$//')
        
        # Crear archivo de tag
        cat > "tag/${tag_slug}.md" << EOF
---
layout: tag
title: "${tag}"
tag: ${tag}
permalink: /tag/${tag_slug}/
---
EOF
        echo "✓ Creado: tag/${tag_slug}.md (Tag: ${tag})"
    fi
done <<< "$tags"

echo ""
echo "✅ ¡Listo! Páginas de tags generadas en /tag/"
echo "📊 Total de tags: $(ls -1 tag/*.md 2>/dev/null | wc -l)"