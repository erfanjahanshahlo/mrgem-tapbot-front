import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

// Create the context
const MainContext = createContext<{
  data: Record<string, any> | null;
  setData: React.Dispatch<React.SetStateAction<Record<string, any> | null>>;
  coins: number;
  setCoins: React.Dispatch<React.SetStateAction<number>>;
  minePower: number | null;
  setMinePower: React.Dispatch<React.SetStateAction<number | null>>;
}>({
  data: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setData: () => {},
  coins: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCoins: () => {},
  minePower: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setMinePower: () => {},
});

// Create a provider component
export function MainContextProvider({ children }: PropsWithChildren) {
  const [data, setData] = useState<Record<string, any> | null>(null);
  const [coins, setCoins] = useState<number>(0);
  const [minePower, setMinePower] = useState<number | null>(null);
  return (
    <MainContext.Provider
      value={{ data, setData, coins, setCoins, minePower, setMinePower }}>
      {children}
    </MainContext.Provider>
  );
}

// Create a custom hook for using the context
export function useMainContext() {
  return useContext(MainContext);
}
