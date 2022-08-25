import { useEffect, useState } from "react";
import ApiClient from "../api/axios";
import Button from "../components/Button";
import SingleGame from "../components/SingleGame";
import StarFilter from "../components/StarFilter";
import {
  StyleGameType,
  StyleFilter,
  StyleInput,
  StyleLoadMore,
  StyleMiddle,
  StylePlatform,
  StyleSearch,
  StylePrice,
} from "../styles/SearchPage";

const prices = [
  "Free",
  `Under $${5}`,
  `From $${5} - $${10}`,
  `From $${10} - $${30}`,
  `Over $${30}`,
];

const Search = () => {
  const [games, setGames] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchFields, setSearchFields] = useState({
    type: [],
    platform: [],
  });
  const [filter, setFilter] = useState({
    type: [],
    platform: [],
    priceMin: 0,
    priceMax: 30,
  });

  useEffect(() => {
    ApiClient.get(`/search`, {
      params: {
        searchGame: searchData,
        page,
        perPage: 10,
      },
    }).then((gameResponse) => {
      setTotalPages(gameResponse.data.data.metaData.totalPages);
      setGames((prevState) => [
        ...prevState,
        ...gameResponse.data.data.results,
      ]);
    });
  }, []);

  useEffect(() => {
    ApiClient.get("/search/types").then((typeResponse) => {
      setSearchFields((oldValue) => ({
        ...oldValue,
        type: typeResponse.data.data,
      }));
    });
    ApiClient.get("/search/platforms").then((platformResponse) => {
      setSearchFields((oldValue) => ({
        ...oldValue,
        platform: platformResponse.data.data,
      }));
    });
  }, []);

  const searchGame = async () => {
    setPage(1);
    ApiClient.get(`/search`, {
      params: {
        searchGame: searchData,
        page: 1,
        perPage: 10,
      },
    }).then((gameResponse) => {
      setTotalPages(gameResponse.data.data.metaData.totalPages);
      setGames(gameResponse.data.data.results);
    });
  };

  const loadMore = () => {
    ApiClient.get(`/search`, {
      params: {
        searchGame: searchData,
        page: page + 1,
        perPage: 10,
      },
    }).then((gameResponse) => {
      setTotalPages(gameResponse.data.data.metaData.totalPages);
      setGames((prevState) => [
        ...prevState,
        ...gameResponse.data.data.results,
      ]);
    });
    setPage((prevState) => prevState + 1);
  };

  // const onTypeChanged = (typeId) => {
  //   const alreadySelected = searchFields.type.includes(typeId);
  //   console.log(alreadySelected);
  //   if (alreadySelected) {
  //     const updatedTypes = searchFields.type.searchFields((id) => id !== typeId);
  //     setSearchFields({
  //       ...searchFields,
  //       type: updatedTypes,
  //     });
  //   } else {
  //     setSearchFields({
  //       ...searchFields,
  //       type: [...searchFields.type, typeId],
  //     });
  //   }
  // };

  // const onPlatformChanged = (platformId) => {
  //   const alreadySelected = searchFields.platform.includes(platformId);
  //   if (alreadySelected) {
  //     const updatedPlatforms = searchFields.platform.searchFields(
  //       (id) => id !== platformId
  //     );
  //     setSearchFields({
  //       ...searchFields,
  //       platform: updatedPlatforms,
  //     });
  //   } else {
  //     setSearchFields({
  //       ...searchFields,
  //       platform: [...searchFields.platform, platformId],
  //     });
  //   }
  // };

  const searchGames = games.map((game, index) => (
    <SingleGame game={game} key={index} setGames={setGames} />
  ));

  return (
    <>
      <StyleSearch>
        <StyleInput
          onKeyUp={(e) => setSearchData((prevState) => e.target.value)}
        />
        <Button
          text="Search"
          onClick={() => {
            searchGame();
          }}
        />
      </StyleSearch>
      <StyleFilter>
        <StyleGameType>
          {searchFields.type.map((t, index) => {
            return (
              <div
                key={index}
                className={searchFields.type.includes(t.id) ? "selected" : ""}
                onClick={(e) => {
                  console.log(e.target.textContent);
                }}
              >
                {t.name}
              </div>
            );
          })}
        </StyleGameType>
        <StyleMiddle>
          <StylePlatform>
            {searchFields.platform.map((p, index) => {
              return (
                <div
                  key={index}
                  className={
                    searchFields.platform.includes(p.id) ? "selected" : ""
                  }
                  onClick={(e) => {
                    console.log(e.target.textContent);
                  }}
                >
                  {p.name}
                </div>
              );
            })}
          </StylePlatform>
          <StarFilter />
        </StyleMiddle>
        <StylePrice>
          {prices.map((p, index) => {
            return (
              <div
                key={index}
                onClick={(e) => {
                  console.log(e.target.textContent);
                }}
              >
                {p}
              </div>
            );
          })}
        </StylePrice>
      </StyleFilter>
      {searchGames}
      {page < totalPages && (
        <StyleLoadMore>
          <Button text="Load more" onClick={() => loadMore()} />
        </StyleLoadMore>
      )}
    </>
  );
};

export default Search;
