import logo from "./logo.svg";
import "./App.css";
import data from "./data";

function App() {
  return (
    <div>
      <header>
        <a href="/">ozge_abayas</a>
      </header>
      <main>
        <h1>list products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div key={product.slug} className="product">
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name}></img>
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>{product.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
