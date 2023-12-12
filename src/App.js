
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
import PetExerciseGrid from './components/petExerciseGrid/PetExerciseGrid';
import PetTraining from './components/petTraining/PetTraining';
import PetGrooming from './components/petGrooming/PetGrooming';
import PetFeeding from './components/petFeeding/PetFeeding';
import PetBoarding from './components/petBoarding/PetBoarding';
function App() {

  const browserRouter=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/treatmentDetails",
          element:<TreatmentDetails />,
        },
        {
          path:"/petBoarding",
          element:<PetBoarding />,
        },
        {
          path:"/petFeeding",
          element:<PetFeeding />,
        },
        {
          path:"/petGrooming",
          element:<PetGrooming />,
        },
        {
          path:"/petExerciseGrid",
          element:<PetExerciseGrid />,
        },
        {
          path:"/petTraining",
          element:<PetTraining />,
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
