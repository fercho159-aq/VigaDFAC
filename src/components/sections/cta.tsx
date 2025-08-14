import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
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
        <div className="flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8 py-6">Solicitar Cotización</Button>
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
        </div>
      </div>
    </section>
  );
}