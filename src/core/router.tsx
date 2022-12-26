import { createBrowserRouter } from 'react-router-dom';

import { AuthSignIn, AuthSignUp, AuthForgot } from '@views/auth';

export default createBrowserRouter([
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
