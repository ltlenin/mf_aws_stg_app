import React from "react"
function CKYCComponent(props) {
  return (
    <main>
      <input type="submit" onClick={props.TestClick} value="Click" />
      <div>
        <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="kycpan">PAN</label>
              <input type="text"
                id="txtMemberCode"
                name="kycpan"
                placeholder="Enter PAN"
                onChange={props.handleChange}
                class="form-control"
                maxLength="10"
              />
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="kycfirstholder">KYC Type - 1st Holder</label>
              <div class="icon-right">
                <select
                  id="ddlKycFirstHolder"
                  name="kycfirstholder"
                  onChange={props.handleChange}
                  class="form-control icon-right">
                  <option value="Select" selected disabled>Select KYC Type - 1st Holder</option>
                  <option value='K'>KRA Compliant</option>
                  <option value='C'>CKYC Compliant</option> 
                </select>
                <i class="dropdownIcon"></i>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="kycsecondholder">KYC Type - 2nd Holder</label>
              <div class="icon-right">
                <select
                  id="ddlKycSecondHolder"
                  name="kycsecondholder"
                  onChange={props.handleChange}
                  class="form-control icon-right">
                  <option value="Select" selected disabled>Select KYC Type - 2nd Holder</option>
                  <option value='K'>KRA Compliant</option>
                  <option value='C'>CKYC Compliant</option> 
                </select>
                <i class="dropdownIcon"></i>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="kycthridholder">KYC Type - 3rd Holder</label>
              <div class="icon-right">
                <select
                  id="ddlKycThridHolder"
                  name="kycthridholder"
                  onChange={props.handleChange}
                  class="form-control icon-right">
                 <option value="Select" selected disabled>Select KYC Type - 3rd Holder</option>
                  <option value='K'>KRA Compliant</option>
                  <option value='C'>CKYC Compliant</option> 
                </select>
                <i class="dropdownIcon"></i>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="kyctypegaurdian">KYC Type - Gaurdian</label>
              <div class="icon-right">
                <select
                  id="ddlKycThridHolder"
                  name="kyctypegaurdian"
                  onChange={props.handleChange}
                  class="form-control icon-right">
                  <option value="Select" selected disabled>Select KYC Type - Gaurdian</option>
                  <option value='K'>KRA Compliant</option>
                  <option value='C'>CKYC Compliant</option> 
                </select>
                <i class="dropdownIcon"></i>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="firstholderkycno">First Holder CKYC Number</label>
              <input
                type="text"
                id="txtFirstHolderKYCNo"
                name="firstholderkycno"
                placeholder="Enter First Holder CKYC Number"
                onChange={props.handleChange}
                class="form-control"
                maxLength="14"
              />
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="secondholderkycno">Second Holder CKYC Number</label>
              <input
                type="text"
                id="txtSecondHolderKYCNo"
                name="secondholderkycno"
                placeholder="Enter Second Holder CKYC Number"
                onChange={props.handleChange}
                class="form-control"
                maxLength="14"
              />
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="thirdholderkycno">Thrid Holder CKYC Number</label>
              <input
                type="text"
                id="txtThirdHolderKYCNo"
                name="thirdholderkycno"
                placeholder="Enter Thrid Holder CKYC Number"
                onChange={props.handleChange}
                class="form-control"
                maxLength="14"
              />
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="gaurdiankycno">Gaurdian CKYC Number</label>
              <input
                type="text"
                id="txtGaurdianKycNo"
                name="gaurdiankycno"
                placeholder="Enter Gaurdian CKYC Number"
                onChange={props.handleChange}
                class="form-control"
                maxLength="14"
              />
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="jointholder1dob">Joint Holder 1 DOB</label>
              <input
                type="text"
                id="txtJointHolder1DOB"
                name="jointholder1dob"
                placeholder="Enter Joint Holder 1 DOB"
                onChange={props.handleChange}
                class="form-control"
                maxLength="10"
              />
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="jointholder2dob">Joint Holder 2 DOB</label>
              <input
                type="text"
                id="txtJointHolder2DOB"
                name="jointholder2dob"
                placeholder="Enter Joint Holder 2 DOB"
                onChange={props.handleChange}
                class="form-control"
                maxLength="10"
              />
            </div>
          </div>
 

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="gaurdiankycno">Guardian CKYC DOB</label>
              <input
                type="text"
                id="txtGuardianCKYCDOB"
                name="gaurdiankycno"
                placeholder="Enter Guardian CKYC DOB"
                onChange={props.handleChange}
                class="form-control"
                maxLength="10"
              />
            </div>
          </div>

        </div>
      </div>
    </main >)
}

export default CKYCComponent