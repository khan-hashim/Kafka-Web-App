import React from 'react';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item9a from '../Images/DT78a.jpg';
import Item9b from '../Images/DT78a.jpg';
import footerPhoto1 from '../Images/smartwatches1.jpg';
import footerPhoto2 from '../Images/smartwatches2.jpg';

class DT78 extends Component{

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
          <h2>{this.props.items[8].title}</h2>
          <p>RS {this.props.items[8].price}</p>
          
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[8].id)}}>
              Add to bag
            </Link>
          
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item9a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item9b} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>1.3 inch 240*240 IPS full touch screen with high sensitivity and single touch control;</p>
          <p>Continuously record your daily walking step, distance and calorie burned. Suitable for outdoor sports, help you to develop a scientific fitness plan;</p>
          <p>Support call and message notification. Built-in professional heart rate sensor, monitor your heart rate in 24 hours, automatically monitor sleep quality;</p>
          <p>IP68 waterproof;</p>
          <p>Battery capacity: 230mAh;</p>
          <p>Support: for Android 4.4 above/iOS 8.4 above;</p>
          <p>Health tracker: Blood Oxygen,Blood Pressure,Pedometer,Sedentary reminder,Sleep monitor;</p>
          <p>Bluetooth 4.0;</p>
          <p>Notification type: Facebook,Gmail,Instagram,Message,Skype,Twitter,Whatsapp;</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (DT78);