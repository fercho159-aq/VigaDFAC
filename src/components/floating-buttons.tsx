"use client";

import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
      <Button asChild size="icon" className="rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#1EBE57] shadow-lg">
        <a 
          href="https://wa.me/5215549414017" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
      </Button>
      <Button asChild size="icon" className="rounded-full w-14 h-14 shadow-lg">
        <a href="tel:5525989751" aria-label="Llamar por teléfono">
          <Phone className="w-7 h-7" />
        </a>
      </Button>
    </div>
  );
}
