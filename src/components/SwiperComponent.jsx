import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/navigation"; // Import Swiper navigation styles



// // import required modules
import {  Navigation, Autoplay, EffectCoverflow  } from 'swiper/modules';

const SwiperComponent = () => {
   return (
     <>
<Swiper
        slidesPerView={2} // Same as the original configuration
        effect="coverflow"
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        coverflowEffect={{
          rotate: -5, // Same values as original
          stretch: 1,
          depth: 218,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, Autoplay, EffectCoverflow]}
        className="mySwiper"
      >
               <SwiperSlide>
           <img src="../../public/images/HeroImg1.svg" />
         </SwiperSlide>
         <SwiperSlide>
           <img src="../../public/images/HeroImg2.svg" />
         </SwiperSlide>
         <SwiperSlide>
           <img src="../../public/images/HeroImg3.svg" />
         </SwiperSlide>
         <SwiperSlide>
           <img src="../../public/images/HeroImg1.svg" />
        </SwiperSlide>
         <SwiperSlide>
           <img src="../../public/images/HeroImg2.svg" />
         </SwiperSlide>
         <SwiperSlide>
           <img src="../../public/images/HeroImg3.svg" />
         </SwiperSlide>
         
       </Swiper>
    </>
  );
 }

 export default SwiperComponent;





