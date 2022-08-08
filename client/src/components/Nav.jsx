import styled from "styled-components"
import { Link } from "react-router-dom"
import useAuthStore from "../store/auth";

const Nav = () => {
    const deleteToken = useAuthStore(state => state.deleteToken)

    const Logout = async () => {
        try {
            deleteToken()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <StyleDiv>
            <Link to="/browse"><a>PROFILE</a></Link>
            <Link to="/cart"><a>MY CART</a></Link>
            <Link onClick={() => Logout()} to="/"><a>LOGOUT</a></Link>
        </StyleDiv>
    );
}

const StyleDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3B0931;
    align-items: center;
    opacity: 0;
    position: absolute;
    margin: 180px 150px 0 0;
    transition: .1s ease-in;
    border-radius: 5px;
    width: 200px;
`

export default Nav;