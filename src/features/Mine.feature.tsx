import { Coin, MineDetail } from "@/components";
import { useDatas } from "@/hooks";
import { useState } from "react";

type Props = {};

const Mine = ({}: Props) => {
  const { data } = useDatas();
  const [coins, setCoins] = useState<number>(+data?.user?.coins || 0);
  return (
    <div className="w-full  flex flex-col justify-evenly items-center h-full">
      <Coin coins={coins} setCoins={setCoins} />
      <MineDetail coins={coins} />
    </div>
  );
};

export { Mine };
