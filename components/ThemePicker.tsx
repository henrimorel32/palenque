'use client';

import { useState, useMemo, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Palette,
  X,
  Check,
  RotateCcw,
  SlidersHorizontal,
  LayoutGrid,
} from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { themes, ThemeName, ThemeColors, defaultTheme, BRAND_COLORS, getThemeVariants, ThemeVariant } from '@/lib/themes';

interface ThemePickerProps {
  locale?: 'es' | 'en' | 'fr';
}

type Locale = 'es' | 'en' | 'fr';
type Tab = 'presets' | 'custom';

const labels: Record<
  Locale,
  {
    title: string;
    subtitle: string;
    customSubtitle: string;
    apply: string;
    saveCustom: string;
    reset: string;
    close: string;
    presetsTab: string;
    customTab: string;
    hexRecap: string;
  }
> = {
  es: {
    title: 'Tu tema',
    subtitle: 'Elige la paleta que más te guste',
    customSubtitle: 'Ajusta cada color a tu gusto',
    apply: 'Aplicar',
    saveCustom: 'Guardar tema personalizado',
    reset: 'Restablecer',
    close: 'Cerrar',
    presetsTab: 'Predeterminados',
    customTab: 'Personalizado',
    hexRecap: 'Códigos hex actuales',
  },
  en: {
    title: 'Your theme',
    subtitle: 'Choose the palette you like best',
    customSubtitle: 'Adjust each color to your taste',
    apply: 'Apply',
    saveCustom: 'Save custom theme',
    reset: 'Reset',
    close: 'Close',
    presetsTab: 'Presets',
    customTab: 'Custom',
    hexRecap: 'Current hex codes',
  },
  fr: {
    title: 'Ton thème',
    subtitle: 'Choisis la palette qui te plaît',
    customSubtitle: 'Ajuste chaque couleur à ton goût',
    apply: 'Appliquer',
    saveCustom: 'Sauvegarder le thème',
    reset: 'Réinitialiser',
    close: 'Fermer',
    presetsTab: 'Prédéfinis',
    customTab: 'Personnalisé',
    hexRecap: 'Codes hex actuels',
  },
};

const colorLabels: Record<Locale, Record<keyof ThemeColors, string>> = {
  es: {
    'palenque-blue': 'Azul',
    'palenque-sand': 'Arena',
    'palenque-sand-light': 'Arena clara',
    'palenque-turquoise': 'Turquesa',
    'palenque-earth': 'Tierra',
    'palenque-night': 'Noche',
    'palenque-sunset': 'Atardecer',
    'palenque-coral': 'Coral',
    'palenque-warm-sand': 'Arena cálida',
    'palenque-mangrove': 'Mangle',
  },
  en: {
    'palenque-blue': 'Blue',
    'palenque-sand': 'Sand',
    'palenque-sand-light': 'Light sand',
    'palenque-turquoise': 'Turquoise',
    'palenque-earth': 'Earth',
    'palenque-night': 'Night',
    'palenque-sunset': 'Sunset',
    'palenque-coral': 'Coral',
    'palenque-warm-sand': 'Warm sand',
    'palenque-mangrove': 'Mangrove',
  },
  fr: {
    'palenque-blue': 'Bleu',
    'palenque-sand': 'Sable',
    'palenque-sand-light': 'Sable clair',
    'palenque-turquoise': 'Turquoise',
    'palenque-earth': 'Terre',
    'palenque-night': 'Nuit',
    'palenque-sunset': 'Coucher de soleil',
    'palenque-coral': 'Corail',
    'palenque-warm-sand': 'Sable chaud',
    'palenque-mangrove': 'Mangrove',
  },
};

function getThemeLabel(theme: (typeof themes)[number], locale: Locale) {
  if (locale === 'en') return theme.labelEn;
  if (locale === 'fr') return theme.labelFr;
  return theme.labelEs;
}

function isHexColor(value: string): boolean {
  return /^#[0-9A-Fa-f]{6}$/.test(value);
}

export default function ThemePicker({ locale: propLocale = 'es' }: ThemePickerProps) {
  const { currentTheme, colors, setTheme, resetTheme, customColors, setCustomColors, saveCustomTheme } =
    useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('presets');
  const [pendingTheme, setPendingTheme] = useState<ThemeName | null>(null);
  const [pendingVariantId, setPendingVariantId] = useState<number | null>(null);
  const [draftCustom, setDraftCustom] = useState<ThemeColors>(customColors);

  const pathname = usePathname();

  const locale = useMemo<Locale>(() => {
    if (propLocale) return propLocale;
    if (!pathname) return 'es';
    const first = pathname.split('/')[1];
    if (first === 'en' || first === 'fr') return first;
    return 'es';
  }, [pathname, propLocale]);

  const t = labels[locale];

  useEffect(() => {
    if (isOpen) {
      setPendingTheme(null);
      setPendingVariantId(null);
      // Start from the currently active theme colors (preset or custom)
      const baseColors = currentTheme === 'custom'
        ? customColors
        : themes.find((t) => t.id === currentTheme)?.colors ?? defaultTheme;
      setDraftCustom(baseColors);
      setActiveTab('presets');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, currentTheme]);

  const activeTheme = pendingTheme ?? currentTheme;

  const handleClose = () => {
    setIsOpen(false);
    // Restore current theme colors
    if (currentTheme === 'custom') {
      setCustomColors(customColors);
    } else {
      const theme = themes.find((t) => t.id === currentTheme);
      if (theme) {
        const root = document.documentElement;
        (Object.keys(theme.colors) as Array<keyof ThemeColors>).forEach((key) => {
          root.style.setProperty(`--color-${key}`, theme.colors[key]);
          root.style.setProperty(`--${key}`, theme.colors[key]);
        });
      }
    }
  };

  const handleApply = () => {
    if (pendingVariantId !== null && pendingTheme) {
      const theme = themes.find((t) => t.id === pendingTheme);
      if (theme) {
        const variant = getThemeVariants(theme.colors)[pendingVariantId];
        saveCustomTheme(variant.colors);
      }
      setPendingVariantId(null);
      setPendingTheme(null);
    } else if (pendingTheme) {
      setTheme(pendingTheme);
      setPendingTheme(null);
    }
    setIsOpen(false);
  };

  const handleSaveCustom = () => {
    saveCustomTheme(draftCustom);
    setIsOpen(false);
  };

  const handleReset = () => {
    resetTheme();
    setPendingTheme(null);
    setDraftCustom(defaultTheme);
  };

  const handleCustomChange = (key: keyof ThemeColors, value: string) => {
    const hex = value.startsWith('#') ? value : `#${value}`;
    if (!isHexColor(hex)) return;
    const next = { ...draftCustom, [key]: hex };
    setDraftCustom(next);
    setCustomColors(next);
  };

  const applyBrandColor = (hex: string, targetKey: keyof ThemeColors) => {
    handleCustomChange(targetKey, hex);
  };

  const tabButtonClass = (tab: Tab) =>
    `flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
      activeTab === tab
        ? 'bg-white text-palenque-night shadow-sm'
        : 'text-stone-500 hover:text-stone-700 hover:bg-stone-200/50'
    }`;

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        aria-label={t.title}
        className="hidden fixed bottom-6 right-20 z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-palenque-sand focus:ring-offset-2 bg-gradient-to-r from-palenque-sand to-palenque-warm-sand text-palenque-night hover:from-palenque-sand-light hover:to-palenque-sand transition-all"
      >
        <Palette className="w-5 h-5" />
      </motion.button>

      {/* Side panel overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100 bg-palenque-sand-light/40">
                <div>
                  <h2 className="text-xl font-bold text-palenque-night font-display">{t.title}</h2>
                  <p className="text-sm text-palenque-earth mt-0.5">
                    {activeTab === 'presets' ? t.subtitle : t.customSubtitle}
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-xl text-palenque-earth hover:bg-palenque-sand/30 transition-colors"
                  aria-label={t.close}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tabs */}
              <div className="px-6 py-3 border-b border-stone-100 bg-stone-50/50">
                <div className="flex gap-1 p-1 bg-stone-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setActiveTab('presets')}
                    className={tabButtonClass('presets')}
                  >
                    <LayoutGrid className="w-4 h-4" />
                    {t.presetsTab}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('custom')}
                    className={tabButtonClass('custom')}
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    {t.customTab}
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {activeTab === 'presets' ? (
                  <div className="grid grid-cols-1 gap-5">
                    {themes.map((theme) => {
                      const isActive = activeTheme === theme.id;
                      const variants = getThemeVariants(theme.colors);
                      return (
                        <div
                          key={theme.id}
                          className={`relative rounded-2xl border-2 p-4 transition-all duration-200 ${
                            isActive
                              ? 'border-palenque-blue bg-palenque-sand-light/40 shadow-md'
                              : 'border-stone-100 bg-stone-50'
                          }`}
                        >
                          {/* Main preset card */}
                          <button
                            onClick={() => {
                              setPendingTheme(theme.id);
                              setPendingVariantId(null);
                              // Live preview base theme
                              const root = document.documentElement;
                              (Object.keys(theme.colors) as Array<keyof ThemeColors>).forEach((key) => {
                                root.style.setProperty(`--color-${key}`, theme.colors[key]);
                                root.style.setProperty(`--${key}`, theme.colors[key]);
                              });
                            }}
                            className="w-full text-left group"
                          >
                            <div className="flex items-center gap-4">
                              {/* Color preview */}
                              <div className="flex-shrink-0 w-14 h-14 rounded-xl shadow-inner overflow-hidden grid grid-cols-2 grid-rows-2">
                                <div style={{ backgroundColor: theme.colors['palenque-sand'] }} />
                                <div style={{ backgroundColor: theme.colors['palenque-blue'] }} />
                                <div style={{ backgroundColor: theme.colors['palenque-turquoise'] }} />
                                <div style={{ backgroundColor: theme.colors['palenque-warm-sand'] }} />
                              </div>

                              <div className="flex-1 min-w-0">
                                <p
                                  className={`font-semibold truncate ${
                                    isActive && pendingVariantId === null
                                      ? 'text-palenque-blue'
                                      : 'text-palenque-night'
                                  }`}
                                >
                                  {getThemeLabel(theme, locale)}
                                </p>
                                <p className="text-xs text-stone-500 mt-0.5">
                                  {theme.colors['palenque-sand']} · {theme.colors['palenque-blue']}
                                </p>
                              </div>

                              {isActive && pendingVariantId === null && (
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-palenque-blue flex items-center justify-center">
                                  <Check className="w-3.5 h-3.5 text-white" />
                                </div>
                              )}
                            </div>
                          </button>

                          {/* 4 variant options */}
                          <div className="mt-3 grid grid-cols-4 gap-2">
                            {variants.map((variant) => {
                              const isVariantSelected =
                                isActive && pendingVariantId === variant.id;
                              return (
                                <button
                                  key={variant.id}
                                  type="button"
                                  onClick={() => {
                                    setPendingTheme(theme.id);
                                    setPendingVariantId(variant.id);
                                    // Live preview variant
                                    const root = document.documentElement;
                                    (Object.keys(variant.colors) as Array<keyof ThemeColors>).forEach(
                                      (key) => {
                                        root.style.setProperty(`--color-${key}`, variant.colors[key]);
                                        root.style.setProperty(`--${key}`, variant.colors[key]);
                                      }
                                    );
                                  }}
                                  className={`relative rounded-xl border p-2 transition-all hover:shadow-sm ${
                                    isVariantSelected
                                      ? 'border-palenque-blue bg-white shadow-sm ring-1 ring-palenque-blue'
                                      : 'border-stone-200 bg-white hover:border-palenque-sand'
                                  }`}
                                >
                                  {/* Mini preview */}
                                  <div className="flex flex-col gap-1 mb-1.5">
                                    <div
                                      className="h-2.5 w-full rounded-sm"
                                      style={{ backgroundColor: variant.colors['palenque-sand-light'] }}
                                    />
                                    <div className="flex gap-1">
                                      <div
                                        className="h-2.5 flex-1 rounded-sm"
                                        style={{ backgroundColor: variant.colors['palenque-sand'] }}
                                      />
                                      <div
                                        className="h-2.5 flex-1 rounded-sm"
                                        style={{ backgroundColor: variant.colors['palenque-blue'] }}
                                      />
                                    </div>
                                    <div
                                      className="h-2.5 w-full rounded-sm"
                                      style={{ backgroundColor: variant.colors['palenque-night'] }}
                                    />
                                  </div>
                                  <p className="text-[10px] font-medium text-center text-stone-600 truncate">
                                    {variant.name[locale]}
                                  </p>
                                  {isVariantSelected && (
                                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-palenque-blue flex items-center justify-center">
                                      <Check className="w-2.5 h-2.5 text-white" />
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Base theme indicator */}
                    <div className="p-3 rounded-lg bg-stone-100 border border-stone-200">
                      <p className="text-xs text-stone-600">
                        {locale === 'es'
                          ? 'Personalizando desde:'
                          : locale === 'fr'
                            ? 'Personnaliser à partir de :'
                            : 'Customizing from:'}{' '}
                        <span className="font-semibold text-stone-800">
                          {currentTheme === 'custom'
                            ? locale === 'es'
                              ? 'Tu tema guardado'
                              : locale === 'fr'
                                ? 'Ton thème sauvegardé'
                                : 'Your saved theme'
                            : getThemeLabel(themes.find((t) => t.id === currentTheme) ?? themes[0], locale)}
                        </span>
                      </p>
                    </div>

                    {/* Brand palette reference */}
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
                      <p className="text-xs font-semibold text-stone-600 uppercase tracking-wider mb-3">
                        {locale === 'es'
                          ? 'Paleta de marca'
                          : locale === 'fr'
                            ? 'Palette de marque'
                            : 'Brand palette'}
                      </p>
                      <div className="flex gap-2">
                        {BRAND_COLORS.map((color) => (
                          <button
                            key={color}
                            type="button"
                            onClick={async () => {
                              try {
                                await navigator.clipboard.writeText(color);
                              } catch {
                                // ignore
                              }
                            }}
                            className="group relative flex-1 h-14 rounded-lg shadow-sm ring-1 ring-stone-200 overflow-hidden transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-palenque-blue focus:ring-offset-2 cursor-copy"
                            style={{ backgroundColor: color }}
                            aria-label={`Copiar ${color}`}
                            title={color}
                          >
                            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 text-white text-[10px] font-mono font-bold uppercase">
                              {color}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Color pickers */}
                    <div>
                      <p className="text-xs text-stone-500 mb-2">
                        {locale === 'es'
                          ? 'Haz clic en una pastilla de color para aplicarla rápidamente a esa variable'
                          : locale === 'fr'
                            ? 'Clique sur un pastille de couleur pour l\'appliquer rapidement à cette variable'
                            : 'Click a color dot to quickly apply it to that variable'}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {(Object.keys(draftCustom) as Array<keyof ThemeColors>).map((key) => (
                        <div
                          key={key}
                          className="flex items-center gap-3 p-3 rounded-xl border border-stone-100 bg-stone-50 transition-colors hover:border-palenque-sand/30"
                        >
                          <label className="relative block w-10 h-10 rounded-lg overflow-hidden shadow-sm ring-1 ring-stone-200 cursor-pointer shrink-0">
                            <input
                              type="color"
                              value={draftCustom[key]}
                              onChange={(e) => handleCustomChange(key, e.target.value)}
                              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                              aria-label={colorLabels[locale][key]}
                            />
                            <div
                              className="w-full h-full"
                              style={{ backgroundColor: draftCustom[key] }}
                            />
                          </label>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-palenque-night">
                              {colorLabels[locale][key]}
                            </p>
                            <p className="text-xs font-mono text-stone-500 uppercase tracking-wide">
                              {draftCustom[key]}
                            </p>
                          </div>
                          {/* Quick brand color buttons */}
                          <div className="flex gap-1 ml-auto">
                            {BRAND_COLORS.map((brandColor) => (
                              <button
                                key={brandColor}
                                type="button"
                                onClick={() => applyBrandColor(brandColor, key)}
                                className="w-4 h-4 rounded-full ring-1 ring-stone-200 hover:scale-125 transition-transform"
                                style={{ backgroundColor: brandColor }}
                                title={`${brandColor} → ${colorLabels[locale][key]}`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                      </div>
                    </div>

                    {/* Hex recap */}
                    <div className="p-4 rounded-xl bg-stone-100 border border-stone-200">
                      <p className="text-xs font-semibold text-stone-600 uppercase tracking-wider mb-2">
                        {t.hexRecap}
                      </p>
                      <code className="block text-[11px] font-mono text-stone-700 break-all leading-relaxed">
                        {Object.entries(draftCustom)
                          .map(([k, v]) => `${k}: ${v}`)
                          .join(' · ')}
                      </code>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer actions */}
              <div className="p-6 border-t border-stone-100 bg-stone-50/70 space-y-3">
                {activeTab === 'presets' ? (
                  <button
                    onClick={handleApply}
                    disabled={!pendingTheme || (pendingTheme === currentTheme && pendingVariantId === null)}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold bg-gradient-to-r from-palenque-sand to-palenque-warm-sand text-palenque-night hover:from-palenque-sand-light hover:to-palenque-sand transition-all shadow-lg shadow-palenque-sand/25 ${
                      !pendingTheme || (pendingTheme === currentTheme && pendingVariantId === null)
                        ? 'opacity-60 cursor-not-allowed'
                        : ''
                    }`}
                  >
                    <Check className="w-4 h-4" />
                    {t.apply}
                  </button>
                ) : (
                  <button
                    onClick={handleSaveCustom}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold bg-gradient-to-r from-palenque-sand to-palenque-warm-sand text-palenque-night hover:from-palenque-sand-light hover:to-palenque-sand transition-all shadow-lg shadow-palenque-sand/25"
                  >
                    <Check className="w-4 h-4" />
                    {t.saveCustom}
                  </button>
                )}

                <button
                  onClick={handleReset}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-palenque-earth bg-white border border-stone-200 hover:bg-stone-100 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  {t.reset}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
