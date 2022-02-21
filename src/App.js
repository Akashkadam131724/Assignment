import logo from './logo.svg';
 
import { useState, useEffect } from 'react';
import { Link, Routes, Route } from "react-router-dom";
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';
function App() {


  return (
    <div className="App">
      {
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
        </Routes>
      }
    </div>
  )
}

export default App;
