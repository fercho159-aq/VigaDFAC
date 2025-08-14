"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DfacLogo } from '@/components/icons/dfac-logo';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const NavLinks = ({ inSheet = false }: { inSheet?: boolean }) => {
  const NavLink = inSheet ? SheetClose : Link;
  return (
    <>
      <NavLink href="#nosotros" className="text-sm font-medium hover:text-primary transition-colors py-2">
        Nosotros
      </NavLink>
      <NavLink href="#especificaciones" className="text-sm font-medium hover:text-primary transition-colors py-2">
        Especificaciones
      </NavLink>
      <NavLink href="#ventajas" className="text-sm font-medium hover:text-primary transition-colors py-2">
        Ventajas
      </NavLink>
      <NavLink href="#clientes" className="text-sm font-medium hover:text-primary transition-colors py-2">
        Clientes
      </NavLink>
    </>
  );
}

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
          <Button asChild className='hidden sm:inline-flex'>
            <a href="#contacto">Solicitar Cotización</a>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                  <DfacLogo />
                </Link>
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
