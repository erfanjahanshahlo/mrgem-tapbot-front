import { FingerTapIcon } from "@/assets/icons";
import { Flash } from "iconsax-react";
import Coin from "/G-coin.png";
import { useMainContext } from "@/providers/MainContext";
import { useEffect } from "react";
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
    const powerValue = data?.data.levels[data.user.current_level].earn_power;

    const newPowerData: PowerData = {
      value: powerValue,
      timestamp: Date.now(),
    };

    localStorage.setItem(POWER_STORAGE_KEY, JSON.stringify(newPowerData));
    setMinePower(powerValue);
  };

  return (
    <div className="text-white space-y-2 w-full mx-auto">
      <div className="flex justify-center w-full items-center gap-2">
        {/* <UsdCoin className="size-20 text-secondary-90 " /> */}
        <img src={Coin} alt="" className="size-14" />
        <span className="text-4xl font-semibold text-secondary-90 ">
          {coins}
        </span>
      </div>
      <div className="flex justify-center w-fit mx-auto divide-x-2 divide-gray-90 items-center gap-1 text-white">
        <span className="flex justify-center items-center gap-1 text-base">
          <Flash className="" />
          {/* 1000/3000 */}
          {`${minePower}/${data?.data.levels[+data.user.current_level].earn_power}`}
        </span>
        <span className="flex justify-center items-center gap-0 text-base">
          <FingerTapIcon className="fill-white stroke-white size-8 " />
          {data?.data.levels[+data.user.current_level].earn_per_click}
        </span>
      </div>
    </div>
  );
};

export { MineDetail };
