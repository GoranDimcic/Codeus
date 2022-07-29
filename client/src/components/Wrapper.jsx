import styled from "styled-components"

const Wrapper = ({ children }) => {
    return (
        <StyledWraper>
            {children}
        </StyledWraper>
    )
}

const StyledWraper = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
`

export default Wrapper