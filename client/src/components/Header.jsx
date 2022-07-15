import styled from "styled-components"

const Header = () => {
    return (
        <StyleHeader>
            <StyleLogo src="images/logo.png"></StyleLogo>
            <div>
                <a>BROWSE</a>
                <a>SEARCH</a>
                <a>FAVORITES</a>
                <a>COMMUNITY</a>
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
    margin: 0 10px;
    a {
        margin-left: 20px;
        padding: 20px;
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