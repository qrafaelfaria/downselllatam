import { motion } from "framer-motion";

const AccessInfoSection = () => {
  return (
    <section className="py-4 bg-secondary">
      <div className="section-container">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-benefit text-center mb-8 border-2 border-[#0c3769] bg-white"
          >
            <div className="px-6 py-6">
              <p className="tracking-widest text-xs sm:text-sm font-display font-black text-[#0c3769]">
                ACESSO IMEDIATO!
              </p>
              <h3 className="mt-1 text-2xl sm:text-3xl font-display font-black text-[#0c3769]">
                COMO APROVEITAR A{" "}
                <span className="text-black bg-[#ffe500] px-2 py-1 text-medium">PROMOÇÃO?</span>
              </h3>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                Após realizar o pagamento você recebe{" "}
                <span className="font-semibold text-black font-black">automaticamente</span> por e‑mail
                e também no seu <span className="font-semibold text-[#0c3769]">WhatsApp</span> o link para acessar o
                material em vídeo e bônus adicionais para baixar e estudar onde quiser.
              </p>
              <img src="/logo_wiapy_fCXIrP.png" alt="Wiapy" className="mx-auto my-6 w-44 h-auto" />
              <p className="text-xs sm:text-sm text-muted-foreground">
                Lembramos que sua compra está protegida pela Wiapy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AccessInfoSection;
