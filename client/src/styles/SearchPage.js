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
`

export const StyleGameType = styled.div`
    background-color: #20021D;
    width: 33%;
    padding: 10px;
    max-height: 200px;
    overflow: scroll;
    overflow-x: hidden;
    div {
        border-radius: 5px;
        width: 80%;
        padding-left: 20px;
        margin-bottom: 5px;
    }
`

export const StyleMiddle = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    margin: 0 20px;
    justify-content: space-between;
`

export const StylePlatform = styled.div`
    background-color: #20021D;
    padding: 10px;
    div {
        border-radius: 5px;
        padding-left: 20px;
        width: 80%;
        margin-bottom: 5px;
    }
`

export const StylePrice = styled.div`
    background-color: #20021D;
    width: 33%;
    padding: 10px;
    max-height: 200px;
    div {
        border-radius: 5px;
        width: 80%;
        padding-left: 20px;
        margin-bottom: 5px;
    }
`

export const StyleLoadMore = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`