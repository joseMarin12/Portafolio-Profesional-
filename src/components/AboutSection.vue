<template>
  <section 
    id="about" 
    class="section-padding bg-dark-surface/20"
    ref="aboutRef"
  >
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <!-- Título de sección -->
        <h2 
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center animate-on-scroll"
          :class="{ visible: isVisible }"
        >
          <span class="text-white">Sobre </span>
          <span class="text-gradient">Mí</span>
        </h2>
        
        <!-- Contenido -->
        <div 
          class="glass-card p-8 sm:p-12 space-y-6 animate-on-scroll delay-200"
          :class="{ visible: isVisible }"
        >
          <p class="text-gray-300 text-lg sm:text-xl leading-relaxed">
            Soy un <span class="text-electric-blue font-semibold">Tecnólogo en Análisis y Desarrollo de Software</span> en formación por el SENA, con un enfoque integral que combina la lógica robusta con la creatividad en el diseño de soluciones
          </p>
          
          <p class="text-gray-400 text-base sm:text-lg leading-relaxed">
            Me distingo por una mentalidad de aprendizaje continuo y la capacidad de transformar problemas complejos en aplicaciones funcionales y centradas en el usuario.          </p>
          
          <p class="text-gray-400 text-base sm:text-lg leading-relaxed">
            Mi motor es la curiosidad técnica, lo que me permite adaptarme rápidamente a nuevas tecnologías y metodologías para aportar valor real en proyectos de impacto positivo.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const aboutRef = ref(null)
const isVisible = ref(false)
let observer = null

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
  
  if (aboutRef.value) {
    observer.observe(aboutRef.value)
  }
})

onUnmounted(() => {
  if (observer && aboutRef.value) {
    observer.unobserve(aboutRef.value)
  }
})
</script>

<style scoped>
.delay-200 {
  transition-delay: 0.2s;
}
</style>

