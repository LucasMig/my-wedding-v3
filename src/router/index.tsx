import App from '@/App';
import ErrorPage from '@/components/pages/ErrorPage';
import { createBrowserRouter } from 'react-router-dom';

const homePage = {
  path: '/',
  element: <App />,
  errorElement: (
    <ErrorPage
      title="Ops!"
      message="A página que você está tentando acessar não existe."
    />
  ),
};

export const router = createBrowserRouter([homePage]);
