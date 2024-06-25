import { Copy, Dot, RefreshCcw, UserPlus2 } from "lucide-react";
import ClashOfClansLogo from "/clashOfClansIcon.webp";
import { UsdCoin } from "iconsax-react";
import { useState } from "react";
import { cn } from "@/utils";
import { Button } from "@/components/ui";
type Props = {};

const FriendsPage = ({}: Props) => {
  const [isSpining, setIsSpining] = useState(false);
  return (
    <div className="w-full h-full flex flex-col justify-between items-center gap-5 overflow-hidden overflow-y-auto pb-3">
      <div className="flex flex-col items-center gap-5">
        <h1 className="capitalize text-3xl font-bold">invite friends!</h1>
        <p className="text-base">share your referral link to earn rewards</p>
        <div className="w-full space-y-1.5">
          <div className="grid grid-cols-4 p-2  bg-card border border-cardBorder backdrop-blur-3xl rounded-2xl gap-2 transition-colors duration-500">
            <img src={ClashOfClansLogo} className="w-full rounded-md" />
            <div className="col-span-3 text-sm flex flex-col justify-start items-start gap-2">
              <p className="text-lg font-semibold">Invite a friend</p>
              <span className=" space-x-0.5">
                <Dot
                  strokeWidth={5}
                  className="size-5 inline text-secondary-100"
                />
                <UsdCoin className="inline text-secondary-100" />
                <span className="font-bold ml-0.5 text-secondary-100">
                  +5,000
                </span>
                <span>for you and your friend</span>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4 p-2  pb-5 bg-card border border-cardBorder backdrop-blur-3xl rounded-2xl gap-2 transition-colors duration-500">
            <img src={ClashOfClansLogo} className="w-full rounded-md" />
            <div className="col-span-3 text-sm flex flex-col justify-start items-start gap-2">
              <p className="text-lg font-semibold">
                Invite a friend with telegram Premium
              </p>
              <span className=" space-x-0.5">
                <Dot
                  strokeWidth={5}
                  className="size-5 inline text-secondary-100"
                />
                <UsdCoin className="inline text-secondary-100" />
                <span className="font-bold ml-0.5 text-secondary-100">
                  +5,000
                </span>
                <span>for you and your friend</span>
              </span>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-green-40">More bonuses</h3>
        <div className="flex flex-col  gap-4 w-full">
          <div className="flex justify-between items-center">
            <h4 className="col-span-3">List of your friend</h4>
            <RefreshCcw
              onClick={() => setIsSpining((prev) => !prev)}
              className={cn(isSpining ? "animate-spin" : "")}
            />
          </div>
          <div className="col-span-full bg-card border border-cardBorder backdrop-blur-3xl py-5 w-full flex justify-center items-center rounded-xl text-white/40">
            You havent invited any friends yet
          </div>
        </div>
      </div>
      <div className="w-full h-fit grid grid-cols-6 gap-1">
        <Button className="h-14 text-white/90 rounded-xl  w-full p-0 text-base  animate-pulse col-span-5  capitalize flex justify-center items-center gap-1">
          Invite friends
          <UserPlus2 className="size-5" />
        </Button>
        <Button className="h-14 text-white/90 rounded-xl  w-full p-0 text-base   capitalize aspect-square flex justify-center items-center gap-1">
          <Copy />
        </Button>
      </div>
    </div>
  );
};

export { FriendsPage };
