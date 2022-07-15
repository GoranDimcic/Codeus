import { StyledNav, StyledLi } from "../styles"
import { StyledStarImg } from "../styles/SingleGame"
import {
    StyleGame, StyledImg, StyleComment, StyleGamePictures,
    StyleSpan, StyleLeftSide, StyleRightSide, StyleSelectedGame,
    StyleMorePictures, StyleComments, StyleP
} from "../styles/GamePage"
import Button from "../components/Button"

const Game = () => {
    return (
        <StyleGame>
            <StyleSelectedGame>
                <StyleLeftSide>
                    <StyledImg src="images/Dishonored.png"></StyledImg>
                    <StyleGamePictures>
                        <StyleMorePictures src="images/Dishonored.png"></StyleMorePictures>
                        <StyleMorePictures src="images/Dishonored.png"></StyleMorePictures>
                        <StyleMorePictures src="images/Dishonored.png"></StyleMorePictures>
                        <StyleMorePictures src="images/Dishonored.png"></StyleMorePictures>
                        <StyleMorePictures src="images/Dishonored.png"></StyleMorePictures>
                        <StyleMorePictures src="images/Dishonored.png"></StyleMorePictures>
                    </StyleGamePictures>
                </StyleLeftSide>
                <StyleRightSide>
                    <h1>Dishonored 2</h1>
                    <StyledNav>
                        <StyledLi><StyledStarImg src="images/star-empty.png"></StyledStarImg></StyledLi>
                        <StyledLi><StyledStarImg src="images/star-empty.png"></StyledStarImg></StyledLi>
                        <StyledLi><StyledStarImg src="images/star-empty.png"></StyledStarImg></StyledLi>
                        <StyledLi><StyledStarImg src="images/star-empty.png"></StyledStarImg></StyledLi>
                        <StyledLi><StyledStarImg src="images/star-empty.png"></StyledStarImg></StyledLi>
                    </StyledNav>
                    <p>Add to favorite</p>
                    <Button text="Add to cart $15" />
                    <p>Game description</p>
                </StyleRightSide>
            </StyleSelectedGame>
            <StyleComment>
                <h1>Comment</h1>
                <StyleComments>
                    <StyleP>David<StyleSpan>12 October 2021</StyleSpan></StyleP>
                    <StyleP>Komentar</StyleP>
                </StyleComments>
                <StyleComments>
                    <StyleP>David<StyleSpan>12 October 2021</StyleSpan></StyleP>
                    <StyleP>Komentar</StyleP>
                </StyleComments>
            </StyleComment>
        </StyleGame>
    )
}

export default Game
