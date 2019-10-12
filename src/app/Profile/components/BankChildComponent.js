import React from "react"

function BankChildComponent(props) {
    return (
        <div>
            {
                Object.keys(props.banks).map(function (key) {
                    let count = parseInt(key, 10) + 1
                    return <div>
                        <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
                            
                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label for="ifsccode">IFSC Code {count}</label>
                                    <input type="text"
                                        id="txtIFSCCode"
                                        placeholder={"Enter IFSC Code " + count}
                                        name={"ifsccode" + count}
                                        onChange={props.handleChange}
                                        class="form-control"
                                        defaultValue={props.defaultvalue}
                                        maxLength="11"
                                    />
                                </div>
                            </div> 
                            
                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label for="accountno">Account Number {count}</label>
                                    <input
                                        type="text"
                                        id="txtAccountNo"
                                        placeholder={"Enter Account No " + count}
                                        name={"accountno" + count}
                                        onChange={props.handleChange}
                                        class="form-control"
                                        maxLength="16"
                                    />
                                </div>
                            </div> 
                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label for="accountype">Account Type {count}</label>
                                    <div class="icon-right">
                                        <select
                                            id="ddlAccountType"
                                            name={"accountype" + count}
                                            onChange={props.handleChange}
                                            class="form-control icon-right"
                                        >
                                            {props.data.accounttypes.map((name, key) => <option value={name.code} >{name.name}</option>)}
                                        </select>
                                        <i class="dropdownIcon"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label for="isdefault">Is Default {count}</label>
                                    <input type="text"
                                        id="txtIsDefault"
                                        placeholder={"Is Default " + count}
                                        name={"isdefault" + count}
                                        onChange={props.handleChange}
                                        class="form-control"
                                        maxLength="1"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                }.bind(this))
            }
        </div>
    );
}
export default BankChildComponent