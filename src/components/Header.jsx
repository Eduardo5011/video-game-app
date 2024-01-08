import Logo from "../assets/Images/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import { HiMoon } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="flex">
      <img src={Logo} alt="" width={60} height={60} />
      <div className="flex bg-slate-200 p-2 w-full items-center">
        <HiOutlineSearch />
        <input className="bg-transparent outline-none" type="text" />
      </div>
      <div>
        <HiMoon />
      </div>
    </div>
  );
};
export default Header;
