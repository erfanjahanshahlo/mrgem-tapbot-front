import { LevelCard } from "@/components";
import { Mine } from "@/features";
type Props = {};

const MinePage = ({}: Props) => {
  return (
    <div className="w-full h-full py-2 flex flex-col ">
      <LevelCard />
      <Mine />
    </div>
  );
};

export { MinePage };
