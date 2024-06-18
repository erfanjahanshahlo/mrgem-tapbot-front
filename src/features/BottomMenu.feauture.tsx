import { Link } from "@tanstack/react-router";
import { Profile2User, ShoppingCart, Task } from "iconsax-react";
import { LoaderPinwheel, Pickaxe } from "lucide-react";

type Props = {};

const BottomMenu = ({}: Props) => {
  return (
    <div className="w-11/12 h-[70px] bg-[#101622] border border-[#242C3E]  max-w-md fixed bottom-4 rounded-xl  flex justify-between px-6 py-2 items-center gap-4 left-1/2 -translate-x-1/2 backdrop-blur-3xl">
      <Link
        to="/"
        className="flex justify-between items-center flex-col  h-full text-opacity-60 text-white [&.active]:text-opacity-100">
        <Pickaxe />
        Mine
      </Link>
      <Link
        to="/tasks"
        className="flex justify-between items-center flex-col  h-full text-opacity-60 text-white [&.active]:text-opacity-100">
        <Task variant="Outline" />
        Task
      </Link>
      <Link
        to="/wheel"
        className="flex justify-between items-center flex-col  h-full text-opacity-60 text-white [&.active]:text-opacity-100">
        <LoaderPinwheel />
        Wheel
      </Link>
      <Link
        to="/friends"
        className="flex justify-between items-center flex-col  h-full text-opacity-60 text-white [&.active]:text-opacity-100">
        <Profile2User variant="Outline" />
        Friends
      </Link>
      <Link
        to="/shop"
        className="flex justify-between items-center flex-col  h-full text-opacity-60 text-white [&.active]:text-opacity-100">
        <ShoppingCart variant="Outline" />
        Shop
      </Link>
    </div>
  );
};

export { BottomMenu };
