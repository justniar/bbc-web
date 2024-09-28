"use client";
import React from "react";
import Image from "next/image"; 
import abama from "@/assets/logo/abama.png";

const Abama = () => {
  return (
    <div className="min-h-screen mt-11 bg-gray-60 py-10">
      <div className="max-w-5xl mx-auto p-6 sm:p-10 bg-white mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Belajar Menghitung dengan Metode Abama
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          <strong>ABAMA</strong>  adalah singkatan dari Anak Baca PRISMA. Ini adalah sebuah program pembelajaran yang dirancang khusus untuk membantu anak-anak usia Taman Kanak-Kanak (TK) dan Sekolah Dasar (SD) meningkatkan kemampuan membaca dan menulis mereka. Program ini merupakan bagian dari lembaga bimbingan belajar PRISMA yang juga terkenal dengan metode Prisma Kalkulator Tangan untuk belajar berhitung.
        </p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

        <div className="w-full my-8">
          <Image
            src={abama} 
            alt="Abama Kalkulator Example"
            width={800}
            height={400}
            className="rounded-lg shadow-md mx-auto"
          />
        </div>

        <div className="my-10">
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
        </div>

        <div className="my-10">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
             Mengapa Memilih ABAMA?
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
        </div>


        <div className="my-10">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
            Keunggulan Metode Baca Cerdas ABAMA:          
          </h3>
          <div className="w-full items-center flex flex-wrap justify-between gap-3">
            <div className="w-full md:w-60  bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl ">
              <p className="text-gray-700 mt-2">
              Meningkatkan kecepatan membaca: Anak-anak akan dapat membaca lebih banyak dalam waktu yang singkat.
              </p>
            </div>

            <div className="w-full md:w-60 bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <p className="text-gray-700 mt-2">
              Meningkatkan pemahaman: Anak-anak akan mampu menangkap makna yang terkandung dalam bacaan.              </p>
            </div>

            <div className="w-full md:w-60 bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <p className="text-gray-700 mt-2">
              Meningkatkan konsentrasi: Membaca secara teratur akan melatih konsentrasi anak.              </p>
            </div>

            <div className="w-full md:w-60 bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <p className="text-gray-700 mt-2">
              Meningkatkan daya ingat: Anak-anak akan lebih mudah mengingat apa yang mereka baca.              </p>
            </div>
            <div className="w-full md:w-60 bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <p className="text-gray-700 mt-2">
              Meningkatkan kecerdasan: Membaca adalah salah satu cara terbaik untuk merangsang kecerdasan.              </p>
            </div>
            <div className="w-full md:w-60 bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <p className="text-gray-700 mt-2">
              Meningkatkan kepercayaan diri: Keberhasilan dalam membaca akan membuat anak lebih percaya diri.              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abama;
