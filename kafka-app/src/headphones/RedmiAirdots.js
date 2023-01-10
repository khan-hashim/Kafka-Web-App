import React from 'react';
//import './BeatsSolo3.css';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item18a from '../Images/redmiAirdotsMini1.jpg';
import Item18b from '../Images/redmiAirdotsMini2.jpg';
import footerPhoto from '../Images/headphones.jpg';

class RedmiAirdots extends Component{

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
          <h2>{this.props.items[17].title}</h2>
          <p></p>
          <p></p>
          <p>RS {this.props.items[17].price}</p>
         
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[17].id)}}>
              Add to bag
            </Link>
         
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item18a} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item18b} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Wireless Bluetooth (5.0) Earbuds; </p>
          <p>Comfortable to wear, free to adjust;</p>
          <p>Operation range: 10m;</p>
          <p>Charging Time: 2h;</p>
          <p>Battery life: 4-12hr;</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (RedmiAirdots);