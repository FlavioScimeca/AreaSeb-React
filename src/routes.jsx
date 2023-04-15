import { createBrowserRouter } from 'react-router-dom';
import App from './view/App';
import WishList from './view/wishList';
import Detail from './view/detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/wishlist',
    element: <WishList />,
  },
  {
    path: '/detail/:id',
    element: <Detail />,
  },
]);

export default router;
