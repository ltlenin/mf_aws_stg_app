import React, { Component } from "react"

class SubBrokerInfo extends Component {
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

                    <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator"> 
                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                <label for="startdate">Start Date</label>
                                <div class="icon-right">
                                    <input type="text"
                                        id="txtStartDate"
                                        name="startdate"
                                        onChange={this.handleChange}
                                        class="form-control"
                                        placeholder="Enter Start Date"
                                        maxLength="11"
                                    />
                                    <i class="calenderIcon"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                <label for="enddate">End Date</label>
                                <div class="icon-right">
                                    <input type="text"
                                        id="txtEndDate"
                                        name="enddate"
                                        onChange={this.handleChange}
                                        class="form-control"
                                        placeholder="Enter End Date"
                                        maxLength="11"
                                    />
                                    <i class="calenderIcon"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                <label for="noofinstallments">No Of Installments</label>
                                <input type="text"
                                    id="txtNoOfInstallments"
                                    name="noofinstallments"
                                    onChange={this.handleChange}
                                    class="form-control"
                                    placeholder="Enter No Of Installments"
                                    maxLength="11"
                                />
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                <label for="subbrokercode">Sub Broker Code</label>
                                <input
                                    type="text"
                                    id="txtSubBrokerCode"
                                    name="subbrokercode"
                                    class="form-control"
                                    placeholder="Enter Sub Broker Code"
                                    maxLength="16"
                                />
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                <label for="euindecl">EUIN Decl.</label>
                                <div class="icon-right">
                                    <select
                                        id="ddlEUINDecl"
                                        onChange={this.handleChange}
                                        class="form-control icon-right"
                                        name="euindecl"
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
                                <label for="euin">EUIN</label>
                                <input type="text"
                                    id="txtEUIN"
                                    name="euin"
                                    onChange={this.handleChange}
                                    class="form-control"
                                    placeholder="Enter EUIN"
                                    maxLength="11"
                                />
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                <label for="subbrokearncode">Sub Broker ARN Code</label>
                                <input type="text"
                                    id="txtSubBrokeARNCode"
                                    name="subbrokearncode"
                                    onChange={this.handleChange}
                                    class="form-control"
                                    placeholder="Enter Sub Broker ARN Code"
                                    maxLength="11"
                                />
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                <label for="remarks">Remarks</label>
                                <input type="text"
                                    id="txtRemarks"
                                    name="remarks"
                                    onChange={this.handleChange}
                                    class="form-control"
                                    placeholder="Enter Remarks"
                                    maxLength="11"
                                />
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                <label for="internalreferencenumber">Internal Reference Number</label>
                                <input type="text"
                                    id="txtInternalReferenceNumber"
                                    name="internalreferencenumber"
                                    onChange={this.handleChange}
                                    class="form-control"
                                    placeholder="Enter Internal Reference Number"
                                    maxLength="11"
                                />
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                <label for="dpc">DPC</label>
                                <div class="icon-right">
                                    <select
                                        id="ddlDPC"
                                        onChange={this.handleChange}
                                        class="form-control icon-right"
                                        name="dpc"
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
                                <label for="dpc">DPC</label>
                                <div class="icon-right">
                                    <select
                                        id="ddlDPC"
                                        onChange={this.handleChange}
                                        class="form-control icon-right"
                                        name="dpc"
                                    >
                                        <option value="Y">YES</option>
                                        <option value="N">NO</option>
                                    </select>
                                    <i class="dropdownIcon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >)
    }
}
export default SubBrokerInfo