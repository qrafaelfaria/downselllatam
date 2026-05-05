import React from 'react';
import { Mail, Printer, Pencil, Brush } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="section-container text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-black text-foreground mb-6">
          Muito simples de começar a utilizar!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Chega no E-mail */}
          <div className="flex flex-col items-center p-6 border-2 border-dashed border-blue-300 rounded-xl">
            <Mail className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-display font-bold text-blue-600 mb-2">
              +100 MOLDES PROFISSIONAIS
            </h3>
            <p className="text-gray-700 text-center">
              Todos com grade completa do PP ao GG com ajustes automáticos para nunca errar na medida.
            </p>
          </div>

          {/* Card 2: Você Imprime */}
          <div className="flex flex-col items-center p-6 border-2 border-dashed border-blue-300 rounded-xl">
            <Brush className="w-12 h-12 text-gray-600 mb-4" />
            <h3 className="text-xl font-display font-bold text-blue-600 mb-2">
              CHEGA NO E-MAIL
            </h3>
            <p className="text-gray-700 text-center">
              Após a compra você recebe o acesso ao kit completo diretamente no seu email.
            </p>
          </div>

          {/* Card 3: Os Pequenos Amam */}
          <div className="flex flex-col items-center p-6 border-2 border-dashed border-blue-300 rounded-xl">
            <Printer className="w-12 h-12 text-[#0c3769] mb-4" />
            <h3 className="text-xl font-display font-bold text-blue-600 mb-2">
              BAIXE, IMPRIMA E USE
            </h3>
            <p className="text-gray-700 text-center">
              Exporte em alta qualidade, imprima quantas vezes quiser e tenha peças únicas e profissionais para usar ou vender.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
