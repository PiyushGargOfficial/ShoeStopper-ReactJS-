import React, { Component } from "react"

export default class MenNavbar extends Component {
  render() {
    return (
      <div className="menNavbar navbarItems ">
        <table>
          <tbody>
            <tr className="th">
              <td>Shoes</td>
              <td>Clothing</td>
              <td>Accessories</td>
              <td>Sports</td>
            </tr>
            <tr>
              <td>Sneakers</td>
              <td>T-Shirts & Top</td>
              <td>Backpacks</td>
              <td>Basketball</td>
            </tr>
            <tr>
              <td>Running</td>
              <td>Polos</td>
              <td>Bags</td>
              <td>Cricket</td>
            </tr>
            <tr>
              <td>Training & Gym</td>
              <td>Jackets</td>
              <td>Belts</td>
              <td>Football</td>
            </tr>
            <tr>
              <td>Motorsport</td>
              <td>Pants</td>
              <td>Gloves</td>
              <td>Motorsport</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
