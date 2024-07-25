import Coin from "/G-coin.png";
import Electric from "/electric.png";
import CoinPlus from "/coinPlus.png";
import Friends from "/friends.png";
import { useMainContext } from "@/providers/MainContext";
import { useEffect } from "react";
import { formatNumber } from "@/utils";
import { Link } from "@tanstack/react-router";
// import { useDatas } from "@/hooks";

type Props = {};
export interface PowerData {
  value: number;
  timestamp: number;
}

export const POWER_STORAGE_KEY = "userPower";
export const POWER_VALIDITY_PERIOD = 30 * 60 * 1000; // 30 minutes in milliseconds

const MineDetail = ({}: Props) => {
  const { data, coins, minePower, setMinePower } = useMainContext();
  const currentLevel =
    data?.data.levels.find(
      (level: any) => level.id === data.user.current_level
    ) || null;

  // const indexOfCurrentLevel = data?.data.levels.findIndex(
  //   (level: any) => level.id === data?.user.current_level
  // );
  useEffect(() => {
    // Load power from localStorage or backend when component mounts
    if (data === null) return;
    loadPower();
  }, [data]);

  const loadPower = async () => {
    const storedPower = localStorage.getItem(POWER_STORAGE_KEY);

    if (storedPower) {
      const parsedPower: PowerData = JSON.parse(storedPower);

      if (isValidPower(parsedPower)) {
        setMinePower(parsedPower.value);
      } else {
        // If stored power is invalid, fetch from backend
        await fetchPowerFromBackend();
      }
    } else {
      // If no stored power, fetch from backend
      await fetchPowerFromBackend();
    }
  };

  const isValidPower = (powerData: PowerData): boolean => {
    const currentTime = Date.now();
    return currentTime - powerData.timestamp < POWER_VALIDITY_PERIOD;
  };

  const fetchPowerFromBackend = async () => {
    const powerValue = currentLevel?.earn_power;

    const newPowerData: PowerData = {
      value: powerValue,
      timestamp: Date.now(),
    };

    localStorage.setItem(POWER_STORAGE_KEY, JSON.stringify(newPowerData));
    setMinePower(powerValue);
  };

  return (
    <div className="text-white space-y-4 w-full mx-auto">
      <div className="flex justify-center w-full items-center gap-2">
        {/* <UsdCoin className="size-20 text-secondary-90 " /> */}
        <img src={Coin} alt="" className="size-14" />
        <span className="text-4xl font-semibold text-secondary-90 ">
          {formatNumber(coins)}
        </span>
      </div>
      <div className="flex justify-around w-full h-fit mt-6 items-center gap-6 text-white">
        <div className="flex justify-center items-center flex-col gap-1 text-sm font-semibold flex-1">
          <div className="size-14 bg-card border border-cardBorder rounded-[35%] flex justify-center items-center">
            <img src={Electric} className="size-10" alt="" />
          </div>
          {`${formatNumber(minePower || 0)}/${formatNumber(currentLevel?.earn_power)}`}
        </div>
        <div className="flex justify-center items-center flex-col gap-1 text-sm font-semibold flex-1">
          <div className="size-14 relative bg-card border border-cardBorder rounded-[35%] flex justify-center items-center">
            <img src={CoinPlus} className="size-10" alt="" />
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex justify-center items-center size-5 rounded-full animate-pulse bg-green-50">
              {currentLevel?.earn_per_click}
            </div>
          </div>
          Earn
        </div>
        <Link
          to="/friends"
          className="flex justify-center items-center flex-col gap-1 text-sm font-semibold flex-1">
          <div className="size-14 relative bg-card border border-cardBorder rounded-[35%] flex justify-center items-center">
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex justify-center items-center size-5 rounded-full animate-pulse bg-green-50">
              {data?.user.invite_list.length}
            </div>
            <img src={Friends} alt="" className="size-10" />
          </div>
          Friends
        </Link>
      </div>
    </div>
  );
};

export { MineDetail };
