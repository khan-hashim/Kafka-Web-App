import React from 'react';
//import './BeatsSolo3.css';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item23a from '../Images/archeer1.jpg';
import Item23b from '../Images/archeer2.jpg';
import footerPhoto from '../Images/headphones.jpg';

class Archeer extends Component{

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
          <h2>{this.props.items[22].title}</h2>
          <p></p>
          <p></p>
          <p>RS {this.props.items[22].price}</p>
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[22].id)}}>
              Add to bag
            </Link>
          <p></p>
          <p>Perhaps the most comfortable In-Ear headphones.Ergonomically-shaped headphone enhances user comfort Contoured Ultra Soft Ear hook increase wearing comfort and stability, never worried your Headphone fell off during running.</p>
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item23a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item23b} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Sweat Proof;</p>
          <p>Noise Cancellation;</p>
          <p>Waterproof;</p>
          <p>Built-In Microphone;</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (Archeer);