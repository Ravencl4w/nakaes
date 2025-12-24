import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <div className="text-2xl font-bold text-foreground tracking-tight">NAKAES</div>
            <div className="text-xs text-primary font-semibold tracking-wider">INMOBILIARIA</div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#inicio" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Inicio
          </a>
          <a 
            href="#proyectos"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Proyectos
          </a>
          <a 
            href="#nosotros"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Nosotros
          </a>
          <a 
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Contacto
          </a>
        </div>

        <Button 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          onClick={() => document.getElementById('referidos')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Programa de Referidos
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
