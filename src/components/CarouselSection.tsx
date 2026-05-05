import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; // Importar o ícone de check
import image1 from "/Hosp01.webp";
import image7 from "/Hosp02.webp";
import image8 from "/Hosp03.webp";
import image20 from "/Hosp04.webp";
import image44 from "/Hosp05.webp";
import image69 from "/Hosp06.webp";
import image127 from "/Hosp07.webp";
import image128 from "/Hosp08.webp";
import image129 from "/Hosp09.webp";
import image130 from "/Hosp10.webp";
import image131 from "/Hosp11.webp";

const cards = [image1, image7, image8, image20, image44, image69, image127, image128, image129, image130, image131];
const duplicated = [...cards, ...cards];

const CarouselSection = () => {
  return (
    <section className="py-12 sm:py-12 overflow-hidden bg-[#fbe8ee]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee gap-4" style={{ width: "fit-content" }}>
          {duplicated.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 h-80 sm:w-80 sm:h-80 rounded-xl overflow-hidden transition-transform duration-300"
            >
              <img
                src={card}
                alt={`Capa de Caderno Personalizada ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-contain block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
