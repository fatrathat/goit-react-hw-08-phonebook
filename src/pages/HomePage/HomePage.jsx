import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      Hello! Please <Link to={'users/login'}>Sign In</Link> or{' '}
      <Link to={'/users/register'}>Sign Up</Link>
    </div>
  );
};

export default HomePage;
