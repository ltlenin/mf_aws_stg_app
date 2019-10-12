import React, { Component } from "react"
import AddressComponent from "../components/AddressComponent";



class OtherDetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indiaaddress: 'india',
            foriegnaddress: 'foriegn',
            headershow: 'block',
            addressLine3show: 'block',
            resphonenoshow: 'block',
            resfaxshow: 'block',
            officephonenoshow: 'block',
            officefaxshow: 'block',
            mobileNoshow: 'none',
        }
    }
    handleChange = (e) => {
        console.clear()
        this.props.handleChange(e)
    }

    render() {
        return (
            <main>

                <div class="pr-4 pb-3 text-right">
                    <button type="reset" class="btn btn-secondary">Clear</button>
                    <button type="reset" class="btn btn-primary ml-3" onClick={this.props.TestClick}>Save</button>
                </div>

                <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
                    <h3 class="col-12 pl-3">Depository Details</h3>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="clienttype">Client Type</label>
                            <div class="icon-right">
                                <select
                                    id="ddlClientType"
                                    name="clienttype"
                                    onChange={this.props.handleChange}
                                    class="form-control icon-right"
                                >
                                    <option value="P">Physical</option>
                                    <option value="D">Demat</option>
                                </select>
                                <i class="dropdownIcon"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="clientdefaultdp">Default DP</label>
                            <div class="icon-right">
                                <select
                                    id="ddlClientDefaultDP"
                                    name="clientdefaultdp"
                                    onChange={this.props.handleChange}
                                    class="form-control icon-right"
                                >
                                    <option value="P">NSDL</option>
                                    <option value="D">CDSL</option>
                                </select>
                                <i class="dropdownIcon"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="clientcdsldpid">CDSL DP ID</label>
                            <input type="text"
                                id="txtDepositoryName"
                                name="clientcdsldpid"
                                placeholder="Enter CDSL DP ID"
                                onChange={this.props.handleChange}
                                class="form-control"
                                maxLength="8"
                            />
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="clientcdslcltid">CDSL LT ID</label>
                            <input type="text"
                                id="txtDepositoryName"
                                name="clientcdslcltid"
                                placeholder="Enter CDSL LT ID"
                                onChange={this.props.handleChange}
                                class="form-control"
                                maxLength="16"
                            />
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="cleintnsdldpid">NSDL DP ID</label>
                            <input type="text"
                                id="txtDepositoryName"
                                name="cleintnsdldpid"
                                placeholder="Enter NSDL DP ID"
                                onChange={this.props.handleChange}
                                class="form-control"
                                maxLength="8"
                            />
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="clientnsdlcltid">NSDL LT ID</label>
                            <input type="text"
                                id="txtCDSLBenAcNo"
                                name="clientnsdlcltid"
                                placeholder="Enter NSDL LT ID"
                                onChange={this.props.handleChange}
                                class="form-control"
                                maxLength="8"
                            />
                        </div>
                    </div>


                </div>


                <AddressComponent
                    addresstype={this.state.indiaaddress}
                    headershow={this.state.headershow}
                    addressLine3show={this.state.addressLine3show}
                    resphonenoshow={this.state.resphonenoshow}
                    resfaxshow={this.state.resfaxshow}
                    officephonenoshow={this.state.officephonenoshow}
                    officefaxshow={this.state.officefaxshow}
                    mobileNoshow={this.state.mobileNoshow}
                    data={this.props.data}
                    handleChange={this.props.handleChange}
                />


                <AddressComponent
                    addresstype={this.state.foriegnaddress}
                    headershow={this.state.headershow}
                    addressLine3show={this.state.addressLine3show}
                    resphonenoshow={this.state.resphonenoshow}
                    resfaxshow={this.state.resfaxshow}
                    officephonenoshow={this.state.officephonenoshow}
                    officefaxshow={this.state.officefaxshow}
                    mobileNoshow={this.state.mobileNoshow}
                    data={this.props.data}
                    handleChange={this.props.handleChange}
                />

            </main>
        )
    }
}
export default OtherDetailsComponent