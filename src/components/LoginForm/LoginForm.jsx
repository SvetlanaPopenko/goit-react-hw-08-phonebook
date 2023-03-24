import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { Button } from '@mui/material';
import { Formik } from 'formik';
import {
  LoginFormWrap,
  LoginText,
  LoginInput,
  Error,
} from './LoginForm.styled';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, props) => {
    dispatch(logIn(values));
    props.resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={schema}
    >
      <LoginFormWrap autoComplete="off">
        <LoginText>
          Email
          <LoginInput type="email" name="email" />
          <Error name="email" component="div" />
        </LoginText>
        <LoginText>
          Password
          <LoginInput type="password" name="password" />
          <Error name="password" component="div" />
        </LoginText>
        <Button type="submit" variant="contained">
          Log In
        </Button>
      </LoginFormWrap>
    </Formik>
  );
};
