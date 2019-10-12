import React, { Component } from "react"
import '../../skelton/styles/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
 
import SIPRegistrationComponent from './SIPRegistrationComponent'
import SIPCancellationComponent from './SIPCancellationComponent'
require('dotenv').config()
const _API_KEY = process.env.REACT_APP_API_KEY


class SIPContainer extends Component {
    constructor() {
        super();
        this.state = {
            countries: [],
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
                                <div class="nav-link" data-toggle="tab">SIP Cancellation</div>
                            </Tab>
                        </TabList>
                        <div class="tab-content" >
                            <TabPanel>
                                <SIPRegistrationComponent />
                            </TabPanel>

                            <TabPanel>
                                <SIPCancellationComponent />
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </PerfectScrollbar>
        )
    }
}
export default SIPContainer 
