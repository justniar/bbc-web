import React from "react";
import { useRouter } from 'next/navigation'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  judul: string;
  deskripsi: string;
  redirectUrl: string; // New prop for redirection
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, judul, deskripsi, redirectUrl }) => {
  const router = useRouter();

  if (!isOpen) return null;

  // Function to handle the redirection
  const handleRedirect = () => {
    router.push(redirectUrl);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-11/12 sm:w-3/4 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4">{judul}</h2>
        <p className="text-gray-700 mb-6">{deskripsi}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Tutup
          </button>
          <button
            onClick={handleRedirect}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Lihat Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
