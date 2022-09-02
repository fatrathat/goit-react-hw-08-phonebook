import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLoginMutation } from '../../store/APIs/userAPI';

import styles from './style.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginForm = () => {
  const [login] = useLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const changeHandler = e => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const submithandler = async e => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    const credentials = { email, password };
    await login(credentials);
    navigate('/contacts');
    e.target.reset();
  };

  return (
    <div className={styles.SignInFormContainer}>
      <form className={styles.SignInForm} onSubmit={submithandler}>
        <TextField
          className={styles.SignInFormInput}
          id="outlined-basic"
          label="Email"
          noValidate
          autoComplete="off"
          size="small"
          type="email"
          name="email"
          onChange={changeHandler}
          value={email}
          required
        />
        <TextField
          className={styles.SignInFormInput}
          id="outlined-basic"
          label="Password"
          noValidate
          autoComplete="off"
          size="small"
          type="password"
          name="password"
          onChange={changeHandler}
          value={password}
          required
        />
        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
