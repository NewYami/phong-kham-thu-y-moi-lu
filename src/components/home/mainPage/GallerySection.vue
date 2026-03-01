<script setup>
// Mảng danh sách hình ảnh
const images = [
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2186&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1548767791-5146842e611d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1988&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591769225440-811ad7d62ca2?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2060&auto=format&fit=crop"
];
</script>

<template>
  <section id="gallery" class="scroll-mt-20 py-32 bg-[#FCF8F6]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center mb-20">
        <h2 class="text-4xl sm:text-5xl font-black text-stone-900 mb-6 tracking-tighter uppercase">
          NHỮNG <span class="text-[#9B2C2C]">KHOẢNH KHẮC</span> ĐÁNG YÊU
        </h2>
        <p class="text-xl text-stone-500 font-medium max-w-2xl mx-auto">
          Hình ảnh thực tế từ các bé thú cưng đã được chăm sóc tại Moi.Lu
        </p>
      </div>

      <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <div 
          v-for="(img, idx) in images" 
          :key="idx"
          class="relative group rounded-3xl overflow-hidden shadow-lg break-inside-avoid"
        >
          <img 
            :src="img" 
            :alt="`Pet ${idx}`" 
            class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            referrerpolicy="no-referrer"
          />
          
          <div class="absolute inset-0 bg-[#9B2C2C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Class giúp các ảnh không bị cắt đôi khi xuống dòng trong Masonry Layout */
.break-inside-avoid {
  break-inside: avoid;
}
</style>