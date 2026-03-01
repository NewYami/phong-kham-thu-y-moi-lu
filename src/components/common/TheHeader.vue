<script setup>
import { Phone } from 'lucide-vue-next';
const menuItems = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Dịch vụ', href: '/#services' },
  { name: 'Khoản khắc', href: '/#gallery'},
  { name: 'Liên hệ', href: '/#contact' },
  { name: 'Cửa hàng', href: '/shop' },
];
</script>
<template>
  <header>
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div class="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center flex-nowrap">
        <div class="flex items-center gap-3 shrink-0">
          <img 
            src="../../assets/img/homeLogo.avif" 
            alt="Logo" 
            class="w-12 h-12 rounded-full object-cover border-2 border-[#9B2C2C]"
          />
          <div class="hidden sm:flex flex-col">
            <span class="font-bold text-lg tracking-tighter text-stone-800 leading-none">Moi.Lu</span>
            <span class="text-[10px] uppercase text-stone-500 font-medium">Phòng Khám Thú Y</span>
          </div>
        </div>

        <ul class="flex items-center gap-4 lg:gap-8 mx-4">
          <li v-for="item in menuItems" :key="item.name">
            <router-link 
              :to="item.href" 
              class="text-sm md:text-base text-stone-600 hover:text-[#9B2C2C] font-medium transition-colors whitespace-nowrap"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>

        <div class="shrink-0">
          <a 
            href="tel:+84327287345" 
            class="flex items-center gap-2 bg-[#9B2C2C] text-white px-3 md:px-5 py-2 rounded-full hover:bg-[#7B2323] transition-all shadow-md"
          >
            <Phone :size="16" />
            <span class="font-bold text-xs md:text-base">0327.287.345</span>
          </a>
        </div>

      </div>
    </nav>
    <div class="h-20"></div>
  </header>
</template>
<style>
</style>