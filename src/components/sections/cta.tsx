import { Phone, MessageCircle, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Cta() {
  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">Contacto</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Visítenos o Contáctenos</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Encuentre nuestra ubicación o póngase en contacto con nuestro equipo de ventas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:gap-12 lg:max-w-none lg:grid-cols-2 mt-12">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.910399128694!2d-99.10309098554483!3d19.41620998689409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fc1632145e69%3A0x2bbe2a672957105!2sCuauht%C3%A9moc%20105%2C%20San%20Pedro%20Iztacalco%2C%20Iztacalco%2C%2008220%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2sus!4v1721935891397!5m2!1ses-419!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-col justify-center space-y-6 bg-background p-8 rounded-xl shadow-lg">
            <div>
                <h3 className="text-2xl font-bold font-headline mb-4">Información de Contacto</h3>
                <div className="space-y-4 text-left text-muted-foreground">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1" />
                        <span>Cuauhtémoc 105, San Pedro Iztacalco, Iztacalco, 08220 Ciudad de México, CDMX</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="h-5 w-5 text-primary" />
                        <a href="tel:5525989751" className="hover:text-primary">01 (55) 2598-9751</a>
                    </div>
                     <div className="flex items-center gap-4">
                        <Phone className="h-5 w-5 text-primary" />
                         <a href="tel:5541673745" className="hover:text-primary">01 (55) 4167-3745</a>
                    </div>
                     <div className="flex items-center gap-4">
                        <Phone className="h-5 w-5 text-primary" />
                         <a href="tel:5555715084" className="hover:text-primary">01 (55) 5571-5084</a>
                    </div>
                     <div className="flex items-center gap-4">
                        <MessageCircle className="h-5 w-5 text-primary" />
                         <a href="https://wa.me/5215549414017" target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp: +52 1 55 4941 4017</a>
                    </div>
                </div>
            </div>
             <div>
                <h4 className="text-xl font-bold font-headline mb-4">Síganos</h4>
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com/bandasdepvcymonosparacimbra" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Facebook className="h-6 w-6" />
                    </a>
                    <a href="https://www.instagram.com/dfac_cimbra/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="h-6 w-6" />
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
