import React from 'react';
//import './BeatsSolo3.css';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item8a from '../Images/bluedioTM1.jpg';
import Item8b from '../Images/bluedioTM2.jpg';
import footerPhoto from '../Images/headphones.jpg';

class BluedioTM extends Component{

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
          <h2>{this.props.items[7].title}</h2>
          <p></p>
          <p></p>
          <p>RS {this.props.items[7].price}</p>

            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[7].id)}}>
              Add to bag
            </Link>

        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item8a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item8b} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p> Bluedio TM intelligent headset is developed by Bluedio working team to achieve high realization of three-frequency balance, bringing full-sided music experience. The broadcast voice is delicate and has the sense of quality, enabling you to enjoy the quiet time in noisiness;</p>
          <p>The earmuffs of Bluedio TM adopt enveloping design, in which there is the protein ear shield with memory sponge. It is featured by gentle and soft touch, being comfortable, breathable and never clamping the head. Let you enjoy music in comfort;</p>
          <p>After 2 hours of full charge, you can play music for 30 hours, eliminating the trouble that headphones with no power during a short trip, keep the music go all the way!;</p>

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

export default connect(mapStateToProps,mapDispatchToProps) (BluedioTM);