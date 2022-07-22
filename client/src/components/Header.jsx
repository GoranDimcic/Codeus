import styled from "styled-components"
import A from "./A";
import Nav from "./Nav";

const Header = () => {
    return (
        <StyleHeader>
            <StyleLogo src="images/logo.png"></StyleLogo>
            <div>
                <A text="BROWSE" />
                <A text="SEARCH" />
                <A text="FAVORITES" />
                <A text="COMMUNITY" />
            </div>
            <StyleUser>
                <StyleImg src="images/user1.png"></StyleImg>
                <Nav />
            </StyleUser>
        </StyleHeader >
    );
}

const StyleHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 10px;
    a {
        padding: 10px;
        border-radius: 20px;
        &:hover {
            background-color: #200220;
        }
    }
`

const StyleLogo = styled.img`
    height: 50px;
`

const StyleUser = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 50%;
    background-color: #FF00C7;
    background-image: linear-gradient(to right, #FF00C7, #d6a5cb);
    height: 50px;
    width: 50px;
    &:hover {
        div {
            opacity: 1;
        }
    }
`

const StyleImg = styled.img`
    height: 30px;
    width: 30px;
`

export default Header;