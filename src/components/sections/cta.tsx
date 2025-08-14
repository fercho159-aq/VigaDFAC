import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle } from 'lucide-react';

export default function Cta() {
  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6 mx-auto">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">¿Listo para construir con la mejor calidad?</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Contacte a nuestro equipo de ventas para obtener una cotización personalizada y asesoramiento técnico para su proyecto.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="mx-auto max-w-md w-full">
            <CardHeader>
              <CardTitle>Solicite su Cotización</CardTitle>
              <CardDescription>
                <p>01 (55) 2598-9751</p>
                <p>01 (55) 4167-3745</p>
                <p>01 (55) 5571-5084</p>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" size="lg" asChild>
                <a href="tel:5525989751">
                  <Phone className="mr-2 h-4 w-4" />
                  Llamar Ahora
                </a>
              </Button>
              <Button variant="outline" className="w-full" size="lg" asChild>
                <a href="https://wa.me/5215549414017" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Enviar WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
          <div className="w-full h-full min-h-[300px] md:min-h-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.142348540244!2d-99.1025816850937!3d19.40634698689973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fc156637d77b%3A0x4e6c35064516a72e!2sCuauht%C3%A9moc%20105%2C%20San%20Pedro%20Iztacalco%2C%20Iztacalco%2C%2008220%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1700000000000!5m2!1sen!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
