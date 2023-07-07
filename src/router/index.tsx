import App from '@/App';
import { createBrowserRouter } from 'react-router-dom';

const homePage = {
  path: '/',
  element: <App />,
}

export const router = createBrowserRouter(
  [
    homePage
  ]
)