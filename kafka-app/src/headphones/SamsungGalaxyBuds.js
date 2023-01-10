import React from 'react';
//import './BeatsSolo3.css';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item14b from '../Images/galaxyBud2.jpg';
import Item14c from '../Images/galaxyBud3.jpg';
import footerPhoto from '../Images/headphones.jpg';

class SamsungGalaxyBuds extends Component{

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
          <h2>{this.props.items[13].title}</h2>
          <p></p>
          <p>RS {this.props.items[13].price}</p>
          
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[13].id)}}>
              Add to bag
            </Link>
          
          <p></p>
          <p>Welcome to a smart earphone experience. Galaxy Buds seamlessly connect to your devices, so you have the freedom to move, cord-free;</p>
          <p>Our next-generation Adaptive Dual Microphone makes background noise a thing of the past. Galaxy Buds recognize your surroundings, switching between inner and outer mics to keep unnecessary noise out of your conversation;</p>

          <p>Turn on Ambient Aware to control how much surrounding noise you want to let in. With Quick Ambient Mode, you can be aware of traffic when you’re out walking, catch flight announcements and hear when your kids and coworkers call out to you;</p>

          <p>Simply open the Galaxy Buds case near your phone or tablet to pair effortlessly. Once the window pops up for pairing, you’re good to go;</p>

          
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item14c} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item14b} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          

          <p>Hear every word, lyric or beat with rich, crystal-clear sound by AKG. An optimized driver offers substantial bass, while a volume driver gives you a wider range of sound;</p>

          <p>With a pocket-sized charging carrying case, it’s easy to carry your Buds with you while charging;</p>

          <p>With a compact and ergonomic design, Galaxy Buds are comfortable enough to wear all day. With splash resistance IPX2 protection, they’re perfect to wear during even your sweatiest workouts;</p>

          <p>Give yourself the freedom to watch and listen on whichever screen you want. Galaxy Buds let you pair and switch seamlessly between your Galaxy devices so you don’t miss out on any of the action;</p>

          <p>Enjoy up to 6 hours of usage time and up to 20 hours of standby time. With hassle-free Bluetooth(5.0) that lets you easily connect with all your devices, voice assistant and wireless charging available from your Galaxy smartphone or wireless charger, Galaxy Buds make your life easy;</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (SamsungGalaxyBuds);