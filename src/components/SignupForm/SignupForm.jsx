import { useState } from 'react';
import { useSignupMutation } from '../../store/userAPI';

const SignupForm = () => {
  const [signup] = useSignupMutation();

  const [email, setEmail] = useState('test.user@gmail.com');
  const [name, setName] = useState('Test User');
  const [password, setPassword] = useState('123456798');

  const changeEmailHandler = e => {
    setEmail(e.target.value);
  };
  const changeNameHandler = e => {
    setName(e.target.value);
  };
  const changePasswordHandler = e => {
    setPassword(e.target.value);
  };

  const submithandler = e => {
    e.preventDefault();
    const credentials = { name, email, password };
    signup(credentials);

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
          Name
          <input
            type="text"
            name="name"
            onChange={changeNameHandler}
            value={name}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={changePasswordHandler}
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
