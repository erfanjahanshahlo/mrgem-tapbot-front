import { Link } from "@tanstack/react-router";
import { Profile2User, ShoppingCart, Task } from "iconsax-react";
import { LoaderPinwheel, Pickaxe } from "lucide-react";

type Props = {};

const BottomMenu = ({}: Props) => {
  return (
    <div className="w-[calc(100%-40px)] h-16 bg-card border border-cardBorder   max-w-md fixed bottom-2 rounded-xl  flex justify-between px-6 py-2 items-center gap-4 left-1/2 -translate-x-1/2 backdrop-blur-3xl">
      <Link
        to="/"
        className="flex justify-center gap-1 font-semibold items-center flex-col  h-full text-opacity-60 text-white [&.active]:text-opacity-100 text-sm">
        <Pickaxe />
        Mine
      </Link>
      <Link
        to="/tasks"
        className="flex justify-center gap-1 font-semibold items-center flex-col  h-full text-opacity-60 text-white [&.active]:text-opacity-100 text-sm">
        <Task variant="Outline" />
        Task
      </Link>
      <Link
        to="/wheel"
        className="flex justify-center gap-1 font-semibold items-center flex-col  h-full text-opacity-60 text-white [&.active]:text-opacity-100 text-sm">
        <LoaderPinwheel />
        Wheel
      </Link>
      <Link
        to="/friends"
        className="flex justify-center gap-1 font-semibold items-center flex-col  h-full text-opacity-60 text-white [&.active]:text-opacity-100 text-sm">
        <Profile2User variant="Outline" />
        Friends
      </Link>
      <Link
        to="/shop"
        className="flex justify-center gap-1 font-semibold items-center flex-col  h-full text-opacity-60 text-white [&.active]:text-opacity-100 text-sm">
        <ShoppingCart variant="Outline" />
        Shop
      </Link>
    </div>
  );
};

export { BottomMenu };
