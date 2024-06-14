import { Coin, LevelCard, MineDetail } from "@/components";
import { Mine } from "@/features";
type Props = {};

const MinePage = ({}: Props) => {
  return (
    <div className="w-full h-full py-5">
      <LevelCard />
      <Mine />
    </div>
  );
};

export { MinePage };
