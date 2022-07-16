import { StyleMargin } from "../styles"
import {
    StyleGame, StyleComment, StyleRightSide, StyleProfilePicture, StyleLeftSide, StyleSmallPicutre, StyleOtherGamePictures, StyleComments
} from "../styles/GamePage"
import Button from "../components/Button"
import Rating from "../components/Rating"

const Game = () => {
    return (
        <StyleMargin>
            <StyleGame>
                <StyleLeftSide>
                    <div>
                        <StyleProfilePicture src="images/Dishonored.png"></StyleProfilePicture>
                    </div>
                    <StyleOtherGamePictures>
                        <StyleSmallPicutre src="images/Dishonored.png"></StyleSmallPicutre>
                        <StyleSmallPicutre src="images/Dishonored.png"></StyleSmallPicutre>
                        <StyleSmallPicutre src="images/Dishonored.png"></StyleSmallPicutre>
                        <StyleSmallPicutre src="images/Dishonored.png"></StyleSmallPicutre>
                        <StyleSmallPicutre src="images/Dishonored.png"></StyleSmallPicutre>
                    </StyleOtherGamePictures>
                </StyleLeftSide>
                <StyleRightSide>
                    <h1>Dishonored 2</h1>
                    <Rating />
                    <p>Add to favorite</p>
                    <Button text="Add to cart $15" />
                    <p>Game description</p>
                </StyleRightSide>
            </StyleGame>
            <StyleComment>
                <h1>Comment</h1>
                <StyleComments>
                    <p>David</p>
                    <p>12 October 2021</p>
                    <p>Text</p>
                </StyleComments>
                <StyleComments>
                    <p>David</p>
                    <p>12 October 2021</p>
                    <p>Text</p>
                </StyleComments>
            </StyleComment>
        </StyleMargin>
    )
}

export default Game
