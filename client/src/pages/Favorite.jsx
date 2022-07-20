import SingleGame from "../components/SingleGame"
import { StyleMargin } from "../styles"

const Favorite = () => {
    return (
        <StyleMargin>
            <p>Total: 3 item(s) in favorites</p>
            <div>
                <SingleGame text1="Add to cart" text2="Remove from favorite"/>
                <SingleGame text1="Add to cart" text2="Remove from favorite"/>
                <SingleGame text1="Add to cart" text2="Remove from favorite"/>
            </div>
        </StyleMargin>
    )
}

export default Favorite
