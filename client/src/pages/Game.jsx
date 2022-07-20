import { StyleMargin } from "../styles"
import {
    StyleGame, StyleRightSide, StyleProfilePicture, StyleLeftSide, StyleSmallPicutre, StyleOtherGamePictures, StyleComments
} from "../styles/GamePage"
import Button from "../components/Button"
import Rating from "../components/Rating"
import Span from "../components/Span"

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
                        <StyleSmallPicutre src="images/Dishonored.png"></StyleSmallPicutre>
                        <StyleSmallPicutre src="images/Dishonored.png"></StyleSmallPicutre>
                    </StyleOtherGamePictures>
                </StyleLeftSide>
                <StyleRightSide>
                    <h1>Dishonored 2</h1>
                    <Rating />
                    <p>Add to favorite</p>
                    <Button text1="Add to cart $15" />
                    <p>Game description</p>
                </StyleRightSide>
            </StyleGame>
            <div>
                <h1>Comment</h1>
                <StyleComments>
                    <Span text="David" color="#9D1B1B" />
                    <Span text="12 October 2021" color="grey" />
                    <p>Text</p>
                </StyleComments>
                <StyleComments>
                    <Span text="David" color="#9D1B1B" />
                    <Span text="12 October 2021" color="grey" />
                    <p>Text</p>
                </StyleComments>
            </div>
        </StyleMargin>
    )
}

export default Game
