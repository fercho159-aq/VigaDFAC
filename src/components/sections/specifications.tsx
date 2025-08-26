import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Truck } from 'lucide-react';

export default function Specifications() {
  return (
    <section id="especificaciones" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-3xl mx-auto">
            <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">
              Producto Destacado
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Viga H-20 para Cimbra
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestra viga H-20 de madera de alta resistencia es la solución ideal para sistemas de encofrado, ofreciendo durabilidad, ligereza y una capacidad de carga excepcional.
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-4xl">
            <Card className="overflow-hidden shadow-lg border-primary/20">
              <div className="grid md:grid-cols-2 items-center">
                <div className="relative h-64 md:h-full w-full">
                  <Image
                    src="https://www.mediafacile.net/edifacilecom/0/0/4/4042-1-101987-20230926085429-b.jpg"
                    alt="VIGA H20"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="construction beams"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl font-bold font-headline">VIGA H20 3.90X.20X.4 METROS CON TAPON</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <p className="text-muted-foreground">
                      Fabricada con madera de alta calidad y un diseño robusto, nuestra viga H-20 garantiza la máxima eficiencia y seguridad en sus proyectos de construcción. El tapón protector integrado aumenta su durabilidad.
                    </p>
                     <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <Truck className="h-5 w-5" />
                      <span>Entrega en menos de 24hrs en CDMX y Zona Metropolitana.</span>
                    </div>
                    <div className="flex flex-col space-y-1 text-sm">
                        <span className="font-semibold">Dimensiones:</span>
                        <span>3.90m (largo) x 0.20m (alto) x 0.04m (ancho)</span>
                    </div>
                    <Button asChild size="lg" className="w-full mt-4">
                        <a href="#contacto">Solicitar Cotización</a>
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
