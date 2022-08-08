import GameHover from "../components/GameHover"
import {
    StyleMostRankedGames, StyleThird,
    StyleMostRankedLatestGamesLeft, StyleMostRankedLatestGamesRight, StyleGrid, StyleBestGameType
} from "../styles/BrowsePage"

const Browse = () => {
    return (
        <>
            <StyleGrid>
                <StyleMostRankedGames>
                    <StyleBestGameType>
                        <span>RPG</span>
                    </StyleBestGameType>
                    <GameHover />
                    <GameHover />
                    <GameHover />
                </StyleMostRankedGames>
                <GameHover />
                <StyleMostRankedLatestGamesLeft>
                    <GameHover />
                    <GameHover />
                    <GameHover />
                </StyleMostRankedLatestGamesLeft>
                <StyleMostRankedLatestGamesRight>
                    <GameHover />
                    <GameHover />
                    <GameHover />
                </StyleMostRankedLatestGamesRight>
            </StyleGrid>
            <StyleThird>
                <GameHover size="20%" />
                <GameHover size="20%" />
                <GameHover size="20%" />
                <GameHover size="20%" />
                <GameHover size="20%" />
            </StyleThird>
        </ >
    )
}

export default Browse
