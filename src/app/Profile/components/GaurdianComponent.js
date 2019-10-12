import React, { Component } from "react"
import AddressComponent from '../components/AddressComponent.js'

class GaurdianComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomineeaddress: 'nominee',
      gaurdianaddress: 'gaurdian',

      headershow: 'none',
      addressLine3show: 'none',
      resphonenoshow: 'none',
      resfaxshow: 'none',
      officephonenoshow: 'none',
      officefaxshow: 'none',
      mobileNoshow: 'block',
    }
  }
  handleChange = (e) => {
    console.clear()
    this.props.handleChange(e)
  }

  render() {

    return (
      <main>
        <div class="pr-4 pb-3 text-right">
        <button type="reset" class="btn btn-secondary">Clear</button>
        <button type="reset" class="btn btn-primary ml-3" onClick={this.props.TestClick}>Save</button>
      </div>

        <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
          <h3 class="col-12 pl-3">Gaurdian Information</h3>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="inverstorCode">First Name</label>
              {/* <input type="text" class="form-control" id="inverstorCode" placeholder="Enter First Name" /> */}
              <input type="text"
                id="txtGaurdianFirstName"
                name="gaurdianfirstname"
                placeholder="Enter First Name"
                onChange={this.props.handleChange}
                class="form-control"
                maxLength="35"
              />

            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="inverstorType">Last Name</label>
              <input type="text"
                id="txtGaurdianLastName"
                name="gaurdianlastname"
                placeholder="Enter Last Name"
                onChange={this.props.handleChange}
                class="form-control"
                maxLength="35"
              />
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="gaurdianrelationship">Relationship</label>
              <input type="text"
                id="txtGaurdianRelationship"
                name="gaurdianrelationship"
                placeholder="Enter Relationship"
                onChange={this.props.handleChange}
                class="form-control"
                maxLength="20"
              />
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="gaurdiarelationpan">PAN Number</label>
              <input
                id="txtNomineeRelationPanNumber"
                placeholder="Enter Pan Number"
                name="gaurdiarelationpan"
                onChange={this.props.handleChange}
                class="form-control"
                maxLength="10"
              />
            </div>
          </div>
        </div>

        <AddressComponent
          addresstype={this.state.gaurdianaddress}
          headershow={this.state.headershow}
          addressLine3show={this.state.addressLine3show}
          resphonenoshow={this.state.resphonenoshow}
          resfaxshow={this.state.resfaxshow}
          officephonenoshow={this.state.officephonenoshow}
          officefaxshow={this.state.officefaxshow}
          mobileNoshow={this.state.mobileNoshow}

          data={this.props.data}
          handleChange={this.props.handleChange}
        />


        <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
          <h3 class="col-12 pl-3">Nominee Information</h3>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="inverstorCode">First Name</label>
              <input type="text"
                id="txtNomineeFirstName"
                placeholder="Enter First Name"
                name="nomineefirstname"
                onChange={this.props.handleChange}
                class="form-control"
                maxLength="35"
              />

            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="inverstorType">Last Name</label>
              <input type="text"
                id="txtNomineeLastName"
                placeholder="Enter Last Name"
                name="nomineelastname"
                onChange={this.props.handleChange}
                class="form-control"
                maxLength="35"
              />
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="taxStatus">Relationship</label>
              <input type="text"
                id="txtNomineerelationship"
                placeholder="Enter Address Line1"
                name="nomineerelationship"
                onChange={this.props.handleChange}
                class="form-control"
                maxLength="20"
              />
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="nomineerelationpan">PAN Number</label>
              <input
                id="txtNomineeRelationPanNumber"
                placeholder="Enter Pan Number"
                name="nomineerelationpan"
                onChange={this.props.handleChange}
                class="form-control"
                maxLength="10"
              />
            </div>
          </div>
        </div>
        <AddressComponent
          addresstype={this.state.nomineeaddress}
          headershow={this.state.headershow}
          addressLine3show={this.state.addressLine3show}
          resphonenoshow={this.state.resphonenoshow}
          resfaxshow={this.state.resfaxshow}
          officephonenoshow={this.state.officephonenoshow}
          officefaxshow={this.state.officefaxshow}
          mobileNoshow={this.state.mobileNoshow}
          data={this.props.data}
          handleChange={this.props.handleChange}
        />

      </main >)
  }
}
export default GaurdianComponent