// Data simulada basada en una tabla de cargas típica para Vigas H-20.
// Los valores reales deben ser verificados con la documentación técnica del fabricante.

export type SlabThickness = 10 | 15 | 20 | 25 | 30;
export type BeamSeparation = 50 | 60 | 70 | 80 | 90 | 100;

export const slabThicknesses: readonly SlabThickness[] = [10, 15, 20, 25, 30];
export const beamSeparations: readonly BeamSeparation[] = [50, 60, 70, 80, 90, 100];

// Estructura: loadTable[espesorDelForjado][separacionEntreVigas] = distanciaMaximaEntrePuntales (metros)
export const loadTable: Record<SlabThickness, Record<BeamSeparation, number>> = {
  10: { 50: 2.25, 60: 2.10, 70: 1.95, 80: 1.80, 90: 1.70, 100: 1.60 },
  15: { 50: 2.05, 60: 1.90, 70: 1.75, 80: 1.65, 90: 1.55, 100: 1.45 },
  20: { 50: 1.90, 60: 1.75, 70: 1.60, 80: 1.50, 90: 1.40, 100: 1.30 },
  25: { 50: 1.75, 60: 1.60, 70: 1.50, 80: 1.40, 90: 1.30, 100: 1.20 },
  30: { 50: 1.60, 60: 1.50, 70: 1.40, 80: 1.30, 90: 1.20, 100: 1.10 },
};
