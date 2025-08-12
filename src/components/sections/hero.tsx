import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                Viga HABE-20: Potencia y Versatilidad para sus Encofrados
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Nuestra viga de madera de alta resistencia es la solución ideal para sistemas de encofrado, ofreciendo durabilidad, ligereza y una capacidad de carga excepcional.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <a href="#especificaciones">Ir al Configurador</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contacto">Contactar Ventas</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://placehold.co/600x400.png"
              data-ai-hint="construction beams"
              width={600}
              height={400}
              alt="Vigas HABE-20"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
