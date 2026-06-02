# Portfolio Personal | Adriel Montes

Bienvenido al repositorio de mi portafolio personal. Este proyecto fue desarrollado para mostrar mi experiencia, habilidades y proyectos destacados como Analista Programador Universitario.

## 🚀 Tecnologías Principales

Este proyecto está construido con herramientas modernas enfocadas en el rendimiento, el diseño y la experiencia de desarrollo:

- **[Astro 5](https://astro.build/)**: Framework web para generar sitios estáticos ultrarrápidos (SSG).
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
│   │   ├── proyectos/     # Entradas en Markdown (.md) y portadas para los Proyectos
│   │   └── config.js      # Definición de schemas (Zod) para las colecciones
│   ├── layouts/           # Estructura base HTML y meta etiquetas
│   ├── pages/             # Páginas y enrutamiento dinámico (/proyectos/[slug].astro)
│   └── styles/            # Estilos globales (global.css) con variables CSS
└── README.md
```

## 🛠️ Instalación y Uso

Si querés clonar este proyecto para verlo localmente, seguí estos pasos:

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Adriel-M-A/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias:**

   ```bash
   pnpm install
   ```

3. **Ejecutar el servidor de desarrollo:**

   ```bash
   pnpm dev
   ```

   _El servidor se iniciará en `http://localhost:4321/`_

4. **Compilar para producción:**
   ```bash
   pnpm build
   ```
   _Los archivos estáticos optimizados se generarán en la carpeta `./dist/`._

## 🎨 Características del Diseño

- **Minimalismo y Dark Mode:** Estilo enfocado en el contenido usando una paleta monocromática con un fondo oscuro y un alto contraste para la legibilidad.
- **Responsive Design:** Interfaces que se adaptan a cualquier tamaño de pantalla, con menús de navegación especiales para dispositivos móviles.
- **Rendimiento:** Al ser un sitio estático generado por Astro, el envío de JavaScript al cliente es casi nulo, logrando métricas perfectas de Lighthouse.

## 📬 Contacto

- **Ubicación:** Trelew, Chubut, Argentina
- **LinkedIn:** [Adriel Agustín Montes](https://www.linkedin.com/in/adriel-agustin-montes-66460b202/)
- **Email:** adriel.agustin.montes@gmail.com

---

Desarrollado por Adriel Montes.
