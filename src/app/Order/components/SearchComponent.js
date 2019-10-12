import React, { Component } from "react"
require('dotenv').config()
const _API_KEY = process.env.REACT_APP_API_KEY
class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            subcategories: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    componentDidMount() {
        fetch(_API_KEY + '/CategoryList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ categories: data });
                console.log("Category List", data)
            })

            fetch(_API_KEY + '/SubCategoryList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ subcategories: data });
                console.log("Category List", data)
            })
    }
    render() {
        return (
            <div>
                <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="ifsccode">Narrow Your Search</label>
                            <input type="text"
                                id="txtIFSCCode"
                                onChange={this.handleChange}
                                class="form-control"
                                maxLength="11"
                            />
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="accountno">Sort By</label>
                            <input
                                type="text"
                                id="txtAccountNo"
                                class="form-control"
                                maxLength="16"
                            />
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="accountype">Category</label>
                            <div class="icon-right">
                                <select
                                    id="ddlAccountType"
                                    onChange={this.handleChange}
                                    class="form-control icon-right"
                                >
                                    {this.state.categories.map((name, key) => <option value={name.CategoryName} >{name.CategoryName}</option>)}
                                </select>
                                <i class="dropdownIcon"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label for="isdefault">Sub Category</label>
                            <div class="icon-right">
                                <select
                                    id="ddlAccountType"
                                    onChange={this.handleChange}
                                    class="form-control icon-right"
                                >
                                    {this.state.subcategories.map((name, key) => <option value={name.CategoryId} >{name.SubCategoryName}</option>)}
                                </select>
                                <i class="dropdownIcon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SearchComponent