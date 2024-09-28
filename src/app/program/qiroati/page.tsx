"use client";
import React from "react";
import Image from "next/image"; 
import qiroati from "@/assets/logo/qiroati.png";

const Qiroati = () => {
  return (
    <div className="min-h-screen mt-11 bg-gray-60 py-10">
      <div className="max-w-5xl mx-auto p-6 sm:p-10 bg-white mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Belajar Membaca Al-Qur&apos;an
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          <strong>Metode Qiroati</strong> adalah sebuah metode pembelajaran membaca Al-Qur&apos;an yang dirancang untuk memudahkan seseorang, terutama anak-anak, dalam belajar membaca Al-Qur&apos;an dengan benar dan lancar. Metode ini menekankan pada praktek langsung membaca Al-Qur&apos;an tanpa perlu mengeja setiap hurufnya.
        </p>

        <div className="my-10">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
            Bagaimana Cara Kerjanya?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Metode ini menggunakan kode-kode tertentu pada setiap jari untuk
            mewakili angka-angka. Dengan menggerakkan jari-jari, kita bisa
            melakukan berbagai operasi hitung seperti penjumlahan, pengurangan,
            perkalian, bahkan pembagian.
          </p>
        </div>

        <div className="w-full my-8">
          <Image
            src={qiroati} 
            alt="Qiroati"
            width={400}
            className="rounded-lg shadow-md mx-auto"
          />
        </div>

        <div className="my-10">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
            Ciri-ciri Utama Metode Qiroati:          
          </h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
            <strong>Langsung Membaca:</strong> Peserta diajarkan untuk langsung membaca kata atau kalimat tanpa harus mengeja huruf per huruf. Ini membantu meningkatkan kecepatan dan kelancaran membaca.
            </li>
            <li>
            <strong>Fokus pada Tajwid:</strong>Metode Qiroati sangat memperhatikan kaidah tajwid, yaitu aturan membaca Al-Qur&apos;an yang benar. Namun, penyampaiannya dibuat sederhana dan mudah dipahami.
            </li>
            <li>
            <strong>Berulang-ulang:</strong>Latihan membaca dilakukan secara berulang-ulang untuk memperkuat ingatan dan meningkatkan kefasihan.
            </li>
            <li>
            <strong>Belajar dari Model:</strong> Pengajar akan menjadi model dalam membaca Al-Qur&apos;an, kemudian peserta akan meniru bacaannya.
            </li>
            <li>
            <strong>Tidak Membebani:</strong> Materi yang diajarkan secara bertahap dan sederhana, sehingga tidak membebani peserta, terutama anak-anak.
            </li>
          </ul>
        </div>

        <div className="my-10">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
            Tujuan Metode Qiroati:          
          </h3>

          <div className="w-full items-center flex flex-wrap justify-between gap-3">
            <div className="w-full bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl ">
              <p className="text-gray-700 mt-2">
              Membaca Al-Qur&apos;an dengan benar: Peserta dapat membaca Al-Qur&apos;an sesuai dengan kaidah tajwid.              </p>
            </div>

            <div className="w-full bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <p className="text-gray-700 mt-2">
              Meningkatkan kecepatan membaca: Dengan latihan yang cukup, peserta dapat membaca Al-Qur&apos;an dengan cepat dan lancar.              </p>
            </div>

            <div className="w-full bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <p className="text-gray-700 mt-2">
              Menumbuhkan minat membaca Al-Qur&apos;an: Metode yang menyenangkan dan tidak membosankan membuat peserta lebih tertarik untuk belajar membaca Al-Qur&apos;an.              </p>
            </div>

            <div className="w-full bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <p className="text-gray-700 mt-2">
              Mempermudah menghafal Al-Qur&apos;an: Dengan membaca yang lancar, peserta akan lebih mudah menghafal ayat-ayat Al-Qur&apos;an.              </p>
            </div>

          </div>
        </div>


        <div className="my-10">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
          Kelebihan Metode Qiroati:
          </h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Praktis dan efisien: Metode ini dapat diterapkan untuk semua kalangan, mulai dari anak-anak hingga dewasa.</li>
            <li>Mudah dipahami: Materi yang disampaikan sederhana dan mudah dicerna.</li>
            <li>Meningkatkan kepercayaan diri: Keberhasilan dalam membaca Al-Qur&apos;an akan meningkatkan kepercayaan diri peserta.</li>
            <li>Menyenangkan: Proses belajar dibuat menyenangkan sehingga tidak membosankan.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Qiroati;
