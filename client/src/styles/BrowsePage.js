import styled from "styled-components"

export const StyleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    margin-bottom: 25px;
`

export const StyleMostFavoritedGames = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    border-radius: 10px;
    padding: 20px;
    background-color: #3B0931;
    height: 300px;
`

export const StyleBestGameType = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #200220;
    font-size: 40px;
`

export const StyleMostRatedGamesLeft = styled.div`
    display: grid;
    div {
        height: 250px;
        justify-content: center;
    }
    div:nth-child(3) {
        grid-column: 1/3;
    }
`

export const StyleMostRatedGamesRight = styled.div`
    display: grid;
    div {
        height: 250px;
        justify-content: center;
    }
    div:nth-child(1) {
        grid-column: 1/3;
    }
`

export const StyleMostPricedGames = styled.div`
    display: flex;
    margin-bottom: 25px;
    height: 150px;
`