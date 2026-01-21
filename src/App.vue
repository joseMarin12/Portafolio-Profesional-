<template>
    <div class="min-h-screen bg-[#0a0a0a] text-white">
      <nav 
        :class="[
          'fixed top-0 w-full z-50 transition-all duration-300 border-b',
          isScrolled 
            ? 'py-3 bg-black/80 backdrop-blur-md border-white/10' 
            : 'py-5 bg-transparent border-transparent'
        ]"
      >
        <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div class="text-2xl font-black tracking-tighter">
            <span class="text-white">J</span>
            <span class="text-blue-500">M</span>
            <span class="text-blue-500">.</span>
          </div>
  
          <div class="hidden md:flex items-center gap-10">
            <a 
              v-for="link in navLinks" 
              :key="link.id"
              :href="link.href" 
              class="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              {{ link.label }}
              <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
  
          <div class="hidden md:block">
            <a 
              href="#contact" 
              class="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Contrátame
            </a>
          </div>
  
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden p-2 text-gray-400">
            <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
  
        <transition 
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-10"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-10"
        >
          <div v-if="isMobileMenuOpen" class="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden">
            <div class="flex flex-col p-6 gap-6">
              <a 
                v-for="link in navLinks" 
                :key="link.id" 
                :href="link.href"
                @click="isMobileMenuOpen = false"
                class="text-lg font-medium text-gray-300 hover:text-blue-500"
              >
                {{ link.label }}
              </a>
              <a 
                href="#contact"
                @click="isMobileMenuOpen = false"
                class="w-full py-4 bg-blue-600 text-center font-bold rounded-xl"
              >
                Contrátame
              </a>
            </div>
          </div>
        </transition>
      </nav>
  
      <main class="pt-20">
        <HeroSection id="hero" />
        <AboutSection id="about" />
        <ProjectsSection id="projects" />
        <TechStackSection id="tech" />
        <ContactSection id="contact" />
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import HeroSection from './components/HeroSection.vue'
  import AboutSection from './components/AboutSection.vue'
  import ProjectsSection from './components/ProjectsSection.vue'
  import TechStackSection from './components/TechStackSection.vue'
  import ContactSection from './components/ContactSection.vue'
  
  const isScrolled = ref(false)
  const isMobileMenuOpen = ref(false)
  
  const navLinks = ref([
    { id: 1, label: 'Inicio', href: '#hero' },
    { id: 2, label: 'Sobre Mí', href: '#about' },
    { id: 3, label: 'Proyectos', href: '#projects' },
    { id: 4, label: 'Stack', href: '#tech' },
    { id: 5, label: 'Contacto', href: '#contact' },
  ])
  
  // Detectar el scroll para efectos visuales
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  
  <style scoped>
  /* Animación suave para el anclaje de scroll */
  html {
    scroll-behavior: smooth;
  }
  </style>