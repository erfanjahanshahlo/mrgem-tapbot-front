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
import ClashOfClansBanner from "/shopProduct.png";
import { UserCircle2Icon, UserIcon } from "lucide-react";

type Props = {};

const ProductDrawer = ({}: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  // const [snapPoint, setSnapPoint] = useState<number | string | null>(0.9);
  // Define the starting time in seconds (e.g., 1 minute = 60 seconds)
  const [timeLeft, setTimeLeft] = useState<number>(60);
  // const calCulateTimeLeft = (time: number) => {
  //   if (time <= 0) return "0:00";
  //   const minutes = Math.floor(time / 60);
  //   const seconds = time % 60;
  //   return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  // };
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
  // const [isFocused, setIsFocused] = useState(false);
  return (
    <Drawer
      open={isDialogOpen}
      onOpenChange={setIsDialogOpen}
      // snapPoints={[0.9]}
      // activeSnapPoint={snapPoint}
      // disablePreventScroll={true}
      // modal={true}
      // setActiveSnapPoint={setSnapPoint}
    >
      <DrawerTrigger asChild>
        <Button
          variant={"secondary"}
          className="flex-1 py-2 text-sm font-semibold rounded-md capitalize bg-black-60">
          buy
        </Button>
      </DrawerTrigger>
      <DrawerContent className={""}>
        <DrawerHeader>
          <DrawerTitle className="text-2xl font-semibold capitalize">
            Enter your details
          </DrawerTitle>
        </DrawerHeader>
        <div className="w-full overflow-auto px-5 space-y-5">
          <img
            src={ClashOfClansBanner}
            className="w-full h-auto aspect-video rounded-lg"
            alt=""
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm">Game ID :</span>
            <label htmlFor="gameId" className="relative">
              <input
                // onBlur={() => setIsFocused(false)}
                // onFocus={() => setIsFocused(true)}
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
                // onBlur={() => setIsFocused(false)}
                // onFocus={() => setIsFocused(true)}
                type="text"
                name=""
                id=""
                className="w-full h-11 bg-[#10151F] rounded-lg border border-[#C14DD4] !outline-none pl-10"
              />
              <UserIcon className="absolute top-1/2 left-2 -translate-y-1/2" />
            </label>
            <Button className="w-full mt-5 px-5 mb-6" disabled>
              Purchase
            </Button>
          </div>
        </div>
        <div className="w-full "></div>
      </DrawerContent>
    </Drawer>
  );
};

export { ProductDrawer };
