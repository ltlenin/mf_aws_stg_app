import React from "react"
import ResidenceCountry from './ResidenceCountry'
function FatcaComponent(props) {
  return (
    <main>
      <input type="submit" onClick={props.TestClick} value="Click" />
      <div>
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
              <label for="membercode">Member Code</label>
              <input type="text"
                id="txtMemberCode"
                name="membercode"
                placeholder="Enter Member Code"
                onChange={props.handleChange}
                class="form-control"
                maxLength="20"
              />
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="fatcapan">PAN</label>
              <input
                type="text"
                id="txtFatcaPan"
                name="fatcapan"
                placeholder="Enter PAN"
                onChange={props.handleChange}
                class="form-control"
                maxLength="10"
              />
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="pekrn">PAN Excempt KYC Ref. No.</label>
              <input
                type="text"
                id="txtPekrn"
                name="pekrn"
                placeholder="Enter PAN Excempt KYC Ref. No."
                onChange={props.handleChange}
                class="form-control"
                maxLength="10"
              />
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="tax">GIIN Excemption Code</label>
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
              <label for="name">Name</label>
              <input
                type="text"
                id="txtFirstApplicantFirstName"
                name="name"
                placeholder="Enter Name"
                onChange={props.handleChange}
                class="form-control"
                maxLength="70"
              />
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="dob">Date of Birth</label>
              <input
                type="text"
                id="txtFirstApplicantFirstName"
                name="dob"
                placeholder="Enter Date of Birth"
                onChange={props.handleChange}
                class="form-control"
                maxLength="10"
              />
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="fathername">Father's Name</label>
              <input
                type="text"
                id="txtFirstApplicantFirstName"
                name="fathername"
                placeholder="Enter Date of Birth"
                onChange={props.handleChange}
                class="form-control"
                maxLength="70"
              />
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="spousename">Spouse Name</label>
              <input
                type="text"
                id="txtFirstApplicantFirstName"
                name="spousename"
                placeholder="Enter Spouse Name"
                onChange={props.handleChange}
                class="form-control"
                maxLength="70"
              />
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="datasource">Data Source</label>
              <div class="icon-right">
                <select
                  id="ddlDataSource"
                  name="datasource"
                  onChange={props.handleChange}
                  class="form-control icon-right"
                >
                  <option value="Select" selected disabled>Data Souce</option>
                  <option value='E'>Electronic</option>
                  <option value='P'>Physical</option>
                </select>
                <i class="dropdownIcon"></i>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="gender">Address Type</label>
              <div class="icon-right">
                <select
                  id="ddlAddressType"
                  name="addrestype"
                  onChange={props.handleChange}
                  class="form-control icon-right"
                >
                     {props.data.addresstypes.map((name, key) => <option value={name.code} >{name.name}</option>)}
                </select>
                <i class="dropdownIcon"></i>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="placeofbirth">Place of Birth</label>
              <input
                type="text"
                id="txtPlaceOfBirth"
                name="placeofbirth"
                placeholder="Enter Place of Birth"
                onChange={props.handleChange}
                class="form-control"
                maxLength="60"
              />
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="fatcacountry">Country</label>
              <div class="icon-right">
                <select
                  id={"txt" + props.addresstype + "Country"}
                  name="fatcacountry"
                  onChange={props.handleChange}
                  class="form-control icon-right"
                >
                  {props.data.countries.map((name, key) => <option value={name.code} >{name.name}</option>)}
                </select>
                <i class="dropdownIcon"></i>
              </div>
            </div>
          </div>

        </div>
        <ResidenceCountry
          data={props.data}
          itemno={1}
          addresstype='residence'
          handleChange={props.handleChange}
        />
        <ResidenceCountry
          data={props.data}
          itemno={2}
          handleChange={props.handleChange}
        />
        <ResidenceCountry
          data={props.data}
          itemno={3}
          handleChange={props.handleChange}
        />
        <ResidenceCountry
          data={props.data}
          itemno={4}
          handleChange={props.handleChange}
        />

        <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="wealthstore">Wealth Store</label>
              <div class="icon-right">
                <select
                  id="ddlDataSource"
                  name="wealthstore"
                  onChange={props.handleChange}
                  class="form-control icon-right"
                >
                  {props.data.wealths.map((name, key) => <option value={name.code} >{name.name}</option>)}
                </select>
                <i class="dropdownIcon"></i>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="corpsersec">Corporate Service Sector</label>
              <div class="icon-right">
                <select
                  id="ddlDataSource"
                  name="corpsersec"
                  onChange={props.handleChange}
                  class="form-control icon-right"
                >
                  {props.data.corpservices.map((name, key) => <option value={name.code} >{name.name}</option>)}
                </select>
                <i class="dropdownIcon"></i>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="incomeslab">Income Slab</label>
              <div class="icon-right">
                <select
                  id="ddlDataSource"
                  name="incomeslab"
                  onChange={props.handleChange}
                  class="form-control icon-right"
                >
                  {props.data.incomeslabs.map((name, key) => <option value={name.code} >{name.name}</option>)}
                </select>
                <i class="dropdownIcon"></i>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="networth">Net Worth</label>
              <input
                type="text"
                id="txtNetWorth"
                name="networth"
                placeholder="Enter Net Worth"
                onChange={props.handleChange}
                class="form-control"
                maxLength="20"
              />
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="dateofnetworth">Date of New Worth</label>
              <input
                type="text"
                id="txtDateOfNetWorth"
                name="dateofnetworth"
                placeholder="Enter Net Worth"
                onChange={props.handleChange}
                class="form-control"
                maxLength="10"
              />
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="politicallyexposedperson">Politically Exposed Person</label>
              <div class="icon-right">
                <select
                  id="ddlPoliticallyExposedPerson"
                  name="politicallyexposedperson"
                  onChange={props.handleChange}
                  class="form-control icon-right">
                  <option value="Select" selected disabled>Data Souce</option>
                  <option value='Y'>Yes</option>
                  <option value='Y'>No</option>
                  <option value='Y'>Relative of the PEP</option>
                </select>
                <i class="dropdownIcon"></i>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="occupationcode">Occupation Code</label>
              <div class="icon-right">
                <select
                  id="ddlOccupationCode"
                  name="occupationcode"
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
              <label for="occupationType">Occupation Type</label>
              <div class="icon-right">
                <select
                  id="ddlOccupationType"
                  name="occupationType"
                  onChange={props.handleChange}
                  class="form-control icon-right">
                  {props.data.occtypes.map((name, key) => <option value={name.code} >{name.name}</option>)}
                </select>
                <i class="dropdownIcon"></i>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="exemptioncode">Exemption Code</label>
              <div class="icon-right">
                <select
                  id="ddlExemptionCode"
                  name="exemptioncode"
                  onChange={props.handleChange}
                  class="form-control icon-right">
                  {props.data.exemptions.map((name, key) => <option value={name.code} >{name.name}</option>)}
                </select>
                <i class="dropdownIcon"></i>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="ffidenfe">FFI/DRNFE</label>
              <div class="icon-right">
                <select
                  name="ffidenfe"
                  onChange={props.handleChange}
                  class="form-control icon-right">
                  <option value="Select" selected disabled>Select FFI/DRNFE</option>
                  <option value='FFI'>FFI</option>
                  <option value='DRNFE'>DRNFE</option>
                  <option value='NA'>NA</option>
                </select>
                <i class="dropdownIcon"></i>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="giinnumber">GIIN Number</label>
              <input
                type="text"
                id="txtGIINNumber"
                name="giinnumber"
                placeholder="Enter GIIN Number"
                onChange={props.handleChange}
                class="form-control"
                maxLength="19"
              />
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="sponsoringentity">Sponsoring Entity</label>
              <input
                type="text"
                id="txtSponsoringEntity"
                name="sponsoringentity"
                placeholder="Enter Sponsoring Entity"
                onChange={props.handleChange}
                class="form-control"
                maxLength="60"
              />
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="giin">GIIN NA</label>
              <div class="icon-right">
                <select
                  name="giin"
                  onChange={props.handleChange}
                  class="form-control icon-right">
                  <option value="Select" selected disabled>Select GIIN NA</option>
                  <option value='AF'> Applied for</option>
                  <option value='NR'>Not required to apply for</option>
                  <option value='NO'>Not  obtained  -  Non-participating FI </option>
                </select>
                <i class="dropdownIcon"></i>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="exemption">GIIN Exemption Code</label>
              <div class="icon-right">
                <select
                  id="ddlTax"
                  name="exemption"
                  onChange={props.handleChange}
                  class="form-control icon-right">
                  {props.data.exemptions.map((name, key) => <option value={name.code} >{name.name}</option>)}
                </select>
                <i class="dropdownIcon"></i>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="exchangename">Exchange Name</label>
              <div class="icon-right">
                <select
                  name="exchangename"
                  onChange={props.handleChange}
                  class="form-control icon-right">
                  <option value="Select" selected disabled>Select Exchange Name</option>
                  <option value='B'>BSE</option>
                  <option value='N'>NSE</option>
                  <option value='O'>Others</option>
                </select>
                <i class="dropdownIcon"></i>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="nonfinancialentrycategory">Non Financial Entry Category</label>
              <div class="icon-right">
                <select
                  name="nonfinancialentrycategory"
                  onChange={props.handleChange}
                  class="form-control icon-right">
                  {props.data.nffecategories.map((name, key) => <option value={name.code} >{name.name}</option>)}
                </select>
                <i class="dropdownIcon"></i>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="nonfinancialentrysubcategory">Non Financial Entry Sub Category</label>
              <div class="icon-right">
                <select
                  name="nonfinancialentrysubcategory"
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
              <label for="natureofbusiness">Nature of Business</label>
              <input
                type="text"
                id="txtRelatedToListedGroup"
                name="natureofbusiness"
                placeholder="Enter Nature of Business"
                onChange={props.handleChange}
                class="form-control"
                maxLength="30"
              />
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label for="relatedtolistedgroup">Related To Listed Company</label>
              <input
                type="text"
                id="txtRelatedToListedGroup"
                name="relatedtolistedgroup"
                placeholder="Enter Related To Listed Group"
                onChange={props.handleChange}
                class="form-control"
                maxLength="70"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default FatcaComponent