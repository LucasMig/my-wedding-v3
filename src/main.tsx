import ReactDOM from 'react-dom/client';
import { router } from '@/router/index';
import './index.scss';

import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />,
);
