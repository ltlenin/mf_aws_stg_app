import React, { Component } from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PerfectScrollbar from 'react-perfect-scrollbar'

import PersonalComponent from "../components/PersonalComponent";
import GaurdianComponent from "../components/GaurdianComponent";
import OtherDetailsComponent from "../components/OtherDetailsComponent";
import BankComponent from "../components/BankComponent";
import EKYCComponent from "../components/EKYCComponent";

import '../../skelton/css/bootstrap.min.css'
import '../../skelton/css/styles.css'
import '../../skelton/css/perfect-scrollbar.css'
import '../../skelton/images/favicon.png'
import '../../skelton/js/script.js'
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../../skelton/styles/react-tabs.css';

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
            tabindex: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.TestClick = this.TestClick.bind(this);
    }

    TestClick(event) {
        event.preventDefault()
        /* #region - Commenting for implementing page redirect  */
        switch (this.state.tabIndex) {
            case 0:
                var today = new Date(),
                    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
                        + '-' + today.getHours() + '-' + today.getMinutes() + '-' + today.getSeconds();

                // Save Personal Details
                let personalDetails = {
                    "investorcode": this.state.investorcode,
                    "membercode": this.state.membercode,
                    "branch": this.state.branch,
                    "dealer": this.state.dealer,
                    "taxstatus": this.state.tax,
                    "holdingnature": this.state.holdingnature,
                    "communicationmode": this.state.communicationmode,
                    "divpaymode": this.state.divpaymode,
                    "firstapplicantfirstname": this.state.firstapplicantfirstname,
                    "firstapplicantlastname": this.state.firstapplicantlastname,
                    "dateofbirth": this.state.dateofbirth,
                    "gender": this.state.gender,
                    "secondapplicantfirstname": this.state.secondapplicantfirstname,
                    "secondapplicantlastname": this.state.secondapplicantlastname,
                    "thirdapplicantfirstname": this.state.thirdapplicantfirstname,
                    "thirdapplicantlastname": this.state.thirdapplicantlastname,
                    "occupation": this.state.occupation,
                    "status": this.state.status,
                    "mapinno": this.state.mapinno,
                    "panno1": this.state.panno1,
                    "panno2": this.state.panno2,
                    "panno3": this.state.panno3,
                    "createdby": "Lenin",
                    "createddatetime": date,
                    "modifiedby": "LT",
                    "modifieddatetime": date,
                }
                import("../../central/crud.js").then(crud => {
                    console.log(crud.post('http://127.0.0.1:8000/MasterList/', personalDetails));
                });
                break;

            case 1:
                // Save Other Details
                let otherdetails = {
                    "membercode": "12345",
                    "investorcode": "INV000001",

                    "depositoryname": 'Depository Name',
                    "clientdefaultdp": this.state.clientdefaultdp,
                    "clientcdsldpid": this.state.clientcdsldpid,
                    "clientcdslcltid": this.state.clientcdslcltid,
                    "cleintnsdldpid": this.state.cleintnsdldpid,
                    "clientnsdlcltid": this.state.clientnsdlcltid,
                }

                import("../../central/crud.js").then(crud => {
                    console.log(crud.post('http://127.0.0.1:8000/OtherDetailsList/', otherdetails));
                });

                let indiaAddress = {
                    membercode: "12345",
                    investorcode: "INV000001",

                    addresstypeid: 1,
                    addressline1: this.state.indiaaddressline1,
                    addressline2: this.state.indiaaddressline2,
                    addressline3: this.state.indiaaddressline3,
                    city: this.state.indiacity,
                    pincode: this.state.indiapincode,
                    state: this.state.indiastate,
                    country: this.state.indiacountry,
                    residentialphoneno: this.state.indiaresidentialphoneno,
                    residentialfax: this.state.indiaresidentialfax,
                    officephone: this.state.indiaofficephone,
                    officefax: this.state.indiaofficefax,
                    email: this.state.indiaemail,
                }
                import("../../central/crud.js").then(crud => {
                    console.log(crud.post('http://127.0.0.1:8000/AddressList/', indiaAddress));
                });

                let foriegnAddress = {
                    "membercode": "12345",
                    "investorcode": "INV000001",

                    addresstypeid: 2,
                    addressline1: this.state.foriegnaddressline1,
                    addressline2: this.state.foriegnaddressline2,
                    addressline3: this.state.foriegnaddressline3,
                    city: this.state.foriegncity,
                    pincode: this.state.foriegnpincode,
                    state: this.state.foriegnstate,
                    country: this.state.foriegncountry,
                    residentialphoneno: this.state.foriegnresidentialphoneno,
                    residentialfax: this.state.foriegnresidentialfax,
                    officephone: this.state.foriegnofficephone,
                    officefax: this.state.foriegnofficefax,
                    email: this.state.foriegnemail,
                }
                import("../../central/crud.js").then(crud => {
                    console.log(crud.post('http://127.0.0.1:8000/AddressList/', foriegnAddress));
                });
                break;
            case 2:
                //Gaurdian Details
                let nominee = {
                    membercode: "12345",
                    investorcode: "INV000001",

                    addresstypeid: 3,
                    relationshipflag: 1,
                    firstname: this.state.nomineefirstname,
                    lastname: this.state.nomineelastname,
                    relationship: this.state.nomineerelationship,
                    pannumber: this.state.nomineerelationpan,
                }
                import("../../central/crud.js").then(crud => {
                    console.log(crud.post('http://127.0.0.1:8000/NomineeList/', nominee));
                });

                let nomineeAddress = {
                    membercode: "12345",
                    investorcode: "INV000001",

                    addresstypeid: 3,
                    addressline1: this.state.nomineeaddressline1,
                    addressline2: this.state.nomineeaddressline2,
                    addressline3: '',
                    city: this.state.nomineecity,
                    pincode: this.state.gaurdianpincode,
                    state: this.state.nomineestate,
                    country: this.state.nomineecountry,
                    residentialphoneno: '',
                    residentialfax: '',
                    officephone: '',
                    officefax: '',
                    mobileno: this.state.nomineemobileno,
                    email: this.state.nomineeemail,
                }
                import("../../central/crud.js").then(crud => {
                    console.log(crud.post('http://127.0.0.1:8000/AddressList/', nomineeAddress));
                });

                //Nominee Details
                let gaurdian = {
                    membercode: "12345",
                    investorcode: "INV000001",

                    addresstypeid: 4,
                    relationshipflag: 2,
                    firstname: this.state.gaurdianfirstname,
                    lastname: this.state.gaurdianlastname,
                    relationship: this.state.gaurdianrelationship,
                    pannumber: this.state.gaurdiarelationpan,

                }
                import("../../central/crud.js").then(crud => {
                    console.log(crud.post('http://127.0.0.1:8000/NomineeList/', gaurdian));
                });


                let gaurdianAddress = {
                    membercode: "12345",
                    investorcode: "INV000001",

                    addresstypeid: 4,
                    addressline1: this.state.gaurdianaddressline1,
                    addressline2: this.state.gaurdianaddressline2,
                    addressline3: '',
                    city: this.state.gaurdiancity,
                    pincode: this.state.gaurdianpincode,
                    state: this.state.gaurdianstate,
                    country: this.state.gaurdiancountry,
                    residentialphoneno: '',
                    residentialfax: '',
                    officephone: '',
                    officefax: '',
                    mobileno: this.state.gaurdianmobileno,
                    email: this.state.gaurdianemail,
                }
                import("../../central/crud.js").then(crud => {
                    console.log(crud.post('http://127.0.0.1:8000/AddressList/', gaurdianAddress));
                });

                break;
            case 3:
                if (this.state.ifsccode1 !== undefined && this.state.ifsccode1 !== '') {

                    let bank1 = {
                        membercode: "12345",
                        investorcode: "INV000001",
                        ifsccode: this.state.ifsccode1,
                        accountnumber: this.state.accountno1,
                        accounttype: this.state.accountype1,
                        isdefault: this.state.isdefault1,

                    }
                    import("../../central/crud.js").then(crud => {
                        console.log(crud.post('http://127.0.0.1:8000/ClientBankList/', bank1));
                    });

                }
                if (this.state.ifsccode2 !== undefined && this.state.ifsccode2 !== '') {

                    let bank2 = {
                        membercode: "12345",
                        investorcode: "INV000001",
                        ifsccode: this.state.ifsccode2,
                        accountnumber: this.state.accountno2,
                        accounttype: this.state.accountype2,
                        isdefault: this.state.isdefault2,

                    }
                    import("../../central/crud.js").then(crud => {
                        console.log(crud.post('http://127.0.0.1:8000/ClientBankList/', bank2));
                    });
                }
                if (this.state.ifsccode3 !== undefined && this.state.ifsccode3 !== '') {

                    let bank3 = {
                        membercode: "12345",
                        investorcode: "INV000001",
                        ifsccode: this.state.ifsccode3,
                        accountnumber: this.state.accountno3,
                        accounttype: this.state.accountype3,
                        isdefault: this.state.isdefault3,

                    }
                    import("../../central/crud.js").then(crud => {
                        console.log(crud.post('http://127.0.0.1:8000/ClientBankList/', bank3));
                    });
                }
                if (this.state.ifsccode4 !== undefined && this.state.ifsccode4 !== '') {

                    let bank4 = {
                        membercode: "12345",
                        investorcode: "INV000001",
                        ifsccode: this.state.ifsccode4,
                        accountnumber: this.state.accountno4,
                        accounttype: this.state.accountype4,
                        isdefault: this.state.isdefault4,
                    }
                    import("../../central/crud.js").then(crud => {
                        console.log(crud.post('http://127.0.0.1:8000/ClientBankList/', bank4));
                    });
                }
                if (this.state.ifsccode5 !== undefined && this.state.ifsccode5 !== '') {

                    let bank5 = {
                        membercode: "12345",
                        investorcode: "INV000001",
                        ifsccode: this.state.ifsccode5,
                        accountnumber: this.state.accountno5,
                        accounttype: this.state.accountype5,
                        isdefault: this.state.isdefault5,
                    }
                    import("../../central/crud.js").then(crud => {
                        console.log(crud.post('http://127.0.0.1:8000/ClientBankList/', bank5));
                    });
                }
                break;
            case 4:
                //Gaurdian Details
                let ekyc = {
                    membercode: "12345",
                    investorcode: "INV000001",

                    idtype: this.state.idtype,
                    identificationno: this.state.identificationno,
                    expirydate: this.state.expirydate,
                    filepath1: "filepath1",
                    filepath2: "filepath2",
                    filepath3: "filepath3",
                    sno: 1
                }
                import("../../central/crud.js").then(crud => {
                    console.log(crud.post('http://127.0.0.1:8000/EKYCList/', ekyc));
                });

                // oreder page

                let orderContainerUrl = '/OrderContainer'
                this.props.history.push(orderContainerUrl)

                break;
            default:
                return 0;
        }
        /* #endregion */

    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    componentDidMount() {

        fetch('http://127.0.0.1:8000/InverstorStateList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ states: data });
            })

        fetch('http://127.0.0.1:8000/HoldingNatureList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ holdingnatures: data });
            })

        fetch('http://127.0.0.1:8000/TaxStatusList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ taxstatus: data, taxcode: data.taxcode });
            })

        fetch('http://127.0.0.1:8000/OccupationList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ occupations: data });
            })

        fetch('http://127.0.0.1:8000/CountryList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ countries: data });
            })

        fetch('http://127.0.0.1:8000/BankCodeList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ bankcodes: data });
            })
        fetch('http://127.0.0.1:8000/AccountTypeList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ accounttypes: data });
            })
        fetch('http://127.0.0.1:8000/IdentificationList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ idprooftypes: data });
            })

    }



    render() {
        return (
            <PerfectScrollbar>
                <div class="tabWrap p-4">
                    <Tabs selectedIndex={this.props.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })} >
                        <TabList className="nav nav-tabs" role="tablist">
                            <Tab className="nav-item">
                                <div class="nav-link  active" data-toggle="tab" aria-selected="true">Personal Details</div>
                            </Tab>
                            <Tab className="nav-item">
                                <div class="nav-link" data-toggle="tab">Other Details</div>
                            </Tab>
                            <Tab className="nav-item">
                                <div class="nav-link" data-toggle="tab">Gaurdian & Nominee Details</div>
                            </Tab>
                            <Tab className="nav-item">
                                <div class="nav-link" data-toggle="tab" >Bank Details</div>
                            </Tab>
                            <Tab className="nav-item">
                                <div class="nav-link" data-toggle="tab" >EKYC</div>
                            </Tab>
                        </TabList>
                        <div class="tab-content" >
                            <TabPanel>
                                <PersonalComponent
                                    data={this.state}
                                    handleChange={this.handleChange}
                                    TestClick={this.TestClick}
                                />

                            </TabPanel>
                            <TabPanel>
                                <OtherDetailsComponent
                                    data={this.state}
                                    handleChange={this.handleChange}
                                    TestClick={this.TestClick}
                                />
                            </TabPanel>

                            <TabPanel>
                                <GaurdianComponent
                                    data={this.state}
                                    handleChange={this.handleChange}
                                    TestClick={this.TestClick}
                                />
                            </TabPanel>

                            <TabPanel>
                                <BankComponent
                                    data={this.state}
                                    handleChange={this.handleChange}
                                    TestClick={this.TestClick}
                                />
                            </TabPanel>
                            <TabPanel>
                                <EKYCComponent
                                    data={this.state}
                                    handleChange={this.handleChange}
                                    TestClick={this.TestClick}
                                />
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </PerfectScrollbar>
        )
    }
}
export default ProfileContainer