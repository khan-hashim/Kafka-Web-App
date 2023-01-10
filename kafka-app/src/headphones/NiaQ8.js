import React from 'react';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item6b from '../Images/niaQ8b.jpg';
import Item6c from '../Images/niaQ8c.jpg';
import footerPhoto from '../Images/headphones.jpg';

class NiaQ8 extends Component{

  handleClick = (id)=>{
    this.props.addToCart(id); 
  }

  render(){

    return <div>
        <header>
            <Header />   
       </header>
       <div className="headphone-iso">
       <section className="main">
           <section className="info1">
               <h2>{this.props.items[5].title}</h2>
          <p></p>
          <p></p>
          <p>RS {this.props.items[5].price}</p>
          
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[5].id)}}>
              Add to bag
            </Link>
          
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item6b} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item6c} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Pair and Play with your Bluetooth device;</p>
          <p>Ergonomically designed for optimal comfort;</p>
          <p>Bluetooth Version: 4.0;</p>
          <p>Transmission range: 10m;</p>
          <p>Talk/Music time: 11 hrs;</p>
          <p>Charging time: 2 hrs;</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (NiaQ8);