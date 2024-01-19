import type { RouteObject } from 'react-router';
import Product from './pages/product';
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Product />,
  },
];

export default routes;
