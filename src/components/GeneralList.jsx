import { useEffect, useState } from "react";
import GlobalAPI from "../services/GlobalAPI";

const GeneralList = () => {
  const [generalList, setGeneralList] = useState([]);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalAPI.getGenreList.then((resp) => {
      console.log(resp.data.results);
      setGeneralList(resp.data.results);
     
    });
  };

  
  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
      {generalList.map((item) => {
        <div>
          <img src={item.image_background} className="w-[40px] h-[40px]" />
        </div>;
      })}
    </div>
  );
};
export default GeneralList;
