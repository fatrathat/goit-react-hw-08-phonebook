import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import styled from 'styled-components';

const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const Login = lazy(() => import('../../pages/Login/Login'));
const Register = lazy(() => import('../../pages/Register/Register'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));

const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin-left: 10px;
  font-size: 22px;
  color: black;
  &.active {
    color: blue;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to={'/contacts'}>Contacts</StyledLink>
        <StyledLink to={'/login'}>Login</StyledLink>
        <StyledLink to={'/register'}>Signup</StyledLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
