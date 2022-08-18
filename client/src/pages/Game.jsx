import {
    StyleGame, StyleRightSide, StyleProfilePicture, StyleLeftSide, StyleSmallPicutre, StyleOtherGamePictures, StyleComments
} from "../styles/GamePage"
import Button from "../components/Button"
import Rating from "../components/Rating"
import { useEffect, useState } from "react"
import ApiClient from "../api/axios"
import { useParams } from "react-router-dom"
import useGamesStore from "../store/games"
import { FaHeart } from "react-icons/fa"
import { FaHeartBroken } from "react-icons/fa"

const Game = () => {
    const cart = useGamesStore(state => state.cart)
    const favorites = useGamesStore(state => state.favorites)
    const addToFavorites = useGamesStore(state => state.addToFavorites)
    const removeFromFavorites = useGamesStore(state => state.removeFromFavorites)
    const addToCart = useGamesStore(state => state.addToCart)
    const removeFromCart = useGamesStore(state => state.removeFromCart)
    const [game, setGame] = useState(null)
    const [comments, setComments] = useState(null)
    const [totalComments, setTotalComments] = useState(0)
    const { id } = useParams()

    useEffect(() => {
        ApiClient.get(`/game/${id}`).then((gameResponse) => {
            setGame(gameResponse.data.data.game[0]);
            setComments(gameResponse.data.data.comments)
            setTotalComments(gameResponse.data.data.comments)
        })
    }, [])

    const smallImages = game?.images.map((game, index) => (
        <StyleSmallPicutre src={game} key={index} />
    ))

    const gameComments = comments?.map((comment, index) => (
        <StyleComments key={index}>
            <span style={{ "color": "#9D1B1B" }} >{comment?.username}</span>
            <span style={{ "color": "grey" }}>
                {new Date(comment?.createdAt).toLocaleString()}
            </span>
            <p>{comment?.comment}</p>
        </StyleComments>
    ))

    return (
        <>
            <StyleGame>
                <StyleLeftSide>
                    <StyleProfilePicture src={game?.mainPhoto}></StyleProfilePicture>
                    <StyleOtherGamePictures>
                        {smallImages}
                    </StyleOtherGamePictures>
                </StyleLeftSide>
                <StyleRightSide>
                    <h1 style={{ "margin": "0" }}>{game?.gameTitle}</h1>
                    <Rating game={id} />
                    {favorites.find(fav => fav.id === game?.id) ?
                        <div style={{ "color": "#9D1B1B", "margin": "10px 0", "cursor": "pointer" }} onClick={() => removeFromFavorites(game)}><FaHeartBroken /> Remove from favorite</div>
                        : <div style={{ "color": "#9D1B1B", "margin": "10px 0", "cursor": "pointer" }} onClick={() => addToFavorites(game)}><FaHeart /> Add to favorite</div>
                    }
                    {
                        cart.find(cart => cart.id === game?.id) ?
                            <Button onClick={() => removeFromCart(game)} text="Remove from cart" />
                            : <Button onClick={() => addToCart(game)} text={`Add to cart $${game?.price}`} />
                    }
                    <p>{game?.gameDescription}</p>
                </StyleRightSide>
            </StyleGame>
            <div>
                {
                    totalComments.length > 0 && <h1>Comment</h1>
                }
                {gameComments}
            </div>
        </>
    )
}

export default Game
