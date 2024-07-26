import { BottomMenu, Layout, Navbar } from "@/features";
import { useTelegram } from "@/features/TelegramProvider";
import { useDatas } from "@/hooks";
import { useSyncCoins } from "@/hooks/useSyncCoins";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Instagram, Send2, Youtube } from "iconsax-react";
import { useEffect } from "react";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const { webApp } = useTelegram();
  const { syncCoins } = useSyncCoins();
  useEffect(() => {
    webApp?.expand();
    webApp?.disableVerticalSwipes();
    const coins = localStorage.getItem("coins");
    if (coins) {
      syncCoins(+coins);
      // localStorage.removeItem("coins");
    }
  }, [webApp]);
  const { isLoading } = useDatas();
  if (isLoading) {
    return (
      <div className="flex flex-col w-full h-full justify-end items-center p-6 relative bg-loading bg-center bg-cover">
        <div className="flex flex-col gap-2 justify-center items-center ">
          <div className="loader"></div>
        </div>
        {/* <div className="mt-10 space-y-2">
          <h1 className="text-2xl font-bold text-center">MRgem bot</h1>
          <p className="text-center">Please wait while we load the app</p>
          <h2 className="text-center text-6xl font-bold">on TON</h2>
        </div> */}
        <div className="mt-5">
          <p className="text-center uppercase font-medium">stay tuned</p>
          <h6 className="text-center uppercase font-medium">
            More info in socials
          </h6>
          <div className="flex justify-center items-center gap-5 mt-3">
            <a
              href="https://www.instagram.com/mrgem.ir"
              className="size-12 rounded-full bg-card border border-cardBorder flex justify-center items-center p-1">
              <Instagram className="size-7" />
            </a>
            <a
              href="https://t.me/mrgem_official"
              className="size-12 rounded-full bg-card border border-cardBorder flex justify-center items-center p-1">
              <Send2 className="size-7" />
            </a>
            <a
              href="#"
              className="size-12 rounded-full bg-card border border-cardBorder flex justify-center items-center p-1">
              <Youtube className="size-7" />
            </a>
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
      {/* {localStorage.getItem("coins")} */}
      <Layout>
        <Outlet />
      </Layout>
      <BottomMenu />
    </>
  );
}
