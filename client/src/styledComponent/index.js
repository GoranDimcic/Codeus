import styled from "styled-components"

export const ParentDiv = styled.div`
    display: flex;
`

export const ChildDiv = styled.div`
    flex: 1;
    margin-right: 20px;
`

export const StyleImg = styled.img`
    height: 50px;
    margin: 0 0 0 10px;
`

export const StyledButton = styled.button`
    height: 30px;
    width: 150px;
    border-radius: 20px;
    color: white;
    background-color: blueviolet;
    border: 1px solid black;
    float: right;
`

export const StyledNav = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

export const StyledLi = styled.li`
    display: inline-block;
    font-size: 20px;
    padding: 10px;
    color: white;
`

export const StyledP = styled.p`
    display: flex;
    align-items: center;
`

export const StyledSpan = styled.span`
    flex-grow: 1;
    border-bottom: 1px solid white;
`