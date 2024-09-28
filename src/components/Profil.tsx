import aboutSvg from "@/assets/logo/bg2.jpg"; // Update this path to the SVG file
// import Image from "next/image";
// import { Slider } from "@material-tailwind/react";

// const imageUrls = [
//   "@/assets/dokum/dokum1.jpeg",
//   "@/assets/dokum/dokum2.jpeg",
//   "@/assets/dokum/dokum3.jpeg", 
// ];

const Profil = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };

  return (
    <div 
      id="profil"
      className="flex flex-col md:flex-row p-10 bg-white relative min-h-screen"
      style={{
        backgroundImage: `url(${aboutSvg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-5 text-center md:text-left mb-10 md:mb-0">
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

      {/* <div className="w-full md:w-1/2">
        <Slider {...settings}>
          {imageUrls.map((url, index) => (
            <div key={index} className="p-2">
              <Image
                src={url}
                alt={`Carousel Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div> */}
    </div>
  );
};

export default Profil;
