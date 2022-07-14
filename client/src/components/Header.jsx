import styled from "styled-components"
import { StyleImg } from "../styles";

const Header = () => {
    return (
        <StyleHeader>
            <div>
                <StyleImg src="images/logo.png"></StyleImg>
            </div>
            <div>
                <a>BROWSE</a>
                <a>SEARCH</a>
                <a>FAVORITES</a>
                <a>COMMUNITY</a>
            </div>
            <div>
                <StyleImg src="images/user1.png"></StyleImg>
            </div>
        </StyleHeader >
    );
}

const StyleHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
    a {
        margin-left: 20px;
        padding: 20px;
    }
`

export default Header;