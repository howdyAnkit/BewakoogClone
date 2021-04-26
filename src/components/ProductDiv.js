import React, { useState } from "react";
import "./ProductDiv.css";

function ProductDiv({ product }) {
  const [background, setBackground] = useState(product.img1);

  return (
    <div className='product_div'>
      <div
        onMouseEnter={() => setBackground(product.img2)}
        onMouseLeave={() => setBackground(product.img1)}
        className='product_div__img'>
        <img src={product.image} alt={product.image} className='product_img' />
      </div>
      <div className='product_div__desc'>
        <div>
          <p className='product_div__descName'>{product.title}</p>
        </div>
        <div className='d-flex align-items-center product_div__descPriceMain'>
          <p className='product_div__descPrice'>&#8377;{product.price}</p>
          <p
            style={{
              textDecoration: "line-through",
              fontSize: "0.8rem",
              paddingLeft: "5px",
              color: "gray",
            }}>
            {product.og_price}{" "}
          </p>
        </div>

      </div>
    </div>
  );
}

export default ProductDiv;
