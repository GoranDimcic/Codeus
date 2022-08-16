import styled from "styled-components"
import { Link } from "react-router-dom"
import useAuthStore from "../store/auth";

const Header = () => {
    const deleteToken = useAuthStore(state => state.deleteToken)

    const Logout = async () => {
        try {
            deleteToken()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <StyleHeader>
            <StyleLogo src="../images/logo.png"></StyleLogo>
            <StyleNavigation>
                <Link to="/browse"><a>BROWSE</a></Link>
                <Link to="/search"><a>SEARCH</a></Link>
                <Link to="/favorite"><a>FAVORITES</a></Link>
                <Link to="/cart"><a>MY CART</a></Link>
            </StyleNavigation>
            <StyleUser>
                <StyleUserLogo src="../images/user1.png"></StyleUserLogo>
                <StyleDropdown>
                    <Link to="/profile"><a>PROFILE</a></Link>
                    <Link to="/cart"><a>MY CART</a></Link>
                    <Link onClick={() => Logout()} to="/"><a>LOGOUT</a></Link>
                </StyleDropdown>
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
    }
`

const StyleLogo = styled.img`
    height: 50px;
`

const StyleNavigation = styled.div`
    a {
        padding: 10px;
        border-radius: 20px;
        &:hover {
            background-color: #200220;
            cursor: pointer;
        }
    }
`

const StyleUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #FF00C7;
    background-image: linear-gradient(to right, #FF00C7, #d6a5cb);
    height: 50px;
    width: 50px;
    border-radius: 50%;
    &:hover div {
        display: flex;
    }
`

const StyleUserLogo = styled.img`
    height: 30px;
    width: 30px;
`

const StyleDropdown = styled.div`
    display: none;
    flex-direction: column;
    position: absolute;
    top: 50px;
    right: 0;
    background-color: #20021D;
    min-width: 150px;
    z-index: 1;
    border-radius: 5px;
    transition: .1s ease-in;
    a {
        display: block;
        padding: 0 10px;
        margin: 5px 0;
        text-align: right;
        &:hover {
            background-color: #3B0931;
            cursor: pointer;
        }
    }
`

export default Header;