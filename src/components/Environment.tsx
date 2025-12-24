import aguaManantial from "@/assets/agua-manantial.jpg";
import lotesAmplios2 from "@/assets/lotes-amplios-2.jpg";
import lotesAmpliosNew from "@/assets/lotes-amplios-new.jpg";

const Environment = () => {
  const cards = [
    { title: "Naturaleza Exuberante", color: "bg-brand-yellow", image: lotesAmplios2 },
    { title: "Agua de Manantial", color: "bg-brand-yellow-light", image: aguaManantial },
    { title: "Lotes Amplios", color: "bg-brand-yellow", image: lotesAmpliosNew },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Conoce el Entorno
          </h2>
          <p className="text-text-muted text-lg">
            Imagina tu vida en este paraíso natural.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-3xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative group cursor-pointer"
            >
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero-dark/80 via-hero-dark/20 to-transparent flex items-end transition-all duration-500 group-hover:from-hero-dark/90">
                <h3 className="text-2xl font-bold text-white p-6 drop-shadow-lg transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Environment;
