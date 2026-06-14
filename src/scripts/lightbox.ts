import PhotoSwipeLightbox from 'photoswipe/lightbox';

/**
 * Inicializa el comportamiento interactivo de la galería de imágenes (Lightbox) en el detalle de proyectos.
 * Utiliza PhotoSwipe para dar soporte táctil completo, paneo y zoom en móviles y computadoras.
 */
export function initLightbox(): void {
  const lightbox = new PhotoSwipeLightbox({
    gallery: '#project-gallery-group',
    children: 'a[data-pswp-width]',
    pswpModule: () => import('photoswipe'),
  });
  lightbox.init();
}
