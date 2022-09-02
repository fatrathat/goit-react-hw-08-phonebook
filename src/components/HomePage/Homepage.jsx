import { Link } from 'react-router-dom';

import styles from './style.module.css';

const HomePageComponent = () => (
  <div className={styles.HomeContainer}>
    <div>
      <h1 className={styles.HomeHeader}>I congratulate you!</h1>
      <p className={styles.HomeText}>
        You are on the CONTACTS service. CONTACTS allows you to save and view
        your phone contacts at any time convenient for you. Please{' '}
        <Link to={'users/login'}>Sign In</Link> or{' '}
        <Link to={'/users/register'}>Sign Up</Link> to get started.
      </p>
    </div>
  </div>
);

export default HomePageComponent;
