<template>
  <section 
    id="contact" 
    class="section-padding"
    ref="contactRef"
  >
    <div class="container-custom">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Título de sección -->
        <h2 
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-on-scroll"
          :class="{ visible: isVisible }"
        >
          <span class="text-white">Contacto</span>
        </h2>
        
        <!-- Descripción -->
        <p 
          class="text-gray-400 text-lg sm:text-xl mb-12 animate-on-scroll delay-200"
          :class="{ visible: isVisible }"
        >
          ¿Tienes un proyecto en mente? ¡Me encantaría escucharlo!
        </p>
        
        <!-- Enlaces de contacto -->
        <div 
          class="flex flex-wrap justify-center gap-6 sm:gap-8 animate-on-scroll delay-400"
          :class="{ visible: isVisible }"
        >
          <a
            v-for="link in contactLinks"
            :key="link.id"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="glass-card px-8 py-4 flex items-center gap-3 hover-glow group transition-all duration-300 hover:scale-105 hover:border-electric-blue/50"
          >
            <!-- Imagen del icono -->
            <img
              :src="link.imageUrl"
              :alt="`${link.label} icon`"
              class="w-6 h-6 object-contain"
              @error="handleImageError"
            />
            <span class="text-white font-semibold group-hover:text-electric-blue transition-colors">
              {{ link.label }}
            </span>
          </a>
        </div>
        
        <!-- Email directo -->
        <div 
          class="mt-12 animate-on-scroll delay-600"
          :class="{ visible: isVisible }"
        >
          <a
            class="inline-block text-electric-blue text-lg sm:text-xl hover:text-electric-blue/80 transition-colors font-semibold"
          >
            josegregoriomarin22@gmail.com
          </a>
          <div class="flex items-center justify-center gap-2 mt-2">
            <img
              :src="phoneImageUrl"
              alt="Phone icon"
              class="w-5 h-5 object-contain"
              @error="handlePhoneImageError"
            />
            <p class="text-gray-400 text-sm sm:text-base">3216398873 - Colombia</p>
          </div> 
        </div>
      </div>
      
      <!-- Footer -->
      <footer class="mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; {{ currentYear }} José Gregorio Marín. Todos los derechos reservados.</p>
      </footer>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { contactImages } from '../config/images.js'

const contactRef = ref(null)
const isVisible = ref(false)
let observer = null

const currentYear = computed(() => new Date().getFullYear())

// ⚠️ IMPORTANTE: Actualiza las URLs en src/config/images.js
const contactLinks = ref([
  {
    id: 1,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jose-gregorio-marin-calderon-8710803a3',
    imageUrl: contactImages['LinkedIn'], // URL configurada en src/config/images.js
  },
  {
    id: 2,
    label: 'GitHub',
    url: 'https://github.com/joseMarin12',
    imageUrl: contactImages['GitHub'], // URL configurada en src/config/images.js
  },
])

// URL de imagen para teléfono
const phoneImageUrl = contactImages['Phone'] // URL configurada en src/config/images.js

// Manejo de errores de carga de imágenes
const handleImageError = (event) => {
  event.target.style.display = 'none'
  console.warn('No se pudo cargar la imagen de contacto')
}

const handlePhoneImageError = (event) => {
  event.target.style.display = 'none'
  console.warn('No se pudo cargar la imagen de teléfono')
}

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
  
  if (contactRef.value) {
    observer.observe(contactRef.value)
  }
})

onUnmounted(() => {
  if (observer && contactRef.value) {
    observer.unobserve(contactRef.value)
  }
})
</script>

<style scoped>
.delay-200 {
  transition-delay: 0.2s;
}

.delay-400 {
  transition-delay: 0.4s;
}

.delay-600 {
  transition-delay: 0.6s;
}
</style>

