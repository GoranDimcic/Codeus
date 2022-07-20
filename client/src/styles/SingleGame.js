import styled from "styled-components"

export const StyleSingleGame = styled.div`
    background-color: #3B0931;
    display: flex;
    border-radius: 5px;
    margin: 20px 0;
    padding: 20px;
`

export const StyleLeftSide = styled.div`
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

export const StyleGameImg = styled.img`
    width: 100%;
`

export const StyleRightSide = styled.div`
    width: 100%;
    margin-left: 20px;
`

export const StyledStarImg = styled.img`
    height: 30px;
    width: 30px;
`

export const StyleGameDescription = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
        margin: 0px;
    }
`