import React from 'react';
import './Headphones.css';
//import './Bootstrap/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Header from './Header';

import BeatsSolo3ProfilePic from './Images/beatsSolo3a.jpg';
import NiaQ1ProfilePic from './Images/niaQ1a.jpg';
import BoseQcProfilePic from './Images/boseQc1.jpg';
import BeatsStudio3ProfilePic from './Images/beatsStudio3a.jpg';
import NiaX2ProfilePic from './Images/niaX2a.jpg';
import NiaQ8ProfilePic from './Images/niaQ8a.jpg';

import Item13 from './Images/airpods2G1.jpg';
import Item14 from './Images/galaxyBud1.jpg';
import Item15 from './Images/airpodsPro1.jpg';
import Item16 from './Images/powerBeatsPro1.jpg';
import Item17 from './Images/joyroomProBuds1.jpg';
import Item18 from './Images/redmiAirdotsMini1.jpg';
import Item19 from './Images/beatsX1.jpg';
import Item20 from './Images/s8neckband1.jpg';
import Item21 from './Images/powerBeats3a.jpg';
import Item22 from './Images/jbl1.jpg';
import Item8 from './Images/bluedioTM1.jpg';
import Item23 from './Images/archeer1.jpg';
import Item24 from './Images/appleEarpods1.jpg';
import Item25 from './Images/rm512a.jpg';
import Item26 from './Images/rm610a.jpg';

function Headphones(){
    return <div>
      
    <header>
    <Header /> 
    </header>
    <main>
      <section className="leading-headphones">
        <p className="leading-bigtext">HEADPHONES</p>
      </section>
      <section className="cards">
        <article>
          <img className="article-img" src={BeatsSolo3ProfilePic} alt=" " />
          <h1 className="article-title">
            <Link to="/beats-solo3" className="link">Beats Solo 3</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={BoseQcProfilePic} alt=" " />
          <h1 className="article-title">
            <Link to="/bose-qc35" className="link">Bose QC 35</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={BeatsStudio3ProfilePic} alt=" " />
          <h1 className="article-title">
            <Link to="/beats-studio3" className="link">Beats Studio 3</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={NiaX2ProfilePic} alt=" " />
          <h1 className="article-title" >
            <Link to="/nia-x2" className="link">NIA X2</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={NiaQ1ProfilePic} alt=" " />
          <h1 className="article-title" >
            <Link to="/nia-q1" className="link">NIA Q1</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={NiaQ8ProfilePic} alt=" " />
          <h1 className="article-title" >
            <Link to="/nia-q8" className="link">NIA Q8</Link>
          </h1>
        </article>





        <article>
          <img className="article-img" src={Item13} alt=" " />
          <h1 className="article-title" >
            <Link to="/apple-airpods" className="link">Apple Airpods Gen2</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item14} alt=" " />
          <h1 className="article-title" >
            <Link to="/samsung-galaxy-buds" className="link">Samsung Galaxy Buds</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item15} alt=" " />
          <h1 className="article-title">
            <Link to="/apple-airpods-pro" className="link">Apple Airpods Pro</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item16} alt=" " />
          <h1 className="article-title" >
            <Link to="/power-beats-pro" className="link">Power Beats Pro</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item17} alt=" " />
          <h1 className="article-title" >
            <Link to="/joyroom-pro" className="link">Joyroom Pro Earbuds</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item18} alt=" " />
          <h1 className="article-title" >
            <Link to="/redmi-airdots" className="link" >Xiaomi Redmi Airdots Mini</Link>
          </h1>
        </article>

        <article>
          <img className="article-img" src={Item19} alt=" " />
          <h1 className="article-title" >
            <Link to="/beats-x" className="link">Beats-X Earphones</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item20} alt=" " />
          <h1 className="article-title" >
            <Link to="/remax-s8" className="link">Remax S8 earphones</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item21} alt=" " />
          <h1 className="article-title" >
            <Link to="/power-beats-3" className="link">Power Beats 3</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item22} alt=" " />
          <h1 className="article-title" >
            <Link to="/jbl" className="link">JBL headphones</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item26} alt=" " />
          <h1 className="article-title" >
            <Link to="/remax-610" className="link">Remax RM-610D</Link>
          </h1>
        </article>
        
        <article>
          <img className="article-img" src={Item23} alt=" " />
          <h1 className="article-title" >
            <Link to="/archeer" className="link">Archeer AH-17</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item8} alt=" " />
          <h1 className="article-title" >
            <Link to="/bluedio-tm" className="link">Bluedio T-Monitor</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item24} alt=" " />
          <h1 className="article-title" >
            <Link to="/apple-earpods" className="link">Apple EarPods</Link>
          </h1>
        </article>
        <article>
          <img className="article-img" src={Item25} alt=" " />
          <h1 className="article-title" >
            <Link to="/remax-512" className="link" >Remax RM-512</Link>
          </h1>
        </article>
        
      </section>
    </main>
    </div>;
}

export default Headphones;