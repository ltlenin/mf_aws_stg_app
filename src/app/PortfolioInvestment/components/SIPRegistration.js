import React, { Component } from "react"
import '../../skelton/styles/react-tabs.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

import User from '../../components/User'
import SchemeInfo from '../components/SchemeInfo'
import SubBrokerInfo from '../components/SubBrokerInfo'

class SIPRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            subcategories: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    componentDidMount() {
    }

    render() {
        return (
            <main>
                <div>
                    <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">

                        <User />
                        <SchemeInfo />
                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                <label for="dbtransactionmode">DP Transaction Mode</label>
                                <div class="icon-right">
                                    <select
                                        id="ddlDPTransactionMode"
                                        name="dbtransactionmode"
                                        onChange={this.handleChange}
                                        class="form-control icon-right"
                                    >
                                        <option value="Y">CDSL</option>
                                        <option value="N">NSDL</option>
                                        <option value="N">PHYSIC</option>
                                    </select>
                                    <i class="dropdownIcon"></i>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                <label for="frequencyallowed">Frequency Allowed</label>
                                <div class="icon-right">
                                    <select
                                        id="ddlFrequencyAllowed"
                                        onChange={this.handleChange}
                                        class="form-control icon-right"
                                    >
                                        <option value="Y">YES</option>
                                        <option value="N">NO</option>
                                    </select>
                                    <i class="dropdownIcon"></i>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                <label for="installmentamount">Installment Amount</label>
                                <input type="text"
                                    id="txtInstallmentAmount"
                                    name="installmentamount"
                                    onChange={this.handleChange}
                                    class="form-control"
                                    placeholder="Enter Installment Amount"
                                    maxLength="11"
                                />
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                <label for="sipdatesdaysallowed">SIP Dates / Days allowed</label>
                                <input type="text"
                                    id="txtSIPDatesDaysAllowed"
                                    name="sipdatesdaysallowed"
                                    onChange={this.handleChange}
                                    class="form-control"
                                    placeholder="Enter SIP Dates / Days allowed"
                                    maxLength="11"
                                />
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                <label for="generatefirstordertoday">Generate First Order Today</label>
                                <input type="checkbox"
                                    id="chkGenerateFirstOrderToday"
                                    name="generatefirstordertoday"
                                    onChange={this.handleChange}
                                    text="Generate First Order Today"
                                />
                            </div>
                        </div>
                        <SubBrokerInfo />
                    </div>
                </div>
            </main>
        )
    }
}
export default SIPRegistration