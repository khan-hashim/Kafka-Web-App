import React from 'react';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item7a from '../Images/t5a.jpg';
import Item7b from '../Images/t5b.jpg';
import footerPhoto1 from '../Images/smartwatches1.jpg';
import footerPhoto2 from '../Images/smartwatches2.jpg';

class T5 extends Component{

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
          <h2>{this.props.items[6].title}</h2>
          <p>RS {this.props.items[6].price}</p>
          
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[6].id)}}>
              Add to bag
            </Link>
          
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item7a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item7b} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Blood pressure and heart rate and oxygen monitor;</p>
          <p>GPS activity tracker;</p>
          <p>Pedometer;</p>
          <p>Real-time notifications from mobile applications;</p>
          <p>Adjustable screen brightness;</p>
          <p>Weather Forecast;</p>
          <p>Water Proof;</p>
          <p>Display Size:1.3 inch color touch screen;</p>
          <p>Resolution: 240*240;</p>
          <p>Battery Capacity: 200 mAh;</p>
          <p>Compatible with IOS 7.1 and Android 4.4 above;</p>
          <p>Bluetooth 4.0;</p>
          <p>Working time: about 10 days;</p>
          <p>Standby Time: about 20 days;</p>
          
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

export default connect(mapStateToProps,mapDispatchToProps) (T5);


