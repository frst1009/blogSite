import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer';
import Navbar from './Navbar';
const Layout = () => {
  return <div className='font-mono'> 
  <Navbar />
  <Outlet />
  <Footer />  </div>;
 

}

export default Layout;