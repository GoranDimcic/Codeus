import styled from "styled-components"
import Nav from "./Nav";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <StyleHeader>
            <StyleLogo src="../images/logo.png"></StyleLogo>
            <div>
                <Link to="/browse"><a>BROWSE</a></Link>
                <Link to="/search"><a>SEARCH</a></Link>
                <Link to="/favorite"><a>FAVORITES</a></Link>
                <Link to="/browse"><a>COMMUNITY</a></Link>
            </div>
            <StyleUser>
                <StyleImg src="../images/user1.png"></StyleImg>
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
        text-decoration: none;
        color: white;
        padding: 10px;
        border-radius: 20px;
        &:hover {
            background-color: #200220;
            cursor: pointer;
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