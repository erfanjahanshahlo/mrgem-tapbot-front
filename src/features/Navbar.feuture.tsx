import ClashOfClansLogo from "../../public/clashOfClansIcon.webp";
type Props = {};

const Navbar = ({}: Props) => {
  return (
    <nav className="w-full p-5 h-fit text-xl capitalize flex justify-between items-center text-white">
      <h3 className="font-bold">pouria hajati</h3>
      <div className="flex justify-center items-center gap-2 text-lg">
        clash of clans
        <img src={ClashOfClansLogo} className="size-10 rounded-md" />
      </div>
    </nav>
  );
};

export { Navbar };
