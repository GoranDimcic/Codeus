import styled from "styled-components"

export const StyleFirstPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        border-radius: 10px;
        background-color: #200220;
        margin-bottom: 20px;
        width: 30%;
        align-items: center;
        padding: 20px 0;
    }
    input {
        margin-bottom: 30px;
        width: 70%;
        background: none;
        border: none;
        border-bottom: 1px solid white;
        font-size: 20px;
        color: white;
        ::-webkit-input-placeholder {
        color: white;
        }
    }
`

export const StyleLogin = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyleRegistration = styled.div`
    display: flex;
    flex-direction: column;
`