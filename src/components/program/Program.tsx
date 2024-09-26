import { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import math from "@/assets/math.png";
import pracalis from "@/assets/pracalis.png";
import qiro from "@/assets/qiro.png";
import english from "@/assets/english.png";

import ProgramCard from "./ProgramCard";

const Program = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ judul: "", deskripsi: "" });

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <div id="program" className="py-10 px-10 sm:px-10 relative">
      <div className="max-w-7xl mx-auto overflow-hidden" ref={scrollContainerRef}>
        <div className="inline-flex p-2 md:p-5 space-x-4 sm:space-x-20">
          <ProgramCard
            src={math.src}
            judul="Prisma"
            deskripsi="Prisma Kalkulator Tangan adalah metode unik untuk menghitung dengan cepat menggunakan sepuluh jari tangan. Metode ini tidak memerlukan alat bantu hitung seperti kalkulator atau kertas, sehingga sangat praktis dan menyenangkan, terutama untuk anak-anak."
            redirectUrl="program/prisma"
          />
          <ProgramCard
            src={pracalis.src}
            judul="Abama"
            deskripsi="ABAMA adalah singkatan dari Anak Baca PRISMA. Ini adalah sebuah program pembelajaran yang dirancang khusus untuk membantu anak-anak usia Taman Kanak-Kanak (TK) dan Sekolah Dasar (SD) meningkatkan kemampuan membaca dan menulis mereka. Program ini merupakan bagian dari lembaga bimbingan belajar PRISMA yang juga terkenal dengan metode Prisma Kalkulator Tangan untuk belajar berhitung."
            redirectUrl="program/abama"
          />
          <ProgramCard
            src={qiro.src}
            judul="Qiro'ati"
            deskripsi="Metode Qiroati adalah sebuah metode pembelajaran membaca Al-Qur'an yang dirancang untuk memudahkan seseorang, terutama anak-anak, dalam belajar membaca Al-Qur'an dengan benar dan lancar. Metode ini menekankan pada praktek langsung membaca Al-Qur'an tanpa perlu mengeja setiap hurufnya."
            redirectUrl="program/prisma"
          />
          <ProgramCard
            src={qiro.src}
            judul="Sempoa"
            deskripsi="Klik untuk mengetahui lebih lanjut"
            redirectUrl="program/sempoa"
          />
          <ProgramCard
            src={math.src}
            judul="Cermat"
            deskripsi="Klik untuk mengetahui lebih lanjut"
            redirectUrl="program/cermat"
          />
          <ProgramCard
            src={math.src}
            judul="Tematik"
            deskripsi="Klik untuk mengetahui lebih lanjut"
            redirectUrl="program/tematik"
          />
          <ProgramCard
            src={pracalis.src}
            judul="Pracalis"
            deskripsi="Klik untuk mengetahui lebih lanjut"
            redirectUrl="program/pracalis"
          />
          <ProgramCard
            src={english.src}
            judul="Bahasa Inggris"
            deskripsi="Klik untuk mengetahui lebih lanjut"
            redirectUrl="program/english"
          />
          <ProgramCard
            src={math.src}
            judul="Coding"
            deskripsi="Klik untuk mengetahui lebih lanjut"
            redirectUrl="program/coding"
          />
        </div>
      </div>

      <button
        onClick={scrollLeft}
        className="sm:block absolute top-1/2 left-0 transform -translate-y-1/2 p-3 m-10 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
      >
        <IoIosArrowBack size={24} />
      </button>

      <button
        onClick={scrollRight}
        className="sm:block absolute top-1/2 right-0 transform -translate-y-1/2 p-3 m-10 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

export default Program;
