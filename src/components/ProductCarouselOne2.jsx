import React, { Component } from "react"
import Shoe1 from "../images/shoe1.jpg"
import Shoe2 from "../images/shoe2.jpg"
import Shoe4 from "../images/shoe4.jpg"
import Shoe5 from "../images/shoe5.jpg"
import CarouselItem from "./CarouselItem"
import Next from "../images/next.svg"
import Prev from "../images/back.svg"

export default class ProductCarouselOne extends Component {
  state = {
    carouselItems: [
      {
        name: "LQDCELL Tension one8 Men's Training Shoes",
        price: 7999,
        image: Shoe1
      },
      {
        name: "LQDCELL Tension one8 Men's Training Shoes",
        price: 7999,
        image: Shoe2
      },
      {
        name: "LQDCELL Tension one8 Men's Training Shoes",
        price: 7999,
        image: Shoe5
      },
      {
        name: "LQDCELL Tension one8 Men's Training Shoes",
        price: 7999,
        image: Shoe4
      },
      {
        name: "LQDCELL Tension one8 Men's Training Shoes",
        price: 7999,
        image: Shoe5
      },
      {
        name: "LQDCELL Tension one8 Men's Training Shoes",
        price: 7999,
        image: Shoe1
      },
      {
        name: "LQDCELL Tension one8 Men's Training Shoes",
        price: 7999,
        image: Shoe2
      }
    ],
    check: 0
  }

  render() {
    var items = document.querySelector(".Items")
    var itemWidth = 250
    var index = 0

    return (
      <div className="CarouselOne">
        <div className="carouselHeader">SHOP one8 COLLECTION</div>
        <div className="carouselDiv">
          <div className="leftArrow">
            <button
              onClick={() => {
                if (index === 0) {
                  return false
                }
                index--
                items.style.transform = `translateX(-${itemWidth * index}px)`
              }}
            >
              <img src={Prev} alt="PrevBtn" />
            </button>
          </div>
          <div className="wrapper">
            <div className="Items">
              {this.state.carouselItems.map((item, i) => (
                <CarouselItem details={item} key={i} />
              ))}
            </div>
          </div>
          <div className="rightArrow">
            <button
              onClick={() => {
                if (index === 3) {
                  return false
                }
                index++
                items.style.transform = `translateX(-${itemWidth * index}px)`
              }}
            >
              <img src={Next} alt="NextBtn" />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
