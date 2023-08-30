
import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./pages/login";
import './App.css';
import Sidebar from "./pages/web-task";
import { Task } from "./pages/login/location-page";
import { TaskModal } from "./components/modal";



const router = createBrowserRouter([
  {
    
    path: "/login",
    element: <Login/>
  },
  {
    
    path: "/sidebar",
    element: <Sidebar />
  },
  {
    
    path: "/task",
    element: <Task />

  },
  {
    
    path:"/modal",
     element: <TaskModal/>

  },
 
]);

function App() {
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App;
