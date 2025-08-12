import Configurator from '@/components/configurator';

export default function Specifications() {
  return (
    <section id="especificaciones" className="w-full py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6 mx-auto"> {/* Agregado mx-auto aquí */}
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2 max-w-3xl mx-auto"> {/* Agregado max-w-3xl y mx-auto aquí */}
        <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">Especificaciones Técnicas</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Configure su Viga HABE-20</h2>
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Utilice nuestro configurador interactivo para determinar la distancia máxima entre puntales según las necesidades de su proyecto. Seleccione el grosor del forjado y la separación entre vigas para obtener el cálculo al instante.
        </p>
      </div>
    </div>
    <div className="mt-12 flex justify-center"> {/* Agregado flex justify-center aquí */}
      <div className="w-full max-w-6xl">
        <Configurator />
      </div>
    </div>
  </div>
</section>
  );
}
