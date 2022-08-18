import styled from "styled-components"

const Star = ({ gameRating, starNumber }) => {
    return (
        <>
            {gameRating >= starNumber ?
                <img src="../images/star-filled.png"></img>
                : <img src="../images/star-empty.png"></img>
            }

        </>
    )
}

export default Star