import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui";
import ClashOfClansLogo from "/clashOfClansIcon.webp";

type Props = {};

const GameDrawer = ({}: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [snapPoint, setSnapPoint] = useState<number | string | null>(0.9);
  return (
    <Drawer
      open={isDialogOpen}
      onOpenChange={setIsDialogOpen}
      snapPoints={[0.6, 0.9]}
      activeSnapPoint={snapPoint}
      disablePreventScroll={false}
      modal={false}
      setActiveSnapPoint={setSnapPoint}>
      <DrawerTrigger asChild>
        <div className="flex justify-center items-center gap-2 text-lg">
          clash of clans
          <img src={ClashOfClansLogo} className="size-10 rounded-md" />
        </div>
      </DrawerTrigger>
      <DrawerContent className="max-h-svh  h-full  !outline-none pb-20">
        <DrawerHeader>
          <DrawerTitle className="text-2xl font-semibold capitalize">
            Select your game
          </DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <div className="w-full space-y-2 px-2 overflow-hidden overflow-y-scroll pb-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              onClick={() => setIsDialogOpen(false)}
              className="flex justify-between items-center p-4 bg-white/10 backdrop-blur-3xl rounded-2xl">
              <div className="flex gap-2 items-center">
                <img src={ClashOfClansLogo} className="size-10 rounded-md" />
                <div className="text-lg font-semibold">Clash of clans</div>
              </div>
              <button className="btn btn-primary">Play</button>
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export { GameDrawer };
