import create from "zustand";
import { fetchRockets, fetchHistory, Rocket, History } from "../fetch/fetch";

interface Store {
  rockets: Rocket[];
  history: History[];
  getRockets: () => void;
  getHistory: () => void;
}

export const useStore = create<Store>((set) => ({
  rockets: [],
  history: [],

  getRockets: async () => {
    const rockets = await fetchRockets();
    set((state) => ({ ...state, rockets: rockets }));
  },

  getHistory: async () => {
    const history = await fetchHistory();
    set((state) => ({ ...state, ships: history }));
  },
}));

// set((state) => ({ ...state, ships: [...state.ships, ...ships] }));
