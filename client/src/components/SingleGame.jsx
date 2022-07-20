import { StyleSingleGame, StyleGameImg, StyleGameDescription, StyleLeftSide, StyleRightSide } from "../styles/SingleGame";
import Button from "./Button";
import GameType from "./GameType";
import Rating from "./Rating";
import { useState } from "react";

const SingleGame = () => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <StyleSingleGame>
            <StyleLeftSide>
                <StyleGameImg src="images/game.png"
                    style={{
                        filter: isHovering ? 'blur(4px)' : ''
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                </StyleGameImg>
            </StyleLeftSide>
            <StyleRightSide>
                <StyleGameDescription>
                    <h2>Dishonored 2</h2>
                    <Button text="Remove from favorites" />
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
