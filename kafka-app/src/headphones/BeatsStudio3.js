import React from 'react';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item3a from '../Images/beatsStudio3a.jpg';
import Item3b from '../Images/beatsStudio3b.jpg';
import footerPhoto from '../Images/headphones.jpg';

class BeatsStudio3 extends Component{

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
          <h2>{this.props.items[2].title}</h2>
          <p>Experience your music like never before</p>
          <p></p>
          <p>RS {this.props.items[2].price}</p>
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[2].id)}}>
              Add to bag
            </Link>
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item3a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item3b} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Active Noise Cancelling blocks out distractions, so you can get closer to your music;</p>
          <p>With Fast Fuel, it only takes a few minutes of charging to get up to 3 hours of play, so you can be on your way quicker;</p>
          <p>Enjoy your playlist without interruption, because a full charge lasts up to 22 hours - or up to 40 hours with noise cancelling off;</p>
          <p>With Class 1 Bluetooth®, you stay connected to your music even when your device isn't nearby;</p>
          <p>Take calls, control your music, and activate Siri with convenient multi function on-ear controls</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (BeatsStudio3);


