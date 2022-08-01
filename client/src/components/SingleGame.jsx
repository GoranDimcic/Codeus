import Button from "./Button";
import Rating from "./Rating";
import styled from "styled-components";

const SingleGame = ({ game, button1, button2 }) => {
    return (
        <StyleSingleGame>
            <StyleLeftSide>
                <StyleGameImg src={game.mainPhoto}></StyleGameImg>
                <Button button1={button1} />
            </StyleLeftSide>
            <StyleRightSide>
                <StyleGameDescription>
                    <h2>{game.gameTitle}</h2>
                    <Button button2={button2} />
                </StyleGameDescription>
                {game.typename.join(" - ")}
                <Rating />
                <div>
                    {game.gameDescription}
                </div>
            </StyleRightSide>
        </StyleSingleGame >
    )
}

const StyleSingleGame = styled.div`
    background-color: #3B0931;
    display: flex;
    border-radius: 5px;
    margin: 20px 0;
    padding: 20px;
`

const StyleLeftSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 20%;
    button {
        position: absolute;
        opacity: 0;
        transition: .3s ease-in;
    }
    &:hover {
        button {
            opacity: 1;
        }
        img {
            filter: blur(4px);
        }
    }
`

const StyleGameImg = styled.img`
    width: 100%;
    height: 157px;
`

const StyleRightSide = styled.div`
    width: 100%;
    height: auto;
    margin-left: 20px;
`

const StyledStarImg = styled.img`
    height: 30px;
    width: 30px;
`

const StyleGameDescription = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
        margin: 0px;
    }
`

export default SingleGame
