import React from 'react';
//import './BeatsSolo3.css';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item22a from '../Images/jbl1.jpg';
import Item22b from '../Images/jbl2.jpg';
import footerPhoto from '../Images/headphones.jpg';

class Jbl extends Component{

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
          <h2>{this.props.items[21].title}</h2>
          <p></p>
          <p></p>
          <p>RS {this.props.items[21].price}</p>

            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[21].id)}}>
              Add to bag
            </Link>

        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item22a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item22b} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Under Armour sports Bluetooth headphones;</p>
          <p>Model: UA-100;</p>
          <p>Battery Life: 3+ Hours;</p>
          <p>Comes with: micro USB cable , 3 sizes of Ear-Tips;</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (Jbl);