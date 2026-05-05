import { motion } from "framer-motion";
import { Timer } from "lucide-react";
import plannerImage from "/Instagram.jpeg";
import stickersImage from "/Cardapio.jpeg";
import labelsImage from "/Aula.jpeg";
import pascoaImage from "/Pascoa.png";
import mini from "/Mini.jpeg";
import sacola from "/Sacola.jpeg";

const bonuses = [
 
];

const BonusSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-urgency/10 text-urgency text-sm font-bold mb-4">
            <Timer className="w-4 h-4" />
            <span>Disponível apenas hoje</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-foreground mb-3">
            Bônus exclusivos{" "}
            <span className="text-[#ff0073]">apenas HOJE</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Aproveite antes que a oferta expire
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={bonus.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-benefit relative overflow-hidden"
            >
              <div className="absolute top-3 right-3 z-10">
            <span className="badge-exclusive text-xl md:text-2xl px-6 py-3"># BÔNUS {i + 1}</span>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden mb-4">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base font-display font-bold text-foreground text-center text-lg mb-2">
                {bonus.title}
              </h3>
              <p className="text-red-500 text-md font-semibold text-center line-through mb-2">
                GRÁTIS HOJE
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
