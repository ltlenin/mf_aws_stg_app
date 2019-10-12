import React, { Component } from "react"

class  User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomineeaddress: 'nominee',
        }
    }
    handleChange = (e) => {
        console.clear()
        this.props.handleChange(e)
    }

    render() {
        return (
            <main>
                <div className="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
                    <h3 className="col-12 pl-3">User Information</h3>
                    <div className="col-md-3 col-sm-12">
                        <div className="form-group">
                            <label for="clientcode">Client Code</label>
                            <input type="text"
                                id="txtClientCode"
                                name="clientcode"
                                onChange={this.handleChange}
                                className="form-control" 
                                placeholder="Enter Client Code"
                            />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="form-group">
                            <label for="membercode">Member Code</label>
                            <input type="text"
                                id="txtMemberCode"
                                name="membercode"
                                onChange={this.handleChange}
                                className="form-control" 
                                placeholder="Enter Member Code"
                            />
                        </div>
                    </div>
                </div>
            </main >)
    }
}
export default User