import { useEffect } from "react"

const GamesByGenreId = ({gamesByGenre}) => {
useEffect(()=> {
    console.log("gameList",gamesByGenre)
}, [gamesByGenre])
  return (
    <div>
        {gamesByGenre.map((item) => (
            <div>
                <img src={item.background_image} alt="" />
                <h2>{item.name}<span>{item.metacritic}</span></h2>
                <h2>⭐{item.rating}💭{item.reviews_count}🔥{item.suggestions_count}</h2>

            </div>
        ))}
    </div>
  )
}
export default GamesByGenreId