<template>
  <section 
    id="tech" 
    class="section-padding bg-dark-surface/20"
    ref="techRef"
  >
    <div class="container-custom">
      <!-- Título de sección -->
      <h2 
        class="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center animate-on-scroll"
        :class="{ visible: isVisible }"
      >
        <span class="text-white">Stack </span>
        <span class="text-gradient">Tecnológico</span>
      </h2>
      
      <!-- Grid de tecnologías: 4 columnas x 3 filas -->
      <div 
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto"
        :class="{ 'animate-on-scroll': isVisible, visible: isVisible }"
      >
        <TechCard
          v-for="(tech, index) in technologies"
          :key="tech.name"
          :tech="tech"
          :index="index"
          :is-visible="isVisible"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TechCard from './TechCard.vue'
import { techImages } from '../config/images.js'

const techRef = ref(null)
const isVisible = ref(false)
let observer = null

const technologies = ref([
  // Lenguajes de programación
  { name: 'JavaScript', imageUrl: techImages['JavaScript'] },
  { name: 'Python', imageUrl: techImages['Python'] },
  
  // Backend
  { name: 'Node.js', imageUrl: techImages['Node.js'] },
  { name: 'Express.js', imageUrl: techImages['Express.js'] },
  { name: 'REST API', imageUrl: techImages['REST API'] },
  
  // Bases de datos
  { name: 'MongoDB', imageUrl: techImages['MongoDB'] },

  
  // Frontend
  { name: 'HTML5', imageUrl: techImages['HTML5'] },
  { name: 'CSS3', imageUrl: techImages['CSS3'] },
  { name: 'Vue.js', imageUrl: techImages['Vue.js'] },
  { name: 'Tailwind CSS', imageUrl: techImages['Tailwind CSS'] },
  
  // Control de versiones
  { name: 'Git', imageUrl: techImages['Git'] },
  { name: 'GitHub', imageUrl: techImages['GitHub'] },
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
  
  if (techRef.value) {
    observer.observe(techRef.value)
  }
})

onUnmounted(() => {
  if (observer && techRef.value) {
    observer.unobserve(techRef.value)
  }
})
</script>

