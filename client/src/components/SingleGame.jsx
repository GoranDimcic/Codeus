import Button from "./Button";
import Rating from "./Rating";
import styled from "styled-components";
import useGamesStore from "../store/games";

const SingleGame = ({ game, onchange }) => {
    const favorites = useGamesStore(state => state.favorites)
    const cart = useGamesStore(state => state.cart)
    const addToFavorites = useGamesStore(state => state.addToFavorites)
    const removeFromFavorites = useGamesStore(state => state.removeFromFavorites)
    const addToCart = useGamesStore(state => state.addToCart)
    const removeFromCart = useGamesStore(state => state.removeFromCart)

    const removeGameFromFavorites = async (game) => {
        await removeFromFavorites(game)
        if (onchange) {
            onchange()
        }
    }

    const removeGameFromCart = async (game) => {
        await removeFromCart(game)
        if (onchange) {
            onchange()
        }
    }

    return (
        <StyleSingleGame>
            <StyleLeftSide>
                <StyleGameImg src={game.mainPhoto}></StyleGameImg>
                {favorites.find(fav => fav.id === game.id) ?
                    <Button onClick={() => removeGameFromFavorites(game)} text="Remove from favorites" />
                    : <Button onClick={() => addToFavorites(game)} text="Add to favorites" />
                }
            </StyleLeftSide>
            <StyleRightSide>
                <StyleGameDescription>
                    <a href={[`/game/${game.id}`]}><h2>{game.gameTitle}</h2></a>
                    {
                        cart.find(cart => cart.id === game.id) ?
                            <Button onClick={() => removeGameFromCart(game)} text="Remove from cart" />
                            : <Button onClick={() => addToCart(game)} text={`Add to cart $${game.price}`} />
                    }
                </StyleGameDescription>
                {game.typename?.join(" - ")}
                <Rating ratingNum={Math.floor(game.ratingNum)} />
                <div>
                    {game.gameDescription}
                </div>
            </StyleRightSide>
        </StyleSingleGame >
    )
}

const StyleSingleGame = styled.div`
    background-color: #3B0931;
    display: flex;
    border-radius: 5px;
    margin: 20px 0;
    padding: 20px;
    a{
        text-decoration: none;
        color: white;
    }
`

const StyleLeftSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 20%;
    button {
        position: absolute;
        opacity: 0;
        transition: .3s ease-in;
    }
    &:hover {
        button {
            opacity: 1;
        }
        img {
            filter: blur(4px);
        }
    }
`

const StyleGameImg = styled.img`
    width: 100%;
    height: 157px;
`

const StyleRightSide = styled.div`
    width: 100%;
    height: auto;
    margin-left: 20px;
`

const StyleGameDescription = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
        margin: 0px;
    }
`

export default SingleGame
