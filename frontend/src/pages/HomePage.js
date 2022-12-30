import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>list products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div key={product.slug} className="product">
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name}></img>
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
