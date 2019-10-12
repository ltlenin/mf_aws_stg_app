import React, { Component, lazy, Suspense } from "react" 
import { connect } from 'react-redux'
import { storeManager } from '../../reducers/storeManager'
import { addToCart } from '../actions/cartactions'
import orderreducer from '../reducers/orderreducer'
const SchemeChild = lazy(() => import('../components/SchemeChild'))
require('dotenv').config()
const _API_KEY = process.env.REACT_APP_API_KEY

storeManager.registerReducers({ orderreducer: orderreducer }); 
class InstaRedeem extends Component {
    constructor() {
        super();
        this.state = {
            orderItems: [],
            countries: [],
            counter: 0,
            tabindex: 0,
            orders: [],
        }

    }
    handleClick = (id) => {
        this.props.addToCart(id);
    }
    componentDidMount() {  
        fetch(_API_KEY + '/order_detail/')
            .then(results => {
                return results.json();
            }).then(data => { 
                this.setState({ orderItems: data });
            }) 
    }

    render() {
        return (
            <main>
                <div className="component-wrapper"> 
                    <Suspense fallback={<h1>Still Loading…
                    </h1>}>
                        <SchemeChild
                            orderItems={this.state.orderItems}
                            handleClick={this.handleClick.bind(this)}
                        />
                    </Suspense>
                </div>
            </main>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        //items: state.orderreducer.items
        items: orderreducer.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }

}
//const mapDispatchToProps = { addToCart };
export default connect(mapStateToProps, mapDispatchToProps)(InstaRedeem);
