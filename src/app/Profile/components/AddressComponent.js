import React from "react"

function AddressComponent(props) {
    return (
        <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
            <h3 class="col-12 pl-3" style={{ display: props.headershow }} >{props.addresstype} Address Details </h3>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="addressline1">Address Line 1</label>
                    <input type="text"
                        id={"txt" + props.addresstype + "AddressLine1"}
                        name={props.addresstype + "addressline1"}
                        placeholder="Enter Address Line 1"
                        onChange={props.handleChange}
                        class="form-control"
                        maxLength="40"
                    />
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="addressline2">Address Line 2</label>
                    <input type="text"
                        id={"txt" + props.addresstype + "AddressLine2"}
                        name={props.addresstype + "addressline2"}
                        placeholder="Enter Address Line 2"
                        onChange={props.handleChange}
                        class="form-control"
                        maxLength="40"
                    />
                </div>
            </div>
            <div class="col-md-3 col-sm-12" style={{ display: props.addressLine3show }}>

                <div class="form-group">
                    <label for="addressline3">Address Line 3</label>
                    <input type="text"
                        id={"txt" + props.addresstype + "AddressLine3"}
                        name={props.addresstype + "addressline3"}
                        placeholder="Enter Address Line 3"
                        onChange={props.handleChange}
                        class="form-control"
                        maxLength="40"
                    />
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="city">City</label>
                    <input
                        type="text"
                        id={"txt" + props.addresstype + "City"}
                        name={props.addresstype + "city"}
                        placeholder="Enter City"
                        onChange={props.handleChange}
                        class="form-control"
                        maxLength="35"
                    />
                </div>
            </div>

            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="pincode">Pin Code</label>
                    <div class="icon-right">
                        <input
                            type="text"
                            id={"txt" + props.addresstype + "PinCode"}
                            name={props.addresstype + "pincode"}
                            placeholder="Enter Pin Code"
                            onChange={props.handleChange}
                            class="form-control"
                            maxLength="6"
                        />
                        <i class="mapIcon"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="inverstorCode">State</label>
                    <div class="icon-right">
                        <select
                            id={"txt" + props.addresstype + "State"}
                            name={props.addresstype + "state"}
                            onChange={props.handleChange}
                            class="form-control icon-right"
                        >
                            {props.data.states.map((name, key) => <option value={name.code} >{name.name}</option>)}
                        </select>
                        <i class="dropdownIcon"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="inverstorCode">Country</label>
                    <div class="icon-right">
                        <select
                            id={"txt" + props.addresstype + "Country"}
                            name={props.addresstype + "country"}
                            onChange={props.handleChange}
                            class="form-control icon-right"
                        >
                            {props.data.countries.map((name, key) => <option value={name.code} >{name.name}</option>)}
                        </select>
                        <i class="dropdownIcon"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-12" style={{ display: props.resphonenoshow }}>
                <div class="form-group">
                    <label for="residentialphoneno">Residential Phone No.</label>
                    <input type="text"
                        id={"txt" + props.addresstype + "ResidentialPhoneNo"}
                        placeholder="Enter Residential Phone No."
                        name={props.addresstype + "residentialphoneno"}
                        onChange={props.handleChange}
                        class="form-control"
                        maxLength="15"
                    />
                </div>
            </div>
            <div class="col-md-3 col-sm-12" style={{ display: props.resfaxshow }}>
                <div class="form-group">
                    <label for="residentialfax">Residential Fax</label>
                    <input type="text"
                        id={"txt" + props.addresstype + "ResidentialFax"}
                        name={props.addresstype + "residentialfax"}
                        placeholder="Enter Residential Fax"
                        onChange={props.handleChange}
                        class="form-control"
                        maxLength="15"
                    />
                </div>
            </div>
            <div class="col-md-3 col-sm-12" style={{ display: props.officephonenoshow }}>
                <div class="form-group">
                    <label for="officephone">Office Phone</label>
                    <input type="text"
                        id={"txt" + props.addresstype + "OfficePhone"}
                        name={props.addresstype + "officephone"}
                        placeholder="Enter Office Phone"
                        onChange={props.handleChange}
                        class="form-control"
                        maxLength="15"
                    />
                </div>
            </div>
            <div class="col-md-3 col-sm-12" style={{ display: props.officefaxshow }}>
                <div class="form-group">
                    <label for="officefax">Office Fax</label>
                    <input type="text"
                        id={"txt" + props.addresstype + "OfficeFax"}
                        placeholder="Enter Office Fax"
                        name={props.addresstype + "officefax"}
                        onChange={props.handleChange}
                        class="form-control"
                        maxLength="15"
                    />
                </div>
            </div>
            <div class="col-md-3 col-sm-12" style={{ display: props.mobileNoshow }}>
                <div class="form-group">
                    <label for="mobileno">Mobile</label>
                    <input type="text"
                        id={"txt" + props.addresstype + "Mobileno"}
                        placeholder="Enter Mobile Number"
                        name={props.addresstype + "mobileno"}
                        onChange={props.handleChange}
                        class="form-control"
                        maxLength="15"
                    />
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text"
                        id={"txt" + props.addresstype + "Email"}
                        placeholder="Enter Email"
                        name={props.addresstype + "email"}
                        onChange={props.handleChange}
                        class="form-control"
                        maxLength="50"
                    />
                </div>
            </div>

        </div>

    )
}
export default AddressComponent