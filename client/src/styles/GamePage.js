import styled from "styled-components";

export const StyleGame = styled.div`
  display: flex;
`;

export const StyleLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const StyleProfilePicture = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

export const StyleOtherGamePictures = styled.div`
  display: flex;
  overflow-x: scroll;
`;

export const StyleSmallPicutre = styled.img`
  width: 150px;
`;

export const StyleRightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  width: 50%;
  h1 {
    margin-top: 0;
  }
`;

export const StyleComments = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #200220;
  margin-bottom: 20px;
  padding: 10px 20px;
  padding-bottom: 0;
`;
