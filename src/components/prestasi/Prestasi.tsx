import { useState } from "react";

import satu from "@/assets/prestasi/ciayumajakuning2023_1.jpeg";
import dua from "@/assets/prestasi/ciayumajakuning2023_2.jpeg";
import tiga from "@/assets/prestasi/ciayumajakuning2023_3.jpeg";
import empat from "@/assets/prestasi/ciayumajakuning2023_4.jpeg";
import lima from "@/assets/prestasi/ciayumajakuning2023_5.jpeg";
import enam from "@/assets/prestasi/ciayumajakuning2023_6.jpeg";
import dokum1 from "@/assets/dokum/dokum1.jpeg";
import dokum2 from "@/assets/dokum/dokum2.jpeg";
import dokum3 from "@/assets/dokum/dokum3.jpeg";
import dokum4 from "@/assets/dokum/dokum4.jpeg";
import dokum5 from "@/assets/dokum/dokum5.jpeg";

import Image from "next/image";

const galleryData = [
  { url: satu, caption: "Lomba Prisma Tingkat Ciayumajakuning Tahun 2023", category: "prestasi", isVideo: false },
  { url: dua, caption: "Lomba Prisma Tingkat Ciayumajakuning Tahun 2023", category: "prestasi", isVideo: false },
  { url: tiga, caption: "Lomba Prisma Tingkat Ciayumajakuning Tahun 2023", category: "prestasi", isVideo: false },
  { url: empat, caption: "Lomba Prisma Tingkat Ciayumajakuning Tahun 2023", category: "prestasi", isVideo: false },
  { url: lima, caption: "Lomba Prisma Tingkat Ciayumajakuning Tahun 2023", category: "prestasi", isVideo: false },
  { url: enam, caption: "Lomba Prisma Tingkat Ciayumajakuning Tahun 2023", category: "prestasi", isVideo: false },
  { url: dokum1, caption: "Dokumentasi Proses Belajar BBC", category: "kegiatan", isVideo: false },
  { url: dokum2, caption: "Dokumentasi Proses Belajar BBC", category: "kegiatan", isVideo: false },
  { url: dokum3, caption: "Dokumentasi Proses Belajar BBC", category: "kegiatan", isVideo: false },
  { url: dokum4, caption: "Dokumentasi Proses Belajar BBC", category: "kegiatan", isVideo: false },
  { url: dokum5, caption: "Dokumentasi Proses Belajar BBC", category: "kegiatan", isVideo: false },
  { url: "/nasional1.mp4", caption: "Lomba Prisma Tingkat Nasional 2023", category: "video", isVideo: true },
  { url: "/nasional2.mp4", caption: "Lomba Prisma Tingkat Nasional 2023", category: "video", isVideo: true },
  { url: "/nasional3.mp4", caption: "Lomba Prisma Tingkat Nasional 2023", category: "video", isVideo: true },
  { url: "/nasional4.mp4", caption: "Lomba Prisma Tingkat Nasional 2023", category: "video", isVideo: true },
  { url: "/nasional5.mp4", caption: "Lomba Prisma Tingkat Nasional 2023", category: "video", isVideo: true },
  { url: "/nasional6.mp4", caption: "Lomba Prisma Tingkat Nasional 2023", category: "video", isVideo: true },
];

const Prestasi = () => {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState("all"); // New state to track the current filter

  // Function to filter media based on category
  const filteredData = galleryData.filter((item) => {
    if (filter === "all") return true;
    if (filter === "prestasi") return item.category === "prestasi";
    if (filter === "kegiatan") return item.category === "kegiatan";
    if (filter === "video") return item.isVideo;
    return true;
  });

  const displayedData = showAll ? filteredData : filteredData.slice(0, 5);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div id="prestasi" className="py-20 px-5 flex flex-col justify-center items-center space-y-10">
      <div className="text-center md:w-1/2 space-y-5">
        <p className="text-orange-400">Galeri Bimbel Bumi Cerdas</p>
        <h1 className="text-4xl font-semibold">Dokumentasi Terbaru Bimbel Bumi Cerdas</h1>
        <p className="text-gray-300">Berikut adalah beberapa dokumentasi terbaru dari Bimbel Bumi Cerdas.</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full ${filter === "all" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("prestasi")}
          className={`px-4 py-2 rounded-full ${filter === "prestasi" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Prestasi
        </button>
        <button
          onClick={() => setFilter("kegiatan")}
          className={`px-4 py-2 rounded-full ${filter === "kegiatan" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Kegiatan Belajar Mengajar
        </button>
        <button
          onClick={() => setFilter("video")}
          className={`px-4 py-2 rounded-full ${filter === "video" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Video
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center">
        {displayedData.map((item, index) => (
          <div key={index} className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            {item.isVideo ? (
              <video controls className="w-60 h-36 object-cover items-center rounded-lg">
                <source src={typeof item.url === 'string' ? item.url : item.url.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image src={item.url} alt={item.caption} className="w-60 h-36 object-cover rounded-lg" />
            )}
            <p className="w-60 text-gray-300 mt-3 text-center">{item.caption}</p>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex flex-col items-center mt-10">
        <button
          onClick={toggleShowAll}
          className="px-5 py-2 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors duration-300"
        >
          {showAll ? "Sembunyikan" : "Lihat Lebih Banyak"}
        </button>
      </div>
    </div>
  );
};

export default Prestasi;
