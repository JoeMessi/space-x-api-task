import shallow from "zustand/shallow";
import { useStore } from "./store";

export const useIt = () => {
  const { getRockets, setLoading } = useStore(
    (state) => ({
      getRockets: state.getRockets,
      setLoading: state.setLoading,
    }),
    shallow
  );

  const test = async () => {
    setLoading(true);
    await getRockets();
    setLoading(false);
  };

  return { test };
};
