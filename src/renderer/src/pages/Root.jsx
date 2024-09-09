import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
  return (
    <div className="flex flex-1 bg-red">
      <ToastContainer
        position="top-left"
        autoClose={1500}
      />
      <Sidebar />
      <div className='flex flex-1 bg-background overflow-y-scroll h-screen'>
      <Outlet />
      </div>
    </div>
  )
}

export default Root
