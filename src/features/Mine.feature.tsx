import { Coin, MineDetail } from "@/components";

type Props = {};

const Mine = ({}: Props) => {
  return (
    <div className="w-full mt-7 flex flex-col justify-around items-center h-[calc(100%-200px)]">
      <Coin />
      <MineDetail />
    </div>
  );
};

export { Mine };
