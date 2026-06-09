'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import {
  ThemeName,
  ThemeColors,
  defaultTheme,
  themes,
  STORAGE_KEY,
  CUSTOM_THEME_STORAGE_KEY,
} from '@/lib/themes';

interface ThemeContextValue {
  currentTheme: ThemeName;
  colors: ThemeColors;
  customColors: ThemeColors;
  setTheme: (themeId: ThemeName) => void;
  setCustomColors: (colors: ThemeColors) => void;
  saveCustomTheme: (colors: ThemeColors) => void;
  resetTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

function applyThemeColors(colors: ThemeColors) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  (Object.keys(colors) as Array<keyof ThemeColors>).forEach((key) => {
    root.style.setProperty(`--color-${key}`, colors[key]);
    root.style.setProperty(`--${key}`, colors[key]);
  });
}

function getInitialTheme(): ThemeName {
  if (typeof window === 'undefined') return 'palenque';
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeName | null;
    if (stored && (themes.some((t) => t.id === stored) || stored === 'custom')) return stored;
  } catch {
    // ignore
  }
  return 'palenque';
}

function getInitialCustomColors(): ThemeColors {
  if (typeof window === 'undefined') return { ...defaultTheme };
  try {
    const stored = localStorage.getItem(CUSTOM_THEME_STORAGE_KEY);
    if (stored) return JSON.parse(stored) as ThemeColors;
  } catch {
    // ignore
  }
  return { ...defaultTheme };
}

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('palenque');
  const [customColors, setCustomColorsState] = useState<ThemeColors>({ ...defaultTheme });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initial = getInitialTheme();
    const custom = getInitialCustomColors();
    setCustomColorsState(custom);
    setCurrentTheme(initial);

    if (initial === 'custom') {
      applyThemeColors(custom);
    } else {
      const theme = themes.find((t) => t.id === initial) || themes[0];
      applyThemeColors(theme.colors);
    }
  }, []);

  const setTheme = useCallback((themeId: ThemeName) => {
    if (themeId === 'custom') {
      const custom = getInitialCustomColors();
      setCustomColorsState(custom);
      setCurrentTheme('custom');
      applyThemeColors(custom);
      try {
        localStorage.setItem(STORAGE_KEY, 'custom');
      } catch {
        // ignore
      }
      return;
    }
    const theme = themes.find((t) => t.id === themeId);
    if (!theme) return;
    setCurrentTheme(themeId);
    applyThemeColors(theme.colors);
    try {
      localStorage.setItem(STORAGE_KEY, themeId);
    } catch {
      // ignore
    }
  }, []);

  const setCustomColors = useCallback((colors: ThemeColors) => {
    setCustomColorsState(colors);
    applyThemeColors(colors);
  }, []);

  const saveCustomTheme = useCallback((colors: ThemeColors) => {
    setCustomColorsState(colors);
    setCurrentTheme('custom');
    applyThemeColors(colors);
    try {
      localStorage.setItem(CUSTOM_THEME_STORAGE_KEY, JSON.stringify(colors));
      localStorage.setItem(STORAGE_KEY, 'custom');
    } catch {
      // ignore
    }
  }, []);

  const resetTheme = () => {
    setTheme('palenque');
  };

  const colors =
    currentTheme === 'custom'
      ? customColors
      : themes.find((t) => t.id === currentTheme)?.colors ?? defaultTheme;

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        colors,
        customColors,
        setTheme,
        setCustomColors,
        saveCustomTheme,
        resetTheme,
      }}
    >
      {/* Prevent flash of unstyled content on initial render */}
      {!mounted && (
        <style
          dangerouslySetInnerHTML={{
            __html: `:root { ${Object.entries(defaultTheme)
              .map(([k, v]) => `--color-${k}:${v};--${k}:${v}`)
              .join(';')} }`,
          }}
        />
      )}
      {children}
    </ThemeContext.Provider>
  );
}
