import { useState } from "react";
import { MapPin, Droplets, Package, Clock } from "lucide-react";
import masterPlan from "@/assets/master-plan.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const Project = () => {
  const [imageOpen, setImageOpen] = useState(false);

  return (
    <section id="proyectos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Project image */}
          <div 
            className="rounded-3xl aspect-square overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group"
            onClick={() => setImageOpen(true)}
          >
            <img 
              src={masterPlan} 
              alt="Master Plan del Residencial Pawqar Mita" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          </div>

          {/* Lightbox Dialog */}
          <Dialog open={imageOpen} onOpenChange={setImageOpen}>
            <DialogContent className="max-w-7xl p-2">
              <DialogTitle className="sr-only">Plano del Residencial Pawqar Mita</DialogTitle>
              <DialogDescription className="sr-only">
                Vista ampliada del plano del proyecto Residencial Pawqar Mita
              </DialogDescription>
              <img 
                src={masterPlan} 
                alt="Master Plan del Residencial Pawqar Mita - Vista ampliada" 
                className="w-full h-auto rounded-lg"
              />
            </DialogContent>
          </Dialog>

          {/* Right side - Content */}
          <div>
            <p className="text-primary font-semibold text-sm tracking-wider mb-2">
              PROYECTO ESTRELLA
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Residencial Pawqar Mita
            </h2>
            <p className="text-text-muted text-lg mb-6">
              El lugar perfecto para tu casa de campo, ubicado en una zona ecoturística 
              en el Sector Ladrillo, Distrito de Morales.
            </p>

            <h3 className="text-3xl font-bold text-primary mb-6">
              Lotes desde S/ 90,000
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground pt-2">
                  A solo 5 minutos de la plaza de Morales.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground pt-2">
                  Recurso hídrico de agua de manantial.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground pt-2">
                  Lotes desde 200 m² (10×20 ml) hasta 250 m².
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground pt-2">
                  Áreas verdes y de recreación incluidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
