import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=2071&auto=format&fit=crop",
    title: "宁静农场",
    description: "在属于你的一方天地里，播种希望，收获喜悦。"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=2070&auto=format&fit=crop",
    title: "神秘矿井",
    description: "深入地下，探索无尽的宝藏与未知的挑战。"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=2070&auto=format&fit=crop",
    title: "丰收季节",
    description: "金黄的麦浪与累累硕果，是对辛勤劳作最好的回报。"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop",
    title: "温馨牧场",
    description: "与可爱的动物们相伴，感受生命的温暖与治愈。"
  }
];

const Carousel = () => {
  return (
    <div className="w-full py-10">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30, // 减小旋转角度，让两侧图片看得更清楚
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        onSwiper={(swiper) => {
          // 强制启动
          setTimeout(() => {
            if (swiper && swiper.autoplay) {
              swiper.autoplay.start();
            }
          }, 100);
        }}
        className="mySwiper w-full aspect-[16/9] rounded-2xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full bg-slate-800 rounded-2xl overflow-hidden group">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {slide.title}
              </h3>
              <p className="text-gray-200 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                {slide.description}
              </p>
            </div>
            {/* 默认显示的标题（未悬停时） */}
            <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
               <h3 className="text-xl font-bold text-white drop-shadow-md">
                {slide.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* 自定义样式覆盖，为了更好的视觉效果 */}
      <style>{`
        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 75%; /* 增大 Slide 宽度 */
          border-radius: 18px;
          overflow: hidden;
        }
        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.5);
        }
        .swiper-pagination-bullet-active {
          background: #fff;
        }
        .swiper-button-next, .swiper-button-prev {
          color: rgba(255,255,255,0.7);
          transform: scale(0.7);
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
