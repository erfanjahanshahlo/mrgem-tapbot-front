import { TaskDrawer } from "@/components/Drawers";
import Coin from "/G-coin.png";

type Props = {};

const TaskPage = ({}: Props) => {
  return (
    <div className=" space-y-5 w-full h-fit mt-5">
      <img src={Coin} className="size-40 mx-auto" alt="" />
      {/* <UsdCoin className="text-secondary-100 size-40 mx-auto" /> */}
      <h1 className="text-3xl font-bold mx-auto text-center">Earn more coin</h1>
      <div className="flex flex-col gap-1 w-full ">
        <h3 className="font-semibold capitalize mb-4">mrgem youtube</h3>
        <TaskDrawer />
        <TaskDrawer />
        <TaskDrawer />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <h3 className="font-semibold capitalize mb-4">mrgem youtube</h3>
        <TaskDrawer />
        <TaskDrawer />
        <TaskDrawer />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <h3 className="font-semibold capitalize mb-4">mrgem youtube</h3>
        <TaskDrawer />
        <TaskDrawer />
        <TaskDrawer />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <h3 className="font-semibold capitalize mb-4">mrgem youtube</h3>
        <TaskDrawer />
        <TaskDrawer />
        <TaskDrawer />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <h3 className="font-semibold capitalize mb-4">mrgem youtube</h3>
        <TaskDrawer />
        <TaskDrawer />
        <TaskDrawer />
      </div>
    </div>
  );
};

export { TaskPage };
