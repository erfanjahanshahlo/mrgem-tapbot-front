import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui";
import ClashOfClansLogo from "/clashOfClansIcon.webp";
import { cn } from "@/utils";
import { useMainContext } from "@/providers/MainContext";

type Props = {};

const GameDrawer = ({}: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [snapPoint, setSnapPoint] = useState<number | string | null>(0.9);
  const [selectedGameIndex, setSelectedGameIndex] = useState<number>(0);
  const { data } = useMainContext();
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
        <div className="flex justify-center items-center gap-2 text-lg">
          {data?.data.games[selectedGameIndex].name}
          <img src={ClashOfClansLogo} className="size-10 rounded-md" />
        </div>
      </DrawerTrigger>
      <DrawerContent className="  h-full  !outline-none pb-20">
        <DrawerHeader>
          <DrawerTitle className="text-2xl font-semibold capitalize">
            Select your game
          </DrawerTitle>
        </DrawerHeader>
        <div className="w-full space-y-2 px-2 overflow-hidden overflow-y-scroll pb-5">
          {data &&
            data?.success &&
            data?.data.games.map((game: any, i: number) => (
              <div
                key={game}
                onClick={() => {
                  setSelectedGameIndex(i); // You might need to adjust this based on how you're tracking selected games
                  setIsDialogOpen(false);
                }}
                className={cn(
                  "flex justify-between items-center p-4 bg-card border border-cardBorder backdrop-blur-3xl rounded-2xl transition-colors duration-500",
                  i === selectedGameIndex
                    ? "bg-gradient-to-bl from-secondary-80 to-secondary-100"
                    : ""
                )}>
                <div className="flex gap-2 items-center">
                  <img src={game.icon} className="size-10 rounded-md" />
                  <span>{game.name}</span>
                </div>
              </div>
            ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export { GameDrawer };
