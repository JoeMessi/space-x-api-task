import create from "zustand";
import { fetchRockets, fetchHistory, Rocket, History } from "../fetch/fetch";

interface Store {
  rockets: Rocket[];
  history: History[];
  isMenuOpen: boolean;
  loading: boolean;
  getRockets: () => void;
  getHistory: () => void;
  handleMenu: () => void;
  setLoading: (loading: boolean) => void;
}

export const useStore = create<Store>((set) => ({
  rockets: [],
  history: [],
  isMenuOpen: true,
  loading: false,

  getRockets: async () => {
    const rockets = await fetchRockets();
    set((state) => ({ ...state, rockets: rockets }));
  },

  getHistory: async () => {
    const history = await fetchHistory();
    set((state) => ({ ...state, history: history }));
  },

  handleMenu: () => {
    set((state) => ({ ...state, isMenuOpen: !state.isMenuOpen }));
  },

  setLoading: (loading: boolean) => {
    set((state) => ({ ...state, loading: loading }));
  },
}));
