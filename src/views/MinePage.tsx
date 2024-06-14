import { FingerTapIcon } from "@/assets/icons";
import { Progress } from "@/components/ui";
import Mrgemcharacter from "/Mrgemcharacter.png";
import { Flash, UsdCoin } from "iconsax-react";
type Props = {};

const MinePage = ({}: Props) => {
  return (
    <div className="w-full h-full py-5">
      <div className="w-full h-fit p-2 py-3  bg-white/10 backdrop-blur-3xl text-white  rounded-xl  space-y-4">
        <div className="w-full flex  justify-between items-center">
          <div className="flex justify-between items-center gap-1 w-full">
            <h2 className="text-base font-semibold">Legendary</h2>
            <div className="text-sm leading-3">
              <p>2/10</p>
              {/* <p>2k/10k</p> */}
            </div>
          </div>
        </div>
        <div className="relative h-8 w-full">
          <Progress value={60} />
          <span className="w-full text-right block">10K</span>
          <span
            className="absolute bottom-0"
            style={{ left: "60%", transform: "translateX(-50%)" }}>
            6K
          </span>
        </div>
      </div>
      <div className="w-9/12  mx-auto mt-7 ">
        <div className="w-full aspect-square bg-gradient-to-br max-w-sm shadow-[inset_2px_2px_17px_0_var(--tw-shadow-color)] shadow-black-100 from-secondary-10 outline-[16px] outline  outline-primary-90 to-primary-50    rounded-full  p-8">
          <img
            src={Mrgemcharacter}
            alt=""
            className="size-full object-cover object-center "
          />
        </div>
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
      </div>
    </div>
  );
};

export { MinePage };
