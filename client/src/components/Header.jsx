import { ParentDiv, ChildDiv, StyledLi, StyledNav } from "../styledComponent";

const Header = () => {
    return (
        <ParentDiv>
            <ChildDiv>
                Logo
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
                User logo
            </ChildDiv>
        </ParentDiv>
    );
}

export default Header;