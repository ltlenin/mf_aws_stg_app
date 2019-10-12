import React, { Component } from "react"

class SchemeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomineeaddress: 'nominee',
            gaurdianaddress: 'gaurdian',
        }
    }
    handleChange = (e) => {
        console.clear()
        this.props.handleChange(e)
    }

    render() {

        return (
            <main>
                <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
                    <h3 class="col-12 pl-3">Scheme Information</h3>

                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="amc">AMC</label>
                            <div class="icon-right">
                                <select
                                    id="ddlAMC"
                                    name="amc"
                                    onChange={this.handleChange}
                                    class="form-control icon-right"
                                >
                                </select>
                                <i class="dropdownIcon"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="schemetyp">Scheme Type</label>
                            <input
                                type="text"
                                id="txtSchemeType"
                                name="schemetype"
                                class="form-control"
                                placeholder="Enter Scheme Type"
                                maxLength="16"
                            />
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="schemecode">Scheme Code</label>
                            <input
                                type="text"
                                id="txtSchemeName"
                                name="schemecode"
                                class="form-control"
                                placeholder="Enter Scheme Code"
                                maxLength="16"
                            />
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="schemename">Scheme Name</label>
                            <input
                                type="text"
                                id="txtSchemeName"
                                name="schemename"
                                class="form-control"
                                placeholder="Enter Scheme Name"
                                maxLength="16"
                            />
                        </div>
                    </div>


                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="isin">ISIN</label>
                            <input
                                type="text"
                                id="txtSchemeName"
                                name="isin"
                                class="form-control"
                                placeholder="Enter ISIN"
                                maxLength="16"
                            />
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="rtacode">RTA Code</label>
                            <input type="text"
                                id="txtRTA"
                                name="rtacode"
                                onChange={this.handleChange}
                                class="form-control"
                                placeholder="Enter RTA Code"
                                maxLength="11"

                            />
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="transactionmode">Transaction Mode</label>
                            <div class="icon-right">
                                <select
                                    id="ddlTransactionMode"
                                    name="transactionmode"
                                    onChange={this.handleChange}
                                    class="form-control icon-right"
                                >
                                    <option value="D">DEMAT ONLY</option>
                                    <option value="P">PHYSICAL ONLY</option>
                                </select>
                                <i class="dropdownIcon"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="folionumber">Folio Number</label>
                            <input type="text"
                                id="txtFolioNumber"
                                name="folionumber"
                                onChange={this.handleChange}
                                class="form-control"
                                placeholder="Enter Folio Number"
                                maxLength="11"
                            />
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="frequencytype">Frequency Type</label>
                            <div class="icon-right">
                                <select
                                    id="ddlFrequencyType"
                                    onChange={this.handleChange}
                                    class="form-control icon-right"
                                >
                                    <option value="M">MONTHLY</option>
                                    <option value="Q">QUARTERLY</option>
                                    <option value="W">WEEKLY</option>
                                </select>
                                <i class="dropdownIcon"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="frequencytype">Frequency Allowed</label>
                            <div class="icon-right">
                                <select
                                    id="ddlFrequencyType"
                                    onChange={this.handleChange}
                                    class="form-control icon-right"
                                >
                                    <option value="M">YES</option>
                                    <option value="Q">NO</option> 
                                </select>
                                <i class="dropdownIcon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </main >)
    }
}
export default SchemeInfo