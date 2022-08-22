import styled from "styled-components";
import Star from "./Star";

const StarFilter = () => {
  return (
    <StyleImg>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </StyleImg>
  );
};

const StyleImg = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #20021d;
  padding: 10px;
  img {
    width: 30px;
  }
`;

export default StarFilter;
