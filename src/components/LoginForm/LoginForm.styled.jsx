import styled from '@emotion/styled';
import { ErrorMessage, Field, Form } from 'formik';

export const LoginFormWrap = styled(Form)`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 24px;
  border: 3px solid white;
  padding: 30px;
  margin: 30px auto;
`;

export const LoginText = styled.label`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 24px;
  font-weight: 500;
  color: rgb(85, 26, 139);
`;

export const LoginInput = styled(Field)`
  height: 40px;
  border-radius: 15px;
  font-size: 30px;
  color: blueviolet;
  padding: 5px;
`;

export const Error = styled(ErrorMessage)`
  font-size: 24px;
  width: fit-content;
  color: red;
`;

export const LoginButton = styled.button`
  font-size: 24px;
  color: white;
  border-radius: 15px;
  background: linear-gradient(160deg, #ed8bf8, #6d0462);
  padding: 10px;
  cursor: pointer;
  transition: 250ms box-shadow ease-out, 250ms color ease-in;
  :hover {
    color: #f8f856;
    box-shadow: 1px 3px 2px blanchedalmond, -1px -3px 5px #ed8bf8;
  }
`;
