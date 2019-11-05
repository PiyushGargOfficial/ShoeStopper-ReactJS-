import React, { Component } from "react"
import "../css/Footer.css"
import Logo from "../images/pumaLogo.png"

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="upperFooter">
          <div className="footerLeftPart">
            <div className="footerLogo">
              <img src={Logo} alt="PumaLogo" />
            </div>
            <div className="footerDetails">
              <div className="footerTable1">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="th">Support</td>
                    </tr>
                    <tr>
                      <td>Contact us</td>
                      <td>Return Policy</td>
                    </tr>
                    <tr>
                      <td>FAQ</td>
                      <td>Privacy Policy</td>
                    </tr>
                    <tr>
                      <td>My Account</td>
                      <td>Terms & Conditions</td>
                    </tr>
                    <tr>
                      <td>Festive Promo T&C</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="footerTable2">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="th">About PUMA</td>
                    </tr>
                    <tr>
                      <td>Company</td>
                      <td>Investors</td>
                    </tr>
                    <tr>
                      <td>Corporate News</td>
                      <td>Sustainabilty</td>
                    </tr>
                    <tr>
                      <td>Press Center</td>
                      <td>Careers</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Store Finder</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="footerRightPart">
            <div className="signUp">
              <label htmlFor="signUp">Email Sign Up</label> <br />
              <input type="text" placeholder="EMAIL" />
            </div>
            <div className="socialMedia">
              <div className="footerRightText">More Inspiration</div>
              <div className="footerIcons">
                <i className="fab fa-facebook-square fa-2x"></i>
                <i className="fab fa-twitter fa-2x"></i>
                <i className="fab fa-instagram fa-2x"></i>
                <i className="fab fa-pinterest fa-2x"></i>
                <i className="fab fa-youtube fa-2x"></i>
              </div>
            </div>
            <div className="appInfo"></div>
          </div>
        </div>
        <div className="lowerFooter">
          <div className="center">© PUMA SE, 2019. All Rights Reserved</div>
          <div className="right">Imprint & Legal Data</div>
        </div>
      </div>
    )
  }
}
