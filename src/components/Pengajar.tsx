import { useState } from "react";

import alma from "@/assets/pengajar/miss alma.jpeg";
import anna from "@/assets/pengajar/mis anna.jpeg";
import dinah from "@/assets/pengajar/miss dinah.jpeg";
import halimah from "@/assets/pengajar/miss halimah2.jpeg";
import juju from "@/assets/pengajar/miss juju.jpeg";
import mei from "@/assets/pengajar/miss mei.jpeg";
import niar from "@/assets/pengajar/miss niar-salsa.jpg";
import santi from "@/assets/pengajar/miss santi.jpg";
import shally from "@/assets/pengajar/miss shally.jpeg";
import tini from "@/assets/pengajar/miss tini.jpeg";
import PengajarCard from "./PengajarCard";

const Pengajar = () => {
  const [showAll, setShowAll] = useState(false); // State to manage visibility

  const teamMembers = [
    {
      name: "Miss Alma",
      role: "Prisma, Abama",
      description: "Don't rely on luck, but believe in hard work",
      imgSrc: alma,
      emailLink: "mailto:missanna@example.com", 
      instagramLink: "https://instagram.com/missanna", 
      linkedinLink: "https://linkedin.com/in/missanna", 
    },
    {
      name: "Miss Anna ",
      role: "Prisma, English",
      description: "Don't rely on luck, but believe in hard work",
      imgSrc: anna,
      emailLink: "mailto:missanna@example.com", 
      instagramLink: "https://instagram.com/missanna", 
      linkedinLink: "https://linkedin.com/in/missanna", 
    },
    {
      name: "Miss Dinah",
      role: "Abama, Prisma",
      description: "Jalani, Syukuri, Nikmati🤍",
      imgSrc: dinah,
      emailLink: "mailto:missanna@example.com", 
      instagramLink: "https://instagram.com/missanna", 
      linkedinLink: "https://linkedin.com/in/missanna", 
    },
    {
      name: "Miss Halimah",
      role: "Abama, Prisma, Matematika",
      description: "Life is a choice",
      imgSrc: halimah,
      emailLink: "mailto:missanna@example.com", 
      instagramLink: "https://instagram.com/missanna", 
      linkedinLink: "https://linkedin.com/in/missanna", 
    },
    {
      name: "Miss Juju",
      role: "Abama, Prisma",
      description: "Tetap percaya diri diera gempuran omongan orang",
      imgSrc: juju,
      emailLink: "mailto:missanna@example.com", 
      instagramLink: "https://instagram.com/missanna", 
      linkedinLink: "https://linkedin.com/in/missanna", 
    },
    {
      name: "Miss Mei",
      role: "Abama, Prisma, English",
      description: "Live with purpose, and never give up on achieving that goal, you can do it!",
      imgSrc: mei,
      emailLink: "mailto:missanna@example.com", 
      instagramLink: "https://instagram.com/missanna", 
      linkedinLink: "https://linkedin.com/in/missanna", 
    },
    {
      name: "Miss Salsa",
      role: "Komputer, Coding, English",
      description: "Jangan menyerah pada rasa takutmu",
      imgSrc: niar,
      emailLink: "mailto:missanna@example.com", 
      instagramLink: "https://instagram.com/missanna", 
      linkedinLink: "https://linkedin.com/in/missanna", 
    },
    {
      name: "Miss Santi",
      role: "English",
      description: "Spread the love and share the happiness😃",
      imgSrc: santi,
      emailLink: "mailto:missanna@example.com", 
      instagramLink: "https://instagram.com/missanna", 
      linkedinLink: "https://linkedin.com/in/missanna", 
    },
    {
      name: "Miss Shally",
      role: "Abama, Prisma",
      description: "Setiap hari adalah kesempatan baru untuk memulai",
      imgSrc: shally,
      emailLink: "mailto:missanna@example.com", 
      instagramLink: "https://instagram.com/missanna", 
      linkedinLink: "https://linkedin.com/in/missanna", 
    },
    {
      name: "Miss Tini",
      role: "Abama, Prisma, English",
      description: "Jalani, Nikmati, Syukuri",
      imgSrc: tini,
      emailLink: "mailto:missanna@example.com", 
      instagramLink: "https://instagram.com/missanna", 
      linkedinLink: "https://linkedin.com/in/missanna", 
    },
  ];

  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 4);

  return (
    <section className="flex justify-center items-center bg-white max-w-[400px] md:max-w-full dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Tim Pengajar BBC</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          </p>
        </div>
        <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
          {displayedMembers.map((member, index) => (
              <PengajarCard key={index} {...member} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)} 
            className="px-4 py-2 text-white bg-orange-500 rounded-full hover:bg-orange-600 focus:outline-none focus:ring"
          >
            {showAll ? "Sembunyikan" : "Lihat lebih banyak"} 
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pengajar;
