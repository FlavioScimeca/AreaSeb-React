import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import WishList from './wishList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/wishlist',
    element: <WishList />,
  },
]);

export default router;
