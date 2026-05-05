import { motion } from "framer-motion";
import { Check, Star, Infinity, ShieldCheck, MessageCircle } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="planos" className="py-2 sm:py-2 bg-[#fbe8ee]">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          {/* Delivery Notice Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 relative bg-[#fff5f7] border-2 border-[#f472b6]/30 rounded-[2rem] p-6 text-center shadow-sm"
          >
            <p className="text-gray-700 font-bold text-sm sm:text-base leading-relaxed">
              Aqui no <span className="text-[#c43c6f]">Curso de Costura Hospitalar</span>, após o pagamento você receberá o acesso do curso no seu <span className="text-[#c43c6f]">Email</span> e também no seu <span className="text-[#c43c6f]">WhatsApp</span>.
            </p>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-full p-1 border border-[#f472b6]/30">
              <div className="bg-[#22c55e] rounded-full p-1">
                <MessageCircle className="w-4 h-4 text-white fill-white" />
              </div>
            </div>
          </motion.div>

          {/* Premium Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white flex flex-col relative border-2 border-[#f472b6]/30 rounded-[2.5rem] shadow-xl overflow-hidden"
          >
            {/* Header Badges */}
            <div className="bg-[#c43c6f] py-2 text-center text-white text-sm font-black uppercase tracking-wider">
              ⭐ MAIS VENDIDO ⭐
            </div>
            <div className="bg-[#cc1d24] py-1.5 text-center text-white text-medium sm:text-medium font-black uppercase tracking-wider">
              🔥 RESTAM APENAS 10 VAGAS 🔥
            </div>

            <div className="px-6 sm:px-12 pt-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-display font-black text-gray-900 uppercase">
                PLANO PREMIUM
              </h2>
              <p className="text-gray-500 font-medium mt-1">Acesso completo ao curso</p>

              {/* Acesso Vitalício Highlight */}
              <div className="mt-8 p-6 border-2 border-[#f472b6]/30 rounded-2xl bg-[#fff5f7]">
                <div className="flex items-center justify-center gap-3 text-[#c43c6f]">
                  <div className="bg-[#7c3aed] p-1 rounded-md text-white">
                    <Infinity className="w-6 h-6" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black tracking-tight">
                    ACESSO VITALÍCIO
                  </span>
                </div>
                <p className="mt-2 text-gray-700 text-sm sm:text-base">
                  Pague uma única vez e tenha acesso <span className="font-bold">para sempre</span>
                </p>
              </div>

              {/* Pricing */}
              <div className="mt-10 space-y-1">
                <p className="text-gray-400 line-through text-lg">De R$ 97,00</p>
                <p className="text-gray-500 font-medium">Por apenas</p>
                <div className="text-5xl sm:text-6xl font-black text-[#c43c6f] mt-2">
                  R$ 19,90
                </div>
                <p className="text-[#c43c6f] font-bold text-xl mt-1">
                  ou 4x de R$ 5,57
                </p>
                <p className="text-gray-400 text-sm mt-4 italic">
                  Pagamento único, sem mensalidades.
                </p>
              </div>

              {/* Benefits List */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-left">
                {[
                  "+100 Moldes Hospitalares",
                  "+100 Vídeo Aulas",
                  "Lista de Fornecedores",
                  "Suporte e Comunidade",
                  "Certificado de Conclusão",
                  "Grupo VIP no WhatsApp",
                  "Acesso Imediato",
                  "Atualizações Constantes"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm sm:text-base text-gray-700 font-semibold">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#c43c6f] flex items-center justify-center">
                      <Check className="w-3 h-3 text-white stroke-[4px]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-12">
                <a 
                  href="https://pay.wiapy.com/eWxbrwirql" 
                  className="block w-full py-5 bg-[#c43c6f] text-white text-xl font-black uppercase rounded-2xl shadow-lg hover:bg-[#a32d5a] transition-all transform hover:scale-[1.02] active:scale-[0.98] animate-pulse-glow"
                >
                  QUERO GARANTIR MINHA VAGA
                </a>
              </div>

              {/* Footer */}
              <div className="mt-6 mb-10 flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
                <div className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center">
                  <Check className="w-3 h-3 text-white stroke-[4px]" />
                </div>
                <span>Garantia de 30 dias</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
