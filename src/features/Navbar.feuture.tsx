import { GameDrawer } from "@/components/Drawers";
type Props = {};

const Navbar = ({}: Props) => {
  return (
    <nav className="w-full p-5 h-fit text-xl capitalize flex justify-between items-center text-white">
      <h3 className="font-bold">pouria hajati</h3>
      <GameDrawer />
    </nav>
  );
};

export { Navbar };
