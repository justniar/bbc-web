"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pengajar from "@/components/Pengajar";
import Prestasi from "@/components/prestasi/Prestasi";
import Profil from "@/components/Profil";
import Program from "@/components/program/Program";
// import Testimoni from "@/components/Testimoni";

export default function Home() {
  return (
    <div className="w-[420px] md:w-full bg-[url('/bg.svg')] dark:bg-[url('/bg_dark.svg')] bg-cover">
      <Navbar />
      <main className="pt-20">
        <Hero/>
        <Program/>
        <Profil/>
        <Prestasi/>
        <Pengajar/>
        {/* <Testimoni/> */}
        <Footer/>
      </main>
    </div>
  );
}
