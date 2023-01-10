import React from 'react';
//import './Checkout.css';
import './checkout-isoo.css';
import './checkout.less';
import { Component } from 'react';
import { connect } from 'react-redux';
import { updateStateName,updateStateAddress,updateStatePhone,updateStateTotalItems} from '../actions/cartActions';
import api from '../api';
import Header from '../Header';

class Checkout extends Component{
    
    
    updateName = async event =>{
        let customer_name = event.target.value;
        this.props.updateStateName(customer_name);
    }

    updateAddress = async event =>{
        let customer_address = event.target.value;
        this.props.updateStateAddress(customer_address);
    }

    updatePhone = async event=>{
        let customer_phone_number = event.target.value;
        this.props.updateStatePhone(customer_phone_number);
    }

    handleIncludeOrder = async () => {
        window.alert("order submitted!");
        const customer_name = this.props.customer_name;
        const customer_address = this.props.customer_address;
        const customer_phone_number = this.props.customer_phone_number;
        const order_total = this.props.total;

        let order_details = this.props.items.map(item=>{
            var sale_item = {item_id: item.id,
                             item_title: item.title, 
                             item_price: item.price, 
                             item_quantity: item.quantity
                            };
            return sale_item;
        })


        const name_reset= '';
        const address_reset = '';
        const phone_reset = '';

        const payload = { 
            customer_name: customer_name ,
            customer_address: customer_address ,
            customer_phone_number: customer_phone_number ,
            order_total: order_total ,
            order_details: order_details
        }
        
        await api.insertOrder(payload).then(res => {
            window.alert('order successful')
            this.props.updateStateName(name_reset); 
            this.props.updateStateAddress(address_reset);
            this.props.updateStatePhone(phone_reset); 
            this.props.updateStateTotalItems();


        })
        return
    }

    render(){
        let addedItems = this.props.items.length ? 
        (
            this.props.items.map(item=>{
                return (
                   <div className="checkout-isoo">
                       <h3 className="heading-3-checkout">Title: {item.title}</h3>
                       <h3 className="heading-3-checkout">Price: Rs.{item.price}</h3>
                       <h3 className="heading-3-checkout">Quantity: {item.quantity}</h3>   
                   </div>
                )      
            })  

        ): 
        ( 
        <h3 className="heading-3-checkout"> CART EMPTY</h3>
        )

        return (
        <div>
            <header>
                <Header /> 
            </header>
        <div className="checkout-isoo">  
        <div className="app-container-checkout">
        <div className="row">
          <div className="col">
              <div className="checkout-items">
              <li>{addedItems}</li>
              </div>
          </div>
          <div className="col no-gutters-checkout">
            
            <div className="checkout">
                <div className="checkout-container">
                    <h3 className="heading-3-checkout">DELIVERY CHECKOUT</h3>
                    <div className="input">
                        <label>Customer's Full Name</label>
                        <div className="input-field">
                            <input onChange={this.updateName} type="text" name="customer_name" value={this.props.customer_name} required />
                        </div>
                    </div>
                    <div className="input">
                        <label>Full Address</label>
                        <div className="input-field">
                            <input onChange={this.updateAddress} type="text" name="customer_address" value={this.props.customer_address} required />
                        </div>
                    </div>
                    <div className="input">
                        <label>Phone Number</label>
                        <div className="input-field">
                            <input onChange={this.updatePhone} type="text" name="customer_phone_number" value={this.props.customer_phone_number} required />
                        </div>
                    </div>
                    <h3 className="heading-3-checkout">Only payment option is Cash on Delivery</h3>
                    <h2 className="item-price-checkout">Your Total Rs. {this.props.total} </h2> 
                    <button className="checkout-btn" type="button" onClick={this.handleIncludeOrder}>Place order</button>
                </div>
            </div>
          </div>
         </div>
         </div>
       </div>
       </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total ,
        customer_name: state.customer_name,
        customer_address: state.customer_address,
        customer_phone_number: state.customer_phone_number
    }
}

const mapDispatchToProps= (dispatch)=>{
    
    return{
        updateStateName: (customer_name)=>{dispatch(updateStateName(customer_name))},
        updateStateAddress: (customer_address)=>{dispatch(updateStateAddress(customer_address))},
        updateStatePhone: (customer_phone_number)=>{dispatch(updateStatePhone(customer_phone_number))},
        updateStateTotalItems: ()=>{dispatch(updateStateTotalItems())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Checkout);