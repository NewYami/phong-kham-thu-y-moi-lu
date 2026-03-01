<script setup>
import { Star, Phone, ChevronRight, ShieldCheck, HeartPulse } from 'lucide-vue-next';
</script>

<template>
  <section class="scroll-mt-20 pt-32 pb-20 lg:pt-24 lg:pb-32 relative overflow-hidden bg-white">
    <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-[#9B2C2C]/5 rounded-full blur-3xl -z-10"></div>
    <div class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-[#9B2C2C]/5 rounded-full blur-3xl -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        
        <Transition appear name="slide-fade-left">
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9B2C2C]/10 text-[#9B2C2C] text-xs font-bold tracking-widest uppercase mb-8">
              <Star :size="14" class="fill-[#9B2C2C]" />
              <span>Số 1 tại Trường Xuân, Đồng Tháp</span>
            </div>

            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-stone-900 leading-[0.95] mb-8">
              YÊU THƯƠNG <br />
              <span class="text-[#9B2C2C]">NHƯ GIA ĐÌNH.</span>
            </h1>

            <p class="text-xl text-stone-600 mb-10 leading-relaxed max-w-lg font-medium">
              Phòng Khám Thú Y Moi.Lu - Nơi những người bạn bốn chân được chăm sóc bằng cả trái tim và chuyên môn y khoa hàng đầu.
            </p>

            <div class="flex flex-wrap gap-5">
              <a href="tel:+84327287345" class="inline-flex items-center gap-3 bg-[#9B2C2C] hover:bg-[#7B2323] text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-2xl shadow-[#9B2C2C]/30">
                <Phone :size="24" />
                Đặt lịch ngay
              </a>
              <a href="#services" class="inline-flex items-center gap-3 bg-white hover:bg-stone-50 text-stone-800 border-2 border-stone-100 px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-sm">
                Dịch vụ
                <ChevronRight :size="24" class="text-[#9B2C2C]" />
              </a>
            </div>
            
            <div class="mt-12 grid grid-cols-2 gap-6">
              <div class="flex items-center gap-3 p-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
                <div class="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#9B2C2C]">
                  <ShieldCheck :size="24" />
                </div>
                <span class="text-sm font-bold text-stone-700">An toàn tuyệt đối</span>
              </div>
              <div class="flex items-center gap-3 p-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
                <div class="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#9B2C2C]">
                  <HeartPulse :size="24" />
                </div>
                <span class="text-sm font-bold text-stone-700">Tận tâm 24/7</span>
              </div>
            </div>
          </div>
        </Transition>

        <Transition appear name="zoom-fade">
          <div class="relative">
            <div class="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(155,44,44,0.25)] border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop" 
                alt="Golden Retriever" 
                class="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#9B2C2C] rounded-full flex items-center justify-center text-white text-center p-4 shadow-2xl rotate-12 z-20 hidden sm:flex">
              <div>
                <div class="text-3xl font-black">5/5</div>
                <div class="text-[10px] font-bold uppercase tracking-widest">Đánh giá hài lòng</div>
              </div>
            </div>

            <div class="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-stone-100 max-w-[200px] hidden sm:block">
              <div class="flex gap-1 text-amber-400 mb-2">
                <Star v-for="i in 5" :key="i" :size="16" class="fill-current" />
              </div>
              <p class="text-sm font-bold text-stone-800 italic">"Bác sĩ giỏi, mát tay, bé nhà mình rất thích!"</p>
            </div>
          </div>
        </Transition>

      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-fade-left-enter-active {
  transition: all 0.8s ease-out;
}
.slide-fade-left-enter-from {
  transform: translateX(-50px);
  opacity: 0;
}
.zoom-fade-enter-active {
  transition: all 1s ease-out;
}
.zoom-fade-enter-from {
  transform: scale(0.9);
  opacity: 0;
}
</style>