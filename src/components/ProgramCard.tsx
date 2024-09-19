import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProgramCardProps {
  src: string;
  judul: string;
  deskripsi: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ src, judul, deskripsi }) => {
  return (
    <div className="w-[200px] md:w-[300px] m-[20px] md:m-[10px] p-6 md:p-8 bg-white shadow-lg cursor-pointer hover:bg-orange-50 hover:shadow-xl transition-shadow duration-300 rounded-xl flex flex-col items-center text-center space-y-3 sm:space-y-5">
      <Image src={src} alt={judul} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" width={100} height={100}/>
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{judul}</h2>
      <p className="text-sm sm:text-base text-gray-600">
        {deskripsi ? deskripsi : "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
      </p>
    </div>
  );
};

export default ProgramCard;
