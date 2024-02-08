import Logo from "../assets/Images/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import { HiMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useGames } from "../context/GameContext";


const Header = () => {
 
  const { theme, setTheme } = useContext(ThemeContext);
  const { searchTerm, setSearchTerm, searchResults, handleSearch } = useGames();
  

  useEffect(()=> {
    console.log("Theme", theme)
  },[])


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    const currentInput = e.target.value;
    setSearchTerm(currentInput);
    console.log(currentInput); // Log the current input value
  };

  return (
    <div className="flex items-center p-3">
      <img src={Logo} width={60} height={60} />
      <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
        <HiOutlineSearch />
        <input
          className="px-2 bg-transparent outline-none"
          type="text"
          placeholder="Search Games"
          value={searchTerm}
          onKeyDown={handleKeyPress}
          onChange={handleChange}
        />
      </div>
      <div>
        {theme=='light' ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {setTheme('dark'); localStorage.setItem('theme', 'dark')}}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {setTheme('light'); localStorage.setItem('theme', 'light')}}
          />
        )}
      </div>
    </div>
  );
};
export default Header;
