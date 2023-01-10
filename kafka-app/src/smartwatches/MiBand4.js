import React from 'react';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item11a from '../Images/miBand4a.jpg';
import Item11b from '../Images/miBand4b.jpg';
import footerPhoto1 from '../Images/smartwatches1.jpg';
import footerPhoto2 from '../Images/smartwatches2.jpg';

class MiBand4 extends Component{

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
          <h2>{this.props.items[10].title}</h2>
          <p>RS {this.props.items[10].price}</p>
          
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[10].id)}}>
              Add to bag
            </Link>
          
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item11a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item11b} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Battery Life: 135mAh battery capacity built in the Mi Band 4, max working time up to 20 days after a full charging;</p>

          <p>Health Monitoring: Support heart rate monitoring, heart rate alerts, sleep monitoring, idle alerts; Monitoring your health data o maintain your healthier body;</p>

          <p>Activity Tracking: Comes with 6 workout modes: Treadmill, exercise, outdoor running, cycling, walking, swimming Counting step, distance, calories burned during sports;</p>

          <p>5ATM Water Resistant: Up to 50 meters water resistant rate, freely to wear Mi Band 4 when running and exercising;</p>

          <p>Display: 0.95-inch Colorful AMO LED display with 120 x 240 pixels resolution, up to 450 nits screen brightness;</p>

          <p>2.5D tempered glass with anti-fingerprint coating;</p>

          <p>Other Basic Features: Stopwatch, Alarm clock, Timer, Find my phone, Phone unlock, Event reminder, Do not disturb mode (works even without phone), Lock screen, Music controls on band;</p>

          <p>Connectivity  System: Support Bluetooth 5.0 , and support for Android 4.4, for iOS 9.0 and above;</p>
        
        </section>
        
        <figure className="figure7">
          <img className="figure-img" src={footerPhoto1} alt="headphones"/>
        </figure>
        
        <figure className="figure7">
          <img className="figure-img" src={footerPhoto2} alt="headphones"/>
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

export default connect(mapStateToProps,mapDispatchToProps) (MiBand4);