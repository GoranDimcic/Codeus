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
          <GameHover game={browse?.favorite?.rows[0]} />
          <GameHover game={browse?.favorite?.rows[1]} />
          <GameHover game={browse?.favorite?.rows[2]} />
        </StyleMostFavoritedGames>
        <GameHover game={browse?.comment?.rows[0]} />
        <StyleMostRatedGamesLeft>
          <GameHover game={browse?.rate?.rows[0]} />
          <GameHover game={browse?.rate?.rows[2]} />
          <GameHover game={browse?.rate?.rows[3]} />
        </StyleMostRatedGamesLeft>
        <StyleMostRatedGamesRight>
          <GameHover game={browse?.rate?.rows[1]} />
          <GameHover game={browse?.rate?.rows[4]} />
          <GameHover game={browse?.rate?.rows[5]} />
        </StyleMostRatedGamesRight>
      </StyleGrid>
      <StyleMostPricedGames>
        <GameHover game={browse?.price?.rows[0]} />
        <GameHover game={browse?.price?.rows[1]} />
        <GameHover game={browse?.price?.rows[2]} />
        <GameHover game={browse?.price?.rows[3]} />
        <GameHover game={browse?.price?.rows[4]} />
      </StyleMostPricedGames>
    </>
  );
};

export default BrowseGrid;
