import { useEffect, useState } from "react";
import GeneralList from "../components/GeneralList";
import RawgAttribution from "../components/RawgAttribution";
// import GlobalAPI from "../services/GlobalAPI";
import { useGames } from "../context/GameContext";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";


const Home = () => {
  const {games} = useGames()



  return (
    <div className="grid grid-cols-4 px-12">
      <div className=" hidden md:block">
        <GeneralList />
        <RawgAttribution />
      </div>
      <div className="col-span-4 md:col-span-3 ">
        <Banner game={games[0]}/>
        <TrendingGames gameList={games}/>

      </div>
    </div>
  );
};
export default Home;
