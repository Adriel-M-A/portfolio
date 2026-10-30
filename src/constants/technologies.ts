/**
 * Listado de tecnologías ordenadas por frecuencia de uso en los proyectos.
 */
export const TOP_TECHNOLOGIES = [
  "TypeScript",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "SQLite",
  "Rust",
  "Tauri",
  "Python",
  "C#",
  "PostgreSQL",
  "Vite",
  "WinForms",
  "Electron",
  "Recharts",
  "Zustand",
  "Zod",
  "Flet",
  "shadcn/ui",
  "React Hook Form",
  "jsPDF",
  "Visual Studio",
  "cliente-servidor",
  "Excel",
  "Macros",
  "CSS",
  "Chrome Extension (Manifest V3)",
] as const;

/**
 * Tecnologías agrupadas por categoría y ordenadas por frecuencia en cada una.
 */
export const TECHNOLOGIES_BY_CATEGORY = {
  frontend: [
    "TypeScript",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "shadcn/ui",
    "Zustand",
    "React Hook Form",
    "Zod",
    "Recharts",
    "WinForms",
    "Flet",
    "jsPDF",
    "CSS",
  ],
  backend: [
    "Rust",
    "Python",
    "C#",
    "PostgreSQL",
    "SQLite",
  ],
  herramientas: [
    "Tauri",
    "Electron",
    "Vite",
    "Git / GitHub",
    "Visual Studio",
    "cliente-servidor",
    "Chrome Extension (Manifest V3)",
    "Excel / Macros",
  ],
} as const;
