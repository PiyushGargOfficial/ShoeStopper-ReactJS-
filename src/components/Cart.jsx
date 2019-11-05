import React, { Component } from "react"
import "../css/cart.css"

export default class Cart extends Component {
  closeCart() {
    document.querySelector(".cart").style.display = "none"
  }

  render() {
    return (
      <div className="cart">
        <div className="cartMembers">
          <div className="cartNum">YOUR SHOPPING BAG (0)</div>
          <div className="closeIcon" onClick={() => this.closeCart()}>
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div className="cartStatus">Your Shopping cart is Empty</div>
      </div>
    )
  }
}
