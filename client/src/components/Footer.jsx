import styled from "styled-components"
import Inline from "./Inline"

const Footer = () => {
    return (
        <StyleFooter>
            <StyleTop>
                <StyleTopItems>
                    <a>Login</a>
                    <a>Registration</a>
                    <a>Favorites</a>
                </StyleTopItems>
                <StyleTopItems>
                    <a>Community</a>
                    <a>Browse games</a>
                    <a>Search</a>
                </StyleTopItems>
                <StyleTopItems>
                    <a>About</a>
                    <a>Contact us</a>
                    <a>FAQ</a>
                </StyleTopItems>
                <StyleLogo src="images/logo.png"></StyleLogo>
            </StyleTop>
            <Inline />
            <StyleBottom>
                <div>
                    <a>Facebook</a>
                    <a>Twitter</a>
                    <a>Twitch</a>
                    <a>Youtube</a>
                </div>
                <span>
                    +(581) 893-15-90
                </span>
            </StyleBottom>
        </StyleFooter>
    )
}

const StyleFooter = styled.div`
    background-color: #200220;
    padding: 10px;
`

const StyleTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyleTopItems = styled.div`
    display: flex;
    flex-direction: column;
`

const StyleLogo = styled.img`
    height: 50px;
`

const StyleBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        margin-left: 10px;
    }
    a:nth-child(1) {
        margin-left: 0;
    }
`

export default Footer
