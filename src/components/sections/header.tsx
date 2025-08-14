"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DfacLogo } from '@/components/icons/dfac-logo';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Phone, MessageCircle } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';


const NavLinks = ({ inSheet = false }: { inSheet?: boolean }) => {
  const NavLink = inSheet ? SheetClose : 'a';
  const Wrapper = ({ children }: { children: React.ReactNode }) => 
    inSheet ? <SheetClose asChild>{children}</SheetClose> : <>{children}</>;

  return (
    <>
      <Wrapper>
        <Link href="#nosotros" className="text-sm font-medium hover:text-primary transition-colors py-2">
          Nosotros
        </Link>
      </Wrapper>
      <Wrapper>
        <Link href="#especificaciones" className="text-sm font-medium hover:text-primary transition-colors py-2">
          Especificaciones
        </Link>
      </Wrapper>
      <Wrapper>
        <Link href="#ventajas" className="text-sm font-medium hover:text-primary transition-colors py-2">
          Ventajas
        </Link>
      </Wrapper>
       <Wrapper>
        <Link href="#contacto" className="text-sm font-medium hover:text-primary transition-colors py-2">
          Contacto
        </Link>
      </Wrapper>
    </>
  );
}

const ContactDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className='hidden sm:inline-flex'>Solicitar Cotización</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Contacto de Ventas</DialogTitle>
        <DialogDescription>
          Póngase en contacto con nosotros a través de los siguientes medios.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="flex flex-col space-y-2">
          <p className="font-semibold">Números de teléfono:</p>
          <ul className="list-disc list-inside text-muted-foreground">
              <li>01 (55) 2598-9751</li>
              <li>01 (55) 4167-3745</li>
              <li>01 (55) 5571-5084</li>
          </ul>
        </div>
      </div>
      <DialogFooter className="sm:justify-start flex-col sm:flex-col sm:space-x-0 space-y-2">
          <Button asChild>
          <a href="tel:5525989751">
              <Phone className="mr-2 h-4 w-4" />
              Llamar Ahora
          </a>
        </Button>
        <Button variant="secondary" asChild>
            <a href="https://wa.me/5215549414017" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            Enviar WhatsApp
          </a>
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <DfacLogo />
          </Link>
        </div>
        <div className="md:hidden mr-4">
          <Link href="/" className="flex items-center space-x-2">
             <DfacLogo />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
          <NavLinks />
        </nav>
        <div className="flex items-center justify-end md:ml-6">
          <ContactDialog />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetClose asChild>
                  <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                    <DfacLogo />
                  </Link>
                </SheetClose>
                <nav className="flex flex-col space-y-4">
                  <NavLinks inSheet={true} />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
