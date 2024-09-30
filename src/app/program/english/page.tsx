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

        <div className="my-10">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
          Mengapa Banyak Orang Memilih Brilliant English Course?          </h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
            <strong>Lingkungan Belajar yang Kondusif:</strong> Suasana belajar yang menyenangkan dan mendukung membuat peserta merasa nyaman dan termotivasi untuk belajar
            </li>
            <li>
            <strong>Metode Pembelajaran yang Efektif:</strong> Metode pembelajaran yang digunakan telah terbukti efektif membantu peserta meningkatkan kemampuan berbahasa Inggris mereka
            </li>
            <li>
            <strong>Fasilitas yang Lengkap:</strong> Lembaga ini dilengkapi dengan berbagai fasilitas yang mendukung proses belajar, seperti ruang kelas yang nyaman, perpustakaan, dan area bermain.</li>
            <li>
            <strong>Reputasi yang Baik:</strong> Brilliant English Course telah memiliki reputasi yang baik sebagai salah satu lembaga kursus bahasa Inggris terbaik di Indonesia.
            </li>
          </ul>
        </div>

        <div className="my-10">
          <p>Secara singkat, <strong>Brilliant English Course</strong> adalah pilihan yang tepat bagi Anda yang ingin belajar bahasa Inggris secara intensif dan efektif. Jika Anda ingin meningkatkan kemampuan berbahasa Inggris Anda dalam waktu yang singkat, maka Brilliant English Course bisa menjadi solusi yang tepat.
          <br/>
          Tak perlu jauh-jauh ke kediri untuk belajar bahasa inggris, Sekarang Brilliant English Course tersedia di Bimbel Bumi Cerdas…<br/>
          <strong>Buruan Daftar…..</strong>
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default English;
