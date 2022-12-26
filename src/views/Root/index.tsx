import { Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';

export function Root() {
  return (
    <Container disableGutters>
      <Header />

      <Container>
        <CssBaseline />

        <Outlet />
      </Container>
    </Container>
  );
}
