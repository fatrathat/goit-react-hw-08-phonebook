import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../../store/APIs/userAPI';

const SignupForm = () => {
  const [signup] = useSignupMutation();

  const [email, setEmail] = useState('test.user@gmail.com');
  const [name, setName] = useState('Test User');
  const [password, setPassword] = useState('123456798');

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
          Name
          <input
            type="text"
            name="name"
            onChange={changeHandler}
            value={name}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={changeHandler}
            value={password}
            required
          />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
