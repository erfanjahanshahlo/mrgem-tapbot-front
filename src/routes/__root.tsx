import { BottomMenu, Layout, Navbar } from "@/features";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
      {/* Remove this line in production */}
      <TanStackRouterDevtools />
      <BottomMenu />
    </>
  ),
});
