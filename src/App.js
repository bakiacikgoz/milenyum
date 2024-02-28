import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard/Dashboard'; 
import BlogAdd from './components/pages/Blog/BlogAdd';
import 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js';
import Blogs from './components/pages/Blog/Blogs';
import ServiceAdd from './components/pages/Service/ServiceAdd';
import Services from './components/pages/Service/Services';
import Categories from './components/pages/Category/Categories';
import CategoryAdd from './components/pages/Category/CategoryAdd';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bloglar" element={<Blogs />} />
        <Route path="/blog-ekle" element={<BlogAdd />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/hizmet-ekle" element={<ServiceAdd />} />
        <Route path="/Kategoriler" element={<Categories />} />
        <Route path="/Kategori-ekle" element={<CategoryAdd />} />
      </Routes>
    </Router>
  );
};

export default App;
