import styled from "styled-components"

export const StyleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    margin-bottom: 25px;
`

export const StyleMostRankedGames = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    border-radius: 10px;
    padding: 20px;
    background-color: #3B0931;
    img {
        height: 100%;
    }
`

export const StyleBestGameType = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #200220;
    font-size: 40px;
`

export const StyleMostRankedLatestGamesLeft = styled.div`
    display: grid;
    div:nth-child(3) {
        grid-column: 1/3;
    }
`

export const StyleMostRankedLatestGamesRight = styled.div`
    display: grid;
    div:nth-child(1) {
        grid-column: 1/3;
    }
`

export const StyleThird = styled.div`
    display: flex;
    margin-bottom: 25px;
`