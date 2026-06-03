/**
 * Diccionario indexado de resolvedores de importación dinámica para imágenes de proyectos.
 * Utiliza la directiva glob de Vite para encontrar recursos estáticos de proyectos.
 */
const images = import.meta.glob('/src/content/proyectos/**/*.{jpeg,jpg,png,gif,webp}');

/**
 * Resuelve asincrónicamente el módulo de imagen correspondiente a un proyecto y su ruta relativa.
 * Esto permite el procesamiento dinámico y optimizado de portadas y capturas de pantalla de proyectos
 * por parte del componente `<Image>` de Astro sin requerir importaciones relativas estáticas redundantes.
 *
 * @param projectId - Identificador único del proyecto (coincide con el nombre de su directorio).
 * @param imagePath - Ruta de la imagen provista en el frontmatter del proyecto (ej: "./cover.webp").
 * @returns Una promesa que resuelve con el objeto metadata de la imagen optimizada de Astro, o null si no se encuentra.
 */
export async function resolveProjectImage(projectId: string, imagePath: string): Promise<any> {
  if (!imagePath) return null;
  
  // Limpiar './' de la ruta relativa si existe para normalizar la clave de búsqueda
  const cleanPath = imagePath.replace(/^\.\/?/, '');
  
  // Ruta absoluta en base al root de Vite para que coincida con las claves del glob
  const fullPath = `/src/content/proyectos/${projectId}/${cleanPath}`;
  
  const resolver = images[fullPath];
  if (!resolver) {
    return null;
  }
  
  const module = await resolver() as { default: any };
  return module.default;
}
