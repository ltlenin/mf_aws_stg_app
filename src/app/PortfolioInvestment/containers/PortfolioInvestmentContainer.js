import React, { Component } from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PerfectScrollbar from 'react-perfect-scrollbar'

import '../../skelton/styles/react-tabs.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../../skelton/css/bootstrap.min.css'
import '../../skelton/css/styles.css'
import '../../skelton/css/perfect-scrollbar.css'
import '../../skelton/images/favicon.png'
import '../../skelton/js/script.js'

class PortfolioInvestmentContainer extends Component {
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

    }
    render() {
        return (
            <PerfectScrollbar>
                <div class="tabWrap p-4">
                    <Tabs selectedIndex={this.props.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                        <TabList className="nav nav-tabs" role="tablist">
                            <Tab className="nav-item">
                                <div class="nav-link  active" data-toggle="tab" aria-selected="true">SIP Registration</div>
                            </Tab>
                            <Tab className="nav-item">
                                <div class="nav-link" data-toggle="tab">X-SIP Registration</div>
                            </Tab>
                            <Tab className="nav-item">
                                <div class="nav-link" data-toggle="tab">SWP Registration</div>
                            </Tab>
                            <Tab className="nav-item">
                                <div class="nav-link" data-toggle="tab" >STP Registration</div>
                            </Tab>
                        </TabList>
                        <div class="tab-content" >
                            <TabPanel>
                                {/* <AllFundsComponents
                                /> */}
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
                                {/* <InstaRedeem
                                /> */}
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </PerfectScrollbar>
        )
    }
}
export default PortfolioInvestmentContainer 
