import React from 'react';
//import './BeatsSolo3.css';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item13a from '../Images/airpods2G1.jpg';
import Item13b from '../Images/airpods2G2.jpg';
import footerPhoto from '../Images/headphones.jpg';

class AppleAirpods extends Component{

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
          <h2>{this.props.items[12].title}</h2>
          <p></p>
          <p></p>
          <p>RS {this.props.items[12].price}</p>
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[12].id)}}>
              Add to bag
            </Link>
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item13a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item13b} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Now with more talk time, voice-activated Siri access — and a wireless charging case — AirPods deliver an unparalleled wireless headphone experience. Simply take them out and they’re ready to use with all your devices. Put them in your ears and they connect immediately, immersing you in rich, high-quality sound. Just like magic;</p>

          <p>They sense when they’re in your ears and pause when you take them out. And the AirPods experience is just as amazing whether you’re using them with your iPhone, Apple Watch, iPad or Mac.Sound switches seamlessly between the devices;</p>

          <p>AirPods deliver an industry-leading 5 hours of listening time — and now up to 3 hours of talk time — all on one charge. And they’re made to keep up with you, thanks to a charging case that holds multiple charges for more than 24 hours of listening time;</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (AppleAirpods);