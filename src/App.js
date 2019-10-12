import React from "react"
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import { withRefreshedStore } from './app/reducers/storeManager'
import { connect } from 'react-redux';

import { history } from '../src/_helpers';
import { alertActions } from '../src/_actions';


import Header from './app/components/Header'
import Footer from './app/components/Footer'
import ProfileContainer from './app/Profile/containers/ProfileContainer'
import SmartDepositContainer from './app/SmartDeposit/SmartDepositContainer'
import FeaturedSchemesContainer from './app/FeaturedSchemes/FeaturedSchemesContainer'
import FatcaContainer from './app/FATCA/FATCAContainer'
import FileUpload from './app/Utilities/FileUpload'
import OrderContainer from './app/Order/components/OrderContainer'
import SIPContainer from './app/PortfolioInvestment/SIP/SIPContainer'
import STPContainer from './app/PortfolioInvestment/STP/STPContainer'
import logImage from '../src/app/skelton/images/ines.png'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      OnDemandHomeContainer: null
    }
    history.listen((location, action) => {
      this.props.clearAlerts();
    });
    
  }

  // componentWillMount() {
  //   withRefreshedStore(import('./app/Profile/containers/ProfileContainer')).then((module) => {
  //     this.setState({ OnDemandHomeContainer: module.default });
  //   });
  // }
  render() {
    const { alert } = this.props;
    return (
      <div>
        <Router>
          {/* Left Part Start */}
          <aside>
            <div className="logoWrap">
              <a className="logo"></a>
              <a className="menuArrow"></a>
              <a className="mobileMenuCloseBtn">x</a>
            </div>
            <Header />
          </aside>
          {/* Left Part End */}
          <section>
            <div className="header-mobile clearfix">
              <a className="logo float-left"></a>
              <div id="moreBtn" className="moreBtn float-right ml-3">
                <span></span>
              </div>
              <div id="mobileMenuBtn" className="mobile__toggler float-right">
                <span></span>
              </div>
            </div>
            <div className="topBar clearfix">
              <div className="float-right userProfileWrap" id="userProfileWrap" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="userWelcomeMsg d-inline-block align-middle">Hi,</span>
                <span className="userName d-inline-block align-middle">Ines</span>
                <span className="userImgWrap d-inline-block align-middle"><img src={logImage} alt="" /></span>
              </div>

              <ul class="dropdown-menu userProfiledD" aria-labelledby="userProfileWrap">
                <li class="userProfileDetails clearfix">
                  <img src={logImage} class="uPDetailImg" alt="" />
                  <span className="uPDetailName">Ines lorem</span>
                  <span className="newMesgCount float-right">15 Messages</span>
                </li>
                <li>
                  <div className="userMenuList">
                    <div className="userMenuIcon">
                      <span className="profileIcon"></span>
                    </div>
                    <div className="userMenuDetail">
                      <div className="userMenuTitle">My Profile</div>
                      <div className="userMenuDesc">Account settings and more</div>
                    </div>
                    <span className="menuListArrow">&gt;</span>
                  </div>
                </li>
                <li>
                  <div className="userMenuList">
                    <div className="userMenuIcon">
                      <span className="messageIcon"></span>
                    </div>
                    <div className="userMenuDetail">
                      <div className="userMenuTitle">My Messages</div>
                      <div className="userMenuDesc">Inbox and tasks</div>
                    </div>
                    <span className="menuListArrow">&gt;</span>
                  </div>
                </li>
                <li className="clearfix">
                  <button type="button"
                    className="btn btn-default float-right"
                    id="signoutBtn"
                    onClick={() => localStorage.clear()}>
                    Signout
                    </button>
                </li>
              </ul>

              <div className="float-right clearfix mr-3">
                <input type="text" className="form-control tabBarInput ml-3 float-left" placeholder="" aria-label="" aria-describedby="globalSearch" />
                <span id="globalSearch" className="float-right mt-2"><span></span></span>
              </div>

              <a className="float-right topBarLink mt-3">Financial Services</a>
            </div>
            <div className="breadCrumb clearfix">
              <div className="d-inline-block pr-3">Bread Crumb</div>
              <ul className="d-inline-block p-0 m-0">
                <li className="pl-2 pr-1"><a>Portfolio / Investment</a></li>
                <li className="pl-2 pr-1">Investor Master List</li>

              </ul>
            </div>

            <div class="contentPart">

              <Route path="/SmartDepositContainer" component={SmartDepositContainer} />
              <Route path="/FeaturedSchemesContainer" component={FeaturedSchemesContainer} />
              <Route path="/SIPContainer" component={SIPContainer} />
              <Route path="/STPContainer" component={STPContainer} />
              <Route exact path="/ProfileContainer" component={ProfileContainer} />

              <Route path="/FatcaContainer" component={FatcaContainer} />
              <Route path="/OrderContainer" component={OrderContainer} />
              <Route path="/FileUpload" component={FileUpload} />
              <Route path="/FileUpload" component={FileUpload} />
            </div>
            <Footer />

          </section>

        </Router>
      </div>
    )
  }
}
function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export default connectedApp;
