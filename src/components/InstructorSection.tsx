import { motion } from "framer-motion";

const InstructorSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#fbe8ee]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white/40 backdrop-blur-sm border-2 border-[#f472b6]/20 rounded-[2.5rem] p-8 sm:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
              {/* Profile Image */}
              <div className="flex-shrink-0 relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src="/instrutora.png" 
                    alt="Iara Ferreira" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop";
                    }}
                  />
                </div>
                {/* Subtle glow behind image */}
                <div className="absolute inset-0 bg-[#c43c6f]/10 rounded-full blur-2xl -z-10" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="space-y-2">
                  <p className="text-[#c43c6f] font-bold text-sm tracking-widest uppercase">
                    Sua Professora
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900">
                    Iara Ferreira
                  </h2>
                </div>

                <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Oi, eu sou a criadora do <span className="font-bold">Curso de Costura Hospitalar</span>. A costura faz parte da minha vida há anos e foi na prática, entre erros e acertos, que aprendi a criar peças profissionais, bem feitas e com acabamento impecável para o setor da saúde.
                  </p>
                  <p>
                    Criei este curso para ensinar de forma simples e clara, com aulas passo a passo que realmente funcionam, tanto para quem está começando do zero quanto para quem já costura e quer se especializar.
                  </p>
                  <p>
                    Meu objetivo é ajudar você a transformar tecidos em peças de alto valor, garantindo sua autonomia e ajudando você a conquistar uma renda real com a costura hospitalar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button below card */}
          <div className="mt-12 flex justify-center">
            <a 
              href="#planos" 
              className="cta-button w-full sm:w-auto px-12 py-5 text-center text-lg animate-pulse-glow"
            >
              QUERO GARANTIR MINHA VAGA
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorSection;
