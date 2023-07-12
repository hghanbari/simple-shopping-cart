import React from "react";

export default function Basket(props) {
  const { cartItem, onAdd, onRemove } = props;
  const itemPrice = cartItem.reduce((a, c) => a + c.price * c.qty, 0);
  const taxtPrice = itemPrice * 0.21;
  const shippingPrice = itemPrice > 2000 ? 0 : 50;
  const totalPrice = itemPrice + shippingPrice + taxtPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Item</h2>
      <div>{cartItem.length === 0 && <div>Cart is empty</div>}</div>
      {cartItem.map((item) => (
        <div className="row" key={item.id}>
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button className="add" onClick={() => onAdd(item)}>
              +
            </button>
            <button className="remove" onClick={() => onRemove(item)}>
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} x ${item.price.toFixed()}
          </div>
        </div>
      ))}
      {cartItem.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Item Price</div>
            <div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Taxt Price</div>
            <div className="col-1 text-right">${taxtPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Total Price</div>
            <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
          </div>
          <hr />
          <div className="row">
            <button onClick={() => alert("Implement checkout")}>
              checkout
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
