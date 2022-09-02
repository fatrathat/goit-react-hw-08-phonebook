import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useCurrentUserQuery } from 'store/APIs/userAPI';

// import styled from 'styled-components';

const Contacts = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const Login = lazy(() => import('../../pages/LoginPage/LoginPage'));
const Register = lazy(() => import('../../pages/RegisterPage/RegisterPage'));
const NotFound = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

// const StyledLink = styled(NavLink)`
//   text-decoration: none;
//   margin-left: 10px;
//   font-size: 22px;
//   color: black;
//   &.active {
//     color: blue;
//   }
// `;

export const App = () => {
  // const { token } = useSelector(state => state.user);
  // useCurrentUserQuery(undefined, {
  //   skip: !token,
  // });
  // console.log(token);

  return (
    <div>
      {/* <header>
        <nav>
          <StyledLink to={'/contacts'}>Contacts</StyledLink>
          <StyledLink to={'/users/login'}>Sign In</StyledLink>
          <StyledLink to={'/users/register'}>Sign Up</StyledLink>
        </nav>
      </header> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
