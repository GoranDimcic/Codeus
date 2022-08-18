import { useState } from "react"
import styled from "styled-components"

const Rating = ({ game }) => {
    const [rating, setRating] = useState(Math.floor(game.ratingNum))

    return (
        <StyleRating>
            <img src="../images/star-empty.png"></img>
            <img src="../images/star-empty.png"></img>
            <img src="../images/star-empty.png"></img>
            <img src="../images/star-empty.png"></img>
            <img src="../images/star-empty.png"></img>
        </StyleRating>
    )
}

const StyleRating = styled.div`
    display: flex;
    padding: .6rem 0;
    img {
        width: 30px;
        margin-left: 20px;
        &:hover {
            background: url("../images/star-filled.png")
        }
    }
    img:nth-child(1) {
        margin-left: 0;
    }
`

export default Rating