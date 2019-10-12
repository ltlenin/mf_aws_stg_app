import React, { Component } from "react"
import '../skelton/styles/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import FatcaComponent from './FATCAComponent'
import UBOComponent from './UBOComponent'

import '../skelton/css/bootstrap.min.css'
import '../skelton/css/styles.css'
import '../skelton/css/perfect-scrollbar.css'
import '../skelton/images/favicon.png'
import '../skelton/js/script.js'
 
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import CKYCComponent from "./CKYC";

class FATCAContainer extends Component {
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
            counter: 0,
            tabindex: 0,
            idtypes: [],
            wealths: [],
            corpservices: [],
            incomeslabs: [],
            occtypes: [],
            exemptions: [],
            nffecategories: [],
            addresstypes: [],
            ubocodes: [],

        }
        this.handleChange = this.handleChange.bind(this);
        this.TestClick = this.TestClick.bind(this);
    }

    TestClick(event) {
        event.preventDefault()
        alert(this.state.tabindex)
        console.clear()
        switch (this.state.tabindex) {
            case 0:
                var today = new Date(),
                    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
                        + '-' + today.getHours() + '-' + today.getMinutes() + '-' + today.getSeconds();
                // Save Other Details
                let fatcaDetails = {
                    "membercode": "12345",
                    "investorcode": "INV000001",

                    "pan": this.state.fatcapan,
                    "pekrn": this.state.pekrn,
                    "taxstatus": this.state.tax,
                    "name": this.state.name,
                    "dob": this.state.dob,
                    "fathername": this.state.fathername,
                    "spousename": this.state.spousename,
                    "datasource": this.state.datasource,
                    "addresstype": this.state.addrestype,
                    "placeofbirth": this.state.placeofbirth,
                    "country": this.state.fatcacountry,
                    "wealthstore": this.state.wealthstore,
                    "corporateservicesector": this.state.corpsersec,
                    "incomeslab": this.state.incomeslab,
                    "networth": this.state.networth,
                    "dateofnewworth": this.state.dateofnetworth,
                    "pep": this.state.politicallyexposedperson,
                    "occupationcode": this.state.occupationcode,
                    "occupationtype": this.state.occupationType,
                    "exemptioncode": this.state.exemptioncode,
                    "ffi_drnfe": this.state.ffidenfe,
                    "giinnumber": this.state.giinnumber,
                    "sponsoringentity": this.state.sponsoringentity,
                    "giinna": this.state.giin,
                    "giinexemc": this.state.exemption,
                    "exchangename": this.state.exchangename,
                    "nonfinancialentrycategory": this.state.nonfinancialentrycategory,
                    "nonfinancialentrysubcategory": this.state.nonfinancialentrysubcategory,
                    "natureofbusiness": this.state.natureofbusiness,
                    "relatedtolistedcompany": this.state.relatedtolistedgroup,
                }

                console.log(fatcaDetails)
                import("../central/crud.js").then(crud => {
                    console.log(crud.post('http://127.0.0.1:8000/FatcaList/', fatcaDetails));
                });

                // Residence 1
                let residence1 = {
                    "membercode": "12345",
                    "investorcode": "INV000001",

                    "countrycode": this.state.residencecountry1,
                    "tpin": this.state.residencetpin1,
                    "idtype": this.state.residenceidtypecode1,
                }
                console.log(residence1)
                import("../central/crud.js").then(crud => {
                    console.log(crud.post('http://127.0.0.1:8000/ResidenceCountryList/', residence1));
                });
                // Residence 1
                let residence2 = {
                    "membercode": "12345",
                    "investorcode": "INV000001",

                    "countrycode": this.state.residencecountry2,
                    "tpin": this.state.residencetpin2,
                    "idtype": this.state.residenceidtypecode2,
                }
                console.log(residence2)
                import("../central/crud.js").then(crud => {
                    console.log(crud.post('http://127.0.0.1:8000/ResidenceCountryList/', residence2));
                });
                // Residence 1
                let residence3 = {
                    "membercode": "12345",
                    "investorcode": "INV000001",

                    "countrycode": this.state.residencecountry3,
                    "tpin": this.state.residencetpin3,
                    "idtype": this.state.residenceidtypecode3,
                }
                console.log(residence3)
                import("../central/crud.js").then(crud => {
                    console.log(crud.post('http://127.0.0.1:8000/ResidenceCountryList/', residence3));
                });

                // Residence 1
                let residence4 = {
                    "membercode": "12345",
                    "investorcode": "INV000001",

                    "countrycode": this.state.residencecountry4,
                    "tpin": this.state.residencetpin4,
                    "idtype": this.state.residenceidtypecode4,
                }
                console.log(residence4)
                import("../central/crud.js").then(crud => {
                    console.log(crud.post('http://127.0.0.1:8000/ResidenceCountryList/', residence4));
                });
                break;
            case 1:
                //Gaurdian Details
                let ubodetails = {
                    membercode: "12345",
                    investorcode: "INV000001",
                    applicable: this.state.applicable,
                    count: this.state.ubocount,
                    name: this.state.uboname,
                    pan: this.state.ubopan,
                    nationality: this.state.ubonationality,
                    addresstype: this.state.uboaddresstype,
                    countryofbirth: this.state.ubocountryofbirth,
                    dateofbirth: this.state.ubodob,
                    gender: this.state.ubogender,
                    fathername: this.state.ubofathername,
                    occupation: this.state.ubooccupation,
                    occupationtype: this.state.uboocctype,
                    code: this.state.ubocode,
                    holpc: this.state.uboholpc,
                    selfdeclaration: this.state.uboselfdec,
                    declarationflagtype: this.state.ubodecflag,
                    adharofreportingperson: this.state.uboadhar,
                    noworupdateofindicator: this.state.uboupdind,
                    logname: this.state.ubologname,
                    kycdocumentupload: this.state.ubokycdocupld,
                    ubodocumenttype: this.state.ubodoctype,
                }
                console.log(ubodetails)
                import("../central/crud.js").then(crud => {
                    console.log(crud.post('http://127.0.0.1:8000/FatcaUboList/', ubodetails));
                });

                let uboaddress = {
                    membercode: "12345",
                    investorcode: "INV000001",

                    addresstypeid: 5,
                    addressline1: this.state.uboaddressline1,
                    addressline2: this.state.uboaddressline2,
                    addressline3: this.state.uboaddressline3,
                    city: this.state.ubocity,
                    pincode: this.state.ubopincode,
                    state: this.state.ubostate,
                    country: this.state.ubocountry,
                    residentialphoneno: this.state.uboresidentialphoneno,
                    residentialfax: '',
                    officephone: '',
                    officefax: '',
                    mobileno: this.state.ubomobileno,
                    email: this.state.uboemail,
                }
                import("../central/crud.js").then(crud => {
                    console.log(crud.post('http://127.0.0.1:8000/AddressList/', uboaddress));
                });
                break;
            case 2:
                let ckycDetails = {
                    membercode: "12345",
                    investorcode: "INV000001",  
                    clientpan: this.state.kycpan, 

                    kyctypefirstholder: this.state.kycfirstholder, 
                    kyctypesecondholder: this.state.kycsecondholder, 
                    kyc_typethirdholder: this.state.kycthridholder, 
                    kyctypeguardian: this.state.kyctypegaurdian, 

                    firstholderckycnumber: this.state.firstholderkycno, 
                    secondholderckycnumber: this.state.secondholderkycno ,
                    thirdholderckycnumber: this.state.thirdholderkycno,
                    guardianckycnumber: this.state.kyctypegaurdian,

                    jointholderfirstdob: this.state.firstholderkycno, 
                    jointholdersecdob: this.state.secondholderkycno,
                    guardianckycdob: this.state.thirdholderkycno 
                   
                }
                console.log(ckycDetails)
                import("../central/crud.js").then(crud => {
                    console.log(crud.post('http://127.0.0.1:8000/CKYCList/', ckycDetails));
                });
                break;
            default:
                return 0;
        }
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
                this.setState({ idtypes: data });
            })
        fetch('http://127.0.0.1:8000/WealthList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ wealths: data });
            })
        fetch('http://127.0.0.1:8000/CorporateServiceList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ corpservices: data });
            })
        fetch('http://127.0.0.1:8000/ApplicantIncomeList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ incomeslabs: data });
            })

        fetch('http://127.0.0.1:8000/OccupationTypeList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ occtypes: data });
            })

        fetch('http://127.0.0.1:8000/ExemptionsList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ exemptions: data });
            })

        fetch('http://127.0.0.1:8000/NffeCategoryList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ nffecategories: data });
            })
        fetch('http://127.0.0.1:8000/AddressTypeList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ addresstypes: data });
            })
        fetch('http://127.0.0.1:8000/UboCodeList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ ubocodes: data });
            })
    }

    render() {
        return (
            <PerfectScrollbar>
                <div class="tabWrap p-4">
                    <Tabs selectedIndex={this.state.tabindex} onSelect={tabindex => this.setState({ tabindex })}>
                        <TabList className="nav nav-tabs" role="tablist">
                            <Tab className="nav-item">
                                <div class="nav-link  active" data-toggle="tab" aria-selected="true">FATCA</div>
                            </Tab>
                            <Tab className="nav-item">
                                <div class="nav-link" data-toggle="tab">UBO Details</div>
                            </Tab>
                            <Tab className="nav-item">
                                <div class="nav-link" data-toggle="tab">CKYC</div>
                            </Tab>
                        </TabList>
                        <div class="tab-content" >
                            <TabPanel>
                                <FatcaComponent
                                    data={this.state}
                                    handleChange={this.handleChange}
                                    TestClick={this.TestClick}
                                />

                            </TabPanel>
                            <TabPanel>
                                <UBOComponent
                                    data={this.state}
                                    handleChange={this.handleChange}
                                    TestClick={this.TestClick}
                                />

                            </TabPanel>

                            <TabPanel>
                                <CKYCComponent
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
export default FATCAContainer