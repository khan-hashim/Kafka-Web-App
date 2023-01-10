import React  from 'react';
import './Cart.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class ItemCard extends React.Component {
    
    render(){
        const {state}   = this.props.location
        return (
      <div className="basket-product">
          <div className="item">
              <div className="product-image">
                  <img src="http://placehold.it/120x166" alt="Placholder Image 2" className="product-frame"/>
              </div>
              <div className="product-details">
                  <h1 className="h1Cart"><strong><span class="item-quantity"></span>{state.name}</strong></h1>
                  <p className="pCart"><strong>Navy, Size 18 </strong></p>
                  <p className="pCart">Product Code - 232321939</p>
              </div>
           </div>
           <div className="price">{state.price}</div>
           <div className="quantity">
               <input type="number" value="4" min="1" className="quantity-field"/>
           </div>
           <div className="subtotal">{state.price}</div>
           <div className="remove">
               <button>
                   <Link to="/cart">Remove</Link>   
               </button>
           </div>
       </div>   
    );
   }
}

function CartSummary(){
    return <div>
        <div className="summary">
            <div className="summary-total-items"><span class="total-items"></span> Items in your Bag</div>
            <div className="summary-subtotal">
                <div className="subtotal-title">Subtotal</div>
                <div className="subtotal-value final-value" id="basket-subtotal">130.00</div>
                <div className="summary-promo hide">
                    <div className="promo-title">Promotion</div>
                    <div className="promo-value final-value" id="basket-promo"></div>
                </div>
            </div>
            <div className="summary-delivery">
                <select name="delivery-collection" className="summary-delivery-selection">
                    <option value="0" selected="selected">Select Collection or Delivery</option>
                    <option value="collection">Collection</option>
                    <option value="first-class">Royal Mail 1st Class</option>
                    <option value="second-class">Royal Mail 2nd Class</option>
                    <option value="signed-for">Royal Mail Special Delivery</option>
                </select>
            </div>
            <div className="summary-total">
                <div className="total-title">Total</div>
                <div className="total-value final-value" id="basket-total">130.00</div>
            </div>
            <div className="summary-checkout">
                <button className="checkout-cta">Go to Secure Checkout</button>
            </div>
        </div>
    </div>;
}

function CartPromotion(){
    return <div className="basket-module">
        <label for="promo-code" className="labelCart">Enter a promotional code</label>
        <input id="promo-code" type="text" name="promo-code" maxlength="5" className="promo-code-field"/>
        <button className="promo-code-cta">Apply</button>
    </div>;
}

function CartLabels(){
    return <div className="basket-labels">
        <ul className="ulCart">
            <li id="li1" className="item item-heading">Item</li>
            <li id="li2" className="price">Price</li>
            <li id="li3" className="quantity">Quantity</li>
            <li id="li4" className="subtotal">Subtotal</li>
        </ul>
    </div>
}

function Cart(){
    return <div>
      <section className="mainCart">
          <div className="basket">
              <CartPromotion />
              <CartLabels />
              <Route path="/cart/itemcard" component={ItemCard} />;
           </div>
           
           <aside>
               <CartSummary/> 
           </aside>
       </section>
          
   </div>;
   
}

export default Cart;