

import React, { useState } from 'react';
import './CreateCategoryPage.css'
function CreateCatogoryPage({ onCategoryAdd }) {
  const [categoryName, setCategoryName] = useState('');

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    onCategoryAdd(categoryName);
    setCategoryName('');
  };

  return (
    <div className='Createcat'>
      <h2>CREATE CATEGORY</h2>
      <form onSubmit={handleCategorySubmit} className='CreateForm'>
        <input className='CreateInput' type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} placeholder="Enter category name" />
        <button className='CreateButton' type="submit">Create Category</button>
      </form>
    </div>
  );
}

export default CreateCatogoryPage;
