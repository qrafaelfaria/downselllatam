import { motion } from "framer-motion";
import { DollarSign, Package, TrendingUp } from "lucide-react";

const EarningsSimulationSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#fbe8ee]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-gray-900 leading-tight">
              Como você pode ganhar <span className="text-[#c43c6f]">R$ 3.000 a R$ 5.000</span> por mês
            </h2>
            <div className="space-y-1 text-gray-500 font-medium">
              <p>Esses valores não são promessas.</p>
              <p>São exemplos do que alunas conseguem vendendo conjuntos hospitalares sob encomenda.</p>
            </div>
            <div className="w-12 h-1 bg-[#c43c6f] mx-auto rounded-full opacity-50" />
          </div>

          <div className="bg-white rounded-[2.5rem] p-6 sm:p-12 shadow-xl border-2 border-[#f472b6]/10">
            <h3 className="text-xl sm:text-2xl font-display font-black text-gray-800 mb-10">
              Simulação Real de Ganhos
            </h3>

            {/* Price boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-[#fffbeb] border-2 border-[#fde68a] rounded-2xl p-4 space-y-2">
                <div className="flex justify-center text-[#d97706]">
                  <DollarSign className="w-6 h-6" />
                </div>
                <p className="text-xs font-black text-[#d97706] uppercase tracking-wider">Preço</p>
                <p className="text-2xl font-black text-[#d97706]">R$ 120</p>
              </div>
              <div className="bg-[#fff1f2] border-2 border-[#fecdd3] rounded-2xl p-4 space-y-2">
                <div className="flex justify-center text-[#e11d48]">
                  <Package className="w-6 h-6" />
                </div>
                <p className="text-xs font-black text-[#e11d48] uppercase tracking-wider">Custo</p>
                <p className="text-2xl font-black text-[#e11d48]">R$ 35</p>
              </div>
              <div className="bg-[#f0fdf4] border-2 border-[#bbf7d0] rounded-2xl p-4 space-y-2">
                <div className="flex justify-center text-[#16a34a]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <p className="text-xs font-black text-[#16a34a] uppercase tracking-wider">Lucro</p>
                <p className="text-2xl font-black text-[#16a34a]">R$ 85</p>
              </div>
            </div>

            {/* Earnings table */}
            <div className="space-y-3">
              {[
                { qty: "10 peças/mês", total: "R$ 850" },
                { qty: "20 peças/mês", total: "R$ 1.700" },
                { qty: "35 peças/mês", total: "R$ 2.975", highlight: true },
                { qty: "60 peças/mês", total: "R$ 5.100" },
              ].map((item) => (
                <div 
                  key={item.qty}
                  className={`flex justify-between items-center p-4 sm:p-5 rounded-xl border-2 transition-all ${
                    item.highlight 
                      ? "bg-[#fff1f2] border-[#f472b6] shadow-md transform scale-[1.02]" 
                      : "bg-[#f8fafc] border-gray-100"
                  }`}
                >
                  <span className={`font-bold ${item.highlight ? "text-[#c43c6f]" : "text-gray-600"}`}>
                    {item.qty}
                  </span>
                  <span className={`font-black text-lg ${item.highlight ? "text-[#c43c6f]" : "text-gray-800"}`}>
                    {item.total}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-500 font-medium italic">
            Você decide quanto quer produzir e quanto quer ganhar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EarningsSimulationSection;
