import styled from "styled-components"

const StarImg = () => {
    return (
        <StyleImg>
            <img src="images/star-empty.png"></img>
            <img src="images/star-empty.png"></img>
            <img src="images/star-empty.png"></img>
            <img src="images/star-empty.png"></img>
            <img src="images/star-empty.png"></img>
        </StyleImg>
    )
}

const StyleImg = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #20021D;
    margin-top: 20px;
    padding: 10px;
    img {
        width: 30px;
        margin-left: 20px;
    }
    img:nth-child(1) {
        margin-left: 0;
    }
`

export default StarImg