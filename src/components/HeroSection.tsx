import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    checkoutElements: any;
  }
}

const HeroSection = () => {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Load Hotmart script
    const script = document.createElement("script");
    script.src = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
    script.async = true;
    script.onload = () => {
      if (window.checkoutElements) {
        window.checkoutElements.init("salesFunnel").mount("#hotmart-sales-funnel");
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup if necessary, though usually scripts remain
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
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
          🚨 ¡ESTA ES TU ÚLTIMA OPORTUNIDAD!
        </div>

        <div className="section-container mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white text-balance mb-4">
              Solo quedan 5 unidades disponibles. <span className="text-[#ffe500]">¡Y estamos liberando un descuento especial para ti!</span>
            </h2>

            {/* Down Arrows */}
            <div className="flex justify-center my-8">
              <ArrowDown className="w-12 h-12 text-[#ffe500] animate-bounce" />
              <ArrowDown className="w-12 h-12 text-[#ffe500] animate-bounce delay-150" />
              <ArrowDown className="w-12 h-12 text-[#ffe500] animate-bounce delay-300" />
            </div>

            <p className="text-white text-xl sm:text-2xl mb-8">
              ¡Esta oferta no estará disponible <span className="text-[#ffe500] font-bold">de nuevo!</span> 
            </p>

          </motion.div>
        </div>
      </section>
      <section className="bg-[#c43c6f] text-white py-8 px-4 text-center">
        <p className="text-lg italic mb-4">
          Esta es tu única oportunidad de asegurar este pack con descuento. Al cerrar esta página, el valor vuelve a la normalidad y esta oferta desaparece.
        </p>
        <div className="flex flex-col items-center justify-center mb-8">
          <img src="/logocostura.png" alt="Curso de Costura Hospitalaria" className="w-48 h-auto mx-auto mb-4 rounded-full" />
        </div>
        <div className="bg-[#ffe500] text-[#1a1a1a] py-4 px-4 text-center font-bold text-xl mb-4 gap-4 flex flex-col items-center justify-center">
          <p>¡GRACIAS POR TU INSCRIPCIÓN!</p>
          <p>¡Tu acceso al curso ya ha sido enviado a tu correo electrónico!</p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
