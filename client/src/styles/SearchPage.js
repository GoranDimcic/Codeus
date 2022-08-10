import styled from "styled-components"

export const StyleSearch = styled.div`
    display: flex;
`

export const StyleInput = styled.input`
    height: 30px;
    width: 100%;
    border-radius: 25px;
    margin-right: 20px;
    background-color: #3B0931;
    border: none;
    color: white;
    padding-left: 20px;
    font-size: 20px;
`

export const StyleFilter = styled.div`
    display: flex;
    background-color: #3B0931;
    margin: 20px 0 ;
    padding: 20px;
    div {
        margin-bottom: 5px;
    }
`

export const StyleGameTypeAndPrice = styled.div`
    background-color: #20021D;
    width: 33%;
    padding: 10px;
    div {
        border-radius: 5px;
        width: 80%;
        padding-left: 20px;
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
        border-radius: 5px;
        padding-left: 20px;
        width: 80%;
    }
`

export const StyleLoadMore = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`