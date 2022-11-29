import React, { useState } from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Blogposts from './pages/blog/Blog';
import Blogpost from './pages/Blogposts/Blogposts';


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <div>
        <Routes>
        <Route path="/"element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/blogposts" element={<Blogposts/>}/>
            <Route path="/blogposts/:blogId" element={<Blogpost/>}/>
        </Routes>
      Maak hier jouw prachtige blog-applicatie!
    </div>
  );
}

export default App;
