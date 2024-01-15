import { useEffect, useState } from "react";
import GlobalAPI from "../services/GlobalAPI";

const GeneralList = () => {
  const [generalList, setGeneralList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0)

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
      {generalList.map((item, index) => (
        <div
          key={item.id}
          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 group rounded-lg`}
        >
          <img
            src={item.image_background}
            className="w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 hover:dark:border-r-gray-600"
            alt={item.name}
          />
          <h3 className="dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300">
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
};
export default GeneralList;
