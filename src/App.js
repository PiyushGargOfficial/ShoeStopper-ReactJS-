import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import DiscountBanner from "./components/DiscountBanner"
import MainPage from "./components/MainPage"
import { connect } from "react-redux"
import { cartItem } from "./actions/cartActions"
import "./css/mainPage.css"
import ProductPage from "./components/ProductPage"

class App extends Component {
  componentDidMount() {
    this.props.cartItem()
  }

  render() {
    return (
      <>
        <DiscountBanner />
        <Navbar />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/:slug" exact component={ProductPage} />
        </Switch>
        <Cart />
        <Footer />
      </>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cartItems
})

export default connect(
  mapStateToProps,
  {
    cartItem
  }
)(App)
