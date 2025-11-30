import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white border-2 border-gray-800 p-6 rounded-lg shadow-2xl max-w-lg w-full relative transform transition-all scale-100" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-500 transition-colors"
        >
          &times;
        </button>
        <h3 className="text-2xl font-serif font-bold mb-4 border-b border-gray-200 pb-2 text-gray-800">{title}</h3>
        <div className="font-sans text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};