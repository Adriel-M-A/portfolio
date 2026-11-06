import PhotoSwipeLightbox from 'photoswipe/lightbox';

let lightboxInstance: PhotoSwipeLightbox | null = null;
let listenerRegistered = false;

/**
 * Monta o actualiza la instancia de PhotoSwipe sobre la galería activa en el DOM,
 * liberando cualquier instancia previa para evitar fugas de memoria entre navegaciones SPA.
 */
function mountLightbox(): void {
  if (lightboxInstance) {
    lightboxInstance.destroy();
    lightboxInstance = null;
  }

  const galleryEl = document.getElementById('project-gallery-group');
  if (!galleryEl) return;

  lightboxInstance = new PhotoSwipeLightbox({
    gallery: '#project-gallery-group',
    children: 'a[data-pswp-width]',
    pswpModule: () => import('photoswipe'),
  });
  lightboxInstance.init();
}

/**
 * Inicializa el comportamiento interactivo de la galería de imágenes (Lightbox) en el detalle de proyectos.
 * Utiliza PhotoSwipe para dar soporte táctil completo, paneo y zoom en móviles y computadoras.
 */
export function initLightbox(): void {
  if (listenerRegistered) return;
  document.addEventListener('astro:page-load', mountLightbox);
  listenerRegistered = true;
}
