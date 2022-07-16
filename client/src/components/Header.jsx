import styled from "styled-components"
import A from "./A";

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
        margin-left: 10px;
        padding: 10px;
        border-radius: 20px;
    }
`

const StyleLogo = styled.img`
    height: 50px;
`

const StyleUser = styled.div`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FF00C7;
    height: 50px;
    width: 50px;
`

const StyleImg = styled.img`
    height: 30px;
    width: 30px;
`

export default Header;