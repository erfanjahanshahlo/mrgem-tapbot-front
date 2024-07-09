import { TaskDrawer } from "@/components/Drawers";
import Coin from "/G-coin.png";
import { useMainContext } from "@/providers/MainContext";

type Props = {};

const TaskPage = ({}: Props) => {
  const { data } = useMainContext();

  return (
    <div className=" space-y-5 w-full h-fit mt-5">
      <img src={Coin} className="size-40 mx-auto" alt="" />
      {/* <UsdCoin className="text-secondary-100 size-40 mx-auto" /> */}
      <h1 className="text-3xl font-bold mx-auto text-center">Earn more coin</h1>
      {data?.success &&
        data.data.tasks.map((task: any, i: number) => (
          <div className="flex flex-col gap-1 w-full " key={`task--${i}`}>
            <h3 className="font-semibold capitalize mb-4">{task.title}</h3>
            {task.tasks.map((task: any, i: number) => (
              <TaskDrawer {...task} key={`subtask--${i}`} />
            ))}
          </div>
        ))}
    </div>
  );
};

export { TaskPage };
