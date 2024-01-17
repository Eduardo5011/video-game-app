import { useEffect, useState } from "react";
import GeneralList from "../components/GeneralList";
import RawgAttribution from "../components/RawgAttribution";
import GlobalAPI from "../services/GlobalAPI";

const Home = () => {
  const [allGameList, setAllGameList] = useState();

  useEffect(() => {
    getAllGamesList();
  });

  const getAllGamesList = () => {
    GlobalAPI.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 px-8">
      <div className=" hidden md:block">
        <GeneralList />
        <RawgAttribution />
      </div>
      <div className="col-span-4 md:col-span-3 bg-blue-400"></div>
    </div>
  );
};
export default Home;
