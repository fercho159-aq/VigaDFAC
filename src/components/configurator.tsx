"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  primaryBeamSeparationTable, 
  propDistanceTable,
  slabThicknesses, 
  secondaryBeamSeparations,
  primaryBeamDistances,
  type SlabThickness, 
  type SecondaryBeamSeparation,
  type PrimaryBeamDistance,
} from '@/data/habe20-data-v2';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Configurator() {
  const [slabThickness, setSlabThickness] = useState<SlabThickness>(30);
  const [secondaryBeamSeparation, setSecondaryBeamSeparation] = useState<SecondaryBeamSeparation>(0.50);
  const [primaryBeamDistance, setPrimaryBeamDistance] = useState<PrimaryBeamDistance | undefined>(undefined);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const admissiblePrimaryBeamSeparation = useMemo(() => {
    if (!slabThickness || !secondaryBeamSeparation) return null;
    return primaryBeamSeparationTable[slabThickness]?.[secondaryBeamSeparation] ?? null;
  }, [slabThickness, secondaryBeamSeparation]);

  const nearestPrimaryBeamDistance = useMemo(() => {
    if (admissiblePrimaryBeamSeparation === null) return undefined;
    
    // Find the closest primary beam distance that is less than or equal to the admissible one
    const validDistances = primaryBeamDistances.filter(d => d <= admissiblePrimaryBeamSeparation);
    if (validDistances.length > 0) {
      return Math.max(...validDistances) as PrimaryBeamDistance;
    }
    return undefined;
  }, [admissiblePrimaryBeamSeparation]);

  const maxPropDistance = useMemo(() => {
    const distanceToUse = primaryBeamDistance ?? nearestPrimaryBeamDistance;
    if (!slabThickness || !distanceToUse) return null;
    return propDistanceTable[slabThickness]?.[distanceToUse] ?? null;
  }, [slabThickness, primaryBeamDistance, nearestPrimaryBeamDistance]);

  const handlePrimaryBeamDistanceChange = (value: string) => {
    const numValue = Number(value) as PrimaryBeamDistance;
    if (admissiblePrimaryBeamSeparation !== null && numValue > admissiblePrimaryBeamSeparation) {
      // Keep the old value or set to nearest if it exceeds the limit
      setPrimaryBeamDistance(nearestPrimaryBeamDistance);
    } else {
      setPrimaryBeamDistance(numValue);
    }
  };
  
  const selectedPrimaryBeamDistance = primaryBeamDistance ?? nearestPrimaryBeamDistance;
  const minPrimaryBeamDistance = Math.min(...primaryBeamDistances);
  const maxPrimaryBeamDistanceValue = Math.max(...primaryBeamDistances);

  const beamScale = useMemo(() => {
    if (!selectedPrimaryBeamDistance) return 0.5;
    // Normalize the distance from 0 to 1
    const normalized = (selectedPrimaryBeamDistance - minPrimaryBeamDistance) / (maxPrimaryBeamDistanceValue - minPrimaryBeamDistance);
    // Scale from 0.4 to 1 for visual representation
    return 0.4 + normalized * 0.6;
  }, [selectedPrimaryBeamDistance, minPrimaryBeamDistance, maxPrimaryBeamDistanceValue]);


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
      <div className="grid md:grid-cols-2">
        <div className="p-6 md:p-8 space-y-6">
          <h3 className="text-2xl font-bold font-headline">Parámetros de Cálculo</h3>
          
          <div className="space-y-4 pt-4">
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
            <Label htmlFor="beam-separation">Distancia Vigas Secundarias (m)</Label>
            <Select onValueChange={(val) => setSecondaryBeamSeparation(Number(val) as SecondaryBeamSeparation)} defaultValue={String(secondaryBeamSeparation)}>
              <SelectTrigger id="beam-separation" className="w-full">
                <SelectValue placeholder="Seleccione distancia..." />
              </SelectTrigger>
              <SelectContent>
                {secondaryBeamSeparations.map(s => (
                  <SelectItem key={s} value={String(s)}>{s.toFixed(2)} m</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
              <Label htmlFor="primary-beam-distance">Distancia Vigas Primarias (m)</Label>
              <Select 
                onValueChange={handlePrimaryBeamDistanceChange} 
                value={primaryBeamDistance !== undefined ? String(primaryBeamDistance) : ''}
              >
                  <SelectTrigger id="primary-beam-distance" className="w-full">
                      <SelectValue placeholder="Automático" />
                  </SelectTrigger>
                  <SelectContent>
                      {primaryBeamDistances.map(d => (
                          <SelectItem 
                              key={d} 
                              value={String(d)}
                              disabled={admissiblePrimaryBeamSeparation !== null && d > admissiblePrimaryBeamSeparation}
                          >
                              {d.toFixed(2)} m
                          </SelectItem>
                      ))}
                  </SelectContent>
              </Select>
               {admissiblePrimaryBeamSeparation !== null && (
                 <p className="text-sm text-muted-foreground">
                    Admisible: ≤ {admissiblePrimaryBeamSeparation.toFixed(2)} m. Automático: {nearestPrimaryBeamDistance?.toFixed(2)} m
                 </p>
                )}
          </div>
        </div>
        
        <div className="p-6 md:p-8 flex flex-col items-center justify-center bg-primary text-primary-foreground space-y-4 min-h-[300px]">
            <h4 className="text-lg font-medium text-primary-foreground/80 mb-4">Distancia Máxima entre Puntales</h4>
            <div className="w-full max-w-xs flex flex-col items-center justify-center space-y-2">
                {/* 2D Beam Representation */}
                <div className="w-full h-20 flex items-center justify-center">
                    <div className="relative h-16 flex items-center justify-center transition-all duration-300 ease-out" style={{ width: `${beamScale * 100}%`}}>
                        {/* Top flange */}
                        <div className="absolute top-0 h-4 w-full bg-primary-foreground/50 rounded-t-sm"></div>
                        {/* Web */}
                        <div className="h-full w-2 bg-primary-foreground/50 mx-auto"></div>
                        {/* Bottom flange */}
                        <div className="absolute bottom-0 h-4 w-full bg-primary-foreground/50 rounded-b-sm"></div>
                    </div>
                </div>

                 <div className="relative text-center -mt-2">
                     <div key={maxPropDistance} className="text-5xl md:text-6xl font-bold tracking-tighter animate-in fade-in duration-500">
                        {maxPropDistance ? maxPropDistance.toFixed(2) : '-.--'}
                     </div>
                     <div className="text-lg text-primary-foreground/80">metros</div>
                </div>
            </div>
             <div className="text-center mt-4">
                <p className="text-sm text-primary-foreground/80">Distancia Viga Primaria Seleccionada</p>
                <p className="font-bold text-lg">{selectedPrimaryBeamDistance?.toFixed(2) ?? '-.--'} m</p>
             </div>
        </div>

      </div>
       <div className="p-6 md:p-8 border-t">
        <h4 className="text-xl font-bold mb-4 font-headline">Tabla de Referencia Completa</h4>
        <Alert variant="default" className="mb-4 bg-accent/50">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Ejemplo de uso</AlertTitle>
          <AlertDescription>
            Para un forjado de 30cm y vigas secundarias a 0,50m, la distancia admisible entre vigas primarias es 2,47m. La columna inferior más cercana (2,25m) indica una separación máx. entre puntales de 1,02m.
          </AlertDescription>
        </Alert>
        <ScrollArea className="h-72">
          <div className="overflow-x-auto relative">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-left sticky left-0 bg-background/95 backdrop-blur-sm z-10 min-w-[150px]">Forjado (cm)</TableHead>
                  <TableHead className="text-center bg-background/95 backdrop-blur-sm">Vigas Sec. (m)</TableHead>
                  <TableHead className="text-center bg-background/95 backdrop-blur-sm">Dist. Adm. Prim. (m)</TableHead>
                  {primaryBeamDistances.map(d => <TableHead key={d} className="text-center">{d.toFixed(2)} m</TableHead>)}
                </TableRow>
                 <TableRow className="hover:bg-transparent">
                  <TableHead colSpan={3} className="text-center sticky left-0 bg-background/95 backdrop-blur-sm z-10 font-bold">Separación máx. entre puntales (m)</TableHead>
                  {primaryBeamDistances.map(d => <TableHead key={d} className="text-center"></TableHead>)}
                </TableRow>
              </TableHeader>
              <TableBody>
                {slabThicknesses.map(t => (
                  <React.Fragment key={t}>
                    {secondaryBeamSeparations.map((s, sIndex) => (
                      <TableRow key={`${t}-${s}`} className={cn({ 'bg-primary/5': t === slabThickness && s === secondaryBeamSeparation })}>
                        {sIndex === 0 && <TableHead rowSpan={secondaryBeamSeparations.length} className="font-bold text-left sticky left-0 bg-background/95 backdrop-blur-sm z-10 align-middle">{t}</TableHead>}
                        <TableCell className="text-center">{s.toFixed(2)}</TableCell>
                        <TableCell className="text-center font-medium">{primaryBeamSeparationTable[t]?.[s]?.toFixed(2) ?? '-'}</TableCell>
                        {primaryBeamDistances.map(d => {
                            const isAdmissible = primaryBeamSeparationTable[t]?.[s] >= d;
                            const isSelected = t === slabThickness && s === secondaryBeamSeparation && d === (primaryBeamDistance ?? nearestPrimaryBeamDistance);
                            return (
                              <TableCell key={d} className={cn("text-center transition-colors duration-300", {
                                'text-muted-foreground/50': !isAdmissible,
                                'bg-primary/10 text-primary ring-2 ring-primary font-bold rounded-md': isSelected && isAdmissible,
                              })}>
                                {propDistanceTable[t]?.[d]?.toFixed(2) ?? '-'}
                              </TableCell>
                            )
                        })}
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </div>
        </ScrollArea>
      </div>
    </Card>
  );
}
