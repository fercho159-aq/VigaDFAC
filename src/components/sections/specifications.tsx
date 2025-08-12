import Configurator from '@/components/configurator';

export default function Specifications() {
  return (
    <section id="especificaciones" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">Especificaciones Técnicas</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Configure su Viga HABE-20</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Utilice nuestro configurador interactivo para determinar la distancia máxima entre puntales según las necesidades de su proyecto. Seleccione el grosor del forjado y la separación entre vigas para obtener el cálculo al instante.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-6xl mt-12">
          <Configurator />
        </div>
      </div>
    </section>
  );
}
