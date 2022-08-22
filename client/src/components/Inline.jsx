import styled from "styled-components";

const Inline = () => {
  return (
    <StyleP>
      <StyleSpan></StyleSpan>
    </StyleP>
  );
};

const StyleP = styled.p`
  display: flex;
  align-items: center;
`;

const StyleSpan = styled.span`
  flex-grow: 1;
  border-bottom: 1px solid white;
`;

export default Inline;
