import { Progress } from "../ui";

type Props = {};

const LevelCard = ({}: Props) => {
  return (
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
  );
};

export { LevelCard };