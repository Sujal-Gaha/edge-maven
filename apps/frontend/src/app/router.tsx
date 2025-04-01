import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom';
import { _FULL_ROUTES } from './route';
import { SidebarLayout } from '../components/SidebarLayout';
import { GraphPage } from '../pages/graph.page';

const authRoutes: RouteObject[] = [
  {
    path: _FULL_ROUTES.LOGIN,
    element: <h1>Login Page</h1>,
  },
  {
    path: _FULL_ROUTES.REGISTER,
    element: <h1>Register Page</h1>,
  },
];

export const router = createBrowserRouter([
  {
    path: '',
    element: (
      <SidebarLayout>
        <Outlet />
      </SidebarLayout>
    ),
    children: [
      {
        path: _FULL_ROUTES.HOME,
        element: <GraphPage />,
      },
    ],
  },
  ...authRoutes,
]);
