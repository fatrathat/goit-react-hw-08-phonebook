import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoginSuccess } from '../../store/actions/users-actions';
import { useAddUserMutation } from '../../store/userAPI';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [addUser] = useAddUserMutation();

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
    const credentials = { name, email };
    dispatch(setLoginSuccess(credentials));
    addUser(credentials);
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
