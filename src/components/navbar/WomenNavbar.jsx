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
              <td>Badminton</td>
              <td>Ballerinas</td>
              <td>Backpacks</td>
              <td>Basketball</td>
            </tr>
            <tr>
              <td>T-Shirts & Top</td>
              <td>Sweatshirts & Hoodies</td>
              <td>Bags</td>
              <td>Cricket</td>
            </tr>
            <tr>
              <td>Backpacks</td>
              <td>Bags</td>
              <td>Belts</td>
              <td>Football</td>
            </tr>
            <tr>
              <td>Motorsport</td>
              <td>Running</td>
              <td>Gloves</td>
              <td>Motorsport</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
