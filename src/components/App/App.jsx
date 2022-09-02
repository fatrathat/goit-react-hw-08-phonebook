import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Container from '@mui/material/Container';

const Contacts = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const Login = lazy(() => import('../../pages/LoginPage/LoginPage'));
const Register = lazy(() => import('../../pages/RegisterPage/RegisterPage'));
const NotFound = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

// con

export const App = () => {
  return (
    <Container maxWidth="md">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
