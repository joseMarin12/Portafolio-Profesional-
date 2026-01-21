# Portafolio Profesional - José Gregorio Marín

Portafolio profesional desarrollado con Vue 3 (Composition API) y Tailwind CSS. Diseño minimalista, elegante y premium con efectos glassmorphism y animaciones suaves.

## 🚀 Características

- ✨ Diseño minimalista y premium
- 🎨 Paleta de colores sofisticada (fondo oscuro con acentos en azul eléctrico)
- 📱 100% Responsive (Mobile-First)
- 🌈 Efectos Glassmorphism
- ⚡ Animaciones suaves al hacer scroll
- 🎯 Bento Grid para proyectos
- 🔧 Stack tecnológico visual

## 🛠️ Tecnologías

- **Vue 3** - Composition API
- **Tailwind CSS** - Estilos utilitarios
- **Vite** - Build tool
- **JavaScript ES6+** - Lógica

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Construye para producción:
```bash
npm run build
```

4. Preview de la build de producción:
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
portafolio-profesional/
├── src/
│   ├── components/
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── ProjectCard.vue
│   │   ├── TechStackSection.vue
│   │   ├── TechCard.vue
│   │   └── ContactSection.vue
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Personalización

### Colores

Los colores pueden personalizarse en `tailwind.config.js`:

- `electric-blue`: #00D4FF
- `deep-purple`: #8B5CF6
- `dark-bg`: #0A0A0F
- `dark-surface`: #14141F

### Proyectos

Edita los proyectos en `src/components/ProjectsSection.vue` en el array `projects`.

### Enlaces de Contacto

Actualiza los enlaces de contacto en `src/components/ContactSection.vue` en el array `contactLinks`.

### Imágenes (URLs Externas)

Todas las imágenes se manejan mediante URLs externas. Edita `src/config/images.js` para actualizar las URLs de:
- **Tecnologías**: Iconos del stack tecnológico
- **Contacto**: Iconos de LinkedIn, GitHub, teléfono

Ejemplo:
```javascript
'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
'LinkedIn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
```

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

---

Desarrollado con ❤️ por José Gregorio Marín

