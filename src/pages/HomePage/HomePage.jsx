import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>I congratulate you!</h1>
      <p>
        You are on the CONTACTS service. CONTACTS allows you to save and view
        your phone contacts at any time convenient for you. Please{' '}
        <Link to={'users/login'}>Sign In</Link> or{' '}
        <Link to={'/users/register'}>Sign Up</Link> to get started.
      </p>
    </div>
  );
};

export default HomePage;
