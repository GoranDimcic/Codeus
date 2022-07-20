import styled from "styled-components"

const Button = ({ text1, text2 }) => {
    return (
        <StyledButton>{text1}{text2}</StyledButton>
    )
}

const StyledButton = styled.button`
    height: 30px;
    width: 150px;
    border-radius: 20px;
    color: white;
    background-color: #661053;
    border: 1px solid black;
    &:hover {
        background-color: #C100BC;
        cursor: pointer;
    }
`

export default Button