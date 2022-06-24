import create from "zustand";
import { fetchRockets, fetchHistory, Rocket, History } from "../fetch/fetch";

export interface Store {
  rockets: Rocket[];
  history: History[];
  isMenuOpen: boolean;
  setRockets: () => Promise<void>;
  setHistory: () => Promise<void>;
  setMenuOpen: () => void;
}

export const useStore = create<Store>((set) => ({
  rockets: [],
  history: [],
  isMenuOpen: true,

  setRockets: async () => {
    const rockets = await fetchRockets();
    set((state) => ({ ...state, rockets: rockets }));
  },

  setHistory: async () => {
    const history = await fetchHistory();
    set((state) => ({ ...state, history: history }));
  },

  setMenuOpen: () => {
    set((state) => ({ ...state, isMenuOpen: !state.isMenuOpen }));
  },
}));
