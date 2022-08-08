import {
    StyleGame, StyleRightSide, StyleProfilePicture, StyleLeftSide, StyleSmallPicutre, StyleOtherGamePictures, StyleComments
} from "../styles/GamePage"
import Button from "../components/Button"
import Rating from "../components/Rating"
import { useEffect, useState } from "react"
import ApiClient from "../api/axios"
import { useParams } from "react-router-dom"
import useGamesStore from "../store/games"

const Game = () => {
    const cart = useGamesStore(state => state.cart)
    const addToCart = useGamesStore(state => state.addToCart)
    const removeFromCart = useGamesStore(state => state.removeFromCart)
    const [game, setGame] = useState(null)
    const [comments, setComments] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        ApiClient.get(`/game/${id}`).then((gameResponse) => {
            setGame(gameResponse.data.data.game[0]);
            setComments(gameResponse.data.data.comments)
        })
    }, [])

    const smallImages = game?.images.map(game => (
        <StyleSmallPicutre src={game} />
    ))

    const gameComments = comments?.map(comment => (
        <StyleComments>
            <span style={{ "color": "#9D1B1B" }} >{comment.username}</span>
            <span style={{ "color": "grey" }}>{comment.createdAt}</span>
            <p>{comment.comment}</p>
        </StyleComments>
    ))

    return (
        <>
            <StyleGame>
                <StyleLeftSide>
                    <div>
                        <StyleProfilePicture src={game?.mainPhoto}></StyleProfilePicture>
                    </div>
                    <StyleOtherGamePictures>
                        {smallImages}
                    </StyleOtherGamePictures>
                </StyleLeftSide>
                <StyleRightSide>
                    <h1>{game?.gameTitle}</h1>
                    <Rating />
                    <p style={{ "color": "#9D1B1B" }}>Add to favorite</p>
                    {
                        cart.find(cart => cart.id === game?.id) ?
                            <Button onClick={() => removeFromCart(game)} text="Remove from cart" />
                            : <Button onClick={() => addToCart(game)} text={`Add to cart ${game?.price}`} />
                    }
                    <p>{game?.gameDescription}</p>
                </StyleRightSide>
            </StyleGame>
            <div>
                <h1>Comment</h1>
                {gameComments}
            </div>
        </>
    )
}

export default Game
