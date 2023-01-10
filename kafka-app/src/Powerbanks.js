import React from 'react';
import './Powerbanks.css';
//import './Bootstrap/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Header from './Header';

import Item27 from './Images/romossOm10a.jpg';
import Item28 from './Images/aspor1.jpg';
import Item29 from './Images/redmiPowerBank10000a.jpg';
import Item30 from './Images/romossSense9a.jpg';
import Item31 from './Images/redmiPowerBank20000a.jpg';

function PowerBanks(){
    return <div>
      
    <header>
    <Header /> 
    </header>
    <main>
      <section className="leading-powerbanks">
        <p className="leading-bigtext">POWERBANKS</p>
      </section>
      <section className="cards">
        <article>
          <img className="article-img" src={Item30} alt=" " />
          <h1 className="article-title">
            <Link to="/romoss-sense-9" className="link">ROMOSS S9</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item27} alt=" " />
          <h1 className="article-title">
            <Link to="/romoss-om-10" className="link">ROMOSS OM10</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item28} alt=" " />
          <h1 className="article-title">
            <Link to="/aspor" className="link">ASPOR PB</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item29} alt=" " />
          <h1 className="article-title">
            <Link to="/xiaomi-redmi-10000" className="link">XIAOMI 10K</Link>
          </h1>
        </article>
        
        <article>
          <img className="article-img" src={Item31} alt=" " />
          <h1 className="article-title">
            <Link to="/xiaomi-redmi-20000" className="link">XIAOMI 20K</Link>
          </h1>
        </article>
      </section>
    </main>
    </div>;
}

export default PowerBanks;