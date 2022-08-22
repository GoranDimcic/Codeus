import Button from "../components/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const GameHover = ({ game }) => {
  const navigate = useNavigate();

  const gameDetail = async () => {
    navigate(`/game/${game.id}`);
  };

  return (
    <StyleDiv>
      <img src={game?.mainPhoto}></img>
      <StyleHover>
        <Button text="DETAILS" onClick={() => gameDetail()} />
      </StyleHover>
    </StyleDiv>
  );
};

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  button {
    margin-bottom: 20px;
    transition: 0.3s ease-in;
    opacity: 0;
  }
  img {
    width: 100%;
    height: 100%;
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

export const StyleHover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
`;

export default GameHover;
