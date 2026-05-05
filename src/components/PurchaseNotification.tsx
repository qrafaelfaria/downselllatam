import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const names = [
  "Vanessa Ribeiro", "Lara Silva", "Ana Cristina", "Fernanda", "Mariana", "Juliana", "Camila R.", 
  "Beatriz S.", "Isabela Pimentel", "Priscila", "Renata", "Simone", "Tatiane", 
  "Cristiane Faria", "Alessandra", "Luciana N.", "Mônica Goulart", "Roberta", "Sabrina Castro", "Clara"
];

const PurchaseNotification = () => {
  const [currentName, setCurrentName] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      setCurrentName(randomName);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 4000); // Mostra por 4 segundos
    };

    // Primeira notificação após 3 segundos
    const initialTimeout = setTimeout(showNotification, 3000);

    // Loop de notificações a cada 10-15 segundos
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * (15000 - 10000) + 10000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed bottom-4 right-4 z-[9999] pointer-events-none"
        >
          <div className="bg-white/95 backdrop-blur-sm border-2 border-[#f472b6]/20 rounded-full py-2 px-6 flex items-center gap-3 shadow-xl">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#fff5f7] flex items-center justify-center border border-[#f472b6]/20">
              <CheckCircle2 className="w-5 h-5 text-[#c43c6f]" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-900 font-black text-sm leading-tight">
                {currentName}
              </span>
              <span className="text-gray-500 text-xs font-medium">
                Acabou de comprar o <span className="text-[#c43c6f] font-bold">Plano Premium!</span>
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PurchaseNotification;
