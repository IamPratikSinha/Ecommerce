import data from './../data';
import { Link } from 'react-router-dom';
function HomeScreen() {
  return (
    <div className="products">
      {data.products.map((product) => (
        <div className="product" key={product.id}>
          <Link to={`/product/${product.slug}`}>
            <img src={product.image} alt={product.name} />
          </Link>

          <div className="product-info">
            <Link to={`/product/${product.slug}`}>
              <p>{product.name}</p>
            </Link>

            <p>
              <strong>₹{product.price}</strong>
            </p>
            <button>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeScreen;
