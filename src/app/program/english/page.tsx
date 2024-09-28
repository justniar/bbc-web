"use client";
import React from "react";
import Image from "next/image"; 
import english from "@/assets/logo/english.png";

const English = () => {
  return (
    <div className="min-h-screen mt-11 bg-gray-60 py-10">
      <div className="max-w-5xl mx-auto p-6 sm:p-10 bg-white mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Belajar Bahasa Inggris dengan Brilliant English Course
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Brilliant English Course adalah salah satu lembaga kursus bahasa Inggris yang cukup terkenal, khususnya di kawasan Kampung Inggris, Pare, Kediri. Lembaga ini menawarkan program intensif belajar bahasa Inggris dengan metode yang dirancang untuk membantu peserta mencapai kemampuan berbahasa Inggris yang baik dalam waktu yang relatif singkat.        </p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

        <div className="w-full my-8">
          <Image
            src={english} 
            alt="Abama Kalkulator Example"
            width={400}
            height={400}
            className="rounded-lg shadow-md mx-auto"
          />
        </div>

        <div className="my-10">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
            Apa yang membuat Brilliant English Course berbeda? </h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
            Program Intensif: Kurikulum yang dirancang sangat padat dan terstruktur, memungkinkan peserta untuk belajar bahasa Inggris secara intensif dalam waktu yang relatif singkat.            </li>
            <li>
            Full Day English Program: Peserta diharuskan menggunakan bahasa Inggris sepanjang hari, baik di dalam maupun di luar kelas. Ini menciptakan lingkungan belajar yang benar-benar imersif, sehingga peserta terbiasa menggunakan bahasa Inggris dalam kehidupan sehari-hari.            </li>
            <li>
            English Area: Fasilitas asrama yang dirancang khusus untuk menciptakan lingkungan belajar bahasa Inggris 24 jam. Di sini, peserta diharuskan menggunakan bahasa Inggris untuk semua aktivitas, mulai dari makan hingga berinteraksi dengan teman-teman.            </li>
            <li>
            Tutor Berpengalaman: Brilliant English Course memiliki tim pengajar yang berpengalaman dan berkompeten di bidangnya. Mereka akan membimbing peserta secara individual maupun kelompok.            </li>
            <li>
            Beragam Program: Lembaga ini menawarkan berbagai program, mulai dari program reguler, program private, hingga program khusus untuk kebutuhan tertentu.</li>
          </ul>
          
        </div>

        {/* <div className="my-10">
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
            <div className="w-full sm:w-60  bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl ">
              <p className="text-gray-700 mt-2">
              Meningkatkan kecepatan membaca: Anak-anak akan dapat membaca lebih banyak dalam waktu yang singkat.
              </p>
            </div>

            <div className="w-full sm:w-60 bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <p className="text-gray-700 mt-2">
              Meningkatkan pemahaman: Anak-anak akan mampu menangkap makna yang terkandung dalam bacaan.              </p>
            </div>

            <div className="w-full sm:w-60 bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <p className="text-gray-700 mt-2">
              Meningkatkan konsentrasi: Membaca secara teratur akan melatih konsentrasi anak.              </p>
            </div>

            <div className="w-full sm:w-60 bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <p className="text-gray-700 mt-2">
              Meningkatkan daya ingat: Anak-anak akan lebih mudah mengingat apa yang mereka baca.              </p>
            </div>
            <div className="w-full sm:w-60 bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <p className="text-gray-700 mt-2">
              Meningkatkan kecerdasan: Membaca adalah salah satu cara terbaik untuk merangsang kecerdasan.              </p>
            </div>
            <div className="w-full sm:w-60 bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <p className="text-gray-700 mt-2">
              Meningkatkan kepercayaan diri: Keberhasilan dalam membaca akan membuat anak lebih percaya diri.              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default English;
