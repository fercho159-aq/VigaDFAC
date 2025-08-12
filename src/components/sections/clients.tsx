import Image from 'next/image';

const clientLogos = [
  { name: 'Client 1', src: 'https://placehold.co/150x60.png', hint: 'company logo' },
  { name: 'Client 2', src: 'https://placehold.co/150x60.png', hint: 'company logo' },
  { name: 'Client 3', src: 'https://placehold.co/150x60.png', hint: 'company logo' },
  { name: 'Client 4', src: 'https://placehold.co/150x60.png', hint: 'company logo' },
  { name: 'Client 5', src: 'https://placehold.co/150x60.png', hint: 'company logo' },
  { name: 'Client 6', src: 'https://placehold.co/150x60.png', hint: 'company logo' },
];

export default function Clients() {
  return (
    <section id="clientes" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Nuestros Clientes Confían en Nosotros</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Proveemos a las empresas líderes del sector de la construcción.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {clientLogos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              width={150}
              height={60}
              alt={logo.name}
              data-ai-hint={logo.hint}
              className="opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
