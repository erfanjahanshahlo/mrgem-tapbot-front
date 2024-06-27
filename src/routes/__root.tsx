import { BottomMenu, Layout, Navbar } from "@/features";
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
    <>
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
      {/* Remove this line in production */}
      <TanStackRouterDevtools />
      <BottomMenu />
    </>
  );
}
