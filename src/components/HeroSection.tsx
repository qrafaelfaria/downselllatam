import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, Gem, ArrowRight, Ban, ArrowDown, TriangleAlert } from "lucide-react";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    initWiapyUpsell: (config: any) => void;
  }
}

const HeroSection = () => {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (typeof window.initWiapyUpsell === "function") {
      window.initWiapyUpsell({
        linkUrl: "https://pay.wiapy.com/checkout/69e832ba5d570505717cd744",
        linkText: "GARANTIR OFERTA",
        styles: {
          backgroundColor: "#094b00ff",
          hoverBackgroundColor: "#1e6b00ff",
          fontSize: "20px",
          borderRadius: "10px"
        },
        refusalLinkUrl: "https://costurahospitalar.vercel.app",
        refusalLinkText: "Não, vou deixar passar",
        refusalLinkColor: "#ffffffff"
      });
    }
  }, []);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [minutes, seconds]);

  return (
    <>
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-20 bg-[#c43c6f] text-white">
        {/* Top Urgent Bar */}
        <div className="bg-[#a02a50] text-white py-2 text-center font-bold uppercase tracking-widest text-2xl bg-urgency pt-8 pb-4">
          🚨 ESSA É A SUA ÚLTIMA CHANCE!
        </div>

        <div className="section-container mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white text-balance mb-4">
              São apenas mais 5 unidades disponíveis. <span className="text-[#ffe500]">E estamos liberando um desconto especial para você!</span>
            </h2>

            {/* Down Arrows */}
            <div className="flex justify-center my-8">
              <ArrowDown className="w-12 h-12 text-[#ffe500] animate-bounce" />
              <ArrowDown className="w-12 h-12 text-[#ffe500] animate-bounce delay-150" />
              <ArrowDown className="w-12 h-12 text-[#ffe500] animate-bounce delay-300" />
            </div>

            <p className="text-white text-xl sm:text-2xl mb-8">
              Essa oferta não ficará disponível <span className="text-[#ffe500] font-bold">novamente!</span> 
            </p>

            {/* Pricing */}
            <p className="text-white text-4xl sm:text-3xl font-bold mt-8">
              De <span className="line-through">R$ 49,90</span> por apenas <span className="text-[#ffe500]">R$ 4,90</span>
            </p>

{/* Wiapy Upsell Widget */}
            <div className="mt-8">
              <div id="wiapy_upsell"></div>
            </div>

          </motion.div>
        </div>
      </section>
      <section className="bg-[#c43c6f] text-white py-8 px-4 text-center">
        <p className="text-lg italic mb-4">
          Essa é a sua única chance de garantir esse pack com desconto. Ao fechar essa página, o valor volta ao normal e essa oferta desaparece.
        </p>
        <div className="flex flex-col items-center justify-center mb-8">
          <img src="/logocostura.png" alt="Curso de Costura Hospitalar" className="w-48 h-auto mx-auto mb-4 rounded-full" />
        </div>
        <div className="bg-[#ffe500] text-[#1a1a1a] py-4 px-4 text-center font-bold text-xl mb-4 gap-4 flex flex-col items-center justify-center">
          <p>OBRIGADO PELA SUA INSCRIÇÃO!</p>
          <p>Seu acesso ao curso já foi enviado ao seu E-mail!</p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
