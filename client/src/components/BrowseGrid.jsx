import { useEffect } from "react";
import { useState } from "react";
import ApiClient from "../api/axios";
import GameHover from "../components/GameHover";
import {
  StyleMostFavoritedGames,
  StyleMostPricedGames,
  StyleMostRatedGamesLeft,
  StyleMostRatedGamesRight,
  StyleGrid,
  StyleBestGameType,
} from "../styles/BrowsePage";

const BrowseGrid = ({ type }) => {
  const [browse, setBrowse] = useState([]);

  useEffect(() => {
    ApiClient.get(`/browse/`, {
      params: {
        type: type.name,
      },
    }).then((browseResponse) => {
      setBrowse(browseResponse.data.data);
    });
  }, []);

  return (
    <>
      <StyleGrid>
        <StyleMostFavoritedGames>
          <StyleBestGameType>
            <span>{type.name}</span>
          </StyleBestGameType>
          {browse?.favorite?.rows.slice(0, 3).map((favorite) => (
            <GameHover key={favorite.id} game={favorite} />
          ))}
        </StyleMostFavoritedGames>
        <GameHover game={browse?.comment?.rows[0]} />
        <StyleMostRatedGamesLeft>
          {browse?.rate?.rows
            .filter((_, index) => index % 2 === 0)
            .map((r, index) => <GameHover game={r} key={index} />)
            .slice(0, 3)}
        </StyleMostRatedGamesLeft>
        <StyleMostRatedGamesRight>
          {browse?.rate?.rows
            .filter((_, index) => index % 2 === 1)
            .map((r, index) => <GameHover game={r} key={index} />)
            .slice(0, 3)}
        </StyleMostRatedGamesRight>
      </StyleGrid>
      <StyleMostPricedGames>
        {browse?.price?.rows.slice(0, 5).map((favorite) => (
          <GameHover key={favorite.id} game={favorite} />
        ))}
      </StyleMostPricedGames>
    </>
  );
};

export default BrowseGrid;
