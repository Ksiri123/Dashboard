
import { create } from "zustand";

export type ThemeMode = "light" | "dark";

interface StoreState {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;

  // Search and filter state
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  // Theme management
  theme: "light",
  setTheme: (theme) => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),

  // Search and filter
  searchTerm: "",
  setSearchTerm: (searchTerm) => set({ searchTerm }),
}));

// Initialize theme from localStorage or system preference
export const initializeTheme = () => {
  const savedTheme = localStorage.getItem("theme") as ThemeMode | null;
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const theme = savedTheme || (systemPrefersDark ? "dark" : "light");
  useStore.getState().setTheme(theme);
  
  return theme;
};
