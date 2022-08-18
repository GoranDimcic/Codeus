import { useState } from "react"
import styled from "styled-components"
import Star from "./Star"

const Array = [<Star />, <Star />, <Star />, <Star />, <Star />]

const Rating = ({ game }) => {
    const [rating, setRating] = useState(Math.floor(game.ratingNum))

    return (
        <StyleRating>
            {Array}
            {/* new Array[5].map(() => {
                <Star />
            }) */}
        </StyleRating>
    )
}

const StyleRating = styled.div`
    display: flex;
    padding: .6rem 0;
    img {
        width: 30px;
        margin-left: 20px;
    }
    img:nth-child(1) {
        margin-left: 0;
    }
`

export default Rating