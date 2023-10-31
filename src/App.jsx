import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>New Product</h1>
      <ProductForm />
    </div>
  );
}

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with data: ${JSON.stringify(product)}`);
  };

  const handleClear = () => {
    setProduct({
      name: "",
      price: "",
      quantity: "",
      category: "",
    });
  };

  return (
    <form>
      <div class="feild">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleInputChange}
        />
      </div>

      <div class="feild ">
        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
      </div>

      <div class="feild">
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleInputChange}
        />
      </div>

      <div class="feild">
        <label>Quantity:</label>
        <input
          type="text"
          name="quantity"
          value={product.quantity}
          onChange={handleInputChange}
        />
      </div>

      <div class="feild">
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
      </div>
      <div class="buttons">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button type="clear" onClick={handleClear}>
          Clear
        </button>
      </div>
    </form>
  );
}

export default App;
