import React, { useState } from "react";

import ProductItem from "./components/ProductItem";

import shirtImg from "./img/shirt.png";
import mugImg from "./img/mug.png";
import capImg from "./img/cap.png";

function App() {
  const [ProductList, updateCart] = useState([
    {
      code: "TSHIRT",
      id: "X7R2OPX",
      name: "Lana T-Shirt",
      photo: shirtImg,
      price: 20,
      count: 0
    },
    {
      code: "MUG",
      id: "X2G2OPZ",
      name: "Lana Coffee Mug",
      photo: mugImg,
      price: 7.5,
      count: 0
    },
    {
      code: "CAP",
      id: "X3W2OPY",
      name: "Lana Cap",
      photo: capImg,
      price: 5,
      count: 0
    }
  ]);

  const updateAmount = (id, count) => {
    updateCart(
      ProductList.map((item) => (item.id === id ? { ...item, count } : item))
    );
  };

  return (
    <main className="App">
      <section className="products">
        <h1 className="main">Shopping cart</h1>
        <ul className="products-list tableHead">
          <li className="products-list-title row">
            <div className="col-product">Product details</div>
            <div className="col-quantity">Quantity</div>
            <div className="col-price">Price</div>
            <div className="col-total">Total</div>
          </li>
        </ul>
        <ul className="products-list">
          {ProductList.map((item) => (
            <ProductItem
              key={item.code}
              item={item}
              updateCount={(newAmount) => updateAmount(item.id, newAmount)}
            />
          ))}
        </ul>
      </section>
      <aside className="summary">
        <h1 className="main">Order Summary</h1>
        <ul className="summary-items wrapper border">
          <li>
            <span className="summary-items-number">11 Items</span>
            <span className="summary-items-price">
              120<span className="currency">€</span>
            </span>
          </li>
        </ul>
        <div className="summary-discounts wrapper-half border">
          <h2>Discounts</h2>
          <ul>
            <li>
              <span>2x1 Mug offer</span>
              <span>-10€</span>
            </li>
            <li>
              <span>x3 Shirt offer</span>
              <span>-3€</span>
            </li>
            <li>
              <span>Promo code</span>
              <span>0€</span>
            </li>
          </ul>
        </div>
        <div className="summary-total wrapper">
          <ul>
            <li>
              <span className="summary-total-cost">Total cost</span>
              <span className="summary-total-price">107€</span>
            </li>
          </ul>
          <button type="submit">Checkout</button>
        </div>
      </aside>
    </main>
  );
}

export default App;
