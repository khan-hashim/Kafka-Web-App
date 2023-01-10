import React from 'react';
import './headphone-iso.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from '../Header';

import Item4b from '../Images/niaX2b.jpg';
import Item4c from '../Images/niaX2c.jpg';
import footerPhoto from '../Images/headphones.jpg';

class NiaX2 extends Component{

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
               <h2>{this.props.items[3].title}</h2>
          <p></p>
          <p></p>
          <p>RS {this.props.items[3].price}</p>
          
            <Link to="/cart" className="info-link" onClick={()=>{this.handleClick(this.props.items[3].id)}}>
              Add to bag
            </Link>
          
        </section>
      
        <figure className="figure1">
          <img className="figure-img" src={Item4b} alt="headphones"/>
        </figure>

        
      
        <figure className="figure6">
          <img className="figure-img" src={Item4c} alt="headphones"/>
        </figure>
      
        <section className="info2">
          <h2>SPECS/FEATURES</h2>
          <p>Fine-tuned acoustics for clarity, breadth and balance;</p>
          <p>Foldable headband for easy taking;</p>
          <p>Bluetooth Version: 4.0;</p>
          <p>Transmission range: 10m;</p>
          <p>Talk/Music time: 12 hrs;</p>
          <p>Charging time: 2 hrs</p>
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

export default connect(mapStateToProps,mapDispatchToProps) (NiaX2);