# georgetala.github.io

Portafolio de Jorge Talavera. Sitio estático publicado con GitHub Pages en https://georgetala.github.io/

## Dónde está cada cosa

| Ruta | Qué es |
|---|---|
| `js/data.js` | **Todo el contenido**: textos en español e inglés, habilidades, categorías, proyectos y enlaces. Es el único archivo que hay que tocar para actualizar la página. |
| `img/<id-del-proyecto>/` | Fotos de cada proyecto. |
| `media/` | Videos cortos (MP4). |
| `demos/` | Demos en vivo, como el gemelo digital. |
| `index.html`, `proyecto.html` | Portada y plantilla de la página de proyecto. No hace falta editarlos. |
| `css/site.css`, `js/site.js` | Diseño y lógica. |
| `portfolio-*.html` | Redirecciones desde las direcciones del sitio anterior, para que los enlaces viejos sigan funcionando. |

## Cambiar un texto

Abre `js/data.js`, busca el texto y cámbialo. Cada texto tiene su versión `es` y `en`.

## Añadir un proyecto

1. Crea la carpeta `img/<id>/`, por ejemplo `img/linea-empaque/`, y pon ahí las fotos. Sirven JPG, PNG o WebP; mejor si miden 1600 px o menos del lado largo.
2. En `js/data.js`, dentro de `projects`, copia un proyecto existente y cambia:
   - `id`: el mismo nombre de la carpeta (sin espacios ni acentos).
   - `year` (año de ejecución), `title`, `context`, `role`, `discipline`, `summary`, `body`, `results`.
   - `tags`: categorías para los filtros (`mant`, `aero`, `mec`, `sim`, `ges`, `soft`; se definen en `categories`).
   - `cover`: la imagen de la tarjeta. Si es un render con fondo blanco, añade `coverFit: true`.
   - `media`: las imágenes y videos de la página del proyecto, cada uno con su pie de foto. El primero sale grande arriba.
3. El orden de la lista es el orden en la portada.

Tipos de imagen en `media`:
- `plan: true`: dibujo con fondo transparente (los aviones).
- `fit: true`: render con fondo blanco; se muestra completo, sin recortar.
- Sin nada: foto normal.
- `tall: true`: imagen o video vertical; ocupa una columna angosta.

## Demo del gemelo digital

La demo vive en `demos/gemelo/index.html` y solo debe llevar datos de la planta ficticia. El botón «Abrir la demo» aparece cuando en `data.js` el proyecto `gemelo-digital` tiene `demo.ready: true`.

## Ver los cambios antes de publicar

Abre `index.html` con doble clic. Para verlo igual que en internet, desde esta carpeta:

```
python -m http.server
```

y entra a http://localhost:8000

## Publicar

En GitHub Desktop: escribe un resumen en **Summary**, pulsa **Commit to main** y luego **Push origin**. GitHub Pages actualiza la página en uno o dos minutos.
