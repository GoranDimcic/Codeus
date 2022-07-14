import { StyledButton } from "../styles";
import { StyleSingleGame, StyleGameImg, StyleGameDescription, StyleLeftSide, StyleRightSide } from "../styles/SingleGame";
import GameType from "./GameType";
import Rating from "./Rating";

const SingleGame = () => {
    return (
        <StyleSingleGame>
            <StyleLeftSide>
                <StyleGameImg src="images/game.png"></StyleGameImg>
            </StyleLeftSide>
            <StyleRightSide>
                <StyleGameDescription>
                    <h2>Dishonored 2</h2>
                    <StyledButton>Remove from favorites</StyledButton>
                </StyleGameDescription>
                <GameType />
                <Rating />
                <div>
                    Game description
                </div>
            </StyleRightSide>
        </StyleSingleGame>
    )
}

export default SingleGame
