import { ArrowRight } from "lucide-react";

const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-card/95 backdrop-blur-md border-t border-border sm:hidden">
      <a
        href="#planos"
        className="cta-button w-full text-center text-base flex items-center justify-center gap-2"
      >
        QUERO ACESSAR AGORA
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default StickyMobileCTA;
