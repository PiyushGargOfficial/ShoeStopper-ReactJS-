import React, { Component } from "react"

export default class CarouselItem extends Component {
  render() {
    return (
      <div className="itemCard">
        <img src={this.props.details.image} alt="shoes" />
        <hr />
        <div className="itemCardName">{this.props.details.name}</div>
        <div className="itemCardPrice">Rs{this.props.details.price}</div>
        <div className="shopNowBtn">shop now</div>
      </div>
      /* I tried to add a class on mouseover and mouseout and
       it was working but only the first render and not on anyone else */
    )
  }
}
