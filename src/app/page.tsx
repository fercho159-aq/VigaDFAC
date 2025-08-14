import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Specifications from '@/components/sections/specifications';
import Advantages from '@/components/sections/advantages';
import Cta from '@/components/sections/cta';
import Footer from '@/components/sections/footer';
import FloatingButtons from '@/components/floating-buttons';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background items-center">
      <Header />
      <main className="flex-grow w-full">
        <Hero />
        <About />
        <Specifications />
        <Advantages />
        <Cta />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
