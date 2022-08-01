import { useEffect, useState } from "react"
import ApiClient from "../api/axios"
import SingleGame from "../components/SingleGame"

const Favorite = () => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        ApiClient.get("/favorite/").then((favoritesResponse) => {
            setFavorites(favoritesResponse.data.message);
        })
    }, [])

    const favoriteGames = favorites.map(game => (
        <SingleGame game={game} button1="Add to cart" button2="Remove from favorites" />
    ))

    return (
        <>
            {
                favorites.length > 0 ? <p>Total: {favorites.length} item(s) in favorites</p> : <p>There is no items in favorites.</p>
            }
            {favoriteGames}
        </>
    )
}

export default Favorite
