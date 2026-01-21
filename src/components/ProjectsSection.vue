<template>
  <section 
    id="projects" 
    class="section-padding"
    ref="projectsRef"
  >
    <div class="container-custom">
      <!-- Título de sección -->
      <h2 
        class="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center animate-on-scroll"
        :class="{ visible: isVisible }"
      >
        <span class="text-white">Mis </span>
        <span class="text-gradient">Proyectos</span>
      </h2>
      
      <!-- Bento Grid -->
      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        :class="{ 'animate-on-scroll': isVisible, visible: isVisible }"
      >
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :index="index"
          :is-visible="isVisible"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ProjectCard from './ProjectCard.vue'

const projectsRef = ref(null)
const isVisible = ref(false)
let observer = null

const projects = ref([
  {
    id: 1,
    title: 'POKÉMON APP',
    description: 'Aplicación tipo Pokedex desarrollada con un diseño limpio y llamativo. Integra una API para consultar Pokémon por nombre o número, mostrando sus estadísticas e información relevante mediante una interfaz clara y responsiva.',
    // tags: ['Vue 3', 'JavaScript', 'HTML', 'CSS'],
    demo: 'https://glowing-semolina-a8c978.netlify.app/',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'JUEGO DEL AHORCADO',
    description: 'Proyecto interactivo del Juego del Ahorcado que incluye selección de personajes y múltiples modos de juego. Su interfaz clara y amigable ofrece una experiencia variada, combinando entretenimiento y diseño intuitivo.',
    // tags: ['Vue 3', 'Express', 'Socket.io', 'PostgreSQL'],
    demo: 'https://juego-del-ahorcado-sena.netlify.app/',
    github: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'VETERINARIA',
    description: 'Aplicación web orientada al dueño de una veterinaria, diseñada para facilitar la gestión interna del negocio. Permite programar, editar y administrar citas según la disponibilidad y las necesidades de los clientes',
    // tags: ['Vue 3', 'Nuxt.js', 'Strapi', 'GraphQL'],
    demo: 'https://splendorous-froyo-f23d9a.netlify.app/',
    github: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'ALPINE',
    description: 'Página estática diseñada para una tienda con estilo moderno y minimalista. Presenta una composición limpia que transmite elegancia, resaltando los productos a través de una estética cuidada y armoniosa',
    // tags: ['Vue 3', 'OpenWeather API', 'Leaflet', 'PWA'],
    demo: 'https://lovely-pixie-f7b487.netlify.app/',
    github: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'DIÁLOGO ENTRE EXPERTOS',
    description: 'Aplicación de debate entre inteligencias artificiales basada en la pregunta del usuario. El sistema genera una conversación entre una IA con perspectiva religiosa y otra con postura atea, ofreciendo un intercambio de ideas estructurado y contrastado',
    // tags: ['Vue 3', 'D3.js', 'Node.js', 'MongoDB'],
    demo: 'https://starlit-faloodeh-369634.netlify.app/',
    github: '#',
    featured: true,
  },
  {
    id: 6,
    title: 'RESTAURANTE',
    description: 'Plataforma de administración para restaurantes que facilita el control completo de las mesas. Permite registrar, identificar y gestionar el estado de cada una, optimizando la organización del personal y mejorando la atención al cliente.',
    // tags: ['Vue 3', 'Firebase', 'Chart.js', 'PWA'],
    demo: 'https://mis-proyectos-sena.netlify.app/indexrestaurante',
    github: '#',
    featured: true,
  },
])

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    { threshold: 0.1 }
  )
  
  if (projectsRef.value) {
    observer.observe(projectsRef.value)
  }
})

onUnmounted(() => {
  if (observer && projectsRef.value) {
    observer.unobserve(projectsRef.value)
  }
})
</script>

