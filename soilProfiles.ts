import { SoilProfile } from '@/types/soil';

export const soilProfiles: SoilProfile[] = [
  {
    id: 'clay',
    name: 'Clay Soil',
    type: 'clay',
    description: 'Dense, water-retentive soil with fine particles',
    optimalMin: 40,
    optimalMax: 65,
    criticalMin: 25,
    criticalMax: 80,
    icon: '🏺'
  },
  {
    id: 'sandy',
    name: 'Sandy Soil',
    type: 'sandy',
    description: 'Coarse, fast-draining soil with large particles',
    optimalMin: 25,
    optimalMax: 50,
    criticalMin: 15,
    criticalMax: 65,
    icon: '🏖️'
  },
  {
    id: 'loamy',
    name: 'Loamy Soil',
    type: 'loamy',
    description: 'Balanced mix - ideal for most plants',
    optimalMin: 35,
    optimalMax: 60,
    criticalMin: 20,
    criticalMax: 75,
    icon: '🌱'
  },
  {
    id: 'silt',
    name: 'Silt Soil',
    type: 'silt',
    description: 'Smooth, moisture-retentive medium particles',
    optimalMin: 30,
    optimalMax: 55,
    criticalMin: 18,
    criticalMax: 70,
    icon: '🏞️'
  },
  {
    id: 'peat',
    name: 'Peat Soil',
    type: 'peat',
    description: 'Organic, acidic soil with high water retention',
    optimalMin: 50,
    optimalMax: 75,
    criticalMin: 35,
    criticalMax: 90,
    icon: '🌿'
  }
];
