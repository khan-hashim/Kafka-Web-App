import React from 'react';
//import './BeatsSolo3.css';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item26a from '../Images/rm610a.jpg';
import footerPhoto from '../Images/headphones.jpg';

class Remax610 extends Component{

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
          <h2>{this.props.items[25].title}</h2>
          <p></p>
          <p></p>
          <p>RS {this.props.items[25].price}</p>
          
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[25].id)}}>
              Add to bag
            </Link>
          
          <p></p>
          <p></p>
          <p>Stylish metal-in-ear earphone with an ergonomic in-ear design and silicone ear caps that perfectly fit the auricle to create a private music space.</p>
          <p>Multi-function three-button remote control design, compatible with Apple/Android system remote control function, giving you a smooth control experience, switching songs, volume adjustment, answering calls is easy and convenient.</p>
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item26a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item26a} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Easy Noise Isolation;</p>
          <p>3.5mm Nickle Plating Plug;</p>
          <p>comes with 3x Ear-tips(Small, Medium, Large);</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (Remax610);