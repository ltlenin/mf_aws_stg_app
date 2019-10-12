import React, { Component } from "react"
import '../../skelton/styles/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


import '../../skelton/css/bootstrap.min.css'

import '../../skelton/css/styles.css'
import '../../skelton/css/perfect-scrollbar.css'
import '../../skelton/images/favicon.png'
import '../../skelton/js/script.js'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';


import AllFundsComponents from './AllFundsComponent'
import InstaRedeem from './InstaRedeem'
import Cart from './Cart'
require('dotenv').config()
const _API_KEY = process.env.REACT_APP_API_KEY

class OrderContainer extends Component {
    constructor() {
        super();
        this.state = {
            countries: [],
            counter: 0,
            tabindex: 0
        }

    }
    componentDidMount() {

        // fetch(_API_KEY + '/order_detail/')
        //     .then(results => {
        //         return results;
        //     }).then(data => {
        //         this.setState({ countries: data });
        //         console.log("continer componentDidMount", data)
        //     })


        // fetch(_API_KEY + "/order_detail/")
        // .then(function (response) {
        //     if (!response.ok) {
        //         throw Error(response.statusText);
        //     }
        //     return response;
        // }).then(function (response) {
        //     console.log("ok", response);
        // }).catch(function (error) {
        //     console.log(error);
        // });
        // fetch(_API_KEY + "/CountryList/")
        //     .then(function (response) {
        //         if (!response.ok) {
        //             throw Error(response.statusText);
        //         }
        //         return response;
        //     }).then(function (response) {
        //         console.log("ok", response);
        //     }).catch(function (error) {
        //         console.log(error);
        //     });
    }
    render() {
        return (
            <PerfectScrollbar>
                <div class="tabWrap p-4">
                    <Tabs selectedIndex={this.props.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                        <TabList className="nav nav-tabs" role="tablist">
                            <Tab className="nav-item">
                                <div class="nav-link  active" data-toggle="tab" aria-selected="true">
                                    <span class="orderSprite allFunds"></span>
                                    All Funds
                            </div>
                            </Tab>
                            <Tab className="nav-item">
                                <div class="nav-link" data-toggle="tab">
                                    <span class="orderSprite InstaRedeem"></span>
                                    Insta Redeem
                                </div>
                            </Tab>
                            <Tab className="nav-item">
                                <div class="nav-link" data-toggle="tab">
                                    <span class="orderSprite Insured"></span>
                                    Insured
                                </div>
                            </Tab>
                            <Tab className="nav-item">
                                <div class="nav-link" data-toggle="tab" >
                                    <span class="orderSprite SaveTaxes"></span>
                                    Save Taxes
                                </div>
                            </Tab>
                            <Tab className="nav-item">
                                <div class="nav-link" data-toggle="tab" >
                                    <span class="orderSprite TopRated"></span>
                                    Top Rated
                                </div>
                            </Tab>
                            <Tab className="nav-item">
                                <div class="nav-link" data-toggle="tab" ><span class="orderSprite InvestorChoice"></span>
                                    Investor Choice</div>
                            </Tab>
                            <Tab className="nav-item">
                                <div class="nav-link" data-toggle="tab" ><span class="orderSprite NewFunds"></span>
                                    New Funds
                                </div>
                            </Tab>
                            <Tab className="nav-item">
                                <div class="nav-link" data-toggle="tab">
                                <span class="orderSprite Insured"></span>
                                Cart
                                </div>
                            </Tab>

                        </TabList>
                        <div class="tab-content" >
                            <TabPanel>
                                <AllFundsComponents
                                />
                            </TabPanel>

                            <TabPanel>
                                <InstaRedeem
                                />
                            </TabPanel>
                            <TabPanel>
                                <InstaRedeem
                                />
                            </TabPanel>
                            <TabPanel>
                                {/* <InstaRedeem
                                /> */}
                            </TabPanel>
                            <TabPanel>
                                <InstaRedeem
                                />
                            </TabPanel>

                            <TabPanel>
                                {/* <InstaRedeem
                                /> */}
                            </TabPanel>
                            <TabPanel>
                                {/* <InstaRedeem
                                /> */}
                            </TabPanel>
                            <TabPanel>
                                <Cart
                                />
                            </TabPanel>
                            <TabPanel>

                            </TabPanel>

                        </div>
                    </Tabs>
                </div>
            </PerfectScrollbar>
        )
    }
}
export default OrderContainer 
