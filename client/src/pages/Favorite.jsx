import { useEffect, useState } from "react"
import ApiClient from "../api/axios"
import Button from "../components/Button"
import SingleGame from "../components/SingleGame"
import useGamesStore from "../store/games"
import { StyleLoadMore } from "../styles/SearchPage"

const Favorite = () => {
    const favorites = useGamesStore(state => state.favorites)
    const setFavorites = useGamesStore(state => state.setFavorites)

    useEffect(() => {
        ApiClient.get("/favorite/").then((favoritesResponse) => {
            setFavorites(favoritesResponse.data.data);
        })
    }, [])

    const onchange = () => {
        ApiClient.get("/favorite/").then((favoritesResponse) => {
            setFavorites(favoritesResponse.data.data);
        })
    }

    const favoriteGames = favorites.map(game => (
        <SingleGame game={game} onchange={onchange} key={game.id} />
    ))

    return (
        <>
            {
                favorites.length > 0 ?
                    <p>Total: {favorites.length} item(s) in favorites</p>
                    :
                    <p>There is no items in favorites.</p>
            }
            {favoriteGames}
            <StyleLoadMore>
                <Button text="Load more" />
            </StyleLoadMore>

        </>
    )
}

export default Favorite
