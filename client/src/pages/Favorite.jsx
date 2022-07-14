import { StyleFavorite } from "../styledComponent/FavoritePage"
import SingleGame from "../components/SingleGame"

const Favorite = () => {
    return (
        <StyleFavorite>
            <p>Total: 3 item(s) in favorites</p>
            <div className="all games in favorite">
                <SingleGame />
                <SingleGame />
            </div>
        </StyleFavorite>
    )
}

export default Favorite
