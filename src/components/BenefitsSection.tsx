import { motion } from "framer-motion";
import { FileEdit, Printer, Sparkles, Layers } from "lucide-react";

const benefits = [
  {
    icon: FileEdit,
    title: "Template Digital Editável",
    description: "Arquivo pronto para personalizar com seus dados em poucos minutos.",
  },
  {
    icon: Printer,
    title: "Pronto para Imprimir",
    description: "Qualidade profissional para imprimir em casa ou na gráfica.",
  },
  {
    icon: Sparkles,
    title: "Prático e Criativo",
    description: "Um cartão diferente que chama atenção e valoriza sua marca.",
  },
  {
    icon: Layers,
    title: "Modelo Dobrável",
    description: "Design exclusivo para pendurar no retrovisor.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-4xl font-display font-black text-foreground mb-3">
            Por que escolher nossos cartões?
          </h2>
          <p className="text-muted-foreground text-lg">
            Tudo que você precisa para se destacar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-benefit text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
