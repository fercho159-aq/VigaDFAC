"use client";

import { useState, useMemo, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { loadTable, slabThicknesses, beamSeparations, type SlabThickness, type BeamSeparation } from '@/data/habe20-data';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Configurator() {
  const [beamLength, setBeamLength] = useState([2.95]);
  const [slabThickness, setSlabThickness] = useState<SlabThickness>(20);
  const [beamSeparation, setBeamSeparation] = useState<BeamSeparation>(75);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const maxPropDistance = useMemo(() => {
    if (!slabThickness || !beamSeparation) return null;
    return loadTable[slabThickness]?.[beamSeparation] ?? null;
  }, [slabThickness, beamSeparation]);

  if (!isMounted) {
    return (
      <Card className="w-full shadow-lg">
        <CardHeader>
          <Skeleton className="h-8 w-3/4" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-96 w-full rounded-md" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full overflow-hidden shadow-2xl border-primary/20">
      <div className="grid md:grid-cols-[1fr_auto]">
        <div className="p-6 md:p-8 space-y-6">
          <h3 className="text-2xl font-bold font-headline">Parámetros de Cálculo</h3>
          
          <div className="space-y-4 pt-4">
            <Label htmlFor="beam-length">Longitud de Viga (m)</Label>
            <Slider
              id="beam-length"
              min={1.95}
              max={5.90}
              step={0.05}
              value={beamLength}
              onValueChange={setBeamLength}
            />
            <p className="text-right text-sm text-muted-foreground font-medium">{beamLength[0].toFixed(2)} m</p>
          </div>

          <div className="space-y-4">
            <Label htmlFor="slab-thickness">Grosor del Forjado (cm)</Label>
            <Select onValueChange={(val) => setSlabThickness(Number(val) as SlabThickness)} defaultValue={String(slabThickness)}>
              <SelectTrigger id="slab-thickness" className="w-full">
                <SelectValue placeholder="Seleccione grosor..." />
              </SelectTrigger>
              <SelectContent>
                {slabThicknesses.map(t => (
                  <SelectItem key={t} value={String(t)}>{t} cm</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <Label htmlFor="beam-separation">Distancia entre Vigas (cm)</Label>
            <Select onValueChange={(val) => setBeamSeparation(Number(val) as BeamSeparation)} defaultValue={String(beamSeparation)}>
              <SelectTrigger id="beam-separation" className="w-full">
                <SelectValue placeholder="Seleccione distancia..." />
              </SelectTrigger>
              <SelectContent>
                {beamSeparations.map(s => (
                  <SelectItem key={s} value={String(s)}>{(s/100).toFixed(2)} m</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col items-center justify-center bg-primary text-primary-foreground">
          <div className="text-center space-y-4">
            <h4 className="text-lg font-medium text-primary-foreground/80">Distancia Máxima entre Puntales</h4>
            <div className="bg-primary-foreground/10 rounded-full p-4 flex items-center justify-center w-40 h-40 md:w-48 md:h-48 border-4 border-primary-foreground/20">
              <div className="text-center">
                <div key={maxPropDistance} className="text-5xl md:text-6xl font-bold tracking-tighter animate-in fade-in duration-500">
                  {maxPropDistance ? maxPropDistance.toFixed(2) : '-.--'}
                </div>
                <div className="text-lg text-primary-foreground/80">metros</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 md:p-8 border-t">
        <h4 className="text-xl font-bold mb-4 font-headline">Tabla de Cargas de Referencia</h4>
        <p className="text-muted-foreground text-sm mb-4">Distancia máxima entre puntales (en metros) según grosor de forjado y separación entre vigas.</p>
        <ScrollArea className="h-96">
          <div className="overflow-x-auto relative">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-left sticky left-0 bg-background/95 backdrop-blur-sm z-10 w-1/4 min-w-[120px]">Forjado (cm)</TableHead>
                  {beamSeparations.map(s => <TableHead key={s} className="text-center">Vigas a {(s/100).toFixed(2)} m</TableHead>)}
                </TableRow>
              </TableHeader>
              <TableBody>
                {slabThicknesses.map(t => (
                  <TableRow key={t}>
                    <TableHead className="font-bold text-left sticky left-0 bg-background/95 backdrop-blur-sm z-10">{t}</TableHead>
                    {beamSeparations.map(s => (
                      <TableCell key={s} className={cn("text-center transition-colors duration-300", {
                        'bg-primary/10 text-primary ring-2 ring-primary font-bold rounded-md': t === slabThickness && s === beamSeparation
                      })}>
                        {loadTable[t]?.[s]?.toFixed(2) ?? '-'}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ScrollArea>
      </div>
    </Card>
  );
}
