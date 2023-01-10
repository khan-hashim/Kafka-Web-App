import React from 'react';
//import './BeatsSolo3.css';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item1b from '../Images/beatsSolo3b.jpg';
import Item1c from '../Images/beatsSolo3c.jpg';
import footerPhoto from '../Images/headphones.jpg';

class BeatsSolo3 extends Component{

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
          <h2>{this.props.items[0].title}</h2>
          <p></p>
          <p></p>
          <p>RS {this.props.items[0].price}</p>
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[0].id)}}>
              Add to bag
            </Link>
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item1b} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item1c} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>With up to 40 hours of battery life, Beats Solo³ Wireless headphones are perfect for staying inspired. So go ahead, put it on repeat and stay wireless all day.</p>
          <p>Worry less about charging and keep the focus on you. Thanks to Fast Fuel, 5 minutes of charging gets you up to 3 hours of playback when battery is low.</p>
          <p>At the heart of Beats Solo³ Wireless is award-winning Beats sound. This headphone delivers premium playback with fine-tuned acoustics that maximize clarity, breadth, and balance. The comfort-cushion ear cups buffer outside noise for immersive sound, so you can experience music the way it was meant to be heard</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (BeatsSolo3);


