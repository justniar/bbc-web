"use client";
import React from "react";
import Image from "next/image"; 
import coding from "@/assets/logo/coding.jpg";

const Abama = () => {
  return (
    <div className="min-h-screen mt-11 bg-gray-60 py-10">
      <div className="max-w-5xl mx-auto p-6 sm:p-10 bg-white mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Belajar Mengasah logika dengan Coding
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Coding adalah proses menulis instruksi (kode) yang dapat dipahami oleh komputer untuk melakukan tugas tertentu. Ini melibatkan penggunaan bahasa pemrograman, yang merupakan seperangkat aturan dan sintaks yang digunakan untuk berkomunikasi dengan komputer.        </p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

        <div className="w-full my-8">
          <Image
            src={coding} 
            alt="Abama Kalkulator Example"
            width={400}
            height={400}
            className="rounded-lg shadow-md mx-auto"
          />
        </div>

        {/* <div className="my-10">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
            Tujuan Utama ABAMA: 
          </h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              Mempercepat proses belajar membaca: Anak-anak akan diajarkan teknik-teknik khusus untuk mengenali huruf, suku kata, hingga kalimat dengan cepat dan tepat.
            </li>
            <li>
              Meningkatkan pemahaman bacaan: Tidak hanya cepat membaca, anak-anak juga dilatih untuk memahami isi bacaan secara mendalam.
            </li>
            <li>
              Memperkaya kosakata: Dengan membaca berbagai jenis teks, anak-anak akan menambah perbendaharaan kata mereka.
            </li>
            <li>
              Meningkatkan kepercayaan diri: Keberhasilan dalam membaca akan meningkatkan kepercayaan diri anak dalam belajar.
            </li>
          </ul>
        </div> */}

        {/* <div className="my-10">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
            Mengapa Coding Penting?
          </h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
            Metode yang menyenangkan: Pembelajaran dibuat semenarik mungkin agar anak-anak tidak bosan.            </li>
            <li>
            Guru yang berpengalaman: Para pengajar ABAMA adalah profesional yang berpengalaman dalam mendidik anak-anak.            </li>
            <li>
            Kurikulum yang terstruktur: Materi pembelajaran disusun secara sistematis dan sesuai dengan perkembangan anak.            </li>
            <li>
            Mendukung perkembangan otak: Membaca sejak dini sangat baik untuk perkembangan otak anak.            </li>
          </ul>
        </div> */}


        <div className="my-10">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
          Mengapa Coding Penting?
          </h3>
          <div className="w-full items-center flex flex-wrap justify-between gap-3">
            <div className="w-full md:w-60  bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl ">
              <p className="text-gray-700 mt-2">
              Otomatisasi: Coding memungkinkan kita untuk mengotomatiskan tugas-tugas yang berulang atau memakan waktu, sehingga meningkatkan efisiensi dan produktivitas.              </p>
            </div>

            <div className="w-full md:w-60 bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <p className="text-gray-700 mt-2">
              Kreativitas: Coding adalah bentuk ekspresi kreatif, di mana kita dapat membangun aplikasi, game, atau perangkat lunak lainnya sesuai dengan imajinasi kita.</p>
            </div>

            <div className="w-full md:w-60 bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <p className="text-gray-700 mt-2">
              Inovasi: Coding adalah kunci untuk inovasi teknologi, karena memungkinkan kita untuk menciptakan solusi baru untuk masalah-masalah dunia nyata.</p>
            </div>

            <div className="w-full md:w-60 bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <p className="text-gray-700 mt-2">
              Peluang Karir: Kemampuan coding sangat dihargai di pasar kerja, membuka pintu untuk berbagai peluang karir di bidang teknologi informasi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abama;
