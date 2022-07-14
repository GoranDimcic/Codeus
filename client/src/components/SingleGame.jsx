import { StyledButton, StyledLi, StyledNav } from "../styledComponent";
import { StyleSingleGame, StyleLeftSide, StyledImg, StyledStarImg, StyleRightSide } from "../styledComponent/SingleGame";

const SingleGame = () => {
    return (
        <StyleSingleGame>
            <StyleLeftSide>
                <StyledImg src="images/game.png"></StyledImg>
            </StyleLeftSide>
            <StyleRightSide>
                <div>Dishonored 2 <span><StyledButton>Remove from favorites</StyledButton></span></div>
                <StyledNav>
                    <StyledLi>RPG</StyledLi>
                    <StyledLi>Adventure</StyledLi>
                    <StyledLi>Action</StyledLi>
                </StyledNav>
                <StyledNav>
                    <StyledLi><StyledStarImg src="images/star-empty.png"></StyledStarImg></StyledLi>
                    <StyledLi><StyledStarImg src="images/star-empty.png"></StyledStarImg></StyledLi>
                    <StyledLi><StyledStarImg src="images/star-empty.png"></StyledStarImg></StyledLi>
                    <StyledLi><StyledStarImg src="images/star-empty.png"></StyledStarImg></StyledLi>
                    <StyledLi><StyledStarImg src="images/star-empty.png"></StyledStarImg></StyledLi>
                </StyledNav>
                <div>
                    Game description
                </div>
            </StyleRightSide>
        </StyleSingleGame>
    )
}

export default SingleGame
