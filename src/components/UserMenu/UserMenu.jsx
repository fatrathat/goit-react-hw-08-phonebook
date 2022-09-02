import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from 'store/APIs/userAPI';

const UserMenu = () => {
  const { token, email } = useSelector(state => state.user);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const onButtonClickHandler = e => {
    logout(token);
    navigate('/');
  };
  return (
    <div>
      <p>Email: {email}</p>
      <button type="button" onClick={onButtonClickHandler}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
