import { useEffect, useState } from "react"
import ApiClient from "../api/axios"
import Button from "../components/Button"
import SingleGame from "../components/SingleGame"
import StarImg from "../components/StarImg"
import {
    StyleGameTypeAndPrice, StyleFilter, StyleInput,
    StyleLoadMore, StyleMiddle, StylePlatform, StyleSearch
} from "../styles/SearchPage"


const Search = () => {
    const [games, setGames] = useState([])
    const [searchData, setSearchData] = useState("")
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        ApiClient.get(`/search`, {
            params: {
                searchGame: searchData,
                page,
                perPage: 10
            }
        }).then((gameResponse) => {
            setTotalPages(gameResponse.data.data.metaData.totalPages)
            setGames(prevState => [
                ...prevState,
                ...gameResponse.data.data.results
            ]);
        })
    }, [])

    const searchGame = async () => {
        setPage(1)
        ApiClient.get(`/search`, {
            params: {
                searchGame: searchData,
                page: 1,
                perPage: 10
            }
        }).then((gameResponse) => {
            setTotalPages(gameResponse.data.data.metaData.totalPages)
            setGames(
                gameResponse.data.data.results
            );
        })
    }

    const loadMore = () => {
        ApiClient.get(`/search`, {
            params: {
                searchGame: searchData,
                page: page + 1,
                perPage: 10
            }
        }).then((gameResponse) => {
            setTotalPages(gameResponse.data.data.metaData.totalPages)
            setGames(prevState => [
                ...prevState,
                ...gameResponse.data.data.results
            ]);
        })
        setPage((prevState) => prevState + 1)
    }

    const searchGames = games.map((game, index) => (
        <SingleGame game={game} key={index} />
    ))

    return (
        <>
            <StyleSearch>
                <StyleInput onKeyUp={(e) => setSearchData(prevState => e.target.value)} />
                <Button text="Search" onClick={() => { searchGame() }} />
            </StyleSearch>
            <StyleFilter>
                <StyleGameTypeAndPrice>
                    <div>Adventure</div>
                    <div>Indie</div>
                    <div>RPG</div>
                    <div>Strategy</div>
                    <div>Action</div>
                    <div>Simulation</div>
                </StyleGameTypeAndPrice>
                <StyleMiddle>
                    <StylePlatform>
                        <div>Mac oc</div>
                        <div>Windows</div>
                        <div>Linux</div>
                    </StylePlatform>
                    <StarImg />
                </StyleMiddle>
                <StyleGameTypeAndPrice>
                    <div>Free</div>
                    <div>Under $5</div>
                    <div>From $5 - $10</div>
                    <div>From $10 - $30</div>
                    <div>Over $30</div>
                </StyleGameTypeAndPrice>
            </StyleFilter>
            {searchGames}
            {
                page < totalPages &&
                <StyleLoadMore>
                    <Button text="Load more" onClick={() => loadMore()} />
                </StyleLoadMore>
            }
        </>
    )
}

export default Search
