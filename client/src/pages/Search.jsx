import e from "cors"
import { useEffect, useState } from "react"
import ApiClient from "../api/axios"
import Button from "../components/Button"
import SingleGame from "../components/SingleGame"
import StarFilter from "../components/StarFilter"
import {
    StyleGameType, StyleFilter, StyleInput,
    StyleLoadMore, StyleMiddle, StylePlatform, StyleSearch, StylePrice
} from "../styles/SearchPage"

const prices = ["Free", "Under $5", "From $5 - $10", "From $10 - $30", "Over $30"]

const Search = () => {
    const [games, setGames] = useState([])
    const [searchData, setSearchData] = useState("")
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [filter, setFilter] = useState({
        type: [],
        platform: [],
        rating: 3,
        priceMin: 0,
        priceMax: 5
    })

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
            ])
        })
    }, [])

    useEffect(() => {
        ApiClient.get("/search/types").then((typeResponse) => {
            setFilter((oldValue) => ({
                ...oldValue,
                type: typeResponse.data.data
            }))
        })
        ApiClient.get("/search/platforms").then((platformResponse) => {
            setFilter((oldValue) => ({
                ...oldValue,
                platform: platformResponse.data.data
            }))
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

    const onTypeChanged = (typeId) => {
        const alreadySelected = filter.type.includes(typeId)
        if (alreadySelected) {
            const updatedTypes = filter.type.filter(id => id !== typeId)
            setFilter({
                ...filter,
                type: updatedTypes
            })
        }
        else {
            setFilter({
                ...filter,
                type: [
                    ...filter.type, typeId
                ]
            })
        }
    }

    const onPlatformChanged = (platformId) => {
        const alreadySelected = filter.platform.includes(platformId)
        if (alreadySelected) {
            const updatedPlatforms = filter.platform.filter(id => id !== platformId)
            setFilter({
                ...filter,
                platform: updatedPlatforms
            })
        }
        else {
            setFilter({
                ...filter,
                platform: [
                    ...filter.platform, platformId
                ]
            })
        }
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
                <StyleGameType>
                    {
                        filter.type.map((t, index) => {
                            return <div key={index} className={filter.type.includes(t.id) ? "selected" : ""} onClick={() => onTypeChanged(t.id)} >{t.name}</div>
                        })
                    }
                </StyleGameType>
                <StyleMiddle>
                    <StylePlatform>
                        {
                            filter.platform.map((p, index) => {
                                return <div key={index} className={filter.platform.includes(p.id) ? "selected" : ""} onClick={() => onPlatformChanged(p.id)}>{p.name}</div>
                            })
                        }
                    </StylePlatform>
                    <StarFilter />
                </StyleMiddle>
                <StylePrice>
                    {
                        prices.map((p, index) => {
                            return <div key={index}>{p}</div>
                        })
                    }
                </StylePrice>
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
