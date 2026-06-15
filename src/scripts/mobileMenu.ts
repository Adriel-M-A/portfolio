/**
 * Indica si los escuchadores de eventos globales para el menú móvil ya fueron registrados
 * en el documento actual. Evita duplicidad de escuchadores en navegaciones SPA/HMR.
 */
let listenersAdded = false;

/**
 * Desliza y muestra el panel del menú móvil agregando clases de animación,
 * actualiza los atributos de accesibilidad y deshabilita el scroll del cuerpo de la página.
 */
function openMenu(): void {
  const btn = document.getElementById('mobile-menu-btn');
  const overlay = document.getElementById('mobile-menu-overlay');
  if (!btn || !overlay) return;

  overlay.classList.remove('pointer-events-none');
  overlay.classList.add('pointer-events-auto');
  overlay.querySelector('[data-menu-panel]')?.classList.remove('translate-x-full');
  overlay.querySelector('[data-menu-panel]')?.classList.add('translate-x-0');
  overlay.querySelector('[data-menu-backdrop]')?.classList.remove('opacity-0');
  overlay.querySelector('[data-menu-backdrop]')?.classList.add('opacity-100');
  overlay.setAttribute('aria-hidden', 'false');
  btn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

/**
 * Contrae y oculta el panel del menú móvil mediante clases de transición CSS,
 * restaura el scroll de la página y deshabilita la interacción con el overlay una vez
 * finalizada la animación de salida.
 */
function closeMenu(): void {
  const btn = document.getElementById('mobile-menu-btn');
  const overlay = document.getElementById('mobile-menu-overlay');
  if (!btn || !overlay) return;

  overlay.querySelector('[data-menu-panel]')?.classList.remove('translate-x-0');
  overlay.querySelector('[data-menu-panel]')?.classList.add('translate-x-full');
  overlay.querySelector('[data-menu-backdrop]')?.classList.remove('opacity-100');
  overlay.querySelector('[data-menu-backdrop]')?.classList.add('opacity-0');
  overlay.setAttribute('aria-hidden', 'true');
  btn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';

  // Deshabilitar pointer-events después de la animación de cierre (300ms)
  setTimeout(() => {
    const overlay2 = document.getElementById('mobile-menu-overlay');
    if (overlay2) {
      overlay2.classList.remove('pointer-events-auto');
      overlay2.classList.add('pointer-events-none');
    }
  }, 300);
}

/**
 * Inicializa los controladores de eventos globales en el `document` para manejar
 * la interacción interactiva (clicks y presionar Escape) asociada con el menú móvil.
 * Esta función es segura para invocarse múltiples veces ya que cuenta con un control de ejecución.
 */
export function initMobileMenu(): void {
  if (listenersAdded) return;

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    // Abrir menú al hacer click en el botón de hamburguesa
    if (target.closest('#mobile-menu-btn')) {
      openMenu();
      return;
    }

    // Cerrar menú con el botón de cerrar
    if (target.closest('#mobile-menu-close')) {
      closeMenu();
      return;
    }

    // Cerrar menú haciendo click en el backdrop oscuro
    if (target.closest('[data-menu-backdrop]')) {
      closeMenu();
      return;
    }

    // Cerrar menú al hacer click en un enlace de navegación
    if (target.closest('#mobile-menu-overlay nav a')) {
      const link = target.closest('#mobile-menu-overlay nav a') as HTMLAnchorElement | null;
      const href = link?.getAttribute('href');

      if (href) {
        e.preventDefault();
        closeMenu();

        setTimeout(() => {
          import('astro:transitions/client')
            .then(({ navigate }) => {
              navigate(href);
            })
            .catch(() => {
              window.location.href = href;
            });
        }, 300);
      } else {
        closeMenu();
      }
    }
  });

  // Cerrar menú al presionar la tecla Escape si se encuentra desplegado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const btn = document.getElementById('mobile-menu-btn');
      if (btn && btn.getAttribute('aria-expanded') === 'true') {
        closeMenu();
      }
    }
  });

  listenersAdded = true;
}
