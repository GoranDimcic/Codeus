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
    padding: 10px;
    img {
        width: 30px;
    }
`

export default StarImg