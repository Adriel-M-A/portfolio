/**
 * Listado de tecnologías ordenadas por frecuencia de uso en los proyectos.
 */
export const TOP_TECHNOLOGIES = [
  "JavaScript",
  "React",
  "Tailwind CSS",
  "SQLite",
  "Rust",
  "Tauri",
  "Vite",
  "Recharts",
  "C#",
  "WinForms",
  "PostgreSQL",
  "Visual Studio",
  "cliente-servidor",
  "Flet",
  "Python",
  "Excel",
  "Macros",
  "shadcn/ui",
  "Electron",
  "Zustand",
  "React Hook Form",
  "Zod",
  "jsPDF",
  "CSS",
  "Chrome Extension (Manifest V3)",
] as const;

/**
 * Tecnologías agrupadas por categoría y ordenadas por frecuencia en cada una.
 */
export const TECHNOLOGIES_BY_CATEGORY = {
  frontend: [
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Recharts",
    "C#",
    "WinForms",
    "Flet",
    "shadcn/ui",
    "Zustand",
    "React Hook Form",
    "Zod",
    "jsPDF",
    "CSS",
  ],
  backend: [
    "SQLite",
    "Rust",
    "PostgreSQL",
    "Python",
  ],
  herramientas: [
    "Tauri",
    "Vite",
    "Visual Studio",
    "cliente-servidor",
    "Excel",
    "Macros",
    "Electron",
    "Chrome Extension (Manifest V3)",
  ],
} as const;
