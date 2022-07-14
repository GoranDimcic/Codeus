import { StyledButton } from "../styles";
import { StyleSingleGame, StyleImg, StyleGame, StyleLeftSide, StyleRightSide } from "../styles/SingleGame";
import GameType from "./GameType";
import Rating from "./Rating";

const SingleGame = () => {
    return (
        <StyleSingleGame>
            <StyleLeftSide>
                <StyleImg src="images/game.png"></StyleImg>
            </StyleLeftSide>
            <StyleRightSide>
                <StyleGame>
                    <h2>Dishonored 2</h2>
                    <StyledButton>Remove from favorites</StyledButton>
                </StyleGame>
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
