import { BottomMenu, Layout, Navbar } from "@/features";
import { useTelegram } from "@/features/TelegramProvider";
import { useDatas } from "@/hooks";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useEffect } from "react";
export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const { webApp } = useTelegram();
  useDatas();

  // const dispatch = useDispatch();
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
      {/* <TanStackRouterDevtools /> */}
      <BottomMenu />
    </>
  );
}
