import Button from "../components/Button"
import styled from "styled-components"

const GameHover = () => {
    return (
        <StyleDiv>
            <img src="images/game.png"></img>
            <StyleHover>
                <Button button1="DETAILS" />
                <Button button2="IN CART $19" />
            </StyleHover>
        </StyleDiv >
    )
}

const StyleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: relative;
    button {
        margin-bottom: 20px;
        transition: .3s ease-in;
        opacity: 0;
    }
    img {
        width: 100%;
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

export const StyleHover = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 100%;
`

export default GameHover
