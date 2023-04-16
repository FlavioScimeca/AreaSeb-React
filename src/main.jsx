import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import router from './routes';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster />
  </Provider>
);
