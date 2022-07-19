import styled from "styled-components"

export const StyleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    margin-bottom: 25px;
`

export const StyleMostRankedGames = styled.div`
    display: grid;
    border-radius: 10px;
    background-color: #3B0931;
    padding: 20px;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    img {
        width: 100%;
        height: 100%;
    }
    div {
        display: flex;
        flex-direction: column;
        font-size: 40px;
        background-color: #200220;
        justify-content: center;
        text-align: center;
    }
`

export const StyleMostCommentedGame = styled.div`
    img {
        width: 100%;
        height: 100%;
    }
`

export const StyleMostRankedLatestGamesLeft = styled.div`
    display: grid;
    img {
        width: 100%;
    }
    img:nth-child(1) {
        grid-column: 1/2;
    }
    img:nth-child(2) {
        grid-column: 2/3;
    }
    img:nth-child(3) {
        grid-column: 1/3;
    }
`

export const StyleMostRankedLatestGamesRight = styled.div`
    display: grid;
    img {
        width: 100%;
    }
    img:nth-child(1) {
        grid-column: 1/3;
    }
    img:nth-child(2) {
        grid-column: 1/2;
    }
    img:nth-child(3) {
        grid-column: 2/3;
    }
`

export const StyleThird = styled.div`
    display: flex;
    margin-bottom: 25px;
    img {
        width: 20%;
    }
`