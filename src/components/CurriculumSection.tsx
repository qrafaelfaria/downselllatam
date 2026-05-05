import { motion } from "framer-motion";
import { CheckCircle2, Shirt, Baby, Dumbbell, Rose, PawPrint, ArrowRight } from "lucide-react";

const curriculumItems = [
  { icon: Shirt, text: "+1.000 Moldes Adulto Feminino" },
  { icon: Baby, text: "+500 Moldes Infantis (2 a 16 anos)" },
  { icon: Dumbbell, text: "+750 Moldes para Roupas Fitness" },
  { icon: PawPrint, text: "Moldes de Roupinhas para Pet" },
];

const CurriculumSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-black text-[#c43c6f] mb-4 uppercase tracking-tight">
            É por isso que criamos o KIT PREMIUM DE MOLDES
          </h2>
          <p className="text-xl text-black font-extrabold">
            Um verdadeiro acervo profissional para você nunca mais ficar sem opções.
          </p>
          <div className="w-20 h-1.5 bg-[#ffe500] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {curriculumItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-[#fbe8ee]/30 p-5 rounded-2xl border border-[#f472b6]/10 hover:border-[#c43c6f]/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#c43c6f] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-700">
                {item.text}
              </span>
              <CheckCircle2 className="w-6 h-6 text-[#22c55e] ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* O que isso muda na prática? */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h3 className="text-3xl sm:text-4xl font-display font-black text-[#c43c6f] mb-8">
            O que isso muda na prática?
          </h3>
          <div className="space-y-4 text-xl sm:text-2xl leading-relaxed text-gray-800 font-semibold">
            <p>Você deixa de depender de poucas peças…</p>
            <p>E passa a ter resposta para qualquer cliente.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-left">
            {[
              "Pediu roupa infantil? Você tem",
              "Pediu vestido? Você tem",
              "Pediu pet? Você tem",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-[#ffe500] p-1 rounded-full shrink-0">
                  <ArrowRight className="w-5 h-5 text-black" />
                </div>
                <span className="font-bold text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
