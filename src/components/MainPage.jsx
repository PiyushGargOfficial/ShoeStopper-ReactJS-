import React, { Component } from "react"
import Banner from "./Banner"
import ProductCarouselOne from "./ProductCarouselOne"
import ProductCarouselOne2 from "./ProductCarouselOne2"
import Banner2 from "./Banner2"
import Banner3 from "./Banner3"

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <ProductCarouselOne />
        <Banner2 />
        <ProductCarouselOne2 />
        <Banner3 />
      </div>
    )
  }
}
