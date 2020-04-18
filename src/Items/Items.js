import React from "react";
import './Items.css';

const Items = (props) => {

  const {cartItems} = props;

  return (
    <div className="items-container">
      <table>
        <tr>
          <td>Item</td>
          <td>Quantity</td>
          <td>Unit Price</td>
          <td>Amount</td>
        </tr>
        {cartItems.length > 0 && cartItems.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>Rs.{item.price}</td>
              <td>Rs.{(item.quantity * item.price).toFixed(2)}</td>
            </tr>
          );
        })}
      </table>
      <div className="total-amount-container">
        <span>Total: Rs.{props.totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Items;
