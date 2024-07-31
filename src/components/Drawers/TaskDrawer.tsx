import { formatNumber } from "@/utils";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui";
import Coin from "/G-coin.png";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { urls } from "@/constants/urls";
import { useTelegram } from "@/features/TelegramProvider";
import { useMainContext } from "@/providers/MainContext";
import Checked from "/checked.png";
import { useDatas } from "@/hooks";
type Props = {
  action_link: string;
  action_text: string;
  cat: string;
  coin: number;
  description: string;
  heading: string;
  icon: string;
  id: string;
  name: string;
  action_is_force?: boolean;
};

const TaskDrawer = ({
  action_link,
  action_text,
  // cat,
  id,
  coin,
  description,
  heading,
  icon,
  name,
  action_is_force,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isForce, setIsForce] = useState(
    action_is_force ? action_is_force : false
  );
  const { data: mainData } = useMainContext();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { webApp } = useTelegram();
  // const { setCoins } = useMainContext();
  const isCompleted = mainData?.user.completed_tasks.includes(id);
  const { refetch } = useDatas();
  const handleTaskCheck = async () => {
    setIsSubmiting(true);
    const { data, status } = await axios.post(
      urls.submitTask,
      {
        id,
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
      webApp?.showAlert("An error occurred, please try again later");
      setIsSubmiting(false);
      setIsOpen(false);
      return;
    }
    if (!data.success) {
      webApp?.showAlert(data.msg);
    } else {
      // setCoins((prev) => prev + coin);
      refetch();
      webApp?.showAlert(`You have earned ${coin} coins`);
    }
    setIsSubmiting(false);
    setIsOpen(false);
  };
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <div className="flex w-full justify-between items-center p-2  bg-card border border-cardBorder rounded-2xl gap-2 transition-colors duration-500">
          <div className="flex justify-center items-start gap-3">
            <img src={icon} className="size-12 rounded-md" />
            <div className="text-sm flex flex-col justify-start items-start ">
              <p className="text-base font-medium">{name}</p>
              <span className=" space-x-0.5">
                <img src={Coin} alt="" className="size-4.5 inline" />

                <span className="font-bold ml-1">+{formatNumber(coin)}</span>
              </span>
            </div>
          </div>
          {isCompleted ? (
            <img src={Checked} className="size-7 rounded-full" alt="" />
          ) : (
            <ChevronRight className="size-7" />
          )}
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <img src={icon} alt="" className="size-28 mx-auto mt-5" />
        <DrawerHeader>
          <DrawerTitle className="text-3xl">{heading}</DrawerTitle>
          <DrawerDescription className="text-white">
            {description}
          </DrawerDescription>
          {action_text && (
            <Button
              className="w-fit mx-auto rounded-xl px-10 my-5 text-base font-medium"
              onClick={() => {
                setIsForce(false);
                if (action_link.includes("://t.me")) {
                  webApp?.openTelegramLink(action_link);
                }
                webApp?.openLink(action_link);
              }}>
              {action_text}
            </Button>
          )}
          <div className="flex justify-center items-center">
            <img src={Coin} alt="" className="size-5 inline" />
            {/* <UsdCoin className="inline text-secondary-100" /> */}
            <span className="font-bold text-lg ml-0.5 ">
              +{formatNumber(coin)}
            </span>
          </div>
        </DrawerHeader>
        {!isCompleted && (
          <DrawerFooter>
            <Button
              disabled={isForce || isSubmiting || isCompleted}
              onClick={handleTaskCheck}
              className="w-full h-14 text-white/90 rounded-xl font-semibold text-2xl">
              Check
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export { TaskDrawer };
