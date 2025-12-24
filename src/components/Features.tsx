import { MapPin, Shield, FileText, Wrench } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Ubicación Estratégica",
      description: "Zonas ecoturísticas y de alta proyección urbana, a 5 min. de la ciudad.",
    },
    {
      icon: Shield,
      title: "Empresa Formal (6 Años)",
      description: "Somos una empresa jurídica formal y transparente con 6 años de experiencia.",
    },
    {
      icon: FileText,
      title: "Documentos en Regla",
      description: "Tranquilidad total con títulos de propiedad matriz en regla y listos para revisión.",
    },
    {
      icon: Wrench,
      title: "Servicios y Recursos",
      description: "Proyectos con acceso a servicios básicos y recurso hídrico de agua de manantial.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-wider mb-2">
            POR QUÉ ELEGIRNOS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Invierte con total seguridad y confianza.
          </h2>
          <p className="text-text-muted text-lg mt-4 max-w-3xl mx-auto">
            Con 6 años de experiencia, Nakaes Inmobiliaria es una empresa formal y
            <br />
            transparente que te garantiza una inversión segura y rentable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-muted">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
