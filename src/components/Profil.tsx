import aboutSvg from "../assets/bg2.jpg"; // Update this path to the SVG file

const Profil = () => {
  return (
    <div 
      id="profil"
      className="flex flex-col p-10 md:justify-center md:items-center bg-white relative min-h-screen"
      style={{
        backgroundImage: `url(${aboutSvg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="rounded-md w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 space-y-5 text-center">
        <p className="text-orange-400">Profil Terbaru Bimble Bumi Cerdas</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-orange-400">
          Tentang Bimble Bumi Cerdas
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base">
          Bimble Bumi Cerdas adalah sebuah lembaga edukasi yang menyediakan layanan bimbingan belajar (bimbel) 
          dengan pendekatan yang interaktif dan menyenangkan. Bimble ini dirancang untuk membantu siswa dalam
          memahami materi pelajaran secara lebih mendalam, serta meningkatkan prestasi akademik mereka melalui 
          metode pembelajaran yang efektif. Dengan memanfaatkan teknologi terkini, Bimble Bumi Cerdas menyediakan
          berbagai materi pelajaran, latihan soal, dan simulasi ujian yang disesuaikan dengan kurikulum terbaru. 
        </p>
        <button className="px-5 py-2 rounded-full bg-orange-500 text-white font-semibold">
          Pelajari
        </button>
      </div>
    </div>
  );
};

export default Profil;
