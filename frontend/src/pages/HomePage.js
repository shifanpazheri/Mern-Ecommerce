import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logger from "use-reducer-logger";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return { state };
  }
};

function HomePage() {
  // const [products, setProducts] = useState([]);
  const [{ loading, products, error }, dispatch] = useReducer(logger(reducer), {
    loading: true,
    products: [],
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (ex) {
        dispatch({ type: "FETCH_FAIL", payload: ex.message });
      }

      //setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>list products</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product) => (
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
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
