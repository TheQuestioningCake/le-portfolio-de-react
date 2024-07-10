import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills'
import Resume from './pages/Resume'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
      {
        path: '/Skills',
        element: <Skills />,
      },
      {
        path: '/Resume',
        element: <Resume/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
