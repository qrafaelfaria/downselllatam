import React from 'react';
import { X } from 'lucide-react';

interface DiscountPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DiscountPopup: React.FC<DiscountPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-md w-full relative text-center">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl sm:text-3xl font-display font-black text-foreground mb-4">
          VOCÊ FOI PREMIADO!!!
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          Parabéns! Você desbloqueou um{" "}
          <span className="text-blue-600 font-semibold">desconto exclusivo.</span>
        </p>

        <div className="inline-block bg-blue-600 text-white text-sm sm:text-base font-bold px-4 py-2 rounded-full mb-4">
          PACOTE PREMIUM
        </div>

        <p className="text-3xl sm:text-4xl font-display font-black text-foreground mb-6">
          POR APENAS R$14,90
        </p>

        <a
          href="https://pay.wiapy.com/cCsuh8VAfR" // Placeholder, will be updated later
          className="cta-button w-full text-center text-base py-3 sm:py-4 mb-4 flex items-center justify-center gap-2"
        >
          SIM, QUERO A PROMOÇÃO! <span role="img" aria-label="fire">🔥</span>
        </a>

        <a
          href="https://pay.wiapy.com/M2HsCRlzc" // Placeholder, will be updated later
          className="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          NÃO, OBRIGADO. QUERO APENAS O PLANO BÁSICO POR R$10,00.
        </a>
      </div>
    </div>
  );
};

export default DiscountPopup;
