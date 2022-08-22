import { useEffect } from "react";
import ApiClient from "../api/axios";
import SingleGame from "../components/SingleGame";
import useGamesStore from "../store/games";

const Favorite = () => {
  const favorites = useGamesStore((state) => state.favorites);
  const setFavorites = useGamesStore((state) => state.setFavorites);

  useEffect(() => {
    ApiClient.get("/favorite/").then((favoriteResponse) => {
      setFavorites(favoriteResponse.data.data);
    });
  }, []);

  const onchange = () => {
    ApiClient.get(`/favorite`).then((favoritesResponse) => {
      setFavorites(favoritesResponse.data.data);
    });
  };

  const favoriteGames = favorites.map((game) => (
    <SingleGame game={game} onchange={onchange} key={game.id} />
  ));

  return (
    <>
      {favorites.length > 0 ? (
        <p>Total: {favorites.length} item(s) in favorites.</p>
      ) : (
        <p>There is no items in favorites.</p>
      )}
      {favoriteGames}
    </>
  );
};

export default Favorite;
