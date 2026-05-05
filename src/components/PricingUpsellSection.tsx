import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react"; // Keep Check for FAQ

declare global {
  interface Window {
    initWiapyUpsell: (config: any) => void;
  }
}

const PricingUpsellSection = () => {
  useEffect(() => {
    if (typeof window.initWiapyUpsell === "function") {
      window.initWiapyUpsell({
        linkUrl: "https://pay.wiapy.com/checkout/69d71225585092329ccef181",
        linkText: "SIM! QUERO GARANTIR AGORA",
        styles: {
          backgroundColor: "#c43c6fff",
          hoverBackgroundColor: "#75394fff",
          fontSize: "20px",
          borderRadius: "10px"
        },
        refusalLinkUrl: "https://costurahospitalar.vercel.app",
        refusalLinkText: "Não, vou deixar passar",
        refusalLinkColor: "#000000"
      });
    }
  }, []);

  return (
    <section id="downsell" className="py-12 sm:py-20 bg-[#c43c6fff]">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          {/* Downsell Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white flex flex-col relative border-4 border-[#c43c6f] rounded-[3rem] shadow-2xl overflow-hidden mb-12"
          >
            <div className="px-6 sm:px-12 pt-12 text-center pb-12">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl sm:text-5xl font-display font-black text-gray-900 leading-tight uppercase">
                  KIT MOLDES PREMIUM
                </h2>
                <ul className="text-left text-gray-700 text-lg mt-4 space-y-2">
                  <li className="flex items-center">
                    <Check className="text-[#c43c6f] mr-2" size={20} /> Moldes de Roupinhas para Pet
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[#c43c6f] mr-2" size={20} /> +750 Moldes para Roupas Fitness
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[#c43c6f] mr-2" size={20} /> +500 Moldes Infantis
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[#c43c6f] mr-2" size={20} /> +1.000 Moldes Adulto Feminino
                  </li>
                </ul>
              </motion.div>

              {/* Pricing */}
              <div className="space-y-2">
                <p className="text-gray-500 text-lg line-through">De R$ 197,00</p>
                <p className="text-black text-lg">Por apenas: </p>
                <p className="text-4xl sm:text-5xl font-black text-[#c43c6f] my-4 drop-shadow-sm">
                R$ 14,90
                </p>
                <p className="text-gray-600 text-lg">ou 3x de R$ 5,41</p>
                <p className="text-gray-500 text-sm mt-2">Pagamento único, sem mensalidades.</p>
              </div>

              {/* Important Note */}
              <p className="text-gray-500 text-lg font-bold italic mt-8">
                🚫 Importante: Essa oferta não volta depois.
              </p>

              {/* Wiapy Upsell Widget */}
              <div className="mt-12">
                <div id="wiapy_upsell"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingUpsellSection;

