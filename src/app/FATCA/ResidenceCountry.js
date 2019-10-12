import React from "react"

function ResidenceCountry(props) {
  return (
    <main>
      <div class="row pt-3 pb-3 pl-4 pr-4">
        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="residencecountry">Residence Country {props.itemno}</label>
            <div class="icon-right">
              <select 
                name={props.addresstype + "country" +props.itemno}
                onChange={props.handleChange}
                class="form-control icon-right"
              >
                {props.data.countries.map((name, key) => <option value={name.code} >{name.name}</option>)}
              </select>
              <i class="dropdownIcon"></i>
            </div>
          </div>
        </div> 

        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="placeofbirth">TPIN/Other Equivalent Number {props.itemno}</label>
            <input
              type="text"
              id="txtPlaceOfBirth"
              name={props.addresstype + "tpin" +props.itemno}
              placeholder={"Enter TPIN/Other Equivalent Number " + props.itemno}
              onChange={props.handleChange}
              class="form-control"
              maxLength="20"
            />
          </div>
        </div>

        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="countryofbirth">Identification Document Type {props.itemno}</label>
            <div class="icon-right">
            <select 
                name={props.addresstype + "idtypecode" +props.itemno}
                onChange={props.handleChange}
                class="form-control icon-right"
              >
                {props.data.idtypes.map((name, key) => <option value={name.code} >{name.type}</option>)}
              </select>
              <i class="dropdownIcon"></i>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default ResidenceCountry