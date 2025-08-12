import Link from "next/link";
import { DfacLogo } from "@/components/icons/dfac-logo";
import { Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        <div className="space-y-4">
          <DfacLogo />
          <p className="text-sm text-muted-foreground max-w-xs">
            Soluciones y accesorios para cimbra de alta calidad para la industria de la construcción.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Contacto</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><a href="tel:+525512345678" className="hover:text-primary transition-colors">+52 55 1234 5678</a></li>
            <li><a href="mailto:ventas@dfac.com" className="hover:text-primary transition-colors">ventas@dfac.com</a></li>
            <li>Dirección de la empresa, Ciudad, CP.</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Síganos</h4>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-2">
          <p>&copy; {new Date().getFullYear()} DFAC Accesorios para Cimbras. Todos los derechos reservados.</p>
          <Link href="#" className="hover:text-primary transition-colors">Política de Privacidad</Link>
        </div>
      </div>
    </footer>
  );
}
