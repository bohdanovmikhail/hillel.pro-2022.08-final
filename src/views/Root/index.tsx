import { Container } from '@mui/material';

import { Header } from './components/Header';
import { AuthSignIn } from '../auth';

export function Root() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Container>
      <Header />

      <AuthSignIn />
    </Container>
  );
}
