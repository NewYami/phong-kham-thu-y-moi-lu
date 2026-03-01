<script setup>
import { Stethoscope } from 'lucide-vue-next';
</script>

<template>
  <footer class="bg-stone-950 py-12 border-t border-stone-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
      
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-[#9B2C2C] rounded-xl flex items-center justify-center text-white">
          <Stethoscope :size="20" />
        </div>
        <span class="font-black text-white tracking-tighter uppercase">Moi.Lu Vet</span>
      </div>

      <div class="flex gap-8 text-stone-500 text-sm font-bold uppercase tracking-widest">
        <a href="#services" class="hover:text-white transition-colors">Dịch vụ</a>
        <a href="#gallery" class="hover:text-white transition-colors">Hình ảnh</a>
        <a href="#contact" class="hover:text-white transition-colors">Liên hệ</a>
      </div>

      <p class="text-stone-600 text-xs font-bold uppercase tracking-widest">
        © {{ new Date().getFullYear() }} Moi.Lu Vet. Crafted with Love.
      </p>
      
    </div>
  </footer>
</template>

<style scoped>
</style>