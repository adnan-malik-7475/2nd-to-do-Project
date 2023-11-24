import React from 'react'
import { TaskIcon, LocationIcon, LogoutIcon } from "./icon";
import { Link } from 'react-router-dom';
import { Button } from './button';
export const Navbar = () => {
  return (
    <div className="flex">
    <div className="w-1/5 mt-12">
    <Link to="/Sidebar"   >
   <Button variant="TaskButton">
     <span className="mr-2 ">
       <TaskIcon /> 
     </span>
   Task
   </Button>
   </Link> 
   <Link  to="/Task" >
   <Button variant="LocationButton">
     <span className="mr-2 ml-12">
       <LocationIcon /> 
     </span>
  Location
   </Button>
   </Link>
   <Link  to="/Login" className='ml-4 mt-4'>
   <Button variant="logout" >
     <span className="mt-[6px] mr-[4px] ml-12 flex ">
       <LogoutIcon className="  "/> 
     </span>
    Log out
   </Button>
   </Link>
 </div></div>

  )
}
