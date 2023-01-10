import React from 'react';
//import './BeatsSolo3.css';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item21a from '../Images/powerBeats3a.jpg';
import Item21b from '../Images/powerBeats3b.jpg';
import footerPhoto from '../Images/headphones.jpg';

class PowerBeats3 extends Component{

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
          <h2>{this.props.items[20].title}</h2>
          <p></p>
          <p></p>
          <p>RS {this.props.items[20].price}</p>
          
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[20].id)}}>
              Add to bag
            </Link>
          
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item21a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item21b} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Wireless high-performance earphones with streamlined, round cable and adjustable, secure-fit ear-hooks for lightweight comfort and stability;</p>
          <p>Reinforced, sleek design for sweat and water resistance during tough workouts;</p>
          <p>Integrated on-ear controls for music, phone calls, and voice capability;</p>
          <p>Powerful, balanced sound with dynamic range and noise isolation;</p>
          <p>Up to 15 hours of listening time;</p>
          <p>Fast Fuel: A 5-minute charge provides up to 1 hour of playback;</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (PowerBeats3);