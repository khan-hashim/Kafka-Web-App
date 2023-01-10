import React from 'react';
//import './BeatsSolo3.css';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item16a from '../Images/powerBeatsPro1.jpg';
import Item16b from '../Images/powerBeatsPro2.jpg';
import footerPhoto from '../Images/headphones.jpg';

class PowerBeatsPro extends Component{

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
          <h2>{this.props.items[15].title}</h2>
          <p></p>
          <p>RS {this.props.items[15].price}</p>
          <p></p>
          
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[15].id)}}>
              Add to bag
            </Link>
          
          <p></p>
          <p>High-performance workout earphones Powerbeats Pro will revolutionize the way you work out. Built for elite athletes, these totally wireless earphones have no wires to hold you back;</p>
          <p>Totally wireless high-performance earphones;</p>
          <p>Adjustable, secure-fit ear hooks for lightweight comfort and stability;</p>
          <p>Reinforced design for sweat and water resistance during tough workouts;</p>
          <p>Volume and track controls on each earbud, voice capability, and Auto Play/Pause;</p>
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item16a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item16b} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Up to 9 hours of listening time (more than 24 hours with charging case);</p>
          <p>Powerful, balanced sound with dynamic range and noise isolation;</p>
          <p>“Hey Siri” hands-free voice and improved connection speed via the Apple H1 headphone chip;</p>
          <p>Earbuds connect independently via Class 1 Bluetooth for extended range and fewer dropouts;</p>
          <p>With Fast Fuel, a 5-minute charge gives 1.5 hours of playback when battery is low;</p>
          <p>Enhanced phone call performance and call handling from either earbud;</p>
          <p>comes with charging cable and case;</p>
          
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

export default connect(mapStateToProps,mapDispatchToProps) (PowerBeatsPro);