import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  judul: string;
  deskripsi: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, judul, deskripsi }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-11/12 sm:w-3/4 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4">{judul}</h2>
        <p className="text-gray-700 mb-6">{deskripsi}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default Modal;
