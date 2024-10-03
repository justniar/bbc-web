import anna from "@/assets/pengajar/mis anna.jpeg";
import dinah from "@/assets/pengajar/miss dinah.jpeg";
import halimah from "@/assets/pengajar/miss halimah.jpg";
import juju from "@/assets/pengajar/miss juju.jpeg";
import mei from "@/assets/pengajar/miss mei.jpeg";
import santi from "@/assets/pengajar/miss santi.jpg";
import shally from "@/assets/pengajar/miss shally.jpeg";
import tini from "@/assets/pengajar/miss tini.jpeg";
import PengajarCard from "./PengajarCard";

const Pengajar = () => {
  const teamMembers = [
    {
      name: "Miss Anna ",
      role: "Baca, Prisma, Bahasa Inggris",
      description: "Don't rely on luck, but believe in hard work",
      imgSrc: anna,
      emailLink: "mailto:missanna@example.com", 
      instagramLink: "https://instagram.com/missanna", 
      linkedinLink: "https://linkedin.com/in/missanna", 
    },
    {
      name: "Miss Dinah",
      role: "Baca, Prisma",
      description: "Jalani, Syukuri, Nikmati🤍",
      imgSrc: dinah,
      emailLink: "mailto:missanna@example.com", 
      instagramLink: "https://instagram.com/missanna", 
      linkedinLink: "https://linkedin.com/in/missanna", 
    },
    {
      name: "Miss Halimah",
      role: "Baca, Prisma",
      description: "Life is a choice",
      imgSrc: halimah,
      emailLink: "mailto:missanna@example.com", 
      instagramLink: "https://instagram.com/missanna", 
      linkedinLink: "https://linkedin.com/in/missanna", 
    },
    {
      name: "Miss Juju",
      role: "Baca, Prisma",
      description: "Tetap percaya diri diera gempuran omongan orang",
      imgSrc: juju,
      emailLink: "mailto:missanna@example.com", 
      instagramLink: "https://instagram.com/missanna", 
      linkedinLink: "https://linkedin.com/in/missanna", 
    },
    {
      name: "Miss Mei",
      role: "Baca, Prisma",
      description: "Mengajar merupakan skill dan passion saya.",
      imgSrc: mei,
      emailLink: "mailto:missanna@example.com", 
      instagramLink: "https://instagram.com/missanna", 
      linkedinLink: "https://linkedin.com/in/missanna", 
    },
    {
      name: "Miss Santi",
      role: "Bahasa Inggris",
      description: "Spread the love and share the happiness😃",
      imgSrc: santi,
      emailLink: "mailto:missanna@example.com", 
      instagramLink: "https://instagram.com/missanna", 
      linkedinLink: "https://linkedin.com/in/missanna", 
    },
    {
      name: "Miss Shally",
      role: "Baca, Prisma",
      description: "Setiap hari adalah kesempatan baru untuk memulai",
      imgSrc: shally,
      emailLink: "mailto:missanna@example.com", 
      instagramLink: "https://instagram.com/missanna", 
      linkedinLink: "https://linkedin.com/in/missanna", 
    },
    {
      name: "Miss Tini",
      role: "Baca, Prisma, Bahasa Inggris",
      description: "Jalani, Nikmati, Syukuri",
      imgSrc: tini,
      emailLink: "mailto:missanna@example.com", 
      instagramLink: "https://instagram.com/missanna", 
      linkedinLink: "https://linkedin.com/in/missanna", 
    },
  ];

  return (
    <section className="flex justify-center items-center bg-white max-w-[400px] md:max-w-full dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Tim Pengajar BBC</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          </p>
        </div>
        <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
          {teamMembers.map((member, index) => (
            <PengajarCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pengajar;
