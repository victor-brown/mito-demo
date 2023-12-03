import { Plus } from "react-feather";

const Header = () => {
  return (
    <div className="h-[60px] w-full p-4 bg-header bg-no-repeat bg-cover text-white break-normal align-middle font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl flex justify-start content-center gap-x-1">
      <Plus size={32} />
      <p>Lottery simulator</p>
    </div>
  );
};
export default Header;
