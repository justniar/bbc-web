import satu from "../assets/prestasi/1.jpeg";
import dua from "../assets/prestasi/2.jpeg";
import tiga from "../assets/prestasi/3.jpeg";
import Image from "next/image";

const galleryData = [
  { url: satu, caption: "Level 5 ABAMA" },
  { url: dua, caption: "Level 5 ABAMA" },
  { url: tiga, caption: "Level 5 ABAMA" },
  { url: satu, caption: "Level 5 ABAMA" },
  { url: dua, caption: "Level 5 ABAMA" },
  { url: tiga, caption: "Level 5 ABAMA" },
  { url: satu, caption: "Level 5 ABAMA" },
  { url: dua, caption: "Level 5 ABAMA" },
  { url: tiga, caption: "Level 5 ABAMA" },
  { url: satu, caption: "Level 5 ABAMA" },
  { url: dua, caption: "Level 5 ABAMA" },
  { url: tiga, caption: "Level 5 ABAMA" },
];

const Prestasi = () => {
  return (
    <div id="prestasi" className="py-20 px-5 flex flex-col justify-center items-center space-y-10">
      <div className="text-center md:w-1/2 space-y-5">
        <p className="text-orange-400">Prestasi Terbaru Bimbel Bumi Cerdas</p>
        <h1 className="text-4xl font-semibold">
          Prestasi Terbaru Bimbel Bumi Cerdas
        </h1>
        <p className="text-gray-300">
          Berikut adalah beberapa pencapaian terbaru dari Bimbel Bumi Cerdas.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {galleryData.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={item.url} 
              alt={item.caption} 
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="text-gray-300 mt-3 text-center">{item.caption}</p>
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
