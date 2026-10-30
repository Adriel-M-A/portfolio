/**
 * Listado de tecnologías ordenadas por frecuencia de uso en los proyectos.
 */
export const TOP_TECHNOLOGIES = [
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Python",
  "C#",
  "PostgreSQL",
  "SQLite",
  "SQL",
  "Electron",
  "WinForms",
  "Vite",
  "Flet",
  "shadcn/ui",
  "Recharts",
  "Zustand",
  "React Hook Form",
  "Zod",
  "Tauri",
  "Rust",
  "Visual Studio",
  "cliente-servidor",
  "jsPDF",
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
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "shadcn/ui",
    "Recharts",
    "WinForms",
    "Flet",
    "Zustand",
    "React Hook Form",
    "Zod",
    "jsPDF",
    "CSS",
  ],
  backend: [
    "Python",
    "C#",
    "PostgreSQL",
    "SQLite",
    "SQL",
    "Rust",
  ],
  herramientas: [
    "Git / GitHub",
    "Visual Studio",
    "Electron",
    "Vite",
    "cliente-servidor",
    "Excel / Macros",
    "Chrome Extension (Manifest V3)",
    "Tauri",
  ],
} as const;
