import React from "react"

function POIComponent(props) {
    return (
        <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="addressline1">Field 1</label>
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
                    <label for="addressline2">Field 2</label>
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
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="addressline3">Choose File</label>
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

            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="addressline3">Drag/Drop</label>
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
            <div class="col-md-3 col-sm-12">
                <div class="form-group">
                    <label for="addressline3">Capture</label>
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
export default POIComponent