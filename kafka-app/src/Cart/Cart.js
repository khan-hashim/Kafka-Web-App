import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from '../actions/cartActions';
import Recipe from './Recipe';
import Header from '../Header';

//import './Cart.css';
import './cart-iso.css';
import './Cart.less';
//import './materialize.min.css';
//import './materialize.css';
import '../Materialize/materialize-iso.css';

class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity  //#ee6e73
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render(){

        
  
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                        <div className="materialize-iso">
                        <div className="cart-iso">
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img}/>
                                    </div>                         
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p><b>Amount In Rupees: {item.price}</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <button className="waves-effect waves-light btn pink" onClick={()=>{this.handleAddQuantity(item.id)}}>
                                            <Link to="/cart" className="link">increase quantity</Link>
                                            </button>
                                            <button className="waves-effect waves-light btn pink" onClick={()=>{this.handleSubtractQuantity(item.id)}}>
                                            <Link to="/cart" className="link">decrease quantity</Link>
                                            </button>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>                                
                        </li>
                        </div>
                        </div>                
                    )
                })
            ):

            (
                <div className="materialize-iso">
                <div className="cart-iso">
                <p>CART EMPTY</p>
                </div>
                </div>
                
            )
       return(
            <div>
                <Header />
            
             <div className="materialize-iso">
            <div className="cart-iso">
            <div className="container">
            
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
                <Recipe />       
            </div>
            </div>
            </div>
            </div>
       )
    }
}
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)


