import styled from "styled-components";

export const StyleSingleGame = styled.div`
  background-color: #3b0931;
  display: flex;
  border-radius: 5px;
  margin: 20px 0;
  padding: 20px;
  a {
    text-decoration: none;
    color: white;
  }
`;

export const StyleLeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 20%;
  button {
    position: absolute;
    opacity: 0;
    transition: 0.3s ease-in;
  }
  &:hover {
    button {
      opacity: 1;
    }
    img {
      filter: blur(4px);
    }
  }
`;

export const StyleGameImg = styled.img`
  width: 100%;
  height: 157px;
`;

export const StyleRightSide = styled.div`
  width: 100%;
  height: auto;
  margin-left: 20px;
`;

export const StyleGameDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin: 0px;
  }
`;
