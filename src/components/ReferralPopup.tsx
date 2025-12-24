import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Users, Gift, TrendingUp, Sparkles } from "lucide-react";
import referralImage from "@/assets/lotes-amplios-new.jpg";

const ReferralPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show popup after 1 second when landing loads
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[95vw] md:max-w-5xl p-0 border-0 overflow-hidden bg-background max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">Programa de Referidos</DialogTitle>
        <DialogDescription className="sr-only">
          Gana S/ 1,500 por cada amigo que invites a invertir en Nakaes
        </DialogDescription>
        
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left side - Image */}
          <div className="relative h-full min-h-[200px] md:min-h-[500px]">
            <img
              src={referralImage}
              alt="Programa de Referidos - Lotes NAKAES"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="p-6 md:p-12 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-2 rounded-full mb-4 animate-fade-in">
                <Sparkles className="w-4 h-4" />
                <span className="font-semibold text-sm">PROGRAMA DE REFERIDOS</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                ¡Gana S/ 1,500 por cada amigo!
              </h3>

              {/* Description */}
              <p className="text-text-muted text-sm md:text-base mb-4 md:mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Invita a tus conocidos a invertir en Nakaes y recibe una gran comisión por cada venta cerrada.
              </p>

              {/* Benefits */}
              <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Gift className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <span className="text-sm md:text-base text-foreground">S/ 1,500 por venta cerrada</span>
                </div>

                <div className="flex items-center gap-2 md:gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <span className="text-sm md:text-base text-foreground">Sin límite de referidos</span>
                </div>

                <div className="flex items-center gap-2 md:gap-3 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <span className="text-sm md:text-base text-foreground">Proceso simple y rápido</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm md:text-base hover:scale-105 transition-all duration-300 shadow-lg animate-fade-in"
                style={{ animationDelay: "0.6s" }}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = "https://wa.link/v51eru";
                  link.target = "_blank";
                  link.click();
                  setOpen(false);
                }}
              >
                Quiero ser Referente
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReferralPopup;
