import styled from "styled-components"

const Nav = () => {
    return (
        <StyleDiv>
            <div>PROFILE</div>
            <div>MY CART</div>
            <div>LOGOUT</div>
        </StyleDiv>
    );
}

const StyleDiv = styled.div`
    opacity: 0;
    position: absolute;
    transition: .1s ease-in;
    border: 1px solid red;
`

export default Nav;