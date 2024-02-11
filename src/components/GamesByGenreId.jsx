import { useEffect } from "react";
import PropTypes from 'prop-types';
import SpinnerLoader from '../components/SpinnerLoader'


const GamesByGenreId = ({ gamesByGenre, selectedGenreName, searchResults  }) => {

  const shouldDisplaySearchResults = searchResults && searchResults.length > 0;
  const gamesToDisplay = shouldDisplaySearchResults ? searchResults : gamesByGenre;
  

  GamesByGenreId.propTypes = {
    gamesByGenre: PropTypes.array.isRequired,
    selectedGenreName: PropTypes.string.isRequired,
    searchResults: PropTypes.array.isRequired,
  };

  useEffect(() => {
    console.log("gameList", gamesByGenre);
  }, [gamesByGenre]);

  useEffect(() => {
    console.log("Search results in GamesByGenreId:", searchResults);
  }, [searchResults]);

  return (
    <div>
    <h2 className="font-bold text-[30px] dark:text-white mt-5">
      {selectedGenreName} Games
    </h2>
    {gamesToDisplay ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gamesToDisplay && gamesToDisplay.map((item, index) => (
          <div key={index} className="bg-[#76a8f75e] p-3 rounded-lg pb-4 h-full hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer">
            <img
              src={item.background_image}
              alt={`Cover image of ${item.name}`}
              className="w-full rounded-xl object-cover"
            />
            <h2 className="text-[20px] dark:text-white font-bold">
              {item.name}
              <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">{item.metacritic}</span>
            </h2>
            <h2 className="text-gray-500 dark:text-gray-300">
              ⭐{item.rating}    💭{item.reviews_count}   🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    ) : (
      <SpinnerLoader />
    )}
  </div>
  );
};
export default GamesByGenreId;
