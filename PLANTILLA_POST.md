---
layout: post
title: "Título de tu artículo aquí"
date: 2025-01-31 10:00:00 -0600
tags: [tag1, tag2, tag3]
---

Este es el primer párrafo de tu artículo. Aquí escribes la introducción que captura la atención del lector. Puedes usar **negritas** para énfasis o *cursivas* para destacar conceptos.

## Subtítulo Principal (H2)

Los subtítulos H2 son para las secciones principales de tu artículo. Ayudan a organizar el contenido y facilitan la lectura.

### Subtítulo Secundario (H3)

Los H3 son subsecciones dentro de un H2. Úsalos para desglosar temas más específicos.

#### Subtítulo Terciario (H4)

Los H4 son aún más específicos. Generalmente no necesitarás ir más allá de H3, pero están disponibles.

## Formato de Texto

Puedes usar diferentes formatos de texto:

- **Texto en negrita** para énfasis fuerte
- *Texto en cursiva* para énfasis suave
- ***Negrita y cursiva*** combinadas
- `código inline` para mencionar comandos o código
- ~~Texto tachado~~ para correcciones

## Listas

### Lista sin orden (bullets)

- Primer elemento de la lista
- Segundo elemento de la lista
- Tercer elemento
  - Sub-elemento anidado
  - Otro sub-elemento
- Cuarto elemento

### Lista numerada

1. Primer paso
2. Segundo paso
3. Tercer paso
   1. Sub-paso A
   2. Sub-paso B
4. Cuarto paso

### Lista de tareas (checklist)

- [x] Tarea completada
- [x] Otra tarea completada
- [ ] Tarea pendiente
- [ ] Otra tarea pendiente

## Enlaces

Puedes crear enlaces de varias formas:

- Enlace simple: [Texto del enlace](https://ejemplo.com)
- Enlace con título: [Google](https://google.com "Ir a Google")
- Enlace a otro post: [Mi primer post]({% post_url 2025-01-30-como-configure-mi-blog %})
- Enlace automático: <https://ejemplo.com>
- Email: <tu@email.com>

## Imágenes

### Imagen básica

![Texto alternativo de la imagen](/assets/images/ejemplo.jpg)

### Imagen con título

![Descripción de la imagen](/assets/images/ejemplo.jpg "Título que aparece al pasar el mouse")

### Imagen con enlace

[![Imagen con enlace](/assets/images/ejemplo.jpg)](https://ejemplo.com)

**Nota sobre imágenes**: Guarda tus imágenes en la carpeta `assets/images/` de tu blog.

## Citas

### Cita simple

> Esta es una cita. Úsala para destacar frases importantes, citas de otras personas, o para resaltar conceptos clave que quieres que el lector note.

### Cita con atribución

> La única manera de hacer un gran trabajo es amar lo que haces.
>
> — Steve Jobs

### Cita larga o multiline

> Esta es una cita más larga que puede extenderse
> por varias líneas. Perfecto para citar párrafos
> completos o extractos de libros.
>
> Puedes incluir múltiples párrafos dentro de la misma
> cita manteniendo el símbolo `>` al inicio de cada línea.

## Notas y Avisos

### Nota informativa

**📌 Nota**: Esta es una nota importante que quiero que el lector note. Puedes usar emojis para hacer las notas más visuales.

### Advertencia

**⚠️ Advertencia**: Ten cuidado con esto, podría causar problemas si no se hace correctamente.

### Tip o consejo

**💡 Tip**: Aquí va un consejo útil que puede ayudar al lector.

### Importante

**❗ Importante**: Información crítica que no debe pasarse por alto.

## Código

### Código inline

Para ejecutar el script, usa el comando `npm install` en tu terminal.

### Bloque de código sin lenguaje

```
Este es un bloque de código genérico
Puede ser texto plano
O cualquier cosa sin resaltado de sintaxis
```

### Bloque de código con lenguaje (JavaScript)

```javascript
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
  return nombre.toUpperCase();
}

const resultado = saludar("René");
```

### Bloque de código con lenguaje (Python)

```python
def calcular_suma(a, b):
    """Función que suma dos números"""
    resultado = a + b
    return resultado

# Usar la función
total = calcular_suma(5, 3)
print(f"El total es: {total}")
```

### Bloque de código con lenguaje (HTML)

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi Página</title>
</head>
<body>
  <h1>Hola Mundo</h1>
  <p>Este es un párrafo.</p>
</body>
</html>
```

### Bloque de código con lenguaje (CSS)

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.titulo {
  font-size: 2rem;
  color: #333;
  font-weight: bold;
}
```

### Bloque de código con lenguaje (Bash/Terminal)

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## Tablas

### Tabla simple

| Característica | Descripción | Precio |
|---------------|-------------|--------|
| Básico | Plan inicial | $10/mes |
| Pro | Plan profesional | $25/mes |
| Enterprise | Plan empresarial | $50/mes |

### Tabla con alineación

| Izquierda | Centro | Derecha |
|:----------|:------:|--------:|
| Texto | Texto | Texto |
| Más texto | Centrado | Derecha |
| Último | Central | Final |

## Línea Horizontal (Separador)

Puedes separar secciones con una línea horizontal:

---

Texto después del separador.

## Combinando Elementos

Puedes combinar diferentes elementos para crear contenido rico:

### Ejemplo: Lista con código

Pasos para configurar el proyecto:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/usuario/repo.git
   cd repo
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   - Crea un archivo `.env`
   - Agrega tus credenciales:
     ```
     API_KEY=tu-clave-aqui
     DATABASE_URL=tu-url-aqui
     ```

### Ejemplo: Cita con código

> "El mejor código es el que no necesitas escribir."
>
> Por ejemplo, en vez de:
> ```javascript
> if (valor === true) {
>   return true;
> }
> ```
>
> Simplemente escribe:
> ```javascript
> return valor;
> ```

## Llamadas a la Acción

Al final del post, puedes incluir una llamada a la acción:

---

**¿Te gustó este artículo?** 

- Compártelo en tus redes sociales
- Déjame un comentario con tus preguntas
- Suscríbete para recibir más contenido

**Conecta conmigo:**
- Twitter: [@tuusuario](https://twitter.com/tuusuario)
- Email: [tu@email.com](mailto:tu@email.com)

---

## Metadatos y Notas Finales

*Última actualización: {{ page.date | spanish_date: "%d de %B de %Y" }}*

*Tiempo de lectura: {{ page.content | number_of_words | divided_by: 200 }} minutos*

**Tags**: {% for tag in page.tags %}#{{ tag }}{% unless forloop.last %}, {% endunless %}{% endfor %}
