import { Coin, MineDetail } from "@/components";

type Props = {};

const Mine = ({}: Props) => {
  return (
    <div className="w-9/12  mx-auto mt-7 ">
      <Coin />
      <MineDetail />
    </div>
  );
};

export { Mine };
