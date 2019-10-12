import React from "react"
import Upload from '../../../_upload/upload/Upload'
import PhotoCapture from '../../../_upload/capture/demo/PhotoCapture'
function EKYCChildComponent(props) {
    return (
        <div>
             
            {
                Object.keys(props.banks).map(function (key) {
                    let count = parseInt(key, 10) + 1
                    return <div>
                        <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label for={"idtype" + count}>Identity Proof Type</label>
                                    <div class="icon-right">
                                        <select
                                            id="ddlIdType"
                                            name={"idtype" + count}
                                            onChange={props.handleChange}
                                            class="form-control icon-right">
                                            {props.data.idprooftypes.map((name, key) => <option value={name.code} >{name.type}</option>)}
                                        </select>
                                        <i class="dropdownIcon"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label for="identificationno">Identitification Number</label>
                                    <input
                                        type="text"
                                        id="txtIdentificationNo"
                                        placeholder={"Enter Identitification Number " + count}
                                        name={"identificationno" + count}
                                        onChange={props.handleChange}
                                        class="form-control"
                                        maxLength="16"
                                    />
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label for="expirydate">Expiry Date</label>
                                    <input
                                        type="text"
                                        id="txtExpiryDate"
                                        placeholder={"Expiry Date " + count}
                                        name={"expirydate" + count}
                                        onChange={props.handleChange}
                                        class="form-control"
                                        maxLength="16"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label for="inverstorCode">Front Page</label>
                                    <Upload />
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label for="inverstorCode">Back Page</label>
                                    <div className="Card">
                                        <Upload />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label for="inverstorCode">Signature Page</label>
                                    <Upload />
                                </div>
                            </div> 
                        </div>

                        <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label for="inverstorCode">Front Page</label>
                                    <PhotoCapture />
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label for="inverstorCode">Back Page</label>
                                    <div className="Card">
                                        <PhotoCapture />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label for="inverstorCode">Signature Page</label>
                                    <PhotoCapture />
                                </div>
                            </div> 
                        </div>

                    </div>
                }.bind(this))
            }
        </div>
    );
}
export default EKYCChildComponent