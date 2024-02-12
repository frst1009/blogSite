import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer';
import Navbar from './Navbar';
function Layout() {
  return <div className='font-mono flex flex-col min-h-screen'> 
  <Navbar />
  <Outlet />
  <Footer />  </div>;
 

}

export default Layout;