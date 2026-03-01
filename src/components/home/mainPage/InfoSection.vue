<script setup>
import { Stethoscope, MapPin, Phone, Facebook } from 'lucide-vue-next';
</script>

<template>
  <section id="contact" class="scroll-mt-20 py-32 bg-stone-900 text-stone-300 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#9B2C2C_1px,transparent_1px)] [background-size:40px_40px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-24 items-center">
        
        <div>
          <div class="flex items-center gap-3 mb-10">
            <div class="w-14 h-14 bg-[#9B2C2C] rounded-2xl flex items-center justify-center text-white shadow-xl">
              <Stethoscope :size="32" />
            </div>
            <h2 class="text-4xl font-black text-white tracking-tighter uppercase">Moi.Lu Vet</h2>
          </div>
          
          <p class="text-2xl text-stone-400 mb-12 font-medium leading-relaxed italic">
            "Sức khỏe của thú cưng là niềm hạnh phúc của chúng tôi."
          </p>
          
          <div class="space-y-10">
            <div class="flex items-start gap-6 group">
              <div class="w-14 h-14 rounded-2xl bg-stone-800 flex items-center justify-center shrink-0 group-hover:bg-[#9B2C2C] transition-colors duration-300">
                <MapPin class="text-[#9B2C2C] group-hover:text-white" :size="28" />
              </div>
              <div>
                <h4 class="text-white font-black mb-2 text-xl uppercase tracking-tight">Địa chỉ phòng khám</h4>
                <p class="text-stone-400 text-lg leading-relaxed">
                  Số 2 Phan Văn On, Ấp 5A, Xã Trường Xuân, Tỉnh Đồng Tháp, Việt Nam
                </p>
              </div>
            </div>
            
            <div class="flex items-start gap-6 group">
              <div class="w-14 h-14 rounded-2xl bg-stone-800 flex items-center justify-center shrink-0 group-hover:bg-[#9B2C2C] transition-colors duration-300">
                <Phone class="text-[#9B2C2C] group-hover:text-white" :size="28" />
              </div>
              <div>
                <h4 class="text-white font-black mb-2 text-xl uppercase tracking-tight">Hotline hỗ trợ</h4>
                <a href="tel:+84327287345" class="text-stone-400 hover:text-white transition-colors text-2xl font-black tracking-tight">
                  (+84) 327 287 345
                </a>
              </div>
            </div>

            <div class="flex items-start gap-6 group">
              <div class="w-14 h-14 rounded-2xl bg-stone-800 flex items-center justify-center shrink-0 group-hover:bg-[#9B2C2C] transition-colors duration-300">
                <Facebook class="text-[#9B2C2C] group-hover:text-white" :size="28" />
              </div>
              <div>
                <h4 class="text-white font-black mb-2 text-xl uppercase tracking-tight">Kết nối Facebook</h4>
                <a href="https://www.facebook.com/profile.php?id=61579626082569&locale=vi_VN" target="_blank" rel="noopener noreferrer" class="text-stone-400 hover:text-white transition-colors text-lg font-bold">
                  Phòng Khám Thú Y Moi.Lu
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="relative group">
          <div class="absolute -inset-4 bg-[#9B2C2C]/20 rounded-[3rem] blur-2xl group-hover:bg-[#9B2C2C]/30 transition-all duration-500"></div>
          
          <div class="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-stone-800 bg-stone-800 flex flex-col items-center justify-center text-center p-10">
            <div class="w-24 h-24 rounded-full bg-stone-700 flex items-center justify-center mb-8">
              <MapPin :size="48" class="text-[#9B2C2C]" />
            </div>
            <h3 class="text-3xl font-black text-white mb-6 uppercase tracking-tight">Đến thăm chúng tôi</h3>
            <p class="text-stone-400 mb-10 text-lg font-medium">Chúng tôi luôn sẵn sàng đón tiếp bạn và bé yêu tại xã Trường Xuân.</p>
            
            <a 
              href="https://www.google.com/maps/dir//10.60625,105.744167" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-full py-5 bg-[#9B2C2C] hover:bg-[#7B2323] text-white rounded-2xl text-xl font-black transition-all shadow-xl shadow-[#9B2C2C]/20 uppercase tracking-widest text-center"
            >
              Chỉ đường chi tiết
            </a>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>