import Link from "next/link";
import { DfacLogo } from "@/components/icons/dfac-logo";
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 py-12 mx-auto">
        <div className="space-y-4">
          <DfacLogo />
          <p className="text-sm text-muted-foreground max-w-xs">
            Soluciones y accesorios para cimbra de alta calidad para la industria de la construcción.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Contacto</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><a href="tel:5525989751" className="hover:text-primary transition-colors">55-2598-9751</a></li>
            <li><a href="tel:5541673745" className="hover:text-primary transition-colors">55-4167-3745</a></li>
            <li><a href="tel:5555715084" className="hover:text-primary transition-colors">55-5571-5084</a></li>
            <li><a href="mailto:ventas@cimbrayaccesorios.com.mx" className="hover:text-primary transition-colors">ventas@cimbrayaccesorios.com.mx</a></li>
            <li>Cuauhtémoc 105, San Pedro Iztacalco, Iztacalco, 08220 Ciudad de México, CDMX</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Síganos</h4>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/bandasdepvcymonosparacimbra" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="https://www.instagram.com/dfac_cimbra/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t w-full">
        <div className="container py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-2 mx-auto">
          <p>&copy; {new Date().getFullYear()} DFAC Accesorios para Cimbras. Todos los derechos reservados.</p>
          <Link href="#" className="hover:text-primary transition-colors">Política de Privacidad</Link>
        </div>
      </div>
    </footer>
  );
}
