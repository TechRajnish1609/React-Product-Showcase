import './App.css';

// Product Card Component
function ProductCard({ id, name, price, description, image, isOnSale }) {

  const finalPrice = isOnSale ? (price * 0.8).toFixed(2) : price;

  return (
    <div className="product-card" id={id}>
      <h3>
        {name} {isOnSale && <span className="sale-badge">ON SALE!</span>}
      </h3>

      {/* CORRECT IMAGE PATH */}
      <img
        src={process.env.PUBLIC_URL + "/" + image}
        alt={name}
      />

      <p>{description}</p>

      <span className="price">${finalPrice}</span>

      <button onClick={() => alert(`Added ${name} to cart`)}>
        Add to Cart
      </button>
    </div>
  );
}

function App() {

  const products = [
    {
      id: "laptop-001",
      name: "Gaming Laptop Pro",
      price: 1299,
      description: "High performance laptop for gaming.",
      isOnSale: true,
      image: "images/laptop1.png",
    },
    {
      id: "phone-002",
      name: "Smartphone X",
      price: 899,
      description: "Flagship smartphone with great camera.",
      isOnSale: false,
      image: "images/phone1.png",
    },
    {
      id: "headphone-003",
      name: "Wireless Headphones",
      price: 199,
      description: "Noise cancelling over-ear headphones.",
      isOnSale: true,
      image: "images/headphone.png",
    }
  ];

  return (
    <div className="App">
      <h1>Product Showcase</h1>

      <div className="product-list">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
            isOnSale={item.isOnSale}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
