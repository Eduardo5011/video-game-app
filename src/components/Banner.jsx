import { useEffect } from "react"

const Banner = ({games}) => {

    useEffect(() => {
        console.log(games)
    })

  return (
    <div>
        <img src={games.background_image} className="md:h-[320px] w-full object-cover rounded-lg" />
    </div>
  )
}
export default Banner