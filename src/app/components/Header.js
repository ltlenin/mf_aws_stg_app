import React from "react";
import { Link } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

import '../skelton/css/bootstrap.min.css'
import '../skelton/css/styles.css'
import '../skelton/css/perfect-scrollbar.css'
import '../skelton/images/favicon.png'
import '../skelton/js/script.js'
//import '../skelton/js/jquery-3.3.1.min.js'


class Header extends React.Component {
  render() {
    return (
      <PerfectScrollbar>
        <ul className="mainMenu">
          <li className="home">
            <Link to="/">Home</Link>
          </li>
          <li className="profile">
            <Link to="/OrderContainer">Explore</Link>
          </li>
          <li className="profile">
            <Link to="/ProfileContainer">Client Registration</Link>
          </li>

          <li className="smartDep">
            <Link to="/SmartDepositContainer">Smart Deposit</Link>
          </li>
          <li className="featuredSche">
            <Link to="/FeaturedSchemesContainer">Featured Schemes</Link>
          </li>

          <li className="featuredSche">
            <Link to="/">Portfolio / Investment <span>&rsaquo;</span></Link>
           
            <ul >
              <li className="sIPCalc">
                <Link to="/SIPContainer">SIP</Link>
              </li>
              <li className="sIPCalc">
                <Link to="/STPContainer">STP</Link>
              </li>
              <li className="sIPCalc">
                <Link to="/">SWP</Link>
              </li>

              <li className="sIPCalc">
                <Link to="/">X-SIP</Link>
              </li>
              <li className="sIPCalc">
                <Link to="/">Switch Order</Link>
              </li>
            </ul>

          </li>

          <li className="profile">
            <Link to="/FATCAContainer">FATCA</Link>
          </li>


          <li className="taxSaver">
            <Link to="/">Tax Saver</Link>
          </li>
          <li className="instaRedem">
            <Link to="/">Insta Redemption</Link>
          </li>
          <li className="sIPCalc">
            <Link to="/">SIP Calculator</Link>
          </li>
          <li className="fileUpload">
            <Link to="/FileUpload">File Upload</Link>
          </li>
          <li className="aboutUs">
            <Link to="/">About Us</Link>
          </li>
          <li className="contact">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </PerfectScrollbar>
    )
  }
}
export default Header

