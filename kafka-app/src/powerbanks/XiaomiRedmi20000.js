import React from 'react';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';


import footerPhoto from '../Images/powerbanks1.jpg';
import Item31a from '../Images/redmiPowerBank20000a.jpg';
import Item31b from '../Images/redmiPowerBank20000b.jpg';

class XiaomiRedmi20000 extends Component{

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
          <h2>{this.props.items[30].title}</h2>
          <p></p>
          <p></p>
          <p>RS {this.props.items[30].price}</p>
         
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[30].id)}}>
              Add to bag
            </Link>
          
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item31a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item31b} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Capacity: 20000mAh;</p>
          <p>Power: 74Wh;</p>
          <p>2 Input Ports : Type C/USB-C and Micro-USB;</p>
          <p>2 Output Ports : USB-A (5.1V/3.6A);</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (XiaomiRedmi20000);