import { StyledButton, StyledLi, StyledNav } from "../styledComponent";
import { StyledGamePreview, StyledGameChildPreview, StyledImg, StyledStarImg } from "../styledComponent/gamePreview";

const GamePreview = () => {
    return (
        <StyledGamePreview>
            <StyledGameChildPreview>
                <StyledImg src="images/game.png"></StyledImg>
            </StyledGameChildPreview>
            <StyledGameChildPreview>
                <div>
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
                </div>
            </StyledGameChildPreview>
        </StyledGamePreview>
    )
}

export default GamePreview
