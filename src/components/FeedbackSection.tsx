import React from 'react';
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

const FeedbackSection: React.FC = () => {
  const images = [
    "/Feed06.png",
    "/Feed07.png",
    "/Feed08.png",
  ];

  const [api, setApi] = React.useState<CarouselApi | null>(null);

  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      api.scrollNext();
    }, 2500);
    return () => clearInterval(id);
  }, [api]);

  return (
    <section className="sm:py-20 bg-secondary p-8">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-display font-black text-center text-foreground mb-4">
          Depoimentos reais
        </h2>
        <h1 className="text-center text-lg sm:text-xl leading-relaxed text-gray-700 font-medium">
          Veja oque nossas alunas estão dizendo
        </h1>
        <Carousel opts={{ loop: true }} setApi={setApi} className="max-w-4xl mx-auto">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="flex justify-center items-center p-2">
                  <img
                    src={src}
                    alt={`Depoimento ${index + 1}`}
                    className="max-w-full h-auto rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default FeedbackSection;
