import React, { Component } from "react"

class Duration extends Component {
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
                <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
                    <h3 class="col-12 pl-3">Duration</h3>
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
                </div>
            </main >)
    }
}
export default Duration