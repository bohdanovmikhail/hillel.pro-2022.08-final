import { createBrowserRouter } from 'react-router-dom';

import { Root } from '@views/Root';
import { ChatList, ChatRoom } from '@views/chat';
import { AuthSignIn, AuthSignUp, AuthForgot } from '@views/auth';

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <ChatList />,
      },
      {
        path: ':roomId',
        element: <ChatRoom />,
      },
    ],
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
