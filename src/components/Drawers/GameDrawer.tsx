import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui";
import { cn } from "@/utils";
import { useMainContext } from "@/providers/MainContext";
import axios from "axios";
import { urls } from "@/constants/urls";
import { useTelegram } from "@/features/TelegramProvider";

type Props = {};

const GameDrawer = ({}: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [snapPoint, setSnapPoint] = useState<number | string | null>(0.9);
  const { webApp } = useTelegram();
  const { data } = useMainContext();
  const selectedGame =
    data?.data.games.find((game: any) => {
      return game.id === data.user.selected_game;
    }) || null;
  const indexOfSelectedGame = data?.data.games.findIndex(
    (game: any) => game.id === data?.user.selected_game
  );
  const [selectedGameIndex, setSelectedGameIndex] = useState<number>(
    indexOfSelectedGame || 0
  );
  const handleClick = async (gameId: string, i: number) => {
    setSelectedGameIndex(i); // You might need to adjust this based on how you're tracking selected games
    const { status } = await axios.post(
      urls.changeGame,
      {
        id: gameId,
      },
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-INITDATA": webApp?.initData,
        },
      }
    );
    if (status >= 400 && status < 500) {
      // Handle error
      return;
    }
    setIsDialogOpen(false);
  };
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
          {selectedGame !== null ? (
            <>
              {data?.data.games[selectedGameIndex].name}
              <img
                src={data?.data.games[selectedGameIndex].icon}
                className="size-10 rounded-md"
              />
            </>
          ) : (
            <>Select your game</>
          )}
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
                onClick={async () => {
                  await handleClick(game.id, i);
                }}
                className={cn(
                  "flex justify-between items-center p-4 bg-card border border-cardBorder backdrop-blur-3xl rounded-2xl transition-colors duration-500",
                  i === selectedGameIndex
                    ? "bg-gradient-to-bl from-secondary-80 to-secondary-100"
                    : ""
                )}>
                <div className="flex gap-2 items-center text-lg">
                  <img src={game.icon} className="size-14 rounded-md" />
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
