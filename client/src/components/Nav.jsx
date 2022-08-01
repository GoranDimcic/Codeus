import styled from "styled-components"
import { Link } from "react-router-dom"
import A from "./A";
import useAuthStore from "../store/auth";

const Nav = () => {
    const setToken = useAuthStore(state => state.setToken)

    const Logout = async () => {
        try {
            setToken("")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <StyleDiv>
            <Link to="/browse"><A text="PROFILE" /></Link>
            <Link to="/cart"><A text="MY_CART" /></Link>
            <Link onClick={() => Logout()} to="/"><A text="LOGOUT" /></Link>
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