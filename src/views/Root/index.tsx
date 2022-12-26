import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';

export function Root() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Container>
      <Header />

      <Outlet />
    </Container>
  );
}
