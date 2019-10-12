import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from '../actions/cartactions'

class Cart extends Component {

    handleRemove = (id) => {

        this.props.removeItem(id);
    }

    handleAddQuantity = (id, e) => {
        this.props.addQuantity(id);
    }

    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    render() {
        console.log("Added Items :", this.props.addedItems)
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (

                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img">
                                <img src={item.img} alt={item.img} className="" />
                            </div>

                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}$</b></p>
                                <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                                <div className="add-remove"> 
                                    <button
                                        className="btn"
                                        onClick={() => { this.handleAddQuantity(item.id) }}>
                                        <i className="fa fa-arrow-up"></i>
                                    </button>
                                    <button
                                        className="btn"
                                        onClick={() => { this.handleSubtractQuantity(item.id) }}>
                                        <i className="fa fa-arrow-down"></i>
                                    </button>

                                </div>
                                <button
                                    className="btn btn-danger btn-remove"
                                    onClick={() => { this.handleRemove(item.id) }}>
                                    Remove
                                    </button>
                            </div>
                        </li>
                    )
                })
            ) :

            (
                <p>Nothing.</p>
            )
        return (
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
       items: state.orderreducer.addedItems, 
        addedItems: state.orderreducer,
        //orderreducer: state.orderreducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)