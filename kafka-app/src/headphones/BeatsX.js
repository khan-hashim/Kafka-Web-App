import React from 'react';
//import './BeatsSolo3.css';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item19a from '../Images/beatsX1.jpg';
import Item19c from '../Images/beatsX3.jpg';
import footerPhoto from '../Images/headphones.jpg';

class BeatsX extends Component{

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
          <h2>{this.props.items[18].title}</h2>
          <p></p>
          <p></p>
          <p>RS {this.props.items[18].price}</p>
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[18].id)}}>
              Add to bag
            </Link>

        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item19a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item19c} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Fit for your life, BeatsX earphones are the perfect wireless companion. With up to 4 hours of battery life and Fast Fuel charging, these earphones let you experience authentic, clear sound throughout your day;</p>
          <p>Wireless in-ear headphones connect to your music player via Class 1 Bluetooth for tangle-free listening;</p>
          <p>Hear authentic, crisp acoustics to keep you going as you're working out, commuting, or simply enjoying your day;</p>
          <p>Battery life of up to 4 hours so you can listen all day before needing a recharge;</p>
          <p>4 sizes of eartips provide customized comfort;</p>
          <p>Flex-Form cable is comfortable to wear behind your neck and easily fits in your pocket or handbag;</p>
          <p>RemoteTalk allows you to take calls, control your music, and activate Siri;</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (BeatsX);