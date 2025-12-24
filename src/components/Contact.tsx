import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contáctanos
            </h2>
            <p className="text-text-muted text-lg mb-8">
              ¿Listo para dar el siguiente paso? Agenda una visita o déjanos tus dudas y un 
              asesor se comunicará contigo.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Nombre Completo
                </label>
                <Input 
                  placeholder="Tu Nombre" 
                  className="bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Celular
                </label>
                <Input 
                  placeholder="987654321" 
                  className="bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Mensaje
                </label>
                <Textarea 
                  placeholder="Estoy interesado en el Residencial Pawqar Mita, me gustaría agendar una visita..." 
                  className="bg-background min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-hero-dark hover:bg-hero-dark/90 text-background font-semibold"
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>

          {/* Right side - Google Maps */}
          <div className="rounded-3xl overflow-hidden shadow-lg h-full min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3964.4157056121476!2d-76.38378399999999!3d-6.468908000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjgnMDguMSJTIDc2wrAyMycwMS42Ilc!5e0!3m2!1ses!2spe!4v1766332105576!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Residencial Pawqar Mita"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
