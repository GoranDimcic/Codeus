import Button from "./Button";
import Rating from "./Rating";
import useGamesStore from "../store/games";
import ApiClient from "../api/axios";
import useAuthStore from "../store/auth";
import {
  StyleSingleGame,
  StyleLeftSide,
  StyleGameImg,
  StyleRightSide,
  StyleGameDescription,
} from "../styles/SingleGame.js";

const SingleGame = ({ game, onchange, setGames }) => {
  const { token } = useAuthStore();
  const favorites = useGamesStore((state) => state.favorites);
  const cart = useGamesStore((state) => state.cart);
  const addToFavorites = useGamesStore((state) => state.addToFavorites);
  const removeFromFavorites = useGamesStore(
    (state) => state.removeFromFavorites
  );
  const addToCart = useGamesStore((state) => state.addToCart);
  const removeFromCart = useGamesStore((state) => state.removeFromCart);

  const addRatingHandler = async (gameId, ratingNum) => {
    const newRating = await ApiClient.post("/rating", {
      gameId,
      rate: ratingNum,
    });
    setGames((prevGames) =>
      prevGames.map((gm) => {
        if (gm.id === gameId) {
          return {
            ...gm,
            ratingNum: newRating.data.data[0].rating,
          };
        }
        return gm;
      })
    );
  };

  const removeGameFromFavorites = async (game) => {
    await removeFromFavorites(game);
    if (onchange) {
      onchange();
    }
  };

  const removeGameFromCart = async (game) => {
    await removeFromCart(game);
    if (onchange) {
      onchange();
    }
  };

  return (
    <StyleSingleGame>
      <StyleLeftSide>
        <StyleGameImg src={game.mainPhoto}></StyleGameImg>
        {token &&
          (favorites.find((fav) => fav.id === game.id) ? (
            <Button
              onClick={() => removeGameFromFavorites(game)}
              text="Remove from favorites"
            />
          ) : (
            <Button
              onClick={() => addToFavorites(game)}
              text="Add to favorites"
            />
          ))}
      </StyleLeftSide>
      <StyleRightSide>
        <StyleGameDescription>
          <a href={[`/game/${game.id}`]}>
            <h2>{game.gameTitle}</h2>
          </a>
          {token &&
            (cart.find((cart) => cart.id === game.id) ? (
              <Button
                onClick={() => removeGameFromCart(game)}
                text="Remove from cart"
              />
            ) : (
              <Button
                onClick={() => addToCart(game)}
                text={`Add to cart $${game.price}`}
              />
            ))}
        </StyleGameDescription>
        {game.typename?.join(" - ")}
        {token && (
          <Rating
            gameId={game.id}
            userRating={Math.floor(game.ratingNum)}
            addRatingHandler={addRatingHandler}
          />
        )}
        <div>{game.gameDescription}</div>
      </StyleRightSide>
    </StyleSingleGame>
  );
};

export default SingleGame;
