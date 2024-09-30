import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

import aboutSvg from "@/assets/logo/bg2.jpg";
import Image from "next/image";

import image1 from "@/assets/dokum/dokum4.jpeg";
import image2 from "@/assets/dokum/sarana1.jpeg";
import image3 from "@/assets/dokum/sarana2.jpeg";

const Profil = () => {
  return (
    <div 
      id="profil"
      className="flex flex-col md:flex-row py-10 px-55 bg-white relative min-h-screen justify-center"
      style={{
        backgroundImage: `url(${aboutSvg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full px-20 md:w-1/2 flex flex-col justify-center space-y-5 text-center md:text-left mb-10 md:mb-0">
        <p className="text-orange-400 font-semibold">Profil Terbaru Bimble Bumi Cerdas</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-400">
          Tentang Bimble Bumi Cerdas 
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">
          Bimble Bumi Cerdas adalah sebuah lembaga edukasi yang menyediakan layanan bimbingan belajar (bimbel) 
          dengan pendekatan yang interaktif dan menyenangkan. Bimble ini dirancang untuk membantu siswa dalam
          memahami materi pelajaran secara lebih mendalam, serta meningkatkan prestasi akademik mereka melalui 
          metode pembelajaran yang efektif. Dengan memanfaatkan teknologi terkini, Bimble Bumi Cerdas menyediakan
          berbagai materi pelajaran, latihan soal, dan simulasi ujian yang disesuaikan dengan kurikulum terbaru.
        </p>
      </div>
      
      <div className="w-300 md:w-1/2 p-20">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
        >
          <SwiperSlide>
            <Image
              src={image1}
              className="block w-full rounded-lg"
              alt="First slide"
              width={400}
              height={300}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={image2}
              className="block w-full rounded-lg"
              alt="Second slide"
              width={400}
              height={300}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={image3}
              className="block w-full rounded-lg"
              alt="Third slide"
              width={400}
              height={300}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Profil;
