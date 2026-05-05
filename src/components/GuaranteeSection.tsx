import React from 'react';
import { ShieldCheck, Shield } from 'lucide-react';
import { motion } from "framer-motion";

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#fbe8ee]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-[#fff5f7] border-2 border-[#f472b6]/30 rounded-[2.5rem] p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Side: Icon Badge */}
            <div className="flex-shrink-0 relative">
              <div className="w-32 h-32 sm:w-40 sm:40 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-[#f472b6]/20">
                <Shield className="w-16 h-16 sm:w-20 sm:h-20 text-[#c43c6f] stroke-[1.5px]" />
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#c43c6f] font-bold text-sm tracking-widest uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Compra Protegida</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-gray-900 leading-tight">
                Garantia Incondicional de <span className="text-[#c43c6f]">30 Dias</span>
              </h2>

              <div className="text-gray-600 space-y-4 text-base sm:text-lg leading-relaxed">
                <p>
                  Você tem <span className="text-[#c43c6f] font-bold">30 dias</span> para decidir se isso realmente faz sentido pra você. Acesse o Curso, veja as aulas, avalie com calma.
                </p>
                <p>
                  Se dentro de 30 dias você perceber que não é pra você, basta solicitar o reembolso e <span className="text-[#c43c6f] font-bold">todo o valor será devolvido</span>. Sem perguntas, sem burocracia e sem risco.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
