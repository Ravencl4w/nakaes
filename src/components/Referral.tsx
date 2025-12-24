import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Gift, HandshakeIcon } from "lucide-react";

const Referral = () => {
  const benefits = [
    { icon: Gift, text: "S/ 1,500 por venta" },
    { icon: TrendingUp, text: "Sin límite de referidos" },
    { icon: HandshakeIcon, text: "Proceso simple" },
  ];

  return (
    <section id="referidos" className="py-20 bg-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-foreground rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-foreground rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-primary-foreground/10 p-4 rounded-2xl backdrop-blur-sm animate-scale-in">
                <Users className="w-12 h-12 text-primary-foreground flex-shrink-0" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-3 animate-fade-in">
                  ¡Gana S/ 1,500 por cada amigo!
                </h2>
                <p className="text-primary-foreground/90 text-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  Invita a tus conocidos a invertir en Nakaes y recibe una gran comisión por cada venta cerrada.
                </p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-background hover:bg-background/90 text-foreground font-semibold flex-shrink-0 hover:scale-105 transition-transform duration-300 shadow-lg animate-fade-in"
              style={{ animationDelay: "0.2s" }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = "https://wa.link/v51eru";
                link.target = "_blank";
                link.click();
              }}
            >
              Quiero ser Referente
            </Button>
          </div>

          {/* Benefits cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-4 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <benefit.icon className="w-8 h-8 text-primary-foreground flex-shrink-0" />
                <span className="text-primary-foreground font-semibold text-lg">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referral;
