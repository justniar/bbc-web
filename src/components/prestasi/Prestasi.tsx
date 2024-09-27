import satu from "@/assets/prestasi/ciayumajakuning2023_1.jpeg";
import dua from "@/assets/prestasi/ciayumajakuning2023_2.jpeg";
import tiga from "@/assets/prestasi/ciayumajakuning2023_3.jpeg";
import empat from "@/assets/prestasi/ciayumajakuning2023_4.jpeg";
import lima from "@/assets/prestasi/ciayumajakuning2023_5.jpeg";
import enam from "@/assets/prestasi/ciayumajakuning2023_6.jpeg";
import Image from "next/image";

const galleryData = [
  { url: satu, caption: "Lomba Prisma Tingkat Ciayumajakuning Tahun 2023" },
  { url: dua, caption: "Lomba Prisma Tingkat Ciayumajakuning Tahun 2023" },
  { url: tiga, caption: "Lomba Prisma Tingkat Ciayumajakuning Tahun 2023" },
  { url: empat, caption: "Lomba Prisma Tingkat Ciayumajakuning Tahun 2023" },
  { url: lima, caption: "Lomba Prisma Tingkat Ciayumajakuning Tahun 2023" },
  { url: enam, caption: "Lomba Prisma Tingkat Ciayumajakuning Tahun 2023" },
  { url: satu, caption: "Lomba Prisma Tingkat Ciayumajakuning Tahun 2023" },
  { url: dua, caption: "Lomba Prisma Tingkat Ciayumajakuning Tahun 2023" },
  { url: tiga, caption: "Lomba Prisma Tingkat Ciayumajakuning Tahun 2023" },
  { url: satu, caption: "Lomba Prisma Tingkat Ciayumajakuning Tahun 2023" },
  { url: dua, caption: "Lomba Prisma Tingkat Ciayumajakuning Tahun 2023" },
  { url: tiga, caption: "Lomba Prisma Tingkat Ciayumajakuning Tahun 2023" },
];

const Prestasi = () => {
  return (
    <div id="prestasi" className="py-20 px-5 flex flex-col justify-center items-center space-y-10">
      <div className="text-center md:w-1/2 space-y-5">
        <p className="text-orange-400">Galeri Bimbel Bumi Cerdas</p>
        <h1 className="text-4xl font-semibold">
          Dokumentasi Terbaru Bimbel Bumi Cerdas
        </h1>
        <p className="text-gray-300">
          Berikut adalah beberapa dokumentasi terbaru dari Bimbel Bumi Cerdas.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center">
        {galleryData.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={item.url} 
              alt={item.caption} 
              className="w-60 h-36 object-cover rounded-lg"
            />
            <p className="w-60 text-gray-300 mt-3 text-center">{item.caption}</p>
          </div>
        ))}
      </div>
      
      <button className="mt-10 px-5 py-2 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors duration-300">
        Lihat Lebih Banyak
      </button>
    </div>
  );
};

export default Prestasi;
