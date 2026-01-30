#!/bin/bash
# Script para publicar cambios en GitHub Pages
# Uso: ./publicar.sh "Mensaje del commit (opcional)"

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Mensaje del commit
if [ -z "$1" ]; then
    MSG="Actualización del blog - $(date '+%Y-%m-%d %H:%M')"
else
    MSG="$1"
fi

echo -e "${BLUE}📦 Preparando cambios...${NC}"

# Agregar todos los cambios
git add .

# Verificar si hay cambios
if git diff --staged --quiet; then
    echo -e "${YELLOW}⚠️  No hay cambios para publicar${NC}"
    exit 0
fi

# Mostrar archivos que se publicarán
echo -e "${BLUE}📄 Archivos a publicar:${NC}"
git diff --staged --name-only

# Hacer commit
echo -e "${BLUE}💾 Guardando cambios...${NC}"
git commit -m "$MSG"

# Publicar
echo -e "${BLUE}🚀 Publicando en GitHub Pages...${NC}"
git push origin main

# Mensaje de éxito
echo -e "${GREEN}✅ ¡Publicado exitosamente!${NC}"
echo ""
echo "Tu blog se actualizará en 2-3 minutos en:"
echo "https://$(git config --get remote.origin.url | sed 's/.*github.com[:/]\(.*\)\.git/\1/').github.io"
echo ""
