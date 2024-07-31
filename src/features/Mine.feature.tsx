import { Coin, MineDetail } from "@/components";

type Props = {};

const Mine = ({}: Props) => {
  return (
    <div className="w-full  flex flex-col justify-evenly items-center h-full">
      <Coin />
      <MineDetail />
    </div>
  );
};

export { Mine };
