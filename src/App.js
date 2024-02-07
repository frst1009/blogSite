import React from "react";
import {  Route,  Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Blogs from "./pages/Blogs";

function App() {
  return (
 <>
 <Routes>
 <Route path="/" element={<Layout />}>
 <Route index element={<Home/>} />
 <Route path="blogs" element={<Blogs/>} />
 </Route>
 </Routes>
 </>
  );
}

export default App;
