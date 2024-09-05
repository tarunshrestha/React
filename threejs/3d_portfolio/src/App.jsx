import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home, About, Projects, Contact} from './pages'


function App() {
  const router = createBrowserRouter([
    { path: '/', element:<><Navbar /> <Home /> </>  },
    { path: '/about', element: <><Navbar /> <About /> </>  },
    { path: '/projects', element: <><Navbar /> <Projects /> </>  },
    { path: '/contact', element: <><Navbar /> <Contact /> </>   },
  ]);

  return (
    <main className="bg-slate-300/20">
      
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
