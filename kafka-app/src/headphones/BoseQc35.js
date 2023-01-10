import React from 'react';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item2b from '../Images/boseQc2.jpg';
import Item2c from '../Images/boseQc3.jpg';
import footerPhoto from '../Images/headphones.jpg';

class BoseQc35 extends Component{

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
          <h2>{this.props.items[1].title}</h2>
          <p></p>
          <p></p>
          <p>RS {this.props.items[1].price}</p>

            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[1].id)}}>
              Add to bag
            </Link>

        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item2b} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item2c} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>QuietComfort 35 wireless headphones II are engineered with renowned noise cancellation that makes quiet sound quieter and your music sound better;</p>
          <p>Get fullness and clarity, regardless of how loud it gets. The drivers in the QC35 II feature volume-optimized EQ for clear, balanced audio whether you’re in a quiet office or busy street. And a noise-rejecting dual microphone system provides clearer calls, even in noisy environments;</p>
          <p>Keep the music—or the quiet—going all day long. If you need a little bit more, a quick 15-minute charge gives you another 2.5 hours. You can always use the included cable to plug in and keep the music playing.</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (BoseQc35);