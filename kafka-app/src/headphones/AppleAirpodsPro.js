import React from 'react';
//import './BeatsSolo3.css';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item15a from '../Images/airpodsPro1.jpg';
import Item15b from '../Images/airpodsPro2.jpg';
import footerPhoto from '../Images/headphones.jpg';  

class AppleAirpodsPro extends Component{

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
          <h2>{this.props.items[14].title}</h2>
          <p></p>
          <p>RS {this.props.items[14].price}</p>
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[14].id)}}>
              Add to bag
            </Link>
          <p></p>
          <p>AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound, Transparency mode so you can hear your surroundings and a customizable fit for all-day comfort. Just like AirPods, AirPods Pro connect like magic to your iPhone or Apple Watch. And they’re ready to use straight out of the case.</p>
          <p>AirPods Pro offer a more customizable fit with three sizes of flexible silicone tips to choose from. With an internal taper, they conform to the shape of your ear, securing your AirPods Pro in place and creating an exceptional seal for superior noise cancellation.</p>
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item15a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item15b} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Amazing sound quality with Adaptive EQ;</p>
          <p>Sweat and water-resistant (IPX4);</p>
          <p>Automatically on, automatically connected;</p>
          <p>Easy setup for all your Apple devices;</p>
          <p>Quick charging in the case;</p>
          <p>Case can be charged wirelessly with the Lightning connector;</p>
        </section>
        
        <figure className="figure7">
          <img className="figure-img" src={footerPhoto} alt="headphones"/>
        </figure>
        
        <figure className="figure7">
          <img className="figure-img" src={footerPhoto} alt="headphones"/>
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

export default connect(mapStateToProps,mapDispatchToProps) (AppleAirpodsPro);