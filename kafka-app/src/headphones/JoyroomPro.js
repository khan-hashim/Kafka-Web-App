import React from 'react';
//import './BeatsSolo3.css';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item17a from '../Images/joyroomProBuds1.jpg';
import footerPhoto from '../Images/headphones.jpg';

class JoyroomPro extends Component{

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
          <h2>{this.props.items[16].title}</h2>
          <p></p>
          <p></p>
          <p>RS {this.props.items[16].price}</p>
   
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[16].id)}}>
              Add to bag
            </Link>

        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item17a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item17a} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>True wireless bilateral bluetooth earbuds,In-ear detection,Wireless charging;</p>
          <p>Physical Noise Reduction,Audio Sharing,pop-up pairing;</p>
          <p>comfortable to wear with 3 size Silicone Eartip Fits;</p>
          <p>Bluetooth 5.0;</p>
          <p>Charging time: 1.2 hours;</p>
          <p>Music time: 2 to 3 hours;</p>
          <p>Standby time: 1080 hours;</p>
          <p>Transmission range: 10m;</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (JoyroomPro);