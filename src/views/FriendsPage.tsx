import { Copy, Dot, RefreshCcw, UserPlus2 } from "lucide-react";
// import GiftIcon from "/clashOfClansIcon.webp";
import GiftIcon from "/gift.png";
import GiftPremuimIcon from "/giftPremuim.png";
import { useState } from "react";
import { cn } from "@/utils";
import { Button } from "@/components/ui";
import { useTelegram } from "@/features/TelegramProvider";
type Props = {};
import Coin from "/G-coin.png";
import { useMainContext } from "@/providers/MainContext";

const FriendsPage = ({}: Props) => {
  const { data } = useMainContext();
  const [isSpining, setIsSpining] = useState(false);
  const { webApp } = useTelegram();
  return (
    <div className="w-full h-full flex flex-col justify-between items-center gap-5 overflow-hidden overflow-y-auto pb-3">
      <div className="flex flex-col items-center gap-5">
        <h1 className="capitalize text-2xl font-bold">invite friends!</h1>
        <p className="text-sm">share your referral link to earn rewards</p>
        <div className="w-full space-y-1.5">
          <div className="grid grid-cols-5 p-2  bg-card border border-cardBorder backdrop-blur-3xl rounded-2xl gap-2 transition-colors duration-500">
            <img src={GiftIcon} className="w-full rounded-md" />
            <div className="col-span-4 text-sm flex flex-col justify-start items-start gap-2">
              <p className="text-base font-semibold">Invite a friend</p>
              <span className=" space-x-0.5">
                <Dot
                  strokeWidth={5}
                  className="size-5 inline text-secondary-100"
                />
                <img src={Coin} className="inline size-5" alt="" />
                <span className="font-bold ml-0.5 text-secondary-100 text-sm">
                  {/* +5,000 */}
                  {data?.data.invite_gift_regular}
                </span>
                <span>for you and your friend</span>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-5 p-2  pb-5 bg-card border border-cardBorder backdrop-blur-3xl rounded-2xl gap-2 transition-colors duration-500">
            <img src={GiftPremuimIcon} className="w-full rounded-md" />
            <div className="col-span-4 text-sm flex flex-col justify-start items-start gap-2">
              <p className="text-base font-semibold">
                Invite a friend with telegram Premium
              </p>
              <span className=" space-x-0.5">
                <Dot
                  strokeWidth={5}
                  className="size-5 inline text-secondary-100"
                />
                <img src={Coin} className="inline size-5" alt="" />
                <span className="font-bold ml-0.5 text-secondary-100 text-sm">
                  {/* +5,000 */}
                  {data?.data.invite_gift_premium}
                </span>
                <span>for you and your friend</span>
              </span>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-green-40">More bonuses</h3>
        <div className="flex flex-col  gap-4 w-full">
          <div className="flex justify-between items-center">
            <h4 className="col-span-3 text-sm">List of your friend</h4>
            <RefreshCcw
              onClick={() => setIsSpining((prev) => !prev)}
              className={cn(isSpining ? "animate-spin" : "")}
            />
          </div>
          <div className="col-span-full text-sm bg-card border border-cardBorder backdrop-blur-3xl py-5 w-full flex justify-center items-center rounded-xl text-white/40">
            You havent invited any friends yet
          </div>
        </div>
      </div>
      <div className="w-full h-fit grid grid-cols-6 gap-1">
        <Button
          onClick={() =>
            webApp?.openTelegramLink(
              `https://t.me/share/url?url=https://t.me/xteenbaby/13226&text=iph79p`
            )
          }
          className="h-14 text-white/90 rounded-xl  w-full p-0 text-base font-bold col-span-5  capitalize flex justify-center items-center gap-1">
          Invite friends
          <UserPlus2 className="size-5" />
        </Button>
        <Button
          onClick={() => webApp?.showAlert("hello")}
          className="h-14 text-white/90 rounded-xl  w-full p-0 text-base   capitalize aspect-square flex justify-center items-center gap-1">
          <Copy />
        </Button>
      </div>
    </div>
  );
};

export { FriendsPage };
