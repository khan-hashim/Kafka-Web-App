import React from 'react';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item12a from '../Images/D13a.jpg';
import Item12b from '../Images/D13b.jpg';
import footerPhoto1 from '../Images/smartwatches1.jpg';
import footerPhoto2 from '../Images/smartwatches2.jpg';

class D13 extends Component{

  handleClick = (id)=>{
    this.props.addToCart(id); 
  }

  render(){

    return <div>
      <header>
        <Header />     
      </header>
      <div className = "headphone-iso">
      <section className="main">
        <section className="info1">
          <h2>{this.props.items[11].title}</h2>
          <p>RS {this.props.items[11].price}</p>
          
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[11].id)}}>
              Add to bag
            </Link>
          
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item12a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item12b} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Blood pressure and heart rate and oxygen monitor,Pedometer,GPS activity tracker;</p>
          <p>Real-time notifications from mobile applications,Water Proof,Weather Forecast;</p>
          <p>Display Size:1.3 inch color touch screen,Adjustable screen brightness;</p>
          <p>Resolution: 240*240;</p>
          <p>Battery Capacity: 200 mAh;</p>
          <p>Compatible with IOS 8.0 and Android 4.4 above,Bluetooth 4.0;</p>
          <p>Working time: about 3 days,Standby Time: about 5 days;</p>
        </section>
        
        <figure className="figure7">
          <img className="figure-img" src={footerPhoto1} alt="headphones"/>
        </figure>
        
        <figure className="figure7">
          <img className="figure-img" src={footerPhoto2} alt="headphones"/>
        </figure>
    
      </section>
    
    </div>
    </div>;
  }
    
}

const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}

const mapDispatchToProps= (dispatch)=>{
    
  return{
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (D13);