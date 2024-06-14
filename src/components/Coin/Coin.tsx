import Mrgemcharacter from "/Mrgemcharacter.png";

type Props = {};

const Coin = ({}: Props) => {
  return (
    <div className="w-full aspect-square bg-gradient-to-br max-w-sm shadow-[inset_2px_2px_17px_0_var(--tw-shadow-color)] shadow-black-100 from-secondary-10 outline-[16px] outline  outline-primary-90 to-primary-50    rounded-full  p-8">
      <img
        src={Mrgemcharacter}
        alt=""
        className="size-full object-cover object-center "
      />
    </div>
  );
};

export { Coin };
