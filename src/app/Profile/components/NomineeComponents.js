import React from "react"
import '../skelton/styles/react-tabs.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';


function NomineeComponents(props) {
  return (
    <main>
      <PerfectScrollbar>
         <div>
              <div class="rTable">
                <div class="rTableRow">
                  <div class="rTableHead"><strong>First Name</strong></div>
                </div>
                <div class="rTableRow">
                  <div class="rTableHead">
                    <input
                      type="text"
                      id="txtNomineeFirstName"
                      placeholder="First Name"
                      name="nomineefirstname"
                      onChange={props.handleChange}
                    /></div>
                </div>
                <div class="rTableRow">
                  <div class="rTableHead"><strong>Last Name</strong></div>
                </div>
                <div class="rTableRow">
                  <div class="rTableHead">
                    <input
                      type="text"
                      id="txtNomineeLastName"
                      placeholder="Last Name"
                      name="nomineelastname"
                      onChange={props.handleChange}
                    /></div>
                </div>

                <div class="rTableRow">
                  <div class="rTableHead"><strong>Relationship</strong></div>
                </div>
                <div class="rTableRow">
                  <div class="rTableHead">
                    <input
                      type="text"
                      id="txtNomineerelationship"
                      placeholder="Address Line1"
                      name="nomineerelationship"
                      onChange={props.handleChange}
                    /></div>
                </div>

                <div class="rTableRow">
                  <div class="rTableHead"><strong>Address Line1</strong></div>
                </div>
                <div class="rTableRow">
                  <div class="rTableHead">
                    <input
                      type="text"
                      id="txtNomineeAddressLine1"
                      placeholder="Address Line1"
                      name="nomineeaddressline1"
                      onChange={props.handleChange}
                    /></div>
                </div>
                <div class="rTableRow">
                  <div class="rTableHead"><strong>Address Line2</strong></div>
                </div>
                <div class="rTableRow">
                  <div class="rTableHead">
                    <input type="text"
                      id="txtNomineeAddressLine2"
                      placeholder="Address Line2"
                      name="nomineeaddressline2"
                      onChange={props.handleChange}
                    /></div>
                </div>
                <div class="rTableRow">
                  <div class="rTableHead"><strong>City</strong></div>
                </div>
                <div class="rTableRow">
                  <div class="rTableHead">
                    <input
                      type="text"
                      id="txtNomineeCity"
                      placeholder="City"
                      name="nomineecity"
                      onChange={props.handleChange}
                    /></div>
                </div>
                <div class="rTableRow">
                  <div class="rTableHead"><strong>State</strong></div>
                </div>
                <div class="rTableRow">
                  <div class="rTableHead">
                    <div className="drop-down">
                      <select
                        id="ddlNomineeState"
                        name="nomineestate"
                        onChange={props.handleChange}
                      >
                        {props.data.states.map((name, key) => <option value={name.code} >{name.name}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                <div class="rTableRow">
                  <div class="rTableHead"><strong>Zip Code</strong></div>
                </div>
                <div class="rTableRow">
                  <div class="rTableHead">
                    <input
                      type="text"
                      id="txtNomineeZipcode"
                      placeholder="Zip Code"
                      name="nomineezipcode"
                      onChange={props.handleChange}
                    /></div>
                </div>
                <div class="rTableRow">
                  <div class="rTableHead"><strong>Country</strong></div>
                </div>
                <div class="rTableRow">
                  <div class="rTableHead">
                    <div className="drop-down">
                      <select
                        id="ddlNomineeCountry"
                        name="nomineecountry"
                        onChange={props.handleChange}
                      >
                        {props.data.countries.map((name, key) => <option value={name.code} >{name.name}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
                <div class="rTableRow">
                  <div class="rTableHead"><strong>Mobile</strong></div>
                </div>
                <div class="rTableRow">
                  <div class="rTableHead">
                    <input
                      type="text"
                      id="txtNomineeMobile"
                      placeholder="Mobile"
                      name="nomineemobile"
                      onChange={props.handleChange}
                    /></div>
                </div>
                <div class="rTableRow">
                  <div class="rTableHead"><strong>Email</strong></div>
                </div>
                <div class="rTableRow">
                  <div class="rTableHead">
                    <input
                      type="text"
                      id="txtNomineeEmail"
                      placeholder="Email"
                      name="nomineeemail"
                      onChange={props.handleChange}
                    /></div>
                </div>
              </div>
            </div>
       </PerfectScrollbar>
    </main>
  )
}
export default NomineeComponents