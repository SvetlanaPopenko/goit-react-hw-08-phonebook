import styled from '@emotion/styled';

import { ErrorMessage, Field, Form } from 'formik';

export const RegisterFormWrap = styled(Form)`
width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const RegisterText= styled.label`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RegisterInput = styled(Field)`
  height: 40px;
  border-radius: 15px;
  font-size: 30px;
  color: blueviolet;
`;

export const Error = styled(ErrorMessage)`
  font-size: 24px;
  width: fit-content;
  color: red;
`;