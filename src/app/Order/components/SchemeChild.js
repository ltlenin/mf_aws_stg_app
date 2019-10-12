import React, { Component } from "react"
import { addToCart } from '../actions/cartactions'
import { connect } from 'react-redux'
import Popup from "reactjs-popup";
const mapStateToProps = (state) => {
    return {
        //items: state.items
        addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}
const PopupExample = () => (
    <Popup trigger={
        <div>
             <label for="accountno"></label>
             <label for="accountno"></label>
            <div class="form-group"> 
                <input type="submit" class="form-control btn btn-primary"  
                    value="Add To Cart" />
            </div>
        </div >
    } position="top left" >


        {close => (
            <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
                <a className="close" onClick={close}> &times; </a>

                <div class="col-md-4 col-sm-4">
                    <div class="form-group">
                        <label for="ifsccode">Monthly SIP Amount</label>
                        <input type="text"
                            id="txtIFSCCode"
                            class="form-control"
                            maxLength="11"
                        />
                    </div>
                </div>

                <div class="col-md-4 col-sm-4">
                    <div class="form-group">
                        <label for="accountno">Lumpsum Amount</label>
                        <input
                            type="text"
                            id="txtAccountNo"
                            class="form-control"
                            maxLength="16"
                        />
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary"
                            value="Add To Cart" />
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary"
                            value="Invest Now" />
                    </div>
                </div>
            </div>
        )

        }

    </Popup >
);

class SchemeChild extends Component {
    constructor() {
        super();
        this.state = {
            //orderItems: [],
            addedItems: []
        }

    }

    render() {

        console.log("this.props.orderItems", this.props.orderItems)
        return (
            <div>
                {this.props.orderItems.map(item => (
                    <div key={item.id}>
                        <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
                            <h3>{item.schemename}</h3>
                            <div class="form-group">
                            </div>
                        </div>

                        <div class="row pt-3 pb-3 pl-4 pr-4">
                            <div class="col-md-3 col-sm-12">

                                <div class="form-group">
                                    <label for="accountno">SINCE LAUNCH (SL)</label>
                                    <label for="accountype" class="form-control"> {item.schemecode}</label>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label for="accountno">1Y RETURN</label>
                                    <label for="accountype" class="form-control">{item.uniqueno}</label>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label for="accountno">VOLATILITY (VOL)</label>
                                    <label for="accountype" class="form-control">{item.uniqueno}</label>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <input type="submit" class="btn btn-primary"
                                        onClick={()=>{this.props.handleClick(item.uniqueno)}} value="Add To Cart" /> 
                                    {/* <PopupExample class="form-control" /> */}

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SchemeChild)