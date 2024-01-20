import { useEffect } from "react"

const Banner = ({game}) => {

    useEffect(() => {
       
      }, [game]);
  return (
    <div className="relative">
{game ? (
  <>
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
        <h2 className="text-[24px] text-white font-bold">{game.name}</h2>
        <button className="bg-blue-700 text-white px-2 p-1">Get Now</button>
      </div>
        <img 
          src={game.background_image} 
          alt={game.name || 'Game Image'} 
          className="md:h-[320px] w-full object-position  rounded-xl"
        />
        </>
      ) : (
        <p>Loading game or image not available...</p>
      )}    </div>
  )
}
export default Banner