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

    useEffect(() => {
        ApiClient.get("/game/").then((gamesResponse) => {
            setGames(gamesResponse.data.data);
        })
    }, [])

    const searchGames = games.map(game => (
        <SingleGame game={game} key={game.id} />
    ))

    return (
        <>
            <StyleSearch>
                <StyleInput />
                <Button text="Search" />
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
            <StyleLoadMore>
                <Button text="Load more" />
            </StyleLoadMore>
        </>
    )
}

export default Search
