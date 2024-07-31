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
  userCoins: number;
  setUserCoins: React.Dispatch<React.SetStateAction<number>>;
  minePower: number | null;
  setMinePower: React.Dispatch<React.SetStateAction<number | null>>;
  syncing: boolean;
  setSyncing: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  data: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setData: () => {},
  coins: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCoins: () => {},
  userCoins: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUserCoins: () => {},
  minePower: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setMinePower: () => {},
  setSyncing: () => {},
  syncing: false,
});

// Create a provider component
export function MainContextProvider({ children }: PropsWithChildren) {
  const [data, setData] = useState<Record<string, any> | null>(null);
  const [coins, setCoins] = useState<number>(0);
  const [minePower, setMinePower] = useState<number | null>(null);
  const [userCoins, setUserCoins] = useState<number>(0);
  const [syncing, setSyncing] = useState(false);

  return (
    <MainContext.Provider
      value={{
        data,
        setData,
        coins,
        setCoins,
        minePower,
        setMinePower,
        setUserCoins,
        userCoins,
        syncing,
        setSyncing,
      }}>
      {children}
    </MainContext.Provider>
  );
}

// Create a custom hook for using the context
export function useMainContext() {
  return useContext(MainContext);
}
