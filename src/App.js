import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard/Dashboard'; 
import BlogAdd from './components/pages/Blog/BlogAdd';
import Blogs from './components/pages/Blog/Blogs';
import ServiceAdd from './components/pages/Service/ServiceAdd';
import Services from './components/pages/Service/Services';
import CategoryAdd from './components/pages/Category/CategoryAdd';
import Products from './components/pages/Products/Products';
import ProductAdd from './components/pages/Products/ProductAdd';
import Reference from './components/pages/Reference/Reference';
import Gallery from './components/pages/Gallery/Gallery';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bloglar" element={<Blogs />} />
        <Route path="/blog-ekle" element={<BlogAdd />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/hizmet-ekle" element={<ServiceAdd />} />
        <Route path="/Kategoriler" element={<CategoryAdd />} />
        <Route path="/urunler" element={<Products />} />
        <Route path="/urun-ekle" element={<ProductAdd />} />
        <Route path="/referans" element={<Reference />} />
        <Route path="/galeri" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
