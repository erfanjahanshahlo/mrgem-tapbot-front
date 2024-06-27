import { BottomMenu, Layout, Navbar, TelegramProvider } from "@/features";
import { useTelegram } from "@/features/TelegramProvider";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useEffect } from "react";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const { webApp } = useTelegram();
  useEffect(() => {
    // const app = (window as any).Telegram?.WebApp;
    // if (app) {
    //   app.ready();
    // }
    webApp?.isExpanded &&
      webApp?.MainButton.isActive &&
      webApp?.MainButton.isVisible;
  }, []);
  return (
    <TelegramProvider>
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
      {/* Remove this line in production */}
      <TanStackRouterDevtools />
      <BottomMenu />
    </TelegramProvider>
  );
}
