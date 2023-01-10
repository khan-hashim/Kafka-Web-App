import React from 'react';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';


import footerPhoto from '../Images/powerbanks1.jpg';
import Item27b from '../Images/romossOm10b.jpg';
import Item27c from '../Images/romossOm10c.jpg';

class RomossOm10 extends Component{

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
          <h2>{this.props.items[26].title}</h2>
          <p></p>
          <p></p>
          <p>RS {this.props.items[26].price}</p>
         
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[26].id)}}>
              Add to bag
            </Link>
         
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item27b} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item27c} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Capacity: 10000mAh;</p>
          <p>Screen: LED indicator displays precise battery percentage;</p>
          <p>3 Input Ports : Type C/USB-C and Micro-USB and lightning;</p>
          <p>2 Output Ports : USB (5.1V/3.6A);</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (RomossOm10);