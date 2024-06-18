import { Flash } from "iconsax-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui";
import { DoorOpen } from "lucide-react";
import { FingerTapIcon } from "@/assets/icons";
import { cn } from "@/utils";
import { useState } from "react";

type Props = {};

const LevelsDrawer = ({}: Props) => {
  const [snapPoint, setSnapPoint] = useState<number | string | null>(0.9);

  return (
    <Drawer
      snapPoints={[0.6, 0.9]}
      activeSnapPoint={snapPoint}
      disablePreventScroll={false}
      modal={false}
      setActiveSnapPoint={setSnapPoint}>
      <DrawerTrigger asChild>
        <div className="flex justify-between items-center gap-1 w-full">
          <h2 className="text-base font-semibold">Legendary</h2>
          <div className="text-sm leading-3">
            <p>2/10</p>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent className="px-2 pb-2 ">
        <DrawerHeader>
          <DrawerTitle className="text-2xl font-semibold capitalize">
            Levels
          </DrawerTitle>
          <DrawerDescription className="capitalize">
            Here you can see all the levels
          </DrawerDescription>
        </DrawerHeader>
        <div className=" h-fit  w-full space-y-2 overflow-hidden overflow-y-scroll pb-20">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`levelBox--${i}`}
              className={cn(
                "w-full  rounded-xl overflow-hidden p-4 bg-[#101622] border backdrop-blur-xl",
                i === 1 ? "border-[#C14DD4]" : " border-[#242C3E] "
              )}>
              <h5 className="w-full  h-fit  text-lg font-semibold">
                LevelName
              </h5>
              <ol className="p-2 mt-2 grid grid-cols-3 divide-x-2 divide-gray-80">
                <li className="flex items-center gap-2 text-sm w-full px-2 justify-center">
                  <DoorOpen />
                  <span> 3000</span>
                </li>
                <li className="flex items-center gap-2 text-sm w-full px-2 justify-center">
                  <Flash />
                  <span>2000</span>
                </li>
                <li className="flex items-center gap-2 text-sm w-full px-2 justify-center">
                  <FingerTapIcon className="size-6" />
                  <span>3</span>
                </li>
              </ol>
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export { LevelsDrawer };
