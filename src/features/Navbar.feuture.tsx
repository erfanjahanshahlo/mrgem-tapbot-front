import { GameDrawer } from "@/components/Drawers";
import { useMainContext } from "@/providers/MainContext";
type Props = {};

const Navbar = ({}: Props) => {
  const { data } = useMainContext();

  return (
    <nav className="w-full p-5 h-fit text-xl capitalize flex justify-between items-center text-white">
      <h3 className="font-bold max-w-[40%] text-ellipsis line-clamp-1">
        {data?.user?.name}
      </h3>
      <GameDrawer />
    </nav>
  );
};

export { Navbar };
