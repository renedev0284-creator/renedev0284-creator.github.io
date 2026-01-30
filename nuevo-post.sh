#!/bin/bash
# Script para crear y publicar un nuevo post
# Uso: ./nuevo-post.sh "Título del Post"

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Verificar que se pasó un título
if [ -z "$1" ]; then
    echo "❌ Error: Debes proporcionar un título"
    echo "Uso: ./nuevo-post.sh \"Título del Post\""
    exit 1
fi

# Variables
TITLE="$1"
DATE=$(date +%Y-%m-%d)
TIME=$(date +%H:%M:%S)
TIMEZONE="-0600"
SLUG=$(echo "$TITLE" | iconv -t ascii//TRANSLIT | sed -r 's/[^a-zA-Z0-9]+/-/g' | sed -r 's/^-+\|-+$//g' | tr A-Z a-z)
FILENAME="_posts/${DATE}-${SLUG}.md"

# Crear el archivo del post
cat > "$FILENAME" << EOF
---
layout: post
title: "$TITLE"
date: $DATE $TIME $TIMEZONE
tags: []
---

Escribe aquí el primer párrafo de tu post...

## Subtítulo

Contenido...

---

*[Agrega aquí una llamada a la acción o cierre]*
EOF

# Mensaje de éxito
echo -e "${GREEN}✅ Post creado exitosamente${NC}"
echo -e "${BLUE}📝 Archivo: $FILENAME${NC}"
echo ""
echo "Próximos pasos:"
echo "1. Edita el archivo con tu contenido"
echo "2. Ejecuta: ./publicar.sh"
echo ""

# Abrir el archivo en el editor por defecto (opcional)
# Si estás en VS Code, descomenta la siguiente línea:
# code "$FILENAME"

# Si estás en otro editor, usa:
# nano "$FILENAME"
# vim "$FILENAME"
