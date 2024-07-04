import { FingerTapIcon } from "@/assets/icons";
import { Flash } from "iconsax-react";
import Coin from "/G-coin.png";
// import { useDatas } from "@/hooks";

type Props = {
  coins: number;
};

const MineDetail = ({ coins }: Props) => {
  // const { data } = useDatas();

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
          1000/3000
        </span>
        <span className="flex justify-center items-center gap-0 text-base">
          <FingerTapIcon className="fill-white stroke-white size-8 " />3
        </span>
      </div>
    </div>
  );
};

export { MineDetail };
