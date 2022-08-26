import { useSelector } from 'react-redux';
import { useCurrentUserQuery, useLogoutMutation } from 'store/userAPI';

const UserMenu = () => {
  const { token } = useSelector(state => state.user);
  const [logout] = useLogoutMutation();
  const { data } = useCurrentUserQuery();

  const onButtonClickHandler = e => {
    logout(token);
  };
  return (
    <div>
      {data && <p>Email: {data.email}</p>}
      <button type="button" onClick={onButtonClickHandler}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
