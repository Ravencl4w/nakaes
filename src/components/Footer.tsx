import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer-navy text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="text-2xl font-bold tracking-tight">NAKAES</div>
              <div className="text-xs text-primary font-semibold tracking-wider">INMOBILIARIA</div>
            </div>
            <p className="text-background/70 mb-6">
              Invirtiendo en tu futuro, lote por lote.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-background mb-4 tracking-wider text-sm">
              NAVEGACIÓN
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-background/70 hover:text-background transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-background/70 hover:text-background transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-background/70 hover:text-background transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-background/70 hover:text-background transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-background/70 hover:text-background transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#referidos" className="text-background/70 hover:text-background transition-colors">
                  Referidos
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-background mb-4 tracking-wider text-sm">
              LEGAL
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Libro de Reclamaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-background mb-4 tracking-wider text-sm">
              CONTACTO
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-background/70 flex-shrink-0 mt-0.5" />
                <a href="mailto:hola@nakaes.com" className="text-background/70 hover:text-background transition-colors">
                  hola@nakaes.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-background/70 flex-shrink-0 mt-0.5" />
                <a href="tel:+51987654321" className="text-background/70 hover:text-background transition-colors">
                  +51 987 654 321
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-background/70 flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Av. Principal 123, Miraflores,
                  <br />
                  Lima
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8">
          <p className="text-center text-background/50 text-sm">
            © 2025 Nakaes Inmobiliaria. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
