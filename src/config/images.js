/**
 * ============================================
 * CONFIGURACIÓN DE IMÁGENES - ICONOS
 * ============================================
 *
 * Fuentes de logos de marca:
 *   - devicon      https://devicon.dev
 *   - simple icons https://simpleicons.org  (acepta /{slug}/{hex} para forzar color)
 *
 * Importante: sobre el fondo oscuro hay logos que vienen en negro puro
 * (Express, GitHub). Para esos se usa simple icons en blanco.
 *
 * Las skills que no tienen logo oficial de marca (Arquitectura RESTful,
 * Fetch API, Inteligencia Artificial, Docker Compose) se generan como SVG
 * inline en data URI: nunca dan 404 y toman el color de acento del sitio.
 */

const ACCENT = '#00D4FF'

const inlineIcon = (body) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" ` +
      `stroke="${ACCENT}" stroke-width="1.75" stroke-linecap="round" ` +
      `stroke-linejoin="round">${body}</svg>`
  )}`

export const techImages = {
  // Lenguajes de programación
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',

  // Backend
  'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  // El express-original de devicon es negro puro: invisible sobre el fondo oscuro
  'Express.js': 'https://cdn.simpleicons.org/express/FFFFFF',
  'Arquitectura RESTful': inlineIcon(
    '<circle cx="12" cy="12" r="3"/>' +
      '<circle cx="4" cy="5" r="2"/><circle cx="20" cy="5" r="2"/>' +
      '<circle cx="4" cy="19" r="2"/><circle cx="20" cy="19" r="2"/>' +
      '<path d="M6 6.5 9.8 10M18 6.5 14.2 10M6 17.5 9.8 14M18 17.5 14.2 14"/>'
  ),

  // Frontend
  'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Fetch API': inlineIcon(
    '<path d="M3 8h13"/><path d="m12 4 4 4-4 4"/>' +
      '<path d="M21 16H8"/><path d="m12 12-4 4 4 4"/>'
  ),

  // Bases de datos
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'pgAdmin': 'https://cdn.jsdelivr.net/gh/pgadmin-org/pgadmin4/web/pgadmin/static/img/logo-256.png',

  // Automatización & IA
  'n8n': 'https://cdn.simpleicons.org/n8n/EA4B71',
  'Inteligencia Artificial': inlineIcon(
    '<rect x="6" y="6" width="12" height="12" rx="2.5"/>' +
      '<rect x="10" y="10" width="4" height="4" rx="1"/>' +
      '<path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/>'
  ),

  // Infraestructura & DevOps
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Docker Compose': inlineIcon(
    '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16.5 9 5 9-5"/>'
  ),

  // Control de versiones
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  // El github-original de devicon es #181717: invisible sobre el fondo oscuro
  'GitHub': 'https://cdn.simpleicons.org/github/FFFFFF',
}

export const contactImages = {
  'LinkedIn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',

  // Mismo motivo que en techImages: la versión de devicon es casi negra
  'GitHub': 'https://cdn.simpleicons.org/github/FFFFFF',

  'Phone': 'https://cdn-icons-png.flaticon.com/512/724/724664.png',
}
