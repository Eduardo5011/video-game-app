import { useEffect } from "react"

const Banner = ({game}) => {

    useEffect(() => {
        if (game) {
          console.log(game);
        }
      }, [game]);
  return (
    <div>
{game ? (
        <img 
          src={game.background_image} 
          alt={game.name || 'Game Image'} 
          className="md:h-[320px] w-full object-cover rounded-lg"
        />
      ) : (
        <p>Loading game or image not available...</p>
      )}    </div>
  )
}
export default Banner