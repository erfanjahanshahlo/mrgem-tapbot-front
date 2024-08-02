import Coin from "/G-coin.png";
import Electric from "/electric.png";
import CoinPlus from "/coinPlus.png";
import Friends from "/friends.png";
import { useMainContext } from "@/providers/MainContext";
import { useEffect } from "react";
import { formatNumber } from "@/utils";
import { Link } from "@tanstack/react-router";
import { useTelegram } from "@/features/TelegramProvider";
// import { useDatas } from "@/hooks";

type Props = {};
export interface PowerData {
  value: number;
  timestamp: number;
}

export const POWER_STORAGE_KEY = "userPower";
export const POWER_VALIDITY_PERIOD = 30 * 60 * 1000; // 30 minutes in milliseconds

const MineDetail = ({}: Props) => {
  const { data, minePower, setMinePower, coins } = useMainContext();
  const { webApp } = useTelegram();
  const currentLevel =
    data?.data.levels.find(
      (level: any) => level.id === data.user.current_level
    ) || null;

  // const indexOfCurrentLevel = data?.data.levels.findIndex(
  //   (level: any) => level.id === data?.user.current_level
  // );
  useEffect(() => {
    if (data === null) return;
    loadPower();
  }, [data]);

  const loadPower = async () => {
    const storedPower = localStorage.getItem(POWER_STORAGE_KEY);

    if (storedPower) {
      const parsedPower: PowerData = JSON.parse(storedPower);

      if (isValidPower(parsedPower)) {
        const currentLevel = data?.data.levels.find(
          (level: any) => level.id === data.user.current_level
        );

        if (currentLevel) {
          const secondsPassed = (Date.now() - parsedPower.timestamp) / 1000;
          const powerGained =
            (data?.data.earn_power_fullrestore / currentLevel.earn_power) *
            secondsPassed;
          const newPower = Math.min(
            parsedPower.value + powerGained,
            currentLevel.earn_power
          );

          setMinePower(newPower);
          updateStoredPower(newPower);
        }
      } else {
        await fetchPowerFromBackend();
      }
    } else {
      await fetchPowerFromBackend();
    }
  };

  const isValidPower = (powerData: PowerData): boolean => {
    const currentTime = Date.now();
    return currentTime - powerData.timestamp < POWER_VALIDITY_PERIOD;
  };

  const fetchPowerFromBackend = async () => {
    const powerValue = currentLevel?.earn_power || 0;
    updateStoredPower(powerValue);
    setMinePower(powerValue);
  };

  const updateStoredPower = (value: number) => {
    const newPowerData: PowerData = {
      value: value,
      timestamp: Date.now(),
    };
    localStorage.setItem(POWER_STORAGE_KEY, JSON.stringify(newPowerData));
  };

  useEffect(() => {
    if (!data) return;

    const currentLevel = data.data.levels.find(
      (level: any) => level.id === data.user.current_level
    );

    if (!currentLevel) {
      console.error("Current level not found");
      return;
    }

    const updatePower = () => {
      setMinePower((prevPower) => {
        if (!prevPower) return 0;
        if (prevPower >= currentLevel.earn_power) {
          return prevPower;
        }

        const newPower = Math.min(
          prevPower +
            currentLevel.earn_power / data.data.earn_power_fullrestore,
          currentLevel.earn_power
        );

        updateStoredPower(newPower);

        return newPower;
      });
    };

    const powerInterval = setInterval(updatePower, 1000);

    return () => clearInterval(powerInterval);
  }, [data, webApp]);

  // const storedCoins = localStorage.getItem("coins") || 0;
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
          {`${formatNumber(Math.floor(minePower || 0))}/${formatNumber(currentLevel?.earn_power)}`}
        </div>
        <div className="flex justify-center items-center flex-col gap-1 text-sm font-semibold flex-1">
          <div className="size-14 relative bg-card border border-cardBorder rounded-[35%] flex justify-center items-center">
            <img src={CoinPlus} className="size-10" alt="" />
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex justify-center items-center size-5 rounded-full bg-green-50">
              {currentLevel?.earn_per_click}
            </div>
          </div>
          Earn
        </div>
        <Link
          to="/friends"
          className="flex justify-center items-center flex-col gap-1 text-sm font-semibold flex-1">
          <div className="size-14 relative bg-card border border-cardBorder rounded-[35%] flex justify-center items-center">
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex justify-center items-center size-5 rounded-full bg-green-50">
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
