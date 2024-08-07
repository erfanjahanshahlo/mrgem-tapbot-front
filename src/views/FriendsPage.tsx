import { Copy, CopyCheck, Dot, RefreshCcw, UserPlus2 } from "lucide-react";
// import GiftIcon from "/clashOfClansIcon.webp";
import GiftIcon from "/gift.png";
import GiftPremuimIcon from "/giftPremuim.png";
import { cn, delay, formatNumber } from "@/utils";
import { Button } from "@/components/ui";
import { useTelegram } from "@/features/TelegramProvider";
type Props = {};
import Coin from "/G-coin.png";
import { useMainContext } from "@/providers/MainContext";
import { useCopy, useDatas } from "@/hooks";
import { useState } from "react";

const FriendsPage = ({}: Props) => {
  const { data } = useMainContext();
  const { webApp } = useTelegram();
  const { onCopy, isCopied } = useCopy();
  const { refetch } = useDatas();
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const handleRefetchFriends = async () => {
    setIsSubmiting(true);
    refetch();
    await delay(1000);
    setIsSubmiting(false);
  };

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
                  {formatNumber(data?.data.invite_gift_regular)}
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
                  {formatNumber(data?.data.invite_gift_premium)}
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
              onClick={handleRefetchFriends}
              className={cn(isSubmiting ? "animate-spin" : "")}
            />
          </div>
          {data?.user.invite_list.length === 0 ? (
            <div className="col-span-full text-sm bg-card border border-cardBorder backdrop-blur-3xl py-5 w-full flex justify-center items-center rounded-xl text-white/40">
              You haven't invited any friends yet
            </div>
          ) : (
            <>
              {data?.user.invite_list.map((item: any, i: number) => (
                <div
                  key={`invited user--${i}`}
                  className="col-span-full text-sm bg-card border border-cardBorder  p-4 w-full flex justify-between  items-center rounded-xl ">
                  <div className="flex flex-col gap-1">
                    <span className="text-white/80 font-semibold">{`${item.first_name} ${item.last_name}`}</span>
                    <span className="text-white/40">
                      {
                        data?.data.levels.find(
                          (l: any) => l.id === item.level_id
                        ).name
                      }
                    </span>
                  </div>
                  <span className="flex justify-center items-center gap-2">
                    <img src={Coin} className="size-5 inline" alt="" />
                    <span className="font-bold ml-0.5 text-secondary-100 text-sm">
                      {item.is_premium
                        ? formatNumber(data?.data.invite_gift_premium)
                        : formatNumber(data?.data.invite_gift_regular)}
                    </span>
                  </span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="w-full h-fit grid grid-cols-6 gap-1 sticky bottom-0">
        <Button
          onClick={() =>
            webApp?.openTelegramLink(
              `https://t.me/share/url?url=${data?.user.invite_link}`
            )
          }
          className="h-14 text-white/90 rounded-xl  w-full p-0 text-base font-bold col-span-5  capitalize flex justify-center items-center gap-1">
          Invite friends
          <UserPlus2 className="size-5" />
        </Button>
        <Button
          onClick={() => {
            onCopy(data?.user.invite_link);
            webApp?.showAlert("Copied to clipboard");
          }}
          disabled={isCopied}
          className="h-14 text-white/90 rounded-xl  w-full p-0 text-base   capitalize aspect-square flex justify-center items-center gap-1">
          {isCopied ? <CopyCheck /> : <Copy />}
        </Button>
      </div>
    </div>
  );
};

export { FriendsPage };
