import { useEffect, useState } from "react";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui";
// import { UsdCoin } from "iconsax-react";
import ClashOfClansBanner from "../../../public/clashOfClansBanner.jfif";
import { UsdCoin } from "iconsax-react";
import { TimerIcon, UserCircle2Icon, UserIcon } from "lucide-react";
type Props = {};

const ProductDrawer = ({}: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [snapPoint, setSnapPoint] = useState<number | string | null>(0.9);
  // Define the starting time in seconds (e.g., 1 minute = 60 seconds)
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const calCulateTimeLeft = (time: number) => {
    if (time <= 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  useEffect(() => {
    const timeInterval = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(timeInterval);
        return;
      }
      setTimeLeft((prev) => --prev);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);
  return (
    <Drawer
      open={isDialogOpen}
      onOpenChange={setIsDialogOpen}
      snapPoints={[0.9]}
      activeSnapPoint={snapPoint}
      disablePreventScroll={false}
      modal={false}
      setActiveSnapPoint={setSnapPoint}>
      <DrawerTrigger asChild>
        <div className="w-full  h-full  rounded-2xl bg-card border border-cardBorder relative">
          <img
            src={ClashOfClansBanner}
            className="w-full object-cover object-center rounded-2xl aspect-[3/4]"
          />
          {timeLeft > 0 && (
            <div
              key={timeLeft}
              className="absolute gap-1 bg-black/60 backdrop-blur w-11/12 h-10 top-1 left-1/2 rounded-md -translate-x-1/2 flex justify-center items-center">
              <TimerIcon /> {calCulateTimeLeft(timeLeft)}
            </div>
          )}
          <div className="w-full h-1/4 gap-1 bg-black/60 divide-y divide-white/70  flex justify-center items-center flex-col backdrop-blur absolute inset-x-0 bottom-0">
            <h5 className="text-sm text-center ">UC pubge mobile</h5>
            <span className="flex w-full pt-1 justify-center items-center gap-2">
              <UsdCoin className="text-secondary-100" />
              1000
            </span>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent className="  h-fit  !outline-none pb-20">
        <DrawerHeader>
          <DrawerTitle className="text-2xl font-semibold capitalize">
            Enter your details
          </DrawerTitle>
        </DrawerHeader>
        <div className="w-full h-fit px-5 space-y-5">
          <img
            src={ClashOfClansBanner}
            className="w-full h-auto aspect-video rounded-lg"
            alt=""
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm">Game ID :</span>
            <label htmlFor="gameId" className="relative">
              <input
                type="text"
                name=""
                id=""
                className="w-full h-11 bg-[#10151F] rounded-lg border border-[#C14DD4] !outline-none pl-10"
              />
              <UserCircle2Icon className="absolute top-1/2 left-2 -translate-y-1/2" />
            </label>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm">Game Name :</span>
            <label htmlFor="gameName" className="relative">
              <input
                type="text"
                name=""
                id=""
                className="w-full h-11 bg-[#10151F] rounded-lg border border-[#C14DD4] !outline-none pl-10"
              />
              <UserIcon className="absolute top-1/2 left-2 -translate-y-1/2" />
            </label>
          </div>
        </div>
        <div className="w-full mt-5 px-5">
          <Button className="w-full" disabled>
            Purchase
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export { ProductDrawer };
