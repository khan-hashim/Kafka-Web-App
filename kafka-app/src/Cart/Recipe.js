import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { addShipping } from './actions/cartActions'

class Recipe extends Component{

    componentWillUnmount() {
            if(this.refs.shipping.checked)
                this.props.substractShipping()
    }
    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    render(){
        
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping/Delivery is Free</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: Rs. {this.props.total} </b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn pink">
                            <Link to="/checkout" className="link">Checkout</Link>       
                        </button>
                        <button className="waves-effect waves-light btn pink remove">
                            <Link to="/" className="link">Back to Main</Link>    
                        </button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)