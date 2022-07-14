import SingleGame from "../components/SingleGame"
import { StyleMargin } from "../styles"

const Favorite = () => {
    return (
        <StyleMargin>
            <p>Total: 3 item(s) in favorites</p>
            <div>
                <SingleGame />
                <SingleGame />
                <SingleGame />
            </div>
        </StyleMargin>
    )
}

export default Favorite
