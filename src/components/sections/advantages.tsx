import { Weight, Leaf, Zap, Recycle } from 'lucide-react';

const advantages = [
  { icon: Weight, title: 'Alta Capacidad de Carga', description: 'Diseñadas para soportar grandes cargas, garantizando la seguridad y estabilidad del encofrado.' },
  { icon: Leaf, title: 'Ligereza y Manejabilidad', description: 'Su bajo peso facilita el transporte, montaje y desmontaje, optimizando los tiempos de trabajo.' },
  { icon: Zap, title: 'Durabilidad y Resistencia', description: 'Fabricadas con madera de alta calidad y uniones robustas que aseguran una larga vida útil.' },
  { icon: Recycle, title: 'Reutilizables y Sostenibles', description: 'Pueden ser utilizadas en múltiples proyectos, reduciendo costos y el impacto ambiental.' },
];

export default function Advantages() {
  return (
    <section id="ventajas" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">Ventajas y Usos</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Por qué elegir Vigas HABE-20</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubra los beneficios que hacen de nuestras vigas HABE-20 la elección preferida por profesionales de la construcción.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
          {advantages.map((adv, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 space-y-3">
              <div className="mb-4 rounded-full bg-primary p-4 text-primary-foreground">
                <adv.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">{adv.title}</h3>
              <p className="text-sm text-muted-foreground">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
