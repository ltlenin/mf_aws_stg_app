import React, { Component } from "react"
import '../../skelton/styles/react-tabs.css'; 
import 'react-perfect-scrollbar/dist/css/styles.css';
 
import SchemeInfo from '../components/SchemeInfo'
import SubBrokerInfo from '../components/SubBrokerInfo'
class STPRegistrationComponent extends Component {
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
export default STPRegistrationComponent 
