import React from "react";
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui";
import ClashOfClansLogo from "/clashOfClansIcon.webp";
import { UsdCoin } from "iconsax-react";
import { ChevronRight } from "lucide-react";

type Props = {};

const TaskDrawer = ({}: Props) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex justify-between items-center p-2  bg-white/10 backdrop-blur-3xl rounded-2xl gap-2 transition-colors duration-500">
          <div className="flex justify-center items-start gap-3">
            <img src={ClashOfClansLogo} className="size-12 rounded-md" />
            <div className="text-sm flex flex-col justify-start items-start ">
              <p className="text-base font-medium">New video</p>
              <span className=" space-x-0.5">
                <UsdCoin className="inline text-secondary-100" />

                <span className="font-bold ml-0.5 ">+5,000</span>
              </span>
            </div>
          </div>
          <ChevronRight className="size-7" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <UsdCoin className="text-secondary-100 size-28 mx-auto mt-5" />

        <DrawerHeader>
          <DrawerTitle className="text-3xl">Secrets of the market</DrawerTitle>
          <DrawerDescription className="text-white">
            This action cannot be undone.
          </DrawerDescription>
          <Button className="w-fit mx-auto rounded-xl px-10 my-5 text-base font-medium">
            watch video
          </Button>
          <div className="flex justify-center items-center">
            <UsdCoin className="inline text-secondary-100" />
            <span className="font-bold text-lg ml-0.5 ">+5,000</span>
          </div>
        </DrawerHeader>

        <DrawerFooter>
          <DrawerClose className="w-full">
            <Button className="w-full h-20 rounded-xl text-2xl">Check</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export { TaskDrawer };
