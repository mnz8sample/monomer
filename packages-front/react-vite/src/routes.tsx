import type { RouteObject } from 'react-router';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import SignUp from './pages/SignUp';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/sign-in',
        element: <SignIn />,
    },
    {
        path: '/sign-out',
        element: <SignOut />,
    },
    {
        path: '/sign-up',
        element: <SignUp />,
    },
];

export default routes;
