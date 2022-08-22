import styled from "styled-components";

export const StyleFirstPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    border-radius: 10px;
    background-color: #200220;
    align-items: center;
    width: 40%;
    padding: 20px 0;
    margin-bottom: 50px;
  }
  input {
    outline: none;
    margin-bottom: 50px;
    width: 70%;
    background: none;
    border: none;
    border-bottom: 1px solid white;
    font-size: 20px;
    color: white;
    ::-webkit-input-placeholder {
      color: white;
    }
  }
`;

export const StyleLogin = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyleRegistration = styled.form`
  display: flex;
  flex-direction: column;
`;
