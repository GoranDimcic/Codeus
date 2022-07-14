import SingleGame from "../components/SingleGame"
import { ChildDiv, StyledButton } from "../styledComponent"
import { StyleFilter, StyleGameTypeAndPrice, StyleInput, StyleLi, StylePlatform, StyleSearch, StyleUl, StyleMiddle } from "../styledComponent/SearchPage"
import { StyledStarImg } from "../styledComponent/SingleGame"


const Search = () => {
    return (
        <StyleSearch>
            <ChildDiv>
                <StyleInput></StyleInput>
                <StyledButton>Search</StyledButton>
            </ChildDiv>
            <StyleFilter>
                <StyleGameTypeAndPrice>
                    <ul>
                        <li>ROLE-PLAYING</li>
                        <li>REAL TIME STRATEGY</li>
                        <li>RACING</li>
                        <li>SIMULATION</li>
                        <li>ACTION</li>
                        <li>ADVENTURE</li>
                    </ul>
                </StyleGameTypeAndPrice>
                <StylePlatform>
                    <StyleMiddle>
                        <ul>
                            <li>MAC OS</li>
                            <li>WINDOWS</li>
                            <li>LINXU</li>
                        </ul>
                    </StyleMiddle>
                    <StyleMiddle>
                        <StyleUl>
                            <StyleLi><StyledStarImg src="images/star-empty.png"></StyledStarImg></StyleLi>
                            <StyleLi><StyledStarImg src="images/star-empty.png"></StyledStarImg></StyleLi>
                            <StyleLi><StyledStarImg src="images/star-empty.png"></StyledStarImg></StyleLi>
                            <StyleLi><StyledStarImg src="images/star-empty.png"></StyledStarImg></StyleLi>
                            <StyleLi><StyledStarImg src="images/star-empty.png"></StyledStarImg></StyleLi>
                        </StyleUl>
                    </StyleMiddle>
                </StylePlatform>
                <StyleGameTypeAndPrice>
                    <ul>
                        <li>FREE</li>
                        <li>UNDER $5</li>
                        <li>FROM $5 - $10</li>
                        <li>FROM $10 - $30</li>
                        <li>OVER $30</li>
                    </ul>
                </StyleGameTypeAndPrice>
                <div className="cena">

                </div>
            </StyleFilter>
            <div className="games">
                <SingleGame />
                <SingleGame />
                <SingleGame />
            </div>
            <button>Load more</button>
        </StyleSearch>
    )
}

export default Search
