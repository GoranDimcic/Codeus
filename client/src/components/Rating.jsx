import { useState } from "react"
import styled from "styled-components"
import Star from "./Star"

const Rating = ({ ratingNum }) => {
    const [rating, setRating] = useState(ratingNum)

    return (
        <StyleRating>
            <Star gameRating={rating} starNumber={1} />
            <Star gameRating={rating} starNumber={2} />
            <Star gameRating={rating} starNumber={3} />
            <Star gameRating={rating} starNumber={4} />
            <Star gameRating={rating} starNumber={5} />
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