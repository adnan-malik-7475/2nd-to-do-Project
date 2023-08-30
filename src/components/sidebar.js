import React from 'react'
import { TaskIcon, LocationIcon, LogoutIcon } from "./icon";
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <div className="flex">
    <div className="w-1/5 mt-12">
    <Link to="/Sidebar"   >
   <button className="w-64 h-14 flex items-center bg-black text-white rounded-e-full ">
     <span className="mr-2 ">
       <TaskIcon className=""/> 
     </span>
   Task
   </button>
   </Link> 
   <Link  to="/Task" className='ml-4 '>
   <button className="w-64 h-14 flex  text-black rounded-e-full pt-[18px]  active:bg-black ">
     <span className="mr-2 ml-12">
       <LocationIcon className=""/> 
     </span>
  Location
   </button>
   </Link>
   <Link  to="/Login" className='ml-4 mt-4'>
   <button className="w-64 h-14 flex  bg-black text-black rounded-e-full  mt-[320px] bg-white  inline-block">
     <span className="mt-[6px] mr-[4px] ml-12 flex ">
       <LogoutIcon className="  "/> 
     </span>
    Log out
   </button>
   </Link>
 </div></div>

  )
}
