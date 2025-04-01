import { SidebarProvider, ThemeProvider } from '@libs/components';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
