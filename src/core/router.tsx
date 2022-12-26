import { createBrowserRouter } from 'react-router-dom';

import { AuthSignIn, AuthSignUp, AuthForgot } from '@views/auth';
import { Root } from '@views/Root';

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/signin',
    element: <AuthSignIn />,
  },
  {
    path: '/signup',
    element: <AuthSignUp />,
  },
  {
    path: '/forgot',
    element: <AuthForgot />,
  },
]);
