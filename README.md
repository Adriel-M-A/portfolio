# Portfolio Personal | Adriel Montes

Bienvenido al repositorio de mi portafolio personal. Este proyecto fue desarrollado para mostrar mi experiencia, habilidades y proyectos destacados como Analista Programador Universitario.

## 🚀 Tecnologías Principales

Este proyecto está construido con herramientas modernas enfocadas en el rendimiento, el diseño y la experiencia de desarrollo:

- **[Astro 6](https://astro.build/)**: Framework web para generar sitios estáticos ultrarrápidos (SSG).
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework de CSS utilitario para un diseño ágil y responsivo.
- **Iconos SVG Inline**: Íconos incrustados directamente en el código para mantener el rendimiento y soportar temas sin dependencias externas.

## 📂 Arquitectura del Proyecto

El proyecto utiliza **Astro Content Collections** para gestionar de forma segura y tipada el contenido dinámico del sitio.

```text
/
├── public/                # Assets estáticos y favicons
├── src/
│   ├── components/        # Componentes reutilizables (Navbar, Footer, Cards)
│   ├── content/
│   │   ├── experiencia/   # Entradas en Markdown (.md) para la sección Sobre mí
│   │   └── proyectos/     # Entradas en Markdown (.md) y portadas para los Proyectos
│   ├── content.config.ts  # Configuración y validación de esquemas (Zod) de las colecciones
│   ├── layouts/           # Estructura base HTML y meta etiquetas
│   ├── pages/             # Páginas y enrutamiento dinámico (/proyectos/[slug].astro)
│   └── styles/            # Estilos globales (global.css) con variables CSS
└── README.md
```

## 📬 Contacto

- **LinkedIn:** [Adriel Agustín Montes](https://www.linkedin.com/in/adriel-agustin-montes/)

---

Desarrollado por Adriel Montes.
