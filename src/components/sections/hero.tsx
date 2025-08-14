import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const slides = [
  {
    title: "Viga HABE-20: Potencia y Versatilidad para sus Encofrados",
    description: "Nuestra viga de madera de alta resistencia es la solución ideal para sistemas de encofrado, ofreciendo durabilidad, ligereza y una capacidad de carga excepcional.",
    image: {
      src: "https://placehold.co/1200x600.png",
      hint: "construction beams",
      alt: "Vigas HABE-20",
    },
    buttons: [
      { text: "Ir al Configurador", href: "#especificaciones", variant: "default" as const },
      { text: "Contactar Ventas", href: "#contacto", variant: "outline" as const },
    ],
  },
  {
    title: "Innovación y Calidad en Cada Proyecto",
    description: "Comprometidos con la excelencia, ofrecemos productos que superan los estándares de la industria para garantizar la seguridad y eficiencia en su obra.",
    image: {
      src: "https://placehold.co/1200x600.png",
      hint: "construction site planning",
      alt: "Planos de construcción",
    },
    buttons: [
      { text: "Ver Especificaciones", href: "#especificaciones", variant: "default" as const },
      { text: "Conozca más", href: "#nosotros", variant: "outline" as const },
    ],
  },
  {
    title: "Soluciones a la Medida de sus Necesidades",
    description: "Nuestro equipo de expertos está listo para asesorarle y proveerle las mejores soluciones de encofrado para optimizar sus resultados.",
    image: {
      src: "https://placehold.co/1200x600.png",
      hint: "construction workers team",
      alt: "Equipo de construcción",
    },
    buttons: [
      { text: "Solicitar Cotización", href: "#contacto", variant: "default" as const },
      { text: "Ver Ventajas", href: "#ventajas", variant: "outline" as const },
    ],
  },
];


export default function Hero() {
  return (
    <section className="w-full">
       <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[500px] md:h-[600px] w-full">
                <Image
                  src={slide.image.src}
                  data-ai-hint={slide.image.hint}
                  alt={slide.image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                  <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-2xl mx-auto space-y-4">
                      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl text-white/90">
                        {slide.description}
                      </p>
                       <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4 justify-center">
                        {slide.buttons.map((button, btnIndex) => (
                          <Button key={btnIndex} asChild size="lg" variant={button.variant} 
                            className={button.variant === 'outline' ? 'border-white text-white bg-transparent hover:bg-white hover:text-primary' : ''}>
                            <a href={button.href}>{button.text}</a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 hidden sm:flex bg-white/30 hover:bg-white/50 text-white" />
        <CarouselNext className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 hidden sm:flex bg-white/30 hover:bg-white/50 text-white" />
      </Carousel>
    </section>
  );
}