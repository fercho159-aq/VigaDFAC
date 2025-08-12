import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle } from 'lucide-react';

export default function Cta() {
  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">¿Listo para construir con la mejor calidad?</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Contacte a nuestro equipo de ventas para obtener una cotización personalizada y asesoramiento técnico para su proyecto.
          </p>
        </div>
        <Card className="mx-auto max-w-md w-full mt-6">
          <CardHeader>
            <CardTitle>Solicite su Cotización</CardTitle>
            <CardDescription>Estamos listos para ayudarle.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full" size="lg" asChild>
              <a href="tel:+525512345678">
                <Phone className="mr-2 h-4 w-4" />
                Llamar Ahora
              </a>
            </Button>
            <Button variant="outline" className="w-full" size="lg" asChild>
              <a href="https://wa.me/525512345678" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Enviar WhatsApp
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
