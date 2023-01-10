import React from 'react';
//import './BeatsSolo3.css';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item24a from '../Images/appleEarpods1.jpg';
import Item24b from '../Images/appleEarpods2.jpg';
import footerPhoto from '../Images/headphones.jpg';

class AppleEarpods extends Component{

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
          <h2>{this.props.items[23].title}</h2>
          <p></p>
          <p></p>
          <p>RS {this.props.items[23].price}</p>
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[23].id)}}>
              Add to bag
            </Link>
          <p></p>
          <p></p>
          <p>Unlike traditional, circular earbuds, the design of the EarPods is defined by the geometry of the ear. Which makes them more comfortable for more people than any other earbud-style headphones.</p>
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item24a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item24b} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Deeper, richer bass tones;</p>
          <p>Greater protection from sweat and water;</p>
          <p>Control music and video playback;</p>
          <p>Answer and end calls;</p>
          <p>3.5mm Headphone Plug;</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (AppleEarpods);