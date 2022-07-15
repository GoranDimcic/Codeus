import styled from "styled-components"
import Span from "./Span"

const GameType = () => {
    return (
        <StyleDiv>
            <Span text="RPG" />
            <Span text="Adventure" />
            <Span text="Action" />
        </StyleDiv>
    )
}

const StyleDiv = styled.div`
    display: flex;
    span {
        margin-left: 20px;
    }
    span:nth-child(1) {
        margin-left:0;
    }
`

export default GameType