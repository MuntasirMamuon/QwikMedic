import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import SignIn from "../Pages/SignIn/SignIn";
import Home from "../Components/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";




export const router=createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout> ,
        children:[
           {
            path:"/",
            element:<Home></Home>
           }
           , 
           {
                path:'signIn',
                element:<SignIn></SignIn>
            }
           , 
           {
                path:'signUp',
                element:<SignUp></SignUp>
            }
        ]
      },
])