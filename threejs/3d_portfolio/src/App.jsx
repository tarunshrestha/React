import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const router = createBrowserRouter([
    { path: '/', element:<><Navbar /> <Home /> </>  },
    { path: '/about', element: 'About' },
    { path: '/projects', element: 'Projects' },
    { path: '/contact', element: 'Contact' },
  ]);

  return (
    <main className="bg-slate-300/20">
      
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
