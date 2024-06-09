
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateCatogoryPage from './CreateCatogoryPage';
import AddProductPage from './AddProductPage';
import ProductListingPage1 from './productListingPage1';

function App() {
  const [categories, setCategories] = useState([]);

  const handleCategoryAdd = (categoryName) => {
    const newCategory = { name: categoryName, products: [] };
    setCategories([...categories, newCategory]);
  };

  const handleProductAdd = (categoryName, productName) => {
    const updatedCategories = categories.map((category) => {
      if (category.name === categoryName) {
        return {
          ...category,
          products: [...category.products, productName]
        };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  return (
    <Router>
      <div className='Links' >
              <Link to="/create-category" className='Link1'>Create Category</Link>
              <Link to="/add-product" className='Link2' >Add Product</Link>
              <Link to="/product-listing" className='Link3'>Product Listing</Link>
        <Routes>
          <Route path="/create-category" element={<CreateCatogoryPage onCategoryAdd={handleCategoryAdd} />} />
          <Route path="/add-product" element={<AddProductPage categories={categories} onProductAdd={handleProductAdd} />} />
          <Route path="/product-listing" element={<ProductListingPage1 categories={categories} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

