import { FingerTapIcon } from "@/assets/icons";
import { Progress } from "@/components/ui";
import { Zap } from "lucide-react";
import Mrgemcharacter from "/Mrgemcharacter.png";
type Props = {};

const MinePage = ({}: Props) => {
  return (
    <div className="w-full h-full py-5">
      <div className="w-full h-fit p-2 py-5 shadow-xl shadow-gray-90 bg-black-100/80 backdrop-blur-lg text-white border-white/30 rounded-xl border-2 space-y-4">
        <div className="w-full flex  justify-between items-center">
          <div className="flex justify-center items-center gap-1">
            <h2 className="text-2xl font-bold">Legendary</h2>
            <div className="text-sm leading-3">
              <p>2/10</p>
              <p>2k/10k</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1">
            <span className="flex justify-center items-center gap-1 text-sm">
              <Zap />
              1000/3000
            </span>
            <span className="flex justify-center items-center gap-0 text-base">
              <FingerTapIcon className="fill-white stroke-white size-8 " />3
            </span>
          </div>
        </div>
        <Progress value={60} />
      </div>
      <div className="w-10/12 aspect-square rounded-full  absolute top-1/2 translate-y-[calc(-50%+50px)] left-1/2 -translate-x-1/2 p-6 border-2 border-white">
        <img
          src={Mrgemcharacter}
          alt=""
          className="size-full object-cover object-center "
        />
      </div>
    </div>
  );
};

export { MinePage };
