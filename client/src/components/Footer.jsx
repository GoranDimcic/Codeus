import styled from "styled-components"
import Inline from "./Inline"
import A from "./A"
import Span from "./Span"

const Footer = () => {
    return (
        <StyleFooter>
            <StyleTop>
                <StyleTopItems>
                    <A text="Login" />
                    <A text="Registration" />
                    <A text="Favorites" />
                </StyleTopItems>
                <StyleTopItems>
                    <A text="Community" />
                    <A text="Browse games" />
                    <A text="Search" />
                </StyleTopItems>
                <StyleTopItems>
                    <A text="About" />
                    <A text="Contact us" />
                    <A text="FAQ" />
                </StyleTopItems>
                <StyleLogo src="images/logo.png"></StyleLogo>
            </StyleTop>
            <Inline />
            <StyleBottom>
                <div>
                    <A text="Facebook" />
                    <A text="Twitter" />
                    <A text="Twitch" />
                    <A text="Youtube" />
                </div>
                <Span text="+(581) 893-15-90" />
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
    a{
        &:hover {
        color: grey;
        cursor: pointer;
        }
    }
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
        &:hover {
        color: grey;
        cursor: pointer;
        }
    }
    a:nth-child(1) {
        margin-left: 0;
    }
`

export default Footer
