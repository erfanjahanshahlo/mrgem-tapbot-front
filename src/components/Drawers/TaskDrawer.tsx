import { formatNumber } from "@/utils";
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
import Coin from "/G-coin.png";
import { ChevronRight } from "lucide-react";

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
  isCompleted?: boolean;
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
  isCompleted,
}: Props) => {
  console.log(id);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex justify-between items-center p-2  bg-card border border-cardBorder backdrop-blur-3xl rounded-2xl gap-2 transition-colors duration-500">
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
            <span className="text-green-500">Completed</span>
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
              asChild>
              <a href={action_link}>{action_text}</a>
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
