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
    return (
      <div className="flex flex-col w-full h-full justify-end items-center p-6 relative">
        <div className="flex flex-col gap-2 justify-center items-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <div className="loader"></div>
          <span className="text-2xl capitalize">loading</span>
        </div>
        <div className="mt-10 space-y-2">
          <h1 className="text-2xl font-bold text-center">MRgem bot</h1>
          <p className="text-center">Please wait while we load the app</p>
          <h2 className="text-center text-6xl font-bold">on TON</h2>
        </div>
        <div className="mt-5">
          <p className="text-center">stay tuned</p>
          <h6 className="text-center">More info in socials</h6>
          <div className="flex justify-center items-center gap-5 mt-3">
            <a
              href="#"
              className="size-10 rounded-full bg-red-50 flex justify-center items-center p-2">
              icon
            </a>
            <a
              href="#"
              className="size-10 rounded-full bg-red-50 flex justify-center items-center p-2"></a>
            <a
              href="#"
              className="size-10 rounded-full bg-red-50 flex justify-center items-center p-2"></a>
          </div>
        </div>
      </div>
    );
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
