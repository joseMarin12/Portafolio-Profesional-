<template>
  <section 
    id="hero" 
    class="min-h-screen flex items-center justify-center section-padding pt-32 pb-16"
    ref="heroRef"
  >
    <div class="container-custom text-center">
      <!-- Saludo -->
      <p 
        class="text-electric-blue text-lg sm:text-xl mb-4 animate-on-scroll"
        :class="{ visible: isVisible }"
      >
        ¡Hola! Soy
      </p>
      
      <!-- Nombre -->
      <h1 
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-on-scroll delay-100"
        :class="{ visible: isVisible }"
      >
        <span class="text-white">José Gregorio</span>
        <br />
        <span class="text-gradient">Marín</span>
      </h1>
      
      <!-- Rol -->
      <h2 
        class="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-8 font-light animate-on-scroll delay-200"
        :class="{ visible: isVisible }"
      >
      Desarrollador de software
      </h2>
      
      <!-- Propuesta de valor -->
      <p 
        class="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed animate-on-scroll delay-300"
        :class="{ visible: isVisible }"
      >
        Transformando ideas en soluciones digitales innovadoras.
        <br class="hidden sm:block" />
        Apasionado por crear experiencias que marquen la diferencia.
      </p>
      
      <!-- CTAs -->
      <div 
        class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-scroll delay-400"
        :class="{ visible: isVisible }"
      >
        <a 
          href="#projects"
          class="px-8 py-4 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-electric-blue/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-electric-blue/50"
        >
          Ver Proyectos
        </a>
        <a 
          href="#contact"
          class="px-8 py-4 glass-effect border border-electric-blue/50 text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-all duration-300 hover:scale-105"
        >
          Contactar
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const heroRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  // Animación de entrada automática
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<style scoped>
.delay-100 {
  transition-delay: 0.1s;
}

.delay-200 {
  transition-delay: 0.2s;
}

.delay-300 {
  transition-delay: 0.3s;
}

.delay-400 {
  transition-delay: 0.4s;
}
</style>





