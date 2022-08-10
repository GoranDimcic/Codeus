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
    const [searchData, setsearchData] = useState("")
    const [searchOffset, setSearchOffset] = useState(0)

    const searchGame = async () => {
        if (searchData !== "") {
            ApiClient.get(`/search?search=${searchData}&offset=${searchOffset}`).then((response) => {
                setGames(response.data.data)
            })
        }
        else {
            ApiClient.get(`/search?offset=${searchOffset}`).then((response) => {
                setGames(response.data.data)
            })
        }
    }

    useEffect(() => {
        if (searchData !== "") {
            ApiClient.get(`/search?search=${searchData}&offset=${searchOffset}`).then((gamesResponse) => {
                setGames(prevState => [
                    ...prevState,
                    ...gamesResponse.data.data
                ]);
            })
        }
        else {
            ApiClient.get(`/search?offset=${searchOffset}`).then((gamesResponse) => {
                setGames(prevState => [
                    ...prevState,
                    ...gamesResponse.data.data
                ]);
            })
        }
    }, [searchOffset])

    const loadMore = () => {
        setSearchOffset(prevState => prevState + 30)
    }

    const searchGames = games.map((game, index) => (
        <SingleGame game={game} key={index} />
    ))

    return (
        <>
            <StyleSearch>
                <StyleInput onKeyUp={(e) => setsearchData(prevState => e.target.value)} />
                <Button text="Search" onClick={() => searchGame()} />
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
            {searchOffset < 2000 &&
                <StyleLoadMore>
                    <Button text="Load more" onClick={() => loadMore()} />
                </StyleLoadMore>}
        </>
    )
}

export default Search
