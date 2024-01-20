import { useEffect } from "react"

const TrendingGames = ({gameList}) => {

    useEffect(() => {
        console.log(gameList)
    })
  return (
    <div className="grid grid-cols-4">
        {gameList.map((item, index) => index < 4 &&(
            <div>
                <img src={item.background_image} alt="" />
                <h2>{item.name}</h2>
            </div>
        ))}
    </div>
  )
}
export default TrendingGames