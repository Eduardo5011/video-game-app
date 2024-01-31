import { useEffect, useState } from "react";
import GeneralList from "../components/GeneralList";
import RawgAttribution from "../components/RawgAttribution";
// import GlobalAPI from "../services/GlobalAPI";
import { useGames } from "../context/GameContext";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";
import GamesByGenreId from "../components/GamesByGenreId";

const Home = () => {
  const { games, genreId, setGenreId, gamesByGenre } = useGames();
  const [selectedGenreName, setSelectedGenreName] = useState('Action');

  // const handleGenreChange = (selectedGenreId) => {
  //   getGameListByGenreId(selectedGenreId);
  // };

  return (
    <div className="grid grid-cols-4 px-12">
      <div className=" hidden md:block">
        <GeneralList setGenreId={setGenreId} selectGenreName={(name)=> setSelectedGenreName(name)}/>
        <RawgAttribution />
      </div>
      <div className="col-span-4 md:col-span-3 ">
        <Banner game={games[0]} />
        <TrendingGames gameList={games} />
        <GamesByGenreId gamesByGenre={gamesByGenre} selectedGenreName={selectedGenreName}/>
      </div>
    </div>
  );
};
export default Home;
