import { motion } from "framer-motion";
import { DollarSign, ArrowRight, TrendingUp, Calculator } from "lucide-react";

const ProfitSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#fbe8ee]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-display font-black text-gray-900 leading-tight uppercase">
              💰 Lucre Mais com <span className="text-[#c43c6f]">Cada Peça</span>
            </h2>
            <p className="text-lg sm:text-2xl text-gray-600 font-bold max-w-2xl mx-auto">
              Veja a diferença que a personalização faz no seu bolso todos os meses.
            </p>
            <div className="w-12 h-1 bg-[#c43c6f] mx-auto rounded-full opacity-50" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {/* Peça Comum */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-gray-100 px-4 py-1 text-xs font-bold text-gray-400 uppercase tracking-widest rounded-bl-xl">
                Peça Comum
              </div>
              <p className="text-gray-500 font-bold mb-4 uppercase tracking-tighter">Venda por</p>
              <div className="text-4xl sm:text-5xl font-black text-gray-400">R$ 100</div>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-gray-400 font-medium italic italic text-sm">Preço de mercado comum</p>
              </div>
            </div>

            {/* Peça Personalizada */}
            <div className="bg-white rounded-3xl p-8 border-4 border-[#c43c6f] shadow-2xl text-center relative overflow-hidden group scale-105 z-10">
              <div className="absolute top-0 right-0 bg-[#c43c6f] px-4 py-1 text-xs font-bold text-white uppercase tracking-widest rounded-bl-xl">
                Personalizada
              </div>
              <p className="text-[#c43c6f] font-bold mb-4 uppercase tracking-tighter">Venda por</p>
              <div className="text-4xl sm:text-5xl font-black text-[#c43c6f]">R$ 150 <span className="text-lg">+</span></div>
              <div className="mt-8 pt-8 border-t border-[#f472b6]/20">
                <p className="text-[#c43c6f] font-black text-xl flex items-center justify-center gap-2">
                  <TrendingUp className="w-5 h-5" /> + R$ 50,00 DE LUCRO EXTRA
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#c43c6f] text-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            <Calculator className="absolute -right-10 -bottom-10 w-48 h-48 text-white opacity-10 -rotate-12" />
            
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                Imagine produzir apenas 30 peças por mês:
              </h3>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 inline-block w-full max-w-lg border border-white/20">
                <p className="text-xl sm:text-2xl font-bold mb-2">💵 Lucro adicional:</p>
                <p className="text-5xl sm:text-7xl font-black text-[#ffe500] drop-shadow-md">
                  R$ 1500 <span className="text-2xl text-white">mensais</span>
                </p>
              </div>
              
              <p className="text-lg sm:text-xl font-medium opacity-90 max-w-2xl mx-auto">
                Isso é dinheiro direto no seu bolso apenas por adicionar nomes e logotipos que levam poucos minutos para fazer.
              </p>
            </div>
          </motion.div>

          <p className="text-gray-500 font-bold italic pt-4">
            Quanto vale para você ganhar quase R$ 2.000 a mais sem trabalhar horas extras?
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfitSection;
