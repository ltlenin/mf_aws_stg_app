import React, { Component } from "react"
import Message from '../../../app/Utilities/Message'
import Alert from '../../Utilities/AlertMessage'

import PersonalComponent from "../components/PersonalComponent";
import GaurdianComponent from "../components/GaurdianComponent";
import OtherDetailsComponent from "../components/OtherDetailsComponent";
import BankComponent from "../components/BankComponent";
import EKYCComponent from "../components/EKYCComponent";
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

import '../../skelton/css/bootstrap.min.css'
import '../../skelton/css/styles.css'
import '../../skelton/css/perfect-scrollbar.css'
import '../../skelton/images/favicon.png'
//import '../../skelton/js/script.js'
// import '../../skelton/js/perfect-scrollbar.jquery'
require('dotenv').config()
const _API_KEY = process.env.REACT_APP_API_KEY

class ProfileContainer extends Component {
    constructor() {
        super();
        this.state = {
            investorDetails: [],
            nominees: [],
            states: [],
            holdingnatures: [],
            taxstatus: [],
            taxcode: '',
            occupations: [],
            countries: [],
            bankcodes: [],
            accounttypes: [],
            banklist: [],
            idprooftypes: [],
            counter: 0,
            tabindex: 0,
            message: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.TestClick = this.TestClick.bind(this);
    }

    TestClick(event) {
        event.preventDefault()
        this.setState({ message: 'Client is registered successfully!' });
        /* #region - Commenting for implementing page redirect  */
        // switch (this.state.tabIndex) {
        //     case 0:
        //         var today = new Date(),
        //             date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
        //                 + '-' + today.getHours() + '-' + today.getMinutes() + '-' + today.getSeconds();

        //         // Save Personal Details
        //         let personalDetails = {
        //             "investorcode": this.state.investorcode,
        //             "membercode": this.state.membercode,
        //             "branch": this.state.branch,
        //             "dealer": this.state.dealer,
        //             "taxstatus": this.state.tax,
        //             "holdingnature": this.state.holdingnature,
        //             "communicationmode": this.state.communicationmode,
        //             "divpaymode": this.state.divpaymode,
        //             "firstapplicantfirstname": this.state.firstapplicantfirstname,
        //             "firstapplicantlastname": this.state.firstapplicantlastname,
        //             "dateofbirth": this.state.dateofbirth,
        //             "gender": this.state.gender,
        //             "secondapplicantfirstname": this.state.secondapplicantfirstname,
        //             "secondapplicantlastname": this.state.secondapplicantlastname,
        //             "thirdapplicantfirstname": this.state.thirdapplicantfirstname,
        //             "thirdapplicantlastname": this.state.thirdapplicantlastname,
        //             "occupation": this.state.occupation,
        //             "status": this.state.status,
        //             "mapinno": this.state.mapinno,
        //             "panno1": this.state.panno1,
        //             "panno2": this.state.panno2,
        //             "panno3": this.state.panno3,
        //             "createdby": "Lenin",
        //             "createddatetime": date,
        //             "modifiedby": "LT",
        //             "modifieddatetime": date,
        //         }
        //         import("../../central/crud.js").then(crud => {
        //             console.log(crud.post(_API_KEY + '/MasterList/', personalDetails));
        //         });
        //         break;

        //     case 1:
        //         // Save Other Details
        //         let otherdetails = {
        //             "membercode": "12345",
        //             "investorcode": "INV000001",

        //             "depositoryname": 'Depository Name',
        //             "clientdefaultdp": this.state.clientdefaultdp,
        //             "clientcdsldpid": this.state.clientcdsldpid,
        //             "clientcdslcltid": this.state.clientcdslcltid,
        //             "cleintnsdldpid": this.state.cleintnsdldpid,
        //             "clientnsdlcltid": this.state.clientnsdlcltid,
        //         }

        //         import("../../central/crud.js").then(crud => {
        //             console.log(crud.post(_API_KEY + '/OtherDetailsList/', otherdetails));
        //         });

        //         let indiaAddress = {
        //             membercode: "12345",
        //             investorcode: "INV000001",

        //             addresstypeid: 1,
        //             addressline1: this.state.indiaaddressline1,
        //             addressline2: this.state.indiaaddressline2,
        //             addressline3: this.state.indiaaddressline3,
        //             city: this.state.indiacity,
        //             pincode: this.state.indiapincode,
        //             state: this.state.indiastate,
        //             country: this.state.indiacountry,
        //             residentialphoneno: this.state.indiaresidentialphoneno,
        //             residentialfax: this.state.indiaresidentialfax,
        //             officephone: this.state.indiaofficephone,
        //             officefax: this.state.indiaofficefax,
        //             email: this.state.indiaemail,
        //         }
        //         import("../../central/crud.js").then(crud => {
        //             console.log(crud.post(_API_KEY + '/AddressList/', indiaAddress));
        //         });

        //         let foriegnAddress = {
        //             "membercode": "12345",
        //             "investorcode": "INV000001",

        //             addresstypeid: 2,
        //             addressline1: this.state.foriegnaddressline1,
        //             addressline2: this.state.foriegnaddressline2,
        //             addressline3: this.state.foriegnaddressline3,
        //             city: this.state.foriegncity,
        //             pincode: this.state.foriegnpincode,
        //             state: this.state.foriegnstate,
        //             country: this.state.foriegncountry,
        //             residentialphoneno: this.state.foriegnresidentialphoneno,
        //             residentialfax: this.state.foriegnresidentialfax,
        //             officephone: this.state.foriegnofficephone,
        //             officefax: this.state.foriegnofficefax,
        //             email: this.state.foriegnemail,
        //         }
        //         import("../../central/crud.js").then(crud => {
        //             console.log(crud.post(_API_KEY + '/AddressList/', foriegnAddress));
        //         });
        //         break;
        //     case 2:
        //         //Gaurdian Details
        //         let nominee = {
        //             membercode: "12345",
        //             investorcode: "INV000001",

        //             addresstypeid: 3,
        //             relationshipflag: 1,
        //             firstname: this.state.nomineefirstname,
        //             lastname: this.state.nomineelastname,
        //             relationship: this.state.nomineerelationship,
        //             pannumber: this.state.nomineerelationpan,
        //         }
        //         import("../../central/crud.js").then(crud => {
        //             console.log(crud.post(_API_KEY + '/NomineeList/', nominee));
        //         });

        //         let nomineeAddress = {
        //             membercode: "12345",
        //             investorcode: "INV000001",

        //             addresstypeid: 3,
        //             addressline1: this.state.nomineeaddressline1,
        //             addressline2: this.state.nomineeaddressline2,
        //             addressline3: '',
        //             city: this.state.nomineecity,
        //             pincode: this.state.gaurdianpincode,
        //             state: this.state.nomineestate,
        //             country: this.state.nomineecountry,
        //             residentialphoneno: '',
        //             residentialfax: '',
        //             officephone: '',
        //             officefax: '',
        //             mobileno: this.state.nomineemobileno,
        //             email: this.state.nomineeemail,
        //         }
        //         import("../../central/crud.js").then(crud => {
        //             console.log(crud.post(_API_KEY + '/AddressList/', nomineeAddress));
        //         });

        //         //Nominee Details
        //         let gaurdian = {
        //             membercode: "12345",
        //             investorcode: "INV000001",

        //             addresstypeid: 4,
        //             relationshipflag: 2,
        //             firstname: this.state.gaurdianfirstname,
        //             lastname: this.state.gaurdianlastname,
        //             relationship: this.state.gaurdianrelationship,
        //             pannumber: this.state.gaurdiarelationpan,

        //         }
        //         import("../../central/crud.js").then(crud => {
        //             console.log(crud.post(_API_KEY + '/NomineeList/', gaurdian));
        //         });


        //         let gaurdianAddress = {
        //             membercode: "12345",
        //             investorcode: "INV000001",

        //             addresstypeid: 4,
        //             addressline1: this.state.gaurdianaddressline1,
        //             addressline2: this.state.gaurdianaddressline2,
        //             addressline3: '',
        //             city: this.state.gaurdiancity,
        //             pincode: this.state.gaurdianpincode,
        //             state: this.state.gaurdianstate,
        //             country: this.state.gaurdiancountry,
        //             residentialphoneno: '',
        //             residentialfax: '',
        //             officephone: '',
        //             officefax: '',
        //             mobileno: this.state.gaurdianmobileno,
        //             email: this.state.gaurdianemail,
        //         }
        //         import("../../central/crud.js").then(crud => {
        //             console.log(crud.post(_API_KEY + '/AddressList/', gaurdianAddress));
        //         });

        //         break;
        //     case 3:
        //         if (this.state.ifsccode1 !== undefined && this.state.ifsccode1 !== '') {

        //             let bank1 = {
        //                 membercode: "12345",
        //                 investorcode: "INV000001",
        //                 ifsccode: this.state.ifsccode1,
        //                 accountnumber: this.state.accountno1,
        //                 accounttype: this.state.accountype1,
        //                 isdefault: this.state.isdefault1,

        //             }
        //             import("../../central/crud.js").then(crud => {
        //                 console.log(crud.post(_API_KEY + '/ClientBankList/', bank1));
        //             });

        //         }
        //         if (this.state.ifsccode2 !== undefined && this.state.ifsccode2 !== '') {

        //             let bank2 = {
        //                 membercode: "12345",
        //                 investorcode: "INV000001",
        //                 ifsccode: this.state.ifsccode2,
        //                 accountnumber: this.state.accountno2,
        //                 accounttype: this.state.accountype2,
        //                 isdefault: this.state.isdefault2,

        //             }
        //             import("../../central/crud.js").then(crud => {
        //                 console.log(crud.post(_API_KEY + '/ClientBankList/', bank2));
        //             });
        //         }
        //         if (this.state.ifsccode3 !== undefined && this.state.ifsccode3 !== '') {

        //             let bank3 = {
        //                 membercode: "12345",
        //                 investorcode: "INV000001",
        //                 ifsccode: this.state.ifsccode3,
        //                 accountnumber: this.state.accountno3,
        //                 accounttype: this.state.accountype3,
        //                 isdefault: this.state.isdefault3,

        //             }
        //             import("../../central/crud.js").then(crud => {
        //                 console.log(crud.post(_API_KEY + '/ClientBankList/', bank3));
        //             });
        //         }
        //         if (this.state.ifsccode4 !== undefined && this.state.ifsccode4 !== '') {

        //             let bank4 = {
        //                 membercode: "12345",
        //                 investorcode: "INV000001",
        //                 ifsccode: this.state.ifsccode4,
        //                 accountnumber: this.state.accountno4,
        //                 accounttype: this.state.accountype4,
        //                 isdefault: this.state.isdefault4,
        //             }
        //             import("../../central/crud.js").then(crud => {
        //                 console.log(crud.post(_API_KEY + '/ClientBankList/', bank4));
        //             });
        //         }
        //         if (this.state.ifsccode5 !== undefined && this.state.ifsccode5 !== '') {

        //             let bank5 = {
        //                 membercode: "12345",
        //                 investorcode: "INV000001",
        //                 ifsccode: this.state.ifsccode5,
        //                 accountnumber: this.state.accountno5,
        //                 accounttype: this.state.accountype5,
        //                 isdefault: this.state.isdefault5,
        //             }
        //             import("../../central/crud.js").then(crud => {
        //                 console.log(crud.post(_API_KEY + '/ClientBankList/', bank5));
        //             });
        //         }
        //         break;
        //     case 4:
        //         //Gaurdian Details
        //         let ekyc = {
        //             membercode: "12345",
        //             investorcode: "INV000001",

        //             idtype: this.state.idtype,
        //             identificationno: this.state.identificationno,
        //             expirydate: this.state.expirydate,
        //             filepath1: "filepath1",
        //             filepath2: "filepath2",
        //             filepath3: "filepath3",
        //             sno: 1
        //         }
        //         import("../../central/crud.js").then(crud => {
        //             console.log(crud.post(_API_KEY + '/EKYCList/', ekyc));
        //         });

        //         // oreder page

        //         let orderContainerUrl = '/OrderContainer'
        //         this.props.history.push(orderContainerUrl)

        //         break;
        //     default:
        //         return 0;
        // }
        /* #endregion */

    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    componentDidMount() {
        this.setState({ message: null });
        fetch(_API_KEY + '/InverstorStateList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ states: data });
            })

        fetch(_API_KEY + '/HoldingNatureList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ holdingnatures: data });
            })

        fetch(_API_KEY + '/TaxStatusList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ taxstatus: data, taxcode: data.taxcode });
            })

        fetch(_API_KEY + '/OccupationList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ occupations: data });
            })

        fetch(_API_KEY + '/CountryList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ countries: data });
            })

        fetch(_API_KEY + '/BankCodeList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ bankcodes: data });
            })
        fetch(_API_KEY + '/AccountTypeList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ accounttypes: data });
            })
        fetch(_API_KEY + '/IdentificationList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ idprooftypes: data });
            })

    }
    componentWillUnmount() {
        this.setState({ message: null });
    }
    render() {
        return (
            <PerfectScrollbar>

                <div className="tabWrap p-4">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link  active" href="#invMasterList" role="tab" data-toggle="tab" aria-selected="true">Personal Details</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#invContactInfo" role="tab" data-toggle="tab">Other Details</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#invNomineeInfo" role="tab" data-toggle="tab">Gaurdian & Nominee Details</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#invBankDet" role="tab" data-toggle="tab">Bank Details</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#invIdProofDet" role="tab" data-toggle="tab">EKYC</a>
                        </li>
                        <li>
                            {this.state.message ? <Alert message={this.state.message} /> : null}
                        </li>
                        <li>
                            <div class="pr-4 pb-3 text-right" >
                                <button type="reset" class="btn btn-primary ml-3">Previous</button>
                                <button type="reset" class="btn btn-primary ml-3" >Next</button>
                            </div>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="invMasterList">
                            <PersonalComponent key="personalComp"
                                data={this.state}
                                handleChange={this.handleChange}
                                TestClick={this.TestClick}
                            />
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="invContactInfo">
                            <OtherDetailsComponent key="otherComp"
                                data={this.state}
                                handleChange={this.handleChange}
                                TestClick={this.TestClick}
                            />
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="invNomineeInfo">

                            <GaurdianComponent key="gaurdianComp"
                                data={this.state}
                                handleChange={this.handleChange}
                                TestClick={this.TestClick}
                            />

                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="invBankDet">

                            <BankComponent key="bankComp"
                                data={this.state}
                                handleChange={this.handleChange}
                                TestClick={this.TestClick}
                            />

                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="invIdProofDet">

                            <EKYCComponent key="ekycComp"
                                data={this.state}
                                handleChange={this.handleChange}
                                TestClick={this.TestClick}
                            /> </div>
                    </div>
                </div>
            </PerfectScrollbar>
        )
    }
}
export default ProfileContainer