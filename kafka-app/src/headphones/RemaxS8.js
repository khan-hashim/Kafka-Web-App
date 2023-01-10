import React from 'react';
//import './BeatsSolo3.css';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item20a from '../Images/s8neckband1.jpg';
import Item20b from '../Images/s8neckband2.jpg';
import footerPhoto from '../Images/headphones.jpg';

class RemaxS8 extends Component{

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
          <h2>{this.props.items[19].title}</h2>
          <p></p>
          <p></p>
          <p>RS {this.props.items[19].price}</p>
          
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[19].id)}}>
              Add to bag
            </Link>
          
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item20a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item20b} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Bluetooth: 4.1;</p>
          <p>Distance connection: 10m;</p>
          <p>Charging time: 2h;</p>
          <p>Playing time: 8h;</p>
          <p>comes with: Micro USB charging cable and Earbud Pack;</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (RemaxS8);