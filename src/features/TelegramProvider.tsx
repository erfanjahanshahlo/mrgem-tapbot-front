import { ITelegramUser, IWebApp } from "@/@types";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Props = PropsWithChildren;
export interface ITelegramContext {
  webApp?: IWebApp;
  user?: ITelegramUser;
}

export const TelegramContext = createContext<ITelegramContext>({});

const TelegramProvider = ({ children }: Props) => {
  const [webApp, setWebApp] = useState<IWebApp | null>(null);

  useEffect(() => {
    const app = (window as any).Telegram?.WebApp;
    if (app) {
      app.ready();
      setWebApp(app);
    }
  }, []);

  const value = useMemo(() => {
    return webApp
      ? {
          webApp,
          unsafeData: webApp.initDataUnsafe,
          user: webApp.initDataUnsafe.user,
        }
      : {};
  }, [webApp]);

  return (
    <TelegramContext.Provider value={value}>
      {/* Make sure to include script tag with "beforeInteractive" strategy to pre-load web-app script */}
      {children}
    </TelegramContext.Provider>
  );
};
export const useTelegram = () => useContext(TelegramContext);

export { TelegramProvider };
