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
    webApp?.expand();
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
