/**
 * Inicializa el comportamiento interactivo de la galería de imágenes (Lightbox) en el detalle de proyectos.
 * Busca un elemento `<dialog id="lightbox">`, un contenedor de imagen `<img id="lightbox-img">` y
 * asocia eventos de click a cualquier imagen con la clase `.zoomable-image` para abrir el modal
 * maximizado. También gestiona el cierre al presionar la tecla Escape, click en el backdrop o botón de cerrar.
 */
export function initLightbox(): void {
  const lightbox = document.getElementById('lightbox') as HTMLDialogElement | null;
  const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement | null;
  const closeBtn = document.getElementById('close-lightbox');
  const zoomableImages = document.querySelectorAll('.zoomable-image');

  if (!lightbox || !lightboxImg) return;

  // Asocia el evento de click a todas las imágenes con capacidad de zoom para abrir el Lightbox
  zoomableImages.forEach((img) => {
    img.addEventListener('click', (e) => {
      const target = e.target as HTMLImageElement;
      // Aprovechar la propiedad src optimizada de Astro (currentSrc) o el src original
      lightboxImg.src = target.currentSrc || target.src;
      lightboxImg.alt = target.alt || '';
      lightbox.showModal();
      document.body.style.overflow = 'hidden'; // Evitar scroll del contenido de fondo
    });
  });

  /**
   * Cierra el modal de Lightbox y restaura el scroll en el cuerpo del documento.
   */
  const closeLightbox = (): void => {
    lightbox.close();
    document.body.style.overflow = ''; // Restaurar scroll
  };

  closeBtn?.addEventListener('click', closeLightbox);

  // Cerrar al hacer click directamente en el backdrop oscuro exterior al contenedor de la imagen
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Escucha el evento de cierre (gatillado también por Escape) para restaurar el comportamiento de scroll
  lightbox.addEventListener('close', () => {
    document.body.style.overflow = '';
  });
}
