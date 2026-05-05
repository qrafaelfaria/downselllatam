import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-8 sm:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-urgency font-bold text-sm mb-4">
            <Clock className="w-4 h-4" />
            Últimas vagas com desconto
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-foreground mb-4 text-balance">
            Não perca essa oportunidade 
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Mais de 2.000 costureiras já estão usando nossos moldes. Garanta seu acesso agora.
          </p>
          <a href="#planos" className="cta-button animate-pulse-glow inline-flex items-center gap-2">
            GARANTIR MEU ACESSO
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-muted-foreground mt-4">
            Satisfação garantida ou seu dinheiro de volta em 7 dias
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
