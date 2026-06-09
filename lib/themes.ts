export type ThemeName =
  | 'palenque'
  | 'ocean'
  | 'mangrove'
  | 'sunset'
  | 'mineral'
  | 'midnight'
  | 'custom';

export interface ThemeColors {
  'palenque-blue': string;
  'palenque-sand': string;
  'palenque-sand-light': string;
  'palenque-turquoise': string;
  'palenque-earth': string;
  'palenque-night': string;
  'palenque-sunset': string;
  'palenque-coral': string;
  'palenque-warm-sand': string;
  'palenque-mangrove': string;
}

export interface Theme {
  id: ThemeName;
  label: string;
  labelEs: string;
  labelEn: string;
  labelFr: string;
  colors: ThemeColors;
}

export const defaultTheme: ThemeColors = {
  'palenque-blue': '#5489a0',
  'palenque-sand': '#bcaa8e',
  'palenque-sand-light': '#e3d9c9',
  'palenque-turquoise': '#84b0aa',
  'palenque-earth': '#6e5128',
  'palenque-night': '#6e5128',
  'palenque-sunset': '#5489a0',
  'palenque-coral': '#bcaa8e',
  'palenque-warm-sand': '#e3d9c9',
  'palenque-mangrove': '#84b0aa',
};

export const themes: Theme[] = [
  {
    id: 'palenque',
    label: 'Palenque Original',
    labelEs: 'Palenque Original',
    labelEn: 'Palenque Original',
    labelFr: 'Palenque Original',
    colors: { ...defaultTheme },
  },
  {
    id: 'ocean',
    label: 'Océan Profond',
    labelEs: 'Océano Profundo',
    labelEn: 'Deep Ocean',
    labelFr: 'Océan Profond',
    colors: {
      'palenque-blue': '#2b6b7f',
      'palenque-sand': '#a8c4c9',
      'palenque-sand-light': '#e0f0f2',
      'palenque-turquoise': '#4da6a0',
      'palenque-earth': '#3d5a64',
      'palenque-night': '#08161a',
      'palenque-sunset': '#1e4d5c',
      'palenque-coral': '#e88c7a',
      'palenque-warm-sand': '#d4bFA3',
      'palenque-mangrove': '#6bb3a8',
    },
  },
  {
    id: 'mangrove',
    label: 'Mangrove',
    labelEs: 'Manglar',
    labelEn: 'Mangrove',
    labelFr: 'Mangrove',
    colors: {
      'palenque-blue': '#5e8c61',
      'palenque-sand': '#c4b896',
      'palenque-sand-light': '#f0ead6',
      'palenque-turquoise': '#7fb069',
      'palenque-earth': '#4a5d23',
      'palenque-night': '#0f1a0f',
      'palenque-sunset': '#6b8e23',
      'palenque-coral': '#d97a6c',
      'palenque-warm-sand': '#d9c68d',
      'palenque-mangrove': '#8fbc8f',
    },
  },
  {
    id: 'sunset',
    label: 'Coucher de Soleil',
    labelEs: 'Atardecer',
    labelEn: 'Sunset',
    labelFr: 'Coucher de Soleil',
    colors: {
      'palenque-blue': '#b85c44',
      'palenque-sand': '#d6a883',
      'palenque-sand-light': '#f9e4cc',
      'palenque-turquoise': '#e89f6b',
      'palenque-earth': '#7a3e2e',
      'palenque-night': '#1a0f0a',
      'palenque-sunset': '#8f3b3b',
      'palenque-coral': '#e87a5e',
      'palenque-warm-sand': '#f2c48a',
      'palenque-mangrove': '#c4a35a',
    },
  },
  {
    id: 'mineral',
    label: 'Sable Minéral',
    labelEs: 'Arena Mineral',
    labelEn: 'Mineral Sand',
    labelFr: 'Sable Minéral',
    colors: {
      'palenque-blue': '#7a8b99',
      'palenque-sand': '#c7bdb0',
      'palenque-sand-light': '#eae6e1',
      'palenque-turquoise': '#9ab0a8',
      'palenque-earth': '#5c5042',
      'palenque-night': '#1a1816',
      'palenque-sunset': '#6b5b73',
      'palenque-coral': '#c97f6f',
      'palenque-warm-sand': '#d9c0a0',
      'palenque-mangrove': '#9caf7a',
    },
  },
  {
    id: 'midnight',
    label: 'Nuit Tropicale',
    labelEs: 'Noche Tropical',
    labelEn: 'Tropical Midnight',
    labelFr: 'Nuit Tropicale',
    colors: {
      'palenque-blue': '#6b8fa3',
      'palenque-sand': '#9c8b72',
      'palenque-sand-light': '#d9d0c3',
      'palenque-turquoise': '#5a9e96',
      'palenque-earth': '#6e5a3a',
      'palenque-night': '#0d0d14',
      'palenque-sunset': '#4a3b69',
      'palenque-coral': '#d97a6c',
      'palenque-warm-sand': '#d4a86b',
      'palenque-mangrove': '#8fad58',
    },
  },
];

export const STORAGE_KEY = 'palenque-theme';
export const CUSTOM_THEME_STORAGE_KEY = 'palenque-custom-theme';

export const BRAND_COLORS = [
  '#5489a0',
  '#bcaa8e',
  '#e3d9c9',
  '#84b0aa',
  '#6e5128',
] as const;

export type BrandColor = (typeof BRAND_COLORS)[number];

export interface ThemeVariant {
  id: number;
  name: Record<'es' | 'en' | 'fr', string>;
  colors: ThemeColors;
}

const COLOR_KEYS: Array<keyof ThemeColors> = [
  'palenque-blue',
  'palenque-sand',
  'palenque-sand-light',
  'palenque-turquoise',
  'palenque-earth',
  'palenque-night',
  'palenque-sunset',
  'palenque-coral',
  'palenque-warm-sand',
  'palenque-mangrove',
];

const VARIANT_PERMUTATIONS = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],    // Classic — original order
  [5, 0, 2, 1, 3, 4, 6, 7, 8, 9],    // Blue focus — blue becomes text, sand becomes accents
  [1, 8, 0, 2, 4, 3, 6, 7, 5, 9],    // Warm — warm tones dominate
  [5, 4, 3, 2, 1, 0, 9, 8, 7, 6],    // Contrast — inverted
  [3, 2, 1, 0, 5, 4, 6, 7, 8, 9],    // Fresh — turquoise dominant
  [4, 1, 0, 2, 5, 3, 6, 7, 8, 9],    // Earth — earth tones dominant
  [6, 2, 0, 1, 4, 5, 3, 7, 8, 9],    // Sunset — sunset/coral dominant
  [2, 0, 1, 3, 4, 5, 6, 7, 8, 9],    // Light — light and airy
];

const VARIANT_NAMES: Record<number, Record<'es' | 'en' | 'fr', string>> = {
  0: { es: 'Clásico', en: 'Classic', fr: 'Classique' },
  1: { es: 'Azul intenso', en: 'Blue focus', fr: 'Bleu intense' },
  2: { es: 'Cálido', en: 'Warm', fr: 'Chaud' },
  3: { es: 'Contraste', en: 'Contrast', fr: 'Contraste' },
  4: { es: 'Fresco', en: 'Fresh', fr: 'Frais' },
  5: { es: 'Tierra', en: 'Earth', fr: 'Terre' },
  6: { es: 'Atardecer', en: 'Sunset', fr: 'Coucher' },
  7: { es: 'Claro', en: 'Light', fr: 'Clair' },
};

export function getThemeVariants(baseColors: ThemeColors): ThemeVariant[] {
  const values = COLOR_KEYS.map((k) => baseColors[k]);
  return VARIANT_PERMUTATIONS.map((perm, idx) => {
    const variantColors = {} as ThemeColors;
    COLOR_KEYS.forEach((key, i) => {
      variantColors[key] = values[perm[i]];
    });
    return {
      id: idx,
      name: VARIANT_NAMES[idx],
      colors: variantColors,
    };
  });
}
