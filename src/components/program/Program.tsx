import math from "@/assets/logo/math.png";
import pracalis from "@/assets/logo/pracalis.png";
import prisma from "@/assets/logo/prisma.jpg";
import abama from "@/assets/logo/abama.png";
import qiroati from "@/assets/logo/qiroati.png"
import cermat from "@/assets/logo/cermat.png";
import bec from "@/assets/logo/bec.png";
import coding from "@/assets/logo/coding.jpg";

import ProgramCard from "./ProgramCard";

const Program = () => {
  return (
    <div id="program" className="py-10 px-10 sm:px-10 relative">
      <div className="flex flex-wrap w-full p-11 justify-center">
          <ProgramCard
            src={prisma.src}
            judul="Prisma"
            deskripsi="Prisma Kalkulator Tangan adalah metode unik untuk menghitung dengan cepat menggunakan sepuluh jari tangan. Metode ini tidak memerlukan alat bantu hitung seperti kalkulator atau kertas, sehingga sangat praktis dan menyenangkan, terutama untuk anak-anak."
            redirectUrl="program/prisma"
          />
          <ProgramCard
            src={abama.src}
            judul="Abama"
            deskripsi="ABAMA adalah singkatan dari Anak Baca PRISMA. Ini adalah sebuah program pembelajaran yang dirancang khusus untuk membantu anak-anak usia Taman Kanak-Kanak (TK) dan Sekolah Dasar (SD) meningkatkan kemampuan membaca dan menulis mereka. Program ini merupakan bagian dari lembaga bimbingan belajar PRISMA yang juga terkenal dengan metode Prisma Kalkulator Tangan untuk belajar berhitung."
            redirectUrl="program/abama"
          />
          <ProgramCard
            src={qiroati.src}
            judul="Qiro'ati"
            deskripsi="Metode Qiroati adalah sebuah metode pembelajaran membaca Al-Qur'an yang dirancang untuk memudahkan seseorang, terutama anak-anak, dalam belajar membaca Al-Qur'an dengan benar dan lancar. Metode ini menekankan pada praktek langsung membaca Al-Qur'an tanpa perlu mengeja setiap hurufnya."
            redirectUrl="program/prisma"
          />
          <ProgramCard
            src={math.src}
            judul="Sempoa"
            deskripsi="Klik untuk mengetahui lebih lanjut"
            redirectUrl="program/sempoa"
          />
          <ProgramCard
            src={cermat.src}
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
            src={bec.src}
            judul="Bahasa Inggris"
            deskripsi="Klik untuk mengetahui lebih lanjut"
            redirectUrl="program/english"
          />
          <ProgramCard
            src={coding.src}
            judul="Coding"
            deskripsi="Klik untuk mengetahui lebih lanjut"
            redirectUrl="program/coding"
          />
          <ProgramCard
            src={coding.src}
            judul="Komputer"
            deskripsi="Klik untuk mengetahui lebih lanjut"
            redirectUrl="program/komputer"
          />
        </div>
      </div>
  );
};

export default Program;
