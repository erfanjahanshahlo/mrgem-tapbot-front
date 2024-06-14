import { Link } from "@tanstack/react-router";
import {
  ListChecks,
  LoaderPinwheel,
  Pickaxe,
  ShoppingCart,
  Users,
} from "lucide-react";

type Props = {};

const BottomMenu = ({}: Props) => {
  return (
    <div className="w-11/12 h-[70px] bg-black-100/90 max-w-md fixed bottom-4  rounded-full flex justify-between px-6 py-2 items-center gap-4 left-1/2 -translate-x-1/2 backdrop-blur-md">
      <Link
        to="/"
        className="flex justify-between items-center flex-col  h-full text-opacity-60 text-white [&.active]:text-opacity-100">
        <Pickaxe />
        Mine
      </Link>
      <Link
        to="/tasks"
        className="flex justify-between items-center flex-col  h-full text-opacity-60 text-white [&.active]:text-opacity-100">
        <ListChecks />
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
        <Users />
        Friends
      </Link>
      <Link
        to="/shop"
        className="flex justify-between items-center flex-col  h-full text-opacity-60 text-white [&.active]:text-opacity-100">
        <ShoppingCart />
        Shop
      </Link>
    </div>
  );
};

export { BottomMenu };
