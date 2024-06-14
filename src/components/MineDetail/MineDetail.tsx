import { FingerTapIcon } from "@/assets/icons";
import { Flash, UsdCoin } from "iconsax-react";

type Props = {};

const MineDetail = ({}: Props) => {
  return (
    <div className="text-white mt-7 space-y-2">
      <div className="flex justify-start items-center gap-2">
        <UsdCoin className="size-20 text-secondary-90" />
        <span className="text-4xl font-semibold text-secondary-90">
          200,000,000
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
