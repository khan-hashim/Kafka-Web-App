import React from 'react';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';


import footerPhoto from '../Images/powerbanks1.jpg';
import Item28a from '../Images/aspor1.jpg';
import Item28b from '../Images/aspor2.jpg';

class Aspor extends Component{

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
          <h2>{this.props.items[27].title}</h2>
          <p></p>
          <p></p>
          <p>RS {this.props.items[27].price}</p>
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[27].id)}}>
              Add to bag
            </Link>
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item28a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item28b} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Model: A323;</p>
          <p>Capacity: 10000mAh;</p>
          <p>Screen: LED indicator;</p>
          <p>1 Input: (DC) (2A);</p>
          <p>2 Outputs: (USB connectors) (2A);</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (Aspor);