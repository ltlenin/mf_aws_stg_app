import React from "react"

function EKYCDetailComponent(props) {
    return (
        <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="applicationtype">Application Type</label>
                    <input type="text"
                        id="ApplicationType"
                        name="applicationtype"
                        placeholder="Application Type"
                        onChange={props.handleChange}
                        class="form-control"
                        maxLength="40"
                    />
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="ekycnumber">Field 2</label>
                    <input type="text"
                        id="EkycNumber"
                        name="ekycnumber"
                        placeholder="Enter EKYC Number"
                        onChange={props.handleChange}
                        class="form-control"
                        maxLength="40"
                    />
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="accountType">Account Type</label>
                    <div class="icon-right">
                        <select
                            id="ddlAccountType"
                            name="accountType"
                            onChange={this.props.handleChange}
                            class="form-control icon-right"
                        >
                            <option value="P">Savings</option>
                            <option value="D">Current</option>
                            <option value="D">Demat</option>
                        </select>
                        <i class="dropdownIcon"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="name">Name(Same as ID proof)</label>
                    <input type="text"
                        id="txtName"
                        name="name"
                        ptxtNaceholder="Enter Name"
                        onCtxtNange={props.handleChange}
                        class="form-control"
                        maxLength="40"
                    />
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="maidenname">Maiden Name(if any)</label>
                    <input type="text"
                        id="txtMaidenName"
                        name="maidenname"
                        ptxtNaceholder="Enter Maiden Name"
                        onCtxtNange={props.handleChange}
                        class="form-control"
                        maxLength="40"
                    />
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="name">Father/Spouse Name</label>
                    <input type="text"
                        id="txtName"
                        name="name"
                        ptxtNaceholder="Enter Name"
                        onCtxtNange={props.handleChange}
                        class="form-control"
                        maxLength="40"
                    />
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="namemother">Mother Name</label>
                    <input type="text"
                        id="txtMotherName"
                        name="namemother"
                        ptxtNaceholder="Enter Mother Name"
                        onCtxtNange={props.handleChange}
                        class="form-control"
                        maxLength="40"
                    />
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="dob">Date of Birth</label>
                    <input type="text"
                        id="txtDob"
                        name="dob"
                        ptxtNaceholder="Enter Name Date of Birth"
                        onCtxtNange={props.handleChange}
                        class="form-control"
                        maxLength="40"
                    />
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="gender">Gender</label>
                    <div class="icon-right">
                        <select
                            id="ddlGender"
                            name="gender"
                            onChange={this.props.handleChange}
                            class="form-control icon-right"
                        >
                            <option value="P">Male</option>
                            <option value="D">Female</option>
                        </select>
                        <i class="dropdownIcon"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="maritalstatus">Marital Status</label>
                    <div class="icon-right">
                        <select
                            id="ddlMaritalstatus"
                            name="maritalstatus"
                            onChange={this.props.handleChange}
                            class="form-control icon-right"
                        >
                            <option value="P">Single</option>
                            <option value="D">Married</option>

                        </select>
                        <i class="dropdownIcon"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="citizenship">Citizenship</label>
                    <input type="text"
                        id="txtCitizenship"
                        name="citizenship"
                        ptxtNaceholder="Enter Citizenship"
                        onCtxtNange={props.handleChange}
                        class="form-control"
                        maxLength="40"
                    />
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="residentialstatus">Residential Status</label>
                    <div class="icon-right">
                        <select
                            id="ddlResidentialstatus"
                            name="residentialstatus"
                            onChange={this.props.handleChange}
                            class="form-control icon-right"
                        >
                            <option value="P">Residential Individual</option>

                        </select>
                        <i class="dropdownIcon"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="occupationtype">Occupation Type</label>
                    <div class="icon-right">
                        <select
                            id="ddlOccupationtype"
                            name="occupationtype"
                            onChange={this.props.handleChange}
                            class="form-control icon-right"
                        >
                            <option value="P">Savings</option>
                            <option value="D">Current</option>
                            <option value="D">Demat</option>
                        </select>
                        <i class="dropdownIcon"></i>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default EKYCDetailComponent