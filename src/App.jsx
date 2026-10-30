import Navbar from "./navbar/Navbar";
import Cart from "./cart/Cart";
import { useState } from "react";
function App() {
  let [products, setProducts] = useState([
    { id: 0, name: "shipcy", price: 100, items: 1 },
    { id: 1, name: "pepsi", price: 150, items: 1 },
    { id: 2, name: "molto", price: 200, items: 1 },
    { id: 3, name: "mix", price: 250, items: 1 },
  ]);

  const headerProducts = [
    { id: 0, name: "shipcy", price: 100, items: 1 },
    { id: 1, name: "pepsi", price: 150, items: 1 },
    { id: 2, name: "molto", price: 200, items: 1 },
    { id: 3, name: "mix", price: 250, items: 1 },
  ];

  function addItem(productId) {
    const exists = products.find((p) => p.id === productId);

    if (exists) {
      setProducts(
        products.map((p) =>
          p.id === productId ? { ...p, items: p.items + 1 } : p,
        ),
      );
    } else {
      const newProduct = headerProducts.find((p) => p.id === productId);
      setProducts([...products, { ...newProduct, items: 1 }]);
    }
  }
  function increment(productId) {
    let updatedProducts = products.map((product) => {
      if (product.id === productId) {
        product.items += 1;
      }
      return product;
    });
    setProducts(updatedProducts);
  }
  function decrement(productId) {
    let updatedProducts = products.map((product) => {
      if (product.id === productId) {
        product.items -= 1;
      }
      return product;
    });
    setProducts(updatedProducts);
  }
  function deleteIteam(productId) {
    let updatedProducts = products.filter(
      (product) => product.id !== productId,
    );

    setProducts(updatedProducts);
  }

  function restItems() {
    let updatedProducts = products.map((product) => {
      product.items = 1;

      return product;
    });
    setProducts(updatedProducts);
  }
  function emptyCart() {
    setProducts([]);
  }

  let [theme, setTheme] = useState(false);
  function changeTheme() {
    setTheme(!theme);
  }
  return (
    <div>
      <Navbar
        changeTheme={changeTheme}
        theme={theme}
        setTheme={setTheme}
        products={products}
        headerProducts={headerProducts}
        addItem={addItem}
      />

      <Cart
        theme={theme}
        increment={increment}
        decrement={decrement}
        deleteIteam={deleteIteam}
        restItems={restItems}
        emptyCart={emptyCart}
        products={products}
      />
    </div>
  );
}

export default App;
