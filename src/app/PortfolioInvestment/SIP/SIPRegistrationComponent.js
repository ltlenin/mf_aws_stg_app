import React, { Component } from "react"
import '../../skelton/styles/react-tabs.css'; 
import 'react-perfect-scrollbar/dist/css/styles.css'; 
import SchemeInfo from '../../PortfolioInvestment/components/SchemeInfo'
import SubBrokerInfo from '../../PortfolioInvestment/components/SubBrokerInfo'
require('dotenv').config()
const _API_KEY = process.env.REACT_APP_API_KEY
class SIPRegistrationComponent extends Component {
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
            <main> 
                <SchemeInfo/>
                <SubBrokerInfo/> 
            </main> 
        )
    }
}
export default SIPRegistrationComponent 
