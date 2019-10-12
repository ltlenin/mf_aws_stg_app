import React from "react"

function NameComponent(props) {
    return (
        <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="addressline1">First Name</label>
                    <input type="text"
                        id={"txt" + props.addresstype + "AddressLine1"}
                        name={props.addresstype + "addressline1"}
                        placeholder="Enter First Name"
                        onChange={props.handleChange}
                        class="form-control"
                        maxLength="40"
                    />
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="addressline2">Middle Name</label>
                    <input type="text"
                        id={"txt" + props.addresstype + "AddressLine2"}
                        name={props.addresstype + "addressline2"}
                        placeholder="Enter Middle Name"
                        onChange={props.handleChange}
                        class="form-control"
                        maxLength="40"
                    />
                </div>
            </div>
            <div class="col-md-3 col-sm-12" style={{ display: props.addressLine3show }}>

                <div class="form-group">
                    <label for="addressline3">Last Name</label>
                    <input type="text"
                        id={"txt" + props.addresstype + "AddressLine3"}
                        name={props.addresstype + "addressline3"}
                        placeholder="Enter Last Name"
                        onChange={props.handleChange}
                        class="form-control"
                        maxLength="40"
                    />
                </div>
            </div>
        </div>
    )
}
export default NameComponent