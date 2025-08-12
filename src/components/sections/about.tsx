import Image from 'next/image';

export default function About() {
  return (
    <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
           <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">Nosotros</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">DFAC Accesorios para Cimbras</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Con años de experiencia en el sector de la construcción, en DFAC nos especializamos en proveer accesorios para cimbra de la más alta calidad. Nuestro compromiso es ofrecer productos innovadores y eficientes, como la viga HABE-20, que garantizan la seguridad y productividad en cada obra.
              </p>
            </div>
          </div>
          <Image
            src="https://placehold.co/600x400.png"
            data-ai-hint="construction site"
            width={600}
            height={400}
            alt="Sobre DFAC"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}
