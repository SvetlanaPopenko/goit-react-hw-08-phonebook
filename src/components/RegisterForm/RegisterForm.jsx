import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
      <label style={styles.label}>
        UserName
        <input type="text" name="name" />
      </label>
      <label style={styles.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label style={styles.label}>
        Password
        <input type="password" name="password" />
          </label>
          <button type='submit'>Register</button>
    </form>
  );
};
