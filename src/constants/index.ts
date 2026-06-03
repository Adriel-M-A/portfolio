/**
 * Información personal centralizada del autor del portafolio.
 * Se utiliza para evitar la repetición de textos duros en componentes y páginas.
 */
export const PERSONAL_INFO = {
  /** Nombre de pila */
  firstName: "Adriel",
  /** Apellido */
  lastName: "Montes",
  /** Nombre completo habitual */
  fullName: "Adriel Montes",
  /** Nombre completo formal / legal */
  legalName: "Adriel Agustín Montes",
  /** Cargo o título profesional principal */
  jobTitle: "Analista Programador Universitario",
  /** Dirección de correo electrónico de contacto */
  email: "adriel.agustin.montes@gmail.com",
  /** Información geográfica */
  location: {
    city: "Trelew",
    state: "Chubut",
    country: "Argentina",
    countryCode: "AR",
    /** Ubicación abreviada estándar */
    full: "Chubut, Argentina",
    /** Ubicación completa y detallada */
    detailed: "Trelew, Chubut, Argentina"
  },
  /** Perfil oficial de GitHub */
  github: "https://github.com/Adriel-M-A",
  /** Perfil oficial de LinkedIn */
  linkedin: "https://www.linkedin.com/in/adriel-agustin-montes-66460b202/",
  /** Dominio de producción del portafolio */
  domain: "https://adrielmontes.dev",
} as const;
