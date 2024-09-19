import { IoSearch } from "react-icons/io5";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full flex p-5 fixed top-0 left-0 bg-white shadow-md z-50 justify-between items-center">
      <div className="flex items-center space-x-4">
        <Image src={logo} alt="Bimbel Bumi Cerdas" className="h-12 w-12 object-contain" />
        <h1 className="text-xl font-semibold text-gray-800">Bimbel Bumi Cerdas</h1>
      </div>
      <div className="flex items-center space-x-8">
        <ul className="hidden md:flex items-center space-x-6 text-gray-700">
          <li className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
            <a href="#home">Beranda</a>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
            <a href="#program">Program</a>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
            <a href="#prestasi">Prestasi</a>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
            <a href="#pengajar">Pengajar</a>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
            <a href="#testimoni">Testimoni</a>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
            <a href="#tentang">Tentang</a>
          </li>
        </ul>
        <button
          aria-label="Search"
          className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
        >
          <IoSearch size={20} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
