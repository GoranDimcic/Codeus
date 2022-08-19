import { useEffect, useState } from "react"
import ApiClient from "../api/axios"
import BrowseGrid from "../components/BrowseGrid"

const Browse = () => {

    const [types, setTypes] = useState([])

    useEffect(() => {
        ApiClient.get("search/types").then((typeResponse) => {
            setTypes(typeResponse.data.data)
        })
    }, [])

    const gameTypes = types.map(type => (
        <BrowseGrid type={type} />
    ))

    return (
        <>
            {gameTypes}
        </ >
    )
}

export default Browse
