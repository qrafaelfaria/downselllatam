import { motion } from "framer-motion";
import heroCards from "@/assets/hero-cards.jpg";

const VideoSection = () => {
  return (
    <section className="py-8 sm:py-12">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-foreground/5">
            <div className="aspect-video">
              <img
                src={heroCards}
                alt="Cartões criativos para qualquer nicho"
                className="w-full h-full object-cover"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 cursor-pointer hover:bg-foreground/20 transition-colors">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Veja como é fácil personalizar seus cartões
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
