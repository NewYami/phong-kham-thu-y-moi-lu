<script setup>
import { HeartPulse, Pill, ShoppingBag } from 'lucide-vue-next';

// Khai báo mảng dữ liệu dịch vụ
const services = [
  {
    icon: HeartPulse,
    title: "Khám & Điều Trị",
    desc: "Điều trị nội khoa, ngoại khoa cho chó, mèo, hamster... với phác đồ chuẩn y khoa.",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Pill,
    title: "Thuốc & Dinh Dưỡng",
    desc: "Cung cấp thuốc đặc trị và các loại thức ăn cao cấp chính hãng, an toàn tuyệt đối.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: ShoppingBag,
    title: "Pet Shop & Spa",
    desc: "Phụ kiện thời trang, đồ chơi và các dịch vụ chăm sóc sắc đẹp cho thú cưng.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop"
  }
];
</script>

<template>
  <section id="services" class="scroll-mt-20 py-32 bg-white relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div class="max-w-2xl">
          <h2 class="text-4xl sm:text-5xl font-black text-stone-900 mb-6 tracking-tighter uppercase">
            DỊCH VỤ <span class="text-[#9B2C2C]">CHUYÊN NGHIỆP</span>
          </h2>
          <p class="text-xl text-stone-500 font-medium">
            Chúng tôi cung cấp giải pháp toàn diện cho sức khỏe và niềm vui của thú cưng.
          </p>
        </div>
        
        <div class="hidden md:block">
          <div class="text-right">
            <div class="text-5xl font-black text-[#9B2C2C]">03+</div>
            <div class="text-sm font-bold text-stone-400 uppercase tracking-widest">Nhóm dịch vụ chính</div>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-10">
        <div 
          v-for="(service, idx) in services" 
          :key="idx"
          class="group relative bg-stone-50 rounded-[2.5rem] overflow-hidden border border-stone-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
        >
          <div class="h-64 overflow-hidden relative">
            <img 
              :src="service.image" 
              :alt="service.title" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerpolicy="no-referrer"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            
            <div class="absolute bottom-6 left-8 text-white">
              <div class="w-14 h-14 rounded-2xl bg-[#9B2C2C] flex items-center justify-center mb-4 shadow-xl">
                <component :is="service.icon" :size="32" />
              </div>
            </div>
          </div>

          <div class="p-10">
            <h3 class="text-2xl font-black text-stone-900 mb-4 tracking-tight">{{ service.title }}</h3>
            <p class="text-stone-500 font-medium leading-relaxed">{{ service.desc }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Bạn có thể thêm các hiệu ứng lướt nhẹ nếu muốn, 
   nhưng hiện tại các class hover của Tailwind đã làm rất tốt rồi */
</style>