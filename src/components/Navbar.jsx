import React, { Component } from "react"
import pumaLogo from "../images/pumaLogo.png"
import { Link, Route } from "react-router-dom"
import MenNav from "./navbar/MenNavbar"
import WomenNav from "./navbar/WomenNavbar"
import KidsNav from "./navbar/KidsNavbar"
import SelectNav from "./navbar/SelectNavbar"
import CollectionNav from "./navbar/CollectionNavbar"
import "../css/navbar.css"

export default class Navbar extends Component {
  state = {
    navItems: null
  }

  getCategory = e => {
    const navItem = e.target.getAttribute("data-category")

    if (navItem === "men") {
      this.setState({ navItems: MenNav })
    }
    if (navItem === "women") {
      this.setState({ navItems: WomenNav })
    }
    if (navItem === "kids") {
      this.setState({ navItems: KidsNav })
    }
    if (navItem === "select") {
      this.setState({ navItems: SelectNav })
    }
    if (navItem === "collections") {
      this.setState({ navItems: CollectionNav })
    }
  }

  showCart() {
    document.querySelector(".cart").style.display = "block"
  }

  clearCateg() {
    this.setState({ navItems: null })
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={pumaLogo} alt="Puma" />
            </Link>
          </div>
          <div className="navItems">
            <ul>
              <li onMouseOver={e => this.getCategory(e)} data-category="men">
                Men
              </li>
              <li onMouseOver={e => this.getCategory(e)} data-category="women">
                Women
              </li>
              <li onMouseOver={e => this.getCategory(e)} data-category="kids">
                Kids
              </li>
              <li onMouseOver={e => this.getCategory(e)} data-category="select">
                Select
              </li>
              <li
                onMouseOver={e => this.getCategory(e)}
                data-category="collections"
              >
                Collections
              </li>
            </ul>
          </div>
          <div className="rightNav">
            <div className="searchBox">
              <i className="fas fa-search fa-x"></i>
              <input type="text" placeholder="SEARCH PUMA.COM" />
            </div>
            <i className="fas fa-user-minus icons"></i>
            <i
              className="fas fa-shopping-cart icons"
              onClick={() => this.showCart()}
            ></i>
          </div>
        </div>
        {this.state.navItems ? (
          <div className="subMenu" onMouseLeave={() => this.clearCateg()}>
            <Route component={this.state.navItems} />
          </div>
        ) : null}
      </div>
    )
  }
}
