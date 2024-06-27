import { Coin, MineDetail } from "@/components";

type Props = {};

const Mine = ({}: Props) => {
  return (
    <div className="w-full  flex flex-col justify-evenly items-center h-[calc(100%-200px)]">
      <Coin />
      <MineDetail />
    </div>
  );
};

export { Mine };
