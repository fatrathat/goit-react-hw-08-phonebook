import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from 'store/APIs/userAPI';

import Button from '@mui/material/Button';
import styles from './style.module.css';

const UserMenu = () => {
  const { token, email } = useSelector(state => state.user);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const onLogoutClickHandler = () => {
    logout(token);
    navigate('/');
  };
  return (
    <div className={styles.UserMenu}>
      <p>User: {email}</p>
      <Button variant="contained" type="button" onClick={onLogoutClickHandler}>
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
