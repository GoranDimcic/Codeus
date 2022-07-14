import styled from "styled-components"

const Button = ({ text }) => {
    return (
        <StyledButton>{text}</StyledButton>
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