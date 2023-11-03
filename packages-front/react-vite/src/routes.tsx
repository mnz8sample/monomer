import type { RouteObject } from 'react-router';
import A from './pages/a';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <A />,
    },
];

export default routes;
