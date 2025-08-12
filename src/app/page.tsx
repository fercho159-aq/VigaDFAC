import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Specifications from '@/components/sections/specifications';
import Advantages from '@/components/sections/advantages';
import Clients from '@/components/sections/clients';
import Cta from '@/components/sections/cta';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Specifications />
        <Advantages />
        <Clients />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
