export type QrContextType = {
  error: boolean;
  setError: (error: boolean) => void;
  url: string;
  setUrl: (url: string) => void;
  generateQRCode: () => void;
  qr: string;
  color: string;
  size: number | null;
  downloadQRCode: () => void;
  repeatAction: () => void;
  setIsVisible: (visible: boolean) => void;
  isVisible: boolean;
  setColor: (color: string) => void;
  setSize: (size: number) => void;
  setElementRef?: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
};

export type ApiRes<T> = {
  data: T;
  error: boolean;
  isLoading: boolean;
};

import { themeData } from "src/statics/theme";

export type ThemeKey = keyof typeof themeData;

export type ThemeContextType = {
  theme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
};

export type AudioContextType = {
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
};
