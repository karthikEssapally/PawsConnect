
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import  Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Aboutus from './components/aboutus/Aboutus'
import UserProfile from './components/user-profile/UserProfile';
import Products from './components/products/Products';
import Cart from './components/cart/Cart'
import Topbar from './components/topbar/Topbar';
import TreatmentDetails from './components/treatmentDetails/TreatmentDetails';
import Order from './components/order/Order';

function App() {

  const browserRouter=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"/",
          element:<Home />,
        
        },
        {
          path:"/register",
          element:<Register />
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/aboutus",
          element:<Aboutus />
        },
        {
          path:"/products",
          element:<Products />,
          children:[
            {
              path:"cart",
              element:<Cart />
            }
            
          ]
        },
        {
          path:"/user-profile",
          element:<UserProfile />,
        },
        {
          path:"/order",
          element:<Order />,
        },
        
        {
          path:"/treatmentDetails",
          element:<TreatmentDetails />,
        }

      ]
    }
  ])

  return (
    <div >
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
