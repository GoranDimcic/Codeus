import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import useAuthStore from "../store/auth";

const Header = () => {
  const deleteToken = useAuthStore((state) => state.deleteToken);

  const Logout = async () => {
    try {
      deleteToken();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyleHeader>
      <StyleLogo src="../images/logo.png"></StyleLogo>
      <StyleNavigation>
        <NavLink to="/browse" activeclassname="active">
          BROWSE
        </NavLink>
        <NavLink to="/search" activeclassname="active">
          SEARCH
        </NavLink>
        <NavLink to="/favorite" activeclassname="active">
          FAVORITES
        </NavLink>
        <NavLink to="/cart" activeclassname="active">
          MY CART
        </NavLink>
      </StyleNavigation>
      <StyleUser>
        <StyleUserLogo src="../images/user1.png"></StyleUserLogo>
        <StyleDropdown>
          <Link to="/profile">PROFILE</Link>
          <Link to="/cart">MY CART</Link>
          <Link onClick={() => Logout()} to="/">
            LOGOUT
          </Link>
        </StyleDropdown>
      </StyleUser>
    </StyleHeader>
  );
};

const StyleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 10px;
  a {
    text-decoration: none;
    color: white;
  }
  .active {
    background-color: #200220;
  }
`;

const StyleLogo = styled.img`
  height: 50px;
`;

const StyleNavigation = styled.div`
  a {
    padding: 10px 20px;
    border-radius: 20px;
    &:hover {
      background-color: #200220;
      cursor: pointer;
    }
  }
`;

const StyleUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #ff00c7;
  background-image: linear-gradient(to right, #ff00c7, #d6a5cb);
  height: 50px;
  width: 50px;
  border-radius: 50%;
  &:hover div {
    display: flex;
  }
`;

const StyleUserLogo = styled.img`
  height: 30px;
  width: 30px;
`;

const StyleDropdown = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #20021d;
  min-width: 150px;
  z-index: 1;
  border-radius: 5px;
  transition: 0.1s ease-in;
  a {
    display: block;
    padding: 5px 20px;
    margin: 5px 0;
    text-align: right;
    &:hover {
      background-color: #3b0931;
      cursor: pointer;
    }
  }
`;

export default Header;
