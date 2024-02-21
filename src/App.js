import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard'; 
import Blog from './components/pages/Blog';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
