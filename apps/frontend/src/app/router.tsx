import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom';
import { _FULL_ROUTES } from './route';
import { PropsWithChildren } from 'react';

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

const Layout = (props: PropsWithChildren) => {
  return props.children;
};

export const router = createBrowserRouter([
  {
    path: '',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: _FULL_ROUTES.HOME,
        element: <h1>Home Page</h1>,
      },
    ],
  },
  ...authRoutes,
]);
