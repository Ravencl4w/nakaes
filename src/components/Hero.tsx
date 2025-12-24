import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const Hero = () => {
  const heroImages = [hero1, hero2, hero3];
  
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <section id="inicio" className="relative min-h-[600px] overflow-hidden">
      {/* Background Carousel */}
      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        className="absolute inset-0 w-full h-full"
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[600px]">
                <img
                  src={image}
                  alt={`Vista aérea del proyecto ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "low"}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-hero-dark/40 via-hero-dark/60 to-hero-dark/80" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex items-center justify-center min-h-[600px]">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Tu Casa de Campo en
            <br />
            Morales te Espera
          </h1>
          <p className="text-lg md:text-xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Descubre Residencial Pawqar Mita: un refugio ecoturístico a solo 5 minutos de la
            <br />
            plaza de Morales, con agua de manantial y la tranquilidad que buscas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white hover:bg-white/90 text-hero-dark font-semibold shadow-lg">
              Ver Proyecto
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-hero-dark backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              Agendar una Cita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
