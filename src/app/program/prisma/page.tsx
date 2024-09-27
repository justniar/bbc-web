"use client";
import React from "react";
import Image from "next/image"; 
import prisma from "@/assets/prisma.jpg";

const Prisma = () => {
  return (
    <div className="min-h-screen mt-11 bg-gray-60 py-10">
      <div className="max-w-5xl mx-auto p-6 sm:p-10 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Belajar Menghitung dengan Metode Prisma
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          <strong>Prisma Kalkulator Tangan</strong> adalah metode unik untuk
          menghitung dengan cepat menggunakan sepuluh jari tangan. Metode ini
          tidak memerlukan alat bantu hitung seperti kalkulator atau kertas,
          sehingga sangat praktis dan menyenangkan, terutama untuk anak-anak.
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
            src={prisma} 
            alt="Prisma Kalkulator Example"
            width={800}
            height={400}
            className="rounded-lg shadow-md mx-auto"
          />
        </div>

        <div className="my-10">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
            Kelebihan Prisma Kalkulator Tangan:
          </h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Cepat dan Akurat:</strong> Dengan latihan yang cukup,
              Anda bisa menghitung lebih cepat daripada menggunakan kalkulator.
            </li>
            <li>
              <strong>Menyenangkan:</strong> Belajar sambil bermain, membuat
              proses belajar menjadi lebih menyenangkan.
            </li>
            <li>
              <strong>Meningkatkan Kepercayaan Diri:</strong> Kemampuan
              menghitung dengan cepat akan meningkatkan kepercayaan diri anak
              dalam belajar matematika.
            </li>
            <li>
              <strong>Praktis:</strong> Tidak membutuhkan alat bantu hitung
              apapun, cukup menggunakan jari tangan.
            </li>
          </ul>
        </div>

        {/* Levels Section */}
        <div className="my-10">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
            Level-Level dalam Prisma Kalkulator Tangan:
          </h3>

          {/* Cards for Each Level */}
          <div className="w-full flex justify-between">

            {/* Level 1-4 */}
            <div className="w-[220px] bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl ">
              <h4 className="text-xl font-semibold text-gray-800">
                Level 1-4:
              </h4>
              <p className="text-gray-700 mt-2">
                Fokus pada penjumlahan dan pengurangan.
              </p>
            </div>

            {/* Level 5-6 */}
            <div className="w-[220px] bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <h4 className="text-xl font-semibold text-gray-800">
                Level 5-6:
              </h4>
              <p className="text-gray-700 mt-2">
                Beralih ke perkalian.
              </p>
            </div>

            {/* Level 7 */}
            <div className="w-[220px] bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <h4 className="text-xl font-semibold text-gray-800">
                Level 7:
              </h4>
              <p className="text-gray-700 mt-2">
                Pembagian.
              </p>
            </div>

            {/* Level 8-10 */}
            <div className="w-[220px] bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <h4 className="text-xl font-semibold text-gray-800">
                Level 8-10:
              </h4>
              <p className="text-gray-700 mt-2">
                Kombinasi dari berbagai operasi hitung, termasuk akar dan pangkat.
              </p>
            </div>

          </div>
        </div>


        {/* Conclusion Section */}
        <div className="my-10">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
            Kesimpulan
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Prisma Kalkulator Tangan adalah metode yang efektif untuk
            meningkatkan kemampuan berhitung anak. Dengan metode ini,
            anak-anak akan lebih mudah memahami konsep matematika dan menjadi
            lebih percaya diri dalam belajar.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Apakah Anda ingin mempelajari lebih lanjut tentang teknik hitung
            cepat ini? Saya bisa memberikan penjelasan lebih detail tentang cara
            kerja Prisma Kalkulator Tangan atau menjawab pertanyaan Anda yang
            lain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prisma;
