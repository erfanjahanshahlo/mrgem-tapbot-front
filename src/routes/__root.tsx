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
  const { isLoading } = useDatas();

  useEffect(() => {
    webApp?.expand();
  }, [webApp]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // if (webApp?.platform !== "android" && webApp?.platform !== "ios") {
  //   return (
  //     <div className="w-full h-full flex justify-center items-center px-5">
  //       <h1 className="font-bold text-3xl text-center">
  //         Please use the app on your mobile devices
  //       </h1>
  //     </div>
  //   );
  // }

  return (
    <>
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
      <BottomMenu />
    </>
  );
}
