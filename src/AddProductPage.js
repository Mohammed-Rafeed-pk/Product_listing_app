
import React, { useState } from 'react';
import './AddProductPage.css'
function AddProductPage({ categories, onProductAdd }) {
  const [productName, setProductName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleProductSubmit = (e) => {
    e.preventDefault();
    onProductAdd(selectedCategory, productName);
    setProductName('');
    setSelectedCategory('');
  };

  return (
    <div className='AddProd'>
      <h2>ADD PRODUCT</h2>
      <form className='AddForm' onSubmit={handleProductSubmit}>
        <input className='AddInput' type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Enter product name" />
        <select className='AddSelect' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Select category</option>
          {categories.map((category, index) => (
            <option key={index} value={category.name}>{category.name}</option>
          ))}
        </select>
        <button className='AddButton' type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductPage;
