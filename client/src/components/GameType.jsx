import styled from "styled-components"

const GameType = () => {
    return (
        <StyleDiv>
            <span>RPG</span>
            <span>Adventure</span>
            <span>Action</span>
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