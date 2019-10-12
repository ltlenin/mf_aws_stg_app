import React, { Component } from "react"
import AddressComponent from '../Profile/components/AddressComponent'

import ResidenceCountry from './ResidenceCountry'
class UBOComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
      ubo: 'ubo',

      headershow: 'none',
      addressLine3show: 'block',
      resphonenoshow: 'block',
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
        <input type="submit" onClick={this.props.TestClick} value="Click" />
        <div>
          <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">


            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="applicable">Applicable</label>
                <div class="icon-right">
                  <select
                    id="ddlTax"
                    name="applicable"
                    onChange={this.props.handleChange}
                    class="form-control icon-right">
                    <option value="Select" selected disabled>Applicable</option>
                    <option value='Y'>Yes</option>
                    <option value='N'>No</option>
                  </select>
                  <i class="dropdownIcon"></i>
                </div>
              </div>
            </div>


            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="ubocount">Count</label>
                <input type="text"
                  id="txtMemberCode"
                  name="ubocount"
                  placeholder="Enter UBO Count"
                  onChange={this.props.handleChange}
                  class="form-control"
                  maxLength="3"
                />
              </div>
            </div>
            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="uboname">Name</label>
                <input
                  type="text"
                  id="txtPekrn"
                  name="uboname"
                  placeholder="Enter Name"
                  onChange={this.props.handleChange}
                  class="form-control"
                  maxLength="70"
                />
              </div>
            </div>
            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="fatcapan">PAN</label>
                <input
                  type="text"
                  id="txtFatcaPan"
                  name="ubopan"
                  placeholder="Enter PAN"
                  onChange={this.props.handleChange}
                  class="form-control"
                  maxLength="10"
                />
              </div>
            </div>

            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="ubonationality">Nationality</label>
                <div class="icon-right">
                  <select
                    id="ddlNationality"
                    name="ubonationality"
                    onChange={this.props.handleChange}
                    class="form-control icon-right">
                    {this.props.data.countries.map((name, key) => <option value={name.code} >{name.name}</option>)}
                  </select>
                  <i class="dropdownIcon"></i>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="uboaddresstype">Address Type</label>
                <div class="icon-right">
                  <select
                    id="ddlAddressType"
                    name="uboaddresstype"
                    onChange={this.props.handleChange}
                    class="form-control icon-right">
                    {this.props.data.addresstypes.map((name, key) => <option value={name.code} >{name.name}</option>)}
                  </select>
                  <i class="dropdownIcon"></i>
                </div>
              </div>
            </div>


          </div>
          <AddressComponent
            addresstype={this.state.ubo}
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
          <ResidenceCountry
            data={this.props.data}
            handleChange={this.props.handleChange}
          />

          <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="ubocountryofbirth">Country of Birth</label>
                <div class="icon-right">
                  <select
                    id="ddlCountryBirth"
                    name="ubocountryofbirth"
                    onChange={this.props.handleChange}
                    class="form-control icon-right">
                    {this.props.data.countries.map((name, key) => <option value={name.code} >{name.name}</option>)}
                  </select>
                  <i class="dropdownIcon"></i>
                </div>
              </div>
            </div>


            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="ubodob">Date of Birth</label>
                <input
                  type="text"
                  id="dob"
                  name="ubodob"
                  placeholder="Enter Date of Birth"
                  onChange={this.props.handleChange}
                  class="form-control"
                  maxLength="70"
                />
              </div>
            </div>

            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="ubogender">Gender</label>
                <div class="icon-right">
                  <select
                    id="ddlCountryBirth"
                    name="ubogender"
                    onChange={this.props.handleChange}
                    class="form-control icon-right">
                    <option value="Select" selected disabled></option>
                    <option value='M'>Male</option>
                    <option value='F'>Female</option>
                    <option value='O'>Other</option>
                  </select>
                  <i class="dropdownIcon"></i>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="ubofathername">Father's Name</label>
                <input
                  type="text"
                  id="dob"
                  name="ubofathername"
                  placeholder="Enter Name"
                  onChange={this.props.handleChange}
                  class="form-control"
                  maxLength="50"
                />
              </div>
            </div>

            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="occupation">Occupation</label>
                <div class="icon-right">
                  <select
                    id="ddlOccupation"
                    name="ubooccupation"
                    onChange={this.props.handleChange}
                    class="form-control icon-right">
                    {this.props.data.occupations.map((name, key) => <option value={name.code} >{name.occupation}</option>)}
                  </select>
                  <i class="dropdownIcon"></i>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="uboocctype">Occupation Type</label>
                <div class="icon-right">
                  <select
                    id="ddlOccupationType"
                    name="uboocctype"
                    onChange={this.props.handleChange}
                    class="form-control icon-right">
                    {this.props.data.occtypes.map((name, key) => <option value={name.code} >{name.name}</option>)}
                  </select>
                  <i class="dropdownIcon"></i>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="ubocode">Code</label>
                <div class="icon-right">
                  <select
                    id="ddlCode"
                    name="ubocode"
                    onChange={this.props.handleChange}
                    class="form-control icon-right">
                    {this.props.data.ubocodes.map((name, key) => <option value={name.code} >{name.name}</option>)}
                  </select>
                  <i class="dropdownIcon"></i>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="uboholpc">HOL PC</label>
                <input
                  type="text"
                  id="txtFirstApplicantFirstName"
                  name="uboholpc"
                  placeholder="Enter Date of Birth"
                  onChange={this.props.handleChange}
                  class="form-control"
                  maxLength="3"
                />
              </div>
            </div>
            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="uboselfdec">Self Declaration</label>
                <div class="icon-right">
                  <select
                    id="ddlDataSource"
                    name="uboselfdec"
                    onChange={this.props.handleChange}
                    class="form-control icon-right"
                  >
                    <option selected disabled>Self Declaration</option>
                    <option value='Y'>Yes</option>
                    <option value='N'>No</option>
                  </select>
                  <i class="dropdownIcon"></i>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="ubodecflag">Declaration Flag Type</label>
                <div class="icon-right">
                  <select
                    id="ddlAddressType"
                    name="ubodecflag"
                    onChange={this.props.handleChange}
                    class="form-control icon-right"
                  >
                    <option value="Select" selected disabled>Declaration Flag</option>
                    <option value='Y'>Yes</option>
                    <option value='N'>No</option>
                  </select>
                  <i class="dropdownIcon"></i>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="uboadhar">Adhar of Reporting Person</label>
                <input
                  type="text"
                  id="txtPlaceOfBirth"
                  name="uboadhar"
                  placeholder="Enter Adhar of Reporting Person"
                  onChange={this.props.handleChange}
                  class="form-control"
                  maxLength="30"
                />
              </div>
            </div>

            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="uboupdind">Now or Update of Indicator</label>
                <div class="icon-right">
                  <select
                    id="ddlCountryOfBirth"
                    name="uboupdind"
                    onChange={this.props.handleChange}
                    class="form-control icon-right"
                  >
                    <option value="Select" selected disabled>New Change</option>
                    <option value='C'>C</option>
                    <option value='CP'>CP</option>
                  </select>
                  <i class="dropdownIcon"></i>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="ubologname">Log Name</label>
                <input
                  type="text"
                  id="txtLogName"
                  name="ubologname"
                  placeholder="Enter Log Name"
                  onChange={this.props.handleChange}
                  class="form-control"
                  maxLength="30"
                />
              </div>
            </div>

            <div class="col-md-3 col-sm-12">
              <div class="form-group">
                <label for="ubokycdocupld">FATCA Additional KYC Document Upload</label>
                <div class="icon-right">
                  <input
                    type="text"
                    id="txtNetWorth"
                    name="ubokycdocupld"
                    placeholder="Additional KYC Document Upload"
                    onChange={this.props.handleChange}
                    class="form-control"
                    maxLength="30"
                  />
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-12">

              <div class="form-group">
                <label for="ubodoctype">UBO Document Type</label>
                <div class="icon-right">
                  <input
                    type="text"
                    id="txtNetWorth"
                    name="ubodoctype"
                    placeholder="Enter Document Type"
                    onChange={this.props.handleChange}
                    class="form-control"
                    maxLength="30"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </main >)
  }
}
export default UBOComponent