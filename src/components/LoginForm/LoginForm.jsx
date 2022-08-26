import { useState } from 'react';
import { useLoginMutation } from '../../store/userAPI';

const LoginForm = () => {
  const [login] = useLoginMutation();

  const [email, setEmail] = useState('test.user.2@gmail.com');
  const [password, setPassword] = useState('123456798');

  const changeEmailHandler = e => {
    setEmail(e.target.value);
  };
  const changePasswordHandler = e => {
    setPassword(e.target.value);
  };

  const submithandler = e => {
    e.preventDefault();
    const credentials = { email, password };
    login(credentials);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={submithandler}>
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={changeEmailHandler}
            value={email}
            required
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            onChange={changePasswordHandler}
            value={password}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
