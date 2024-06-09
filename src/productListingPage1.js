
import React from 'react';
import './productListingPage.css';
function ProductListingPage1({ categories }) {
  return (
    <div className='ListMain'>
      <h2>PRODUCT LIST</h2>
      {categories.map((category, index) => (
        <div key={index} className='ListText'>
          <h3 className='ListHead'>{category.name}</h3>
          {category.products.length > 0 ? (
            <ul className='ListUL'>
              {category.products.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
          ) : (
            <p>No products available</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductListingPage1;
