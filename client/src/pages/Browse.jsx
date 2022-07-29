import GameHover from "../components/GameHover"
import Span from "../components/Span"
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
                        <Span text="BEST" />
                        <Span text="RPG" />
                        <Span text="GAMES" />
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
