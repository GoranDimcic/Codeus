import styled from "styled-components"
import { useState } from "react";

const Button = ({ text }) => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <StyledButton
            style={{
                backgroundColor: isHovering ? '#C100BC' : '',
                cursor: "pointer"
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {text}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    height: 30px;
    width: 150px;
    border-radius: 20px;
    color: white;
    background-color: #661053;
    border: 1px solid black;
`

export default Button