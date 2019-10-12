import React from "react"
import '../../skelton/css/bootstrap.min.css'
import '../../skelton/css/styles.css'
import '../../skelton/css/perfect-scrollbar.css'
import '../../skelton/js/perfect-scrollbar.jquery'
import '../../skelton/js/script'

function PersonalComponent(props) {
  return (
    <main>
     
      <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="investorcode">Investor Code</label>
            <input
              type="text"
              id="txtInvestorCode"
              name="investorcode"
              placeholder="Enter Investor Code"
              onChange={props.handleChange}
              class="form-control"
              maxLength="20"
            />
          </div>
        </div>
        
        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="branch">Branch</label>
            <input
              type="text"
              id="txtBranch"
              name="branch"
              placeholder="Enter Branch"
              onChange={props.handleChange}
              class="form-control"
              maxLength="5"
            />
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="dealer">Dealer</label>
            <input
              type="text"
              id="txtDealer"
              name="dealer"
              placeholder="Enter Dealer"
              onChange={props.handleChange}
              class="form-control"
              maxLength="5"
            />
          </div>
        </div>

        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="tax">Tax Status</label>
            <div class="icon-right">
              <select
                id="ddlTax"
                name="tax"
                onChange={props.handleChange}
                class="form-control icon-right">
                {props.data.taxstatus.map((name, key) => <option value={name.taxcode} >{name.taxstatus}</option>)}
              </select>
              <i class="dropdownIcon"></i>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="holdingnature">Holding Nature</label>
            <div class="icon-right">
              <select
                id="ddlHoldingNature"
                name="holdingnature"
                onChange={props.handleChange}
                class="form-control icon-right">
                {props.data.holdingnatures.map((name, key) => <option value={name.code} >{name.name}</option>)}
              </select>
              <i class="dropdownIcon"></i>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="communicationmode">Communication Mode</label>
            <div class="icon-right">
              <select
                id="ddlCommunicationMode"
                name="communicationmode"
                onChange={props.handleChange}
                class="form-control icon-right">
                >
                    <option value="P">Physical</option>
                <option value="D">Email</option>
                <option value="M">Mobile</option>
              </select>
              <i class="dropdownIcon"></i>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="divpaymode">Dividend Pay Mode</label>
            <div class="icon-right">
              <select
                id="ddlDivPayMode"
                name="divpaymode"
                onChange={props.handleChange}
                class="form-control icon-right">
                >
                    <option value="01">Cheque</option>
                <option value="02">Direct Credit</option>
                <option value="03">ECS</option>
                <option value="04">NEFT</option>
                <option value="05">RTGS Credit </option>
              </select>
              <i class="dropdownIcon"></i>
            </div>
          </div>
        </div>

      </div>

      <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
        <h3 class="col-12 pl-3">Investor Personal Info</h3>
        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="firstapplicantfirstname">1st Applicant First Name</label>
            <input
              type="text"
              id="txtFirstApplicantFirstName"
              name="firstapplicantfirstname"
              placeholder="Enter 1st Applicant First Name"
              onChange={props.handleChange}
              class="form-control"
              maxLength="35"
            />
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="firstapplicantlastname">1st Applicant Last Name</label>
            <input
              type="text"
              id="txtFirstApplicantFirstName"
              name="firstapplicantlastname"
              placeholder="Enter 1st Applicant Last Name"
              onChange={props.handleChange}
              class="form-control"
              maxLength="35"
            />
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="dateofbirth">Date Of Birth</label>
            <div class="icon-right">
              <input
                type="text"
                id="txtDateOfBirth"
                name="dateofbirth"
                placeholder="Enter Date Of Birth"
                onChange={props.handleChange}
                class="form-control"
                maxLength="20"
              />
              <i class="calenderIcon"></i>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="gender">Gender</label>
            <div class="icon-right">
              <select
                id="ddlGender"
                name="gender"
                onChange={props.handleChange}
                class="form-control icon-right"
              >
                <option value="Select" selected disabled>Select your Gender</option>
                <option value='M'>Male</option>
                <option value='F'>Female</option>
              </select>
              <i class="dropdownIcon"></i>
            </div>
          </div>
        </div>


        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="secondapplicantfirstname">2nd Applicant First Name</label>
            <input
              type="text"
              id="txtSecondApplicantFirstName"
              name="secondapplicantfirstname"
              placeholder="Enter 2nd Applicant First Name"
              onChange={props.handleChange}
              class="form-control"
              maxLength="35"
            />
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="secondapplicantlastname">2nd Applicant Last Name</label>
            <input
              type="text"
              id="txtSecondApplicantLastName"
              name="secondapplicantlastname"
              placeholder="Enter 2nd Applicant Last Name"
              onChange={props.handleChange}
              class="form-control"
              maxLength="35"
            />
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="thirdapplicantfirstname">3rd Applicant First Name</label>
            <input
              id="txtThirdApplicantFirstName"
              name="thirdapplicantfirstname"
              placeholder="Enter 3rd Applicant First Name"
              onChange={props.handleChange}
              class="form-control"
              maxLength="35"
            />
          </div>
        </div>

        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="thirdapplicantlastname">3rd Applicant Last Name</label>
            <input
              id="txtThirdApplicantLastName"
              name="thirdapplicantlastname"
              placeholder="Enter 3rd Applicant Last Name"
              onChange={props.handleChange}
              class="form-control"
              maxLength="35"
            />
          </div>
        </div>

        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="occupation">Occupation</label>
            <div class="icon-right">
              <select
                id="ddlOccupation"
                name="occupation"
                onChange={props.handleChange}
                class="form-control icon-right">
                {props.data.occupations.map((name, key) => <option value={name.code} >{name.occupation}</option>)}
              </select>
              <i class="dropdownIcon"></i>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="status">Status</label>
            <div class="icon-right">
              <select
                id="ddlStatus"
                name="status"
                onChange={props.handleChange}
                class="form-control icon-right">
                >
                    <option value="1">Active</option>
                <option value="0">In-Active</option>
              </select>
              <i class="dropdownIcon"></i>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="mapinno">MAPIN No</label>
            <input
              type="text"
              id="txtMAPINNo"
              name="mapinno"
              placeholder="Enter MAPIN No"
              onChange={props.handleChange}
              class="form-control"
              maxLength="50"
            />
          </div>
        </div>

      </div>

      <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
        <h3 class="col-12 pl-3">PAN Details</h3>
        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="panno1">PAN No 1</label>
            <input
              type="text"
              id="txtPANNo1"
              name="panno1"
              placeholder="Enter PAN  No 1"
              onChange={props.handleChange}
              class="form-control"
              maxLength="10"
            />
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="panno2">PAN No 2</label>
            <input type="text"
              id="txtPANNo2"
              name="panno2"
              placeholder="Enter PAN  No 2"
              onChange={props.handleChange}
              class="form-control"
              maxLength="10"
            />
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="panno3">PAN No 3</label>
            <input id="txtPANNo3"
              name="panno3"
              placeholder="Enter PAN  No 3"
              onChange={props.handleChange}
              class="form-control"
              maxLength="10"
            />
          </div>
        </div>
      </div>
    </main>

  )
}
export default PersonalComponent