import React from 'react';
import './Smartwatches.css';
//import './Bootstrap/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Header from './Header';

import Item7 from './Images/t5a.jpg';
import Item9 from './Images/DT78a.jpg';
import Item10 from './Images/D18a.jpg';
import Item11 from './Images/miBand4a.jpg';
import Item12 from './Images/D13a.jpg';

function SmartWatches(){
    return <div>
      
    <header>
    <Header /> 
    </header>
    <main>
      <section className="leading-smartwatches">
        <p className="leading-bigtext">SMARTWATCHES</p>
      </section>
      <section className="cards">
        <article>
          <img className="article-img" src={Item7} alt=" " />
          <h1 className="article-title">
            <Link to="/t5" className="link">T5</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item10} alt=" " />
          <h1 className="article-title">
            <Link to="/d18" className="link">D18</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item9} alt=" " />
          <h1 className="article-title">
            <Link to="/dt78" className="link">DT78</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item12} alt=" " />
          <h1 className="article-title">
            <Link to="/d13" className="link" >D13</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item11} alt=" " />
          <h1 className="article-title">
            <Link to="/miband4" className="link">MI BAND 4</Link>
          </h1>
        </article>
        
      </section>
    </main>
    </div>;
}

export default SmartWatches;