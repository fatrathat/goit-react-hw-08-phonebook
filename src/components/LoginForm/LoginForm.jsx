import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('test.user@gmail.com');
  const [name, setName] = useState('Test User');

  const changeEmailHandler = e => {
    setEmail(e.target.value);
  };
  const changeNameHandler = e => {
    setName(e.target.value);
  };

  const submithandler = e => {
    e.preventDefault();
    const credentials = { email, name };
    console.log(credentials);
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
