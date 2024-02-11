import { useState } from "react";
import { useGames } from "../context/GameContext";
import SpinnerLoader from "../components/SpinnerLoader";

const GeneralList = ({ setGenreId, selectGenreName }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Use genres from context
  const { genres, setSearchResults } = useGames();

  const handleGenreClick = (genreId) => {
    setGenreId(genreId);
    setSearchResults([])
  };

  return (
    <div>
    <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
    {genres ? (
      genres.map((item, index) => (
        <div
          onClick={() => {
            handleGenreClick(item.id);
            selectGenreName(item.name);
            setActiveIndex(index);
          }}
          key={item.id}
          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 group rounded-lg hover:dark:bg-gray-600 ${
            activeIndex === index ? "bg-gray-300 dark:bg-gray-600" : null
          }`}
        >
          <img
            src={item.image_background}
            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${
              activeIndex === index ? "scale-105" : null
            }`}
            alt={item.name}
          />
          <h3
            className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${
              activeIndex === index ? "font-bold" : null
            }`}
          >
            {item.name}
          </h3>
        </div>
      ))
    ) : (
      <SpinnerLoader/>
    )}
  </div>
  );
};
export default GeneralList;
