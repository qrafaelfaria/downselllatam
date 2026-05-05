import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#fbe8ee]">
      <div className="section-container max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-display font-black text-[#c43c6f] text-center mb-6">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-gray-600 mb-8 font-medium">
          Tire suas dúvidas sobre o Curso de Costura Hospitalar e comece sua jornada hoje mesmo.
        </p>

        <Accordion type="single" collapsible className="w-full space-y-3">
          <AccordionItem value="item-1" className="bg-white rounded-2xl border-2 border-[#f472b6]/20 px-4">
            <AccordionTrigger className="text-[#c43c6f] font-bold text-left hover:no-underline">O curso serve para quem nunca costurou?</AccordionTrigger>
            <AccordionContent className="text-gray-600 font-medium leading-relaxed">
              Sim! O curso foi desenhado do absoluto zero. Você aprenderá desde como manusear a máquina até o acabamento final das peças hospitalares, com um método simples e direto ao ponto.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white rounded-2xl border-2 border-[#f472b6]/20 px-4">
            <AccordionTrigger className="text-[#c43c6f] font-bold text-left hover:no-underline">Como recebo acesso ao curso?</AccordionTrigger>
            <AccordionContent className="text-gray-600 font-medium leading-relaxed">
              O acesso é imediato! Assim que seu pagamento for confirmado, você receberá automaticamente os dados de acesso no seu e-mail e também uma mensagem de boas-vindas no seu WhatsApp.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white rounded-2xl border-2 border-[#f472b6]/20 px-4">
            <AccordionTrigger className="text-[#c43c6f] font-bold text-left hover:no-underline">Vou receber os moldes prontos?</AccordionTrigger>
            <AccordionContent className="text-gray-600 font-medium leading-relaxed">
              Sim! Você terá acesso a mais de 100 moldes profissionais (PP ao GG) prontos para imprimir em tamanho real. Basta imprimir, cortar o tecido e seguir as aulas de costura.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-white rounded-2xl border-2 border-[#f472b6]/20 px-4">
            <AccordionTrigger className="text-[#c43c6f] font-bold text-left hover:no-underline">O acesso ao curso é por quanto tempo?</AccordionTrigger>
            <AccordionContent className="text-gray-600 font-medium leading-relaxed">
              O seu acesso é vitalício! Isso significa que você pode assistir às aulas no seu ritmo, quantas vezes quiser, e ainda terá direito a todas as atualizações futuras sem pagar nada a mais por isso.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-white rounded-2xl border-2 border-[#f472b6]/20 px-4">
            <AccordionTrigger className="text-[#c43c6f] font-bold text-left hover:no-underline">Terei suporte se tiver dúvidas?</AccordionTrigger>
            <AccordionContent className="text-gray-600 font-medium leading-relaxed">
              Com certeza! Você terá acesso ao nosso Grupo VIP de alunas e suporte prioritário para tirar qualquer dúvida técnica sobre a costura ou sobre os moldes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-white rounded-2xl border-2 border-[#f472b6]/20 px-4">
            <AccordionTrigger className="text-[#c43c6f] font-bold text-left hover:no-underline">Quais peças vou aprender a fazer?</AccordionTrigger>
            <AccordionContent className="text-gray-600 font-medium leading-relaxed">
              Você aprenderá a produzir a linha completa de uniformes hospitalares: Scrubs (pijamas cirúrgicos), jalecos profissionais, toucas, máscaras e roupas para clínicas de estética e consultórios.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
