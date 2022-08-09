import styled from "styled-components"

const Wrapper = ({ children }) => {
    return (
        <StyledWraper>
            {children}
        </StyledWraper>
    )
}

const StyledWraper = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    min-height: calc(100vh - 230px);
`

export default Wrapper