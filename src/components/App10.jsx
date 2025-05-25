import React, { useState } from "react";
import "./App10.css";

export default function App10() {
  const products = [
    { id: 1, name: "Product 1", price: 23 },
    { id: 2, name: "Product 2", price: 45 },
  ];

  const [cart, setCart] = useState([]);

  const handleAdd = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const handleIncrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <div className="app10">
      <h1>App10</h1>

      <h3>Products</h3>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} -{" "}
            <button onClick={() => handleAdd(product)}>Add</button>
          </li>
        ))}
      </ol>

      <hr />

      <h3>My Cart</h3>
      <ol>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} -{" "}
            <button onClick={() => handleDecrement(item.id)}>-</button>{" "}
            {item.qty}{" "}
            <button onClick={() => handleIncrement(item.id)}>+</button> - $
            {item.qty * item.price}
          </li>
        ))}
      </ol>
    </div>
  );
}
