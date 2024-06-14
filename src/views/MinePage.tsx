import { Coin, LevelCard, MineDetail } from "@/components";
type Props = {};

const MinePage = ({}: Props) => {
  return (
    <div className="w-full h-full py-5">
      <LevelCard />
      <div className="w-9/12  mx-auto mt-7 ">
        <Coin />
        <MineDetail />
      </div>
    </div>
  );
};

export { MinePage };
