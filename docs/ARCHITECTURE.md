# 🏗️ Arquitectura del Proyecto: Iker Books

## 1. Visión General Técnica
Este proyecto es una aplicación web moderna construida con **Next.js 16** utilizando la arquitectura **App Router** y **React Server Components (RSC)** por defecto. El objetivo es ofrecer una experiencia de alto rendimiento, optimizada para SEO (Search Engine Optimization) y Core Web Vitals, manteniendo una estética minimalista y "dark mode" puro.

### Stack Tecnológico
- **Framework**: Next.js 16.1 (App Router)
- **Lenguaje**: TypeScript 5.x
- **Estilos**: CSS Modules + Variables CSS (Vanilla)
- **Contenido**: MDX (Markdown + JSX) para artículos de blog
- **Analítica**: Google Analytics 4 (@next/third-parties)
- **Deployment Target**: Vercel / Node.js Standalone

---

## 2. Estructura de Directorios & Patrones

La arquitectura sigue una estructura modular y semántica diseñada para escalar:

```bash
/
├── app/                  # Rutas y Componentes de Página (RSC)
│   ├── blog/             # Sistema de Blog (Listado + Dinámico [slug])
│   ├── libro/            # Páginas de producto (Landing per book)
│   ├── layout.tsx        # Layout Principal (Fuentes, Meta, Analytics)
│   └── page.tsx          # Home Page
├── components/           # Componentes React Reutilizables
│   ├── layout/           # Header, Footer, Wrappers
│   └── ui/               # Design System (Button, Container, Cards)
├── content/              # "Base de Datos" basada en archivos
│   ├── blog/             # Artículos en formato .mdx
│   └── books/            # Data de libros en .json
├── lib/                  # Utilidades y Lógica de Negocio
│   └── blog.ts           # Motor de procesamiento MDX
├── public/               # Assets Estáticos (Imágenes, Fuentes, Robots)
└── styles/               # Estilos Globales y Tokens
```

### Decisiones de Diseño Clave

#### 🎨 CSS Modules & Variables
No utilizamos Tailwind ni librerías de componentes pesadas.
- **Por qué**: Control total sobre el rendimiento ("Zero Runtime CSS") y la especificidad.
- **Design Tokens**: Definidos en `styles/globals.css` (`--color-bg-primary`, `--space-4`, etc.).
- **Mantenibilidad**: Estilos co-localizados con sus componentes (`component.module.css`).

#### ⚡ Server-First Data Fetching
El contenido (JSON y MDX) se lee en el servidor.
- **Beneficio**: El cliente recibe HTML puro. No hay "loading spinners" ni hidratación innecesaria.
- **Patrón**: `lib/blog.ts` usa `fs` (Node.js file system) para leer contenido durante el build (`generateStaticParams`).

#### 🔍 SEO Estratégico
El SEO no es un afterthought, está en el núcleo:
- **Metadatos Dinámicos**: Cada página exporta `generateMetadata()` basado en su contenido.
- **JSON-LD**: Schema.org estructurado para `Person` (Autor), `Book` y `Article` inyectado en el `<head>`.
- **Rendimiento**: Fuentes optimizadas con `next/font` y scripts de terceros diferidos.

---

## 3. Flujo de Datos

1.  **Libros**: Datos almacenados en `content/books/*.json`. Tipado fuerte en TypeScript.
2.  **Blog**:
    *   Archivos `.mdx` con Frontmatter (YAML).
    *   Procesados por `gray-matter` y `marked` (server-side).
    *   Generación estática (SSG) de rutas individuales.

---

## 4. Analítica y Monitoreo

- **Google Analytics 4**: Integrado vía `@next/third-parties` para evitar penalizaciones de performance.
- **Search Console**: Verificación DNS/Meta gestionada dinámicamente via `.env.local`.

---

## 5. Próximos Pasos (Roadmap Técnico)

1.  **Internacionalización (i18n)**: La estructura de carpetas soporta fácilmente `app/[lang]/` si se decide traducir.
2.  **CMS Integation**: La capa de `lib/` abstrae el origen de datos. Migrar de Archivos -> CMS (Contentful/Sanity) solo requeriría cambiar `lib/blog.ts`.
3.  **Testing**: Implementar Vitest/Playwright para asegurar integridad de rutas y SEO.
