import { ParentDiv, ChildDiv, StyledLi, StyledNav, StyleImg } from "../styles";

const Header = () => {
    return (
        <ParentDiv>
            <ChildDiv>
                <StyleImg src="images/logo.png"></StyleImg>
            </ChildDiv>
            <ChildDiv>
                <StyledNav>
                    <StyledLi><a>Browse</a></StyledLi>
                    <StyledLi><a>Search</a></StyledLi>
                    <StyledLi><a>Favorites</a></StyledLi>
                    <StyledLi><a>Community</a></StyledLi>
                </StyledNav>
            </ChildDiv>
            <ChildDiv>
                <StyleImg src="images/user1.png"></StyleImg>
            </ChildDiv>
        </ParentDiv >
    );
}

export default Header;