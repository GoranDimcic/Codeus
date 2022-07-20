import { StyleSingleGame, StyleGameImg, StyleGameDescription, StyleLeftSide, StyleRightSide } from "../styles/SingleGame";
import Button from "./Button";
import GameType from "./GameType";
import Rating from "./Rating";

const SingleGame = ({ text1, text2 }) => {
    return (
        <StyleSingleGame>
            <StyleLeftSide>
                <StyleGameImg src="images/game.png"></StyleGameImg>
                <Button text1={text1} />
            </StyleLeftSide>
            <StyleRightSide>
                <StyleGameDescription>
                    <h2>Dishonored 2</h2>
                    <Button text2={text2} />
                </StyleGameDescription>
                <GameType />
                <Rating />
                <div>
                    Game description
                </div>
            </StyleRightSide>
        </StyleSingleGame >
    )
}

export default SingleGame
