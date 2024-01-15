import GeneralList from "../components/GeneralList";
import RawgAttribution from "../components/RawgAttribution";

const Home = () => {
  return (
    <div className="grid grid-cols-4 px-8">
      <div className=" hidden md:block">
        <GeneralList />
        <RawgAttribution/>
      </div>
      <div className="col-span-4 md:col-span-3 bg-blue-400">Game List</div>
    </div>
  );
};
export default Home;
