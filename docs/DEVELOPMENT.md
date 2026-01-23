# 🛠️ Guía de Desarrollo y Gestión de Contenido

Este documento detalla los flujos de trabajo para mantener, extender y operar el proyecto **Iker Books**.

## 🚀 Entorno de Desarrollo

### Requisitos
- Node.js 18+
- npm 9+

### Comandos Principales
```bash
# Iniciar servidor de desarrollo (Hot Reload)
npm run dev

# Compilar para producción (Prueba final)
npm run build
npm start

# Verificar Linter
npm run lint
```

---

## ✍️ Gestión de Contenido (CMS "Git-based")

El contenido del sitio vive en el repositorio, lo que permite control de versiones y edición offline.

### 1. Publicar un Nuevo Artículo de Blog

1.  Navega a la carpeta `content/blog/`.
2.  Crea un nuevo archivo con extensión `.mdx`. El nombre del archivo será la URL (slug).
    *   Ejemplo: `el-horror-cosmico.mdx` -> `sudominio.com/blog/el-horror-cosmismo`
3.  Añade el **Frontmatter** obligatorio al inicio del archivo:

```yaml
---
title: "Título Impactante para SEO"
description: "Meta descripción de 150-160 caracteres que invite al clic."
date: "2024-03-20"
author: "Iker Guerra"
keywords: ["keyword 1", "keyword 2"]
image: "/images/blog/imagen-destacada.jpg"
---

# Título (H1)

Contenido en Markdown...
```

4.  Escribe el contenido. Puedes usar Markdown estándar:
    *   `## Subtítulos`
    *   `**Negritas**`
    *   `[Enlaces internos](/libro/ecos-de-la-mente)`

### 2. Editar/Añadir un Libro

1.  Los libros están en `content/books/`.
2.  Edita el archivo JSON correspondiente (ej: `ecos-de-la-mente.json`).
3.  Si añades un libro nuevo:
    *   Crea el JSON.
    *   Crea la página en `app/libro/[nuevo-libro]/page.tsx` (puedes copiar la estructura de `ecos-de-la-mente`).

---

## 🎨 Sistema de Diseño (CSS)

El sitio utiliza variables CSS globales para mantener la consistencia.

**Ubicación**: `styles/globals.css`

### Variables Principales
Si necesitas cambiar la identidad visual, modifica estas variables:

```css
:root {
  /* Paleta de Colores */
  --color-bg-primary: #0a0a0a;   /* Fondo principal */
  --color-text-primary: #ededed; /* Texto principal */
  --color-accent-primary: #3b82f6; /* Color de acción/enlaces */
  
  /* Espaciado */
  --space-4: 1rem;
  --space-8: 2rem;
  
  /* Tipografía */
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

---

## 📈 SEO y Analítica

### Variables de Entorno
El archivo `.env.local` controla las claves de API críticas. **No subir al repositorio público**.

```env
NEXT_PUBLIC_SITE_URL=https://tudominio.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=XXXXX
```

### Sitemap
El archivo `app/sitemap.ts` genera automáticamente el mapa del sitio para Google.
- Si añades una nueva **página estática** (ej: `/contacto`), añádela manualmente al array `routes`.
- Las páginas de **blog** se añaden automáticamente.

---

## ⚠️ Errores Comunes y Soluciones

### "404 en artículo nuevo"
- **Causa**: Next.js cachea las rutas estáticas.
- **Solución**: Reinicia el servidor (`Ctrl+C` -> `npm run dev`).

### "Estilos rotos"
- **Causa**: Importación incorrecta en `layout.tsx`.
- **Solución**: Asegúrate de que `import '../styles/globals.css'` esté presente y correcto.

### "Imágenes no cargan"
- **Causa**: Ruta incorrecta o dominio externo no configurado.
- **Solución**: Las imágenes locales deben estar en la carpeta `public/` y referenciarse con `/` al inicio (ej: `/portada.png`).
