import Span from "../components/Span"
import { StyleMargin } from "../styles"
import {
    StyleMostRankedGames, StyleMostCommentedGame, StyleThird,
    StyleMostRankedLatestGamesLeft, StyleMostRankedLatestGamesRight, StyleGrid
} from "../styles/BrowsePage"

const Browse = () => {
    return (
        <StyleMargin>
            <StyleGrid>
                <StyleMostRankedGames>
                    <div>
                        <Span text="BEST" />
                        <Span text="RPG" />
                        <Span text="GAMES" />
                    </div>
                    <img src="images/game.png"></img>
                    <img src="images/game.png"></img>
                    <img src="images/game.png"></img>
                </StyleMostRankedGames>
                <StyleMostCommentedGame>
                    <img src="images/game.png"></img>
                </StyleMostCommentedGame>
                <StyleMostRankedLatestGamesLeft>
                    <img src="images/game.png"></img>
                    <img src="images/game.png"></img>
                    <img src="images/game.png"></img>
                </StyleMostRankedLatestGamesLeft>
                <StyleMostRankedLatestGamesRight>
                    <img src="images/game.png"></img>
                    <img src="images/game.png"></img>
                    <img src="images/game.png"></img>
                </StyleMostRankedLatestGamesRight>
            </StyleGrid>
            <StyleThird>
                <img src="images/game.png"></img>
                <img src="images/game.png"></img>
                <img src="images/game.png"></img>
                <img src="images/game.png"></img>
                <img src="images/game.png"></img>
            </StyleThird>
        </StyleMargin >
    )
}

export default Browse
