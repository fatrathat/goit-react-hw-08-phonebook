import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLoginMutation } from '../../store/APIs/userAPI';

const LoginForm = () => {
  const [login] = useLoginMutation();
  const [email, setEmail] = useState('test.user.2@gmail.com');
  const [password, setPassword] = useState('123456798');
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
    const credentials = { email, password };
    await login(credentials);
    navigate('/contacts');
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
            onChange={changeHandler}
            value={email}
            required
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            onChange={changeHandler}
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
