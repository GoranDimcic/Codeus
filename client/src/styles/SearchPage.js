import styled from "styled-components"

export const StyleSearch = styled.div`
    display: flex;
    justify-content: space-between;
`

export const StyleInput = styled.input`
    height: 30px;
    width: 100%;
    border-radius: 25px;
    margin-right: 20px;
    background-color: #3B0931;
    border: none;
    color: white;
`

export const StyleFilter = styled.div`
    display: flex;
    background-color: #3B0931;
    margin-top: 20px;
    padding: 20px;
`

export const StyleGameTypeAndPrice = styled.div`
    background-color: #20021D;
    width: 33%;
    padding: 10px;
    div {
        margin-left: 20px;
    }
`

export const StyleMiddle = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    margin: 0 20px;
    `

export const StylePlatform = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #20021D;
    padding: 10px;
    div {
        margin-left: 20px;
    }
`

export const StyleLoadMore = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`