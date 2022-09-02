import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../../store/APIs/userAPI';

import styles from './style.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignupForm = () => {
  const [signup] = useSignupMutation();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const changeHandler = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const submithandler = e => {
    e.preventDefault();
    const credentials = { name, email, password };
    signup(credentials);
    navigate('/users/login');
    e.target.reset();
  };

  return (
    <div className={styles.SignUpForm}>
      <form onSubmit={submithandler}>
        <TextField
          className={styles.SignUpInput}
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
          className={styles.SignUpInput}
          id="outlined-basic"
          label="Name"
          noValidate
          autoComplete="off"
          size="small"
          type="text"
          name="name"
          onChange={changeHandler}
          value={name}
          required
        />
        <TextField
          className={styles.SignUpInput}
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
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
