import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';

export function Root() {
  return (
    <Container>
      <Header />

      <Outlet />
    </Container>
  );
}
