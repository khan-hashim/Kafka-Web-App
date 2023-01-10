import React from 'react';
import './KafkaApp.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Contact from './Contact';


import headphone1 from './Images/niaQ8c.jpg';
import smartwatch1 from './Images/D13a.jpg';
import powerbank1 from './Images/aspor1.jpg';
import airdots1 from './Images/redmiAirdotsMini2.jpg';
import headphone2 from './Images/s8neckband1.jpg';
import headphone3 from './Images/powerBeatsPro1.jpg';

//  HOME PAGE

function KafkaApp() {
  return (
    <div>
    <header>
    <Header /> 
    </header>
    
    <main className="wrapper">
      <section className="hero">
        <h1>KAFKA PAKISTAN</h1>
        <article>
          <p>THE NEXT BEST THING!</p>
        </article>
      </section>
      <section className="breweries" id="breweries">
        <ul>
          <li>
            <figure>
              <img src={headphone1} alt="headphone1"/>
              <figcaption><h3>Headphones</h3></figcaption>
            </figure>
            <Link to="/headphones">Checkout Headphones!</Link>
          </li>
          <li>
            <figure>
              <img src={smartwatch1} alt="smartwatch1"/>
              <figcaption><h3>Smart Watches</h3></figcaption>
            </figure>
            <Link to="/smartwatches">Checkout Smart Watches!</Link>
          </li>
          <li>
            <figure>
              <img src={powerbank1} alt="powerbank1"/>
              <figcaption><h3>Power Banks</h3></figcaption>
            </figure>
            <Link to="/powerbanks">Checkout Power Banks!</Link>
          </li>
          <li>
            <figure>
              <img src={airdots1} alt="headphone1"/>
              <figcaption><h3>Airpods</h3></figcaption>
            </figure>
            <Link to="/headphones">Checkout Airpods!</Link>
          </li>
          <li>
            <figure>
              <img src={headphone2} alt="smartwatch1"/>
              <figcaption><h3>Sports Headphones</h3></figcaption>
            </figure>
            <Link to="/headphones">Checkout Sports Headphones!</Link>
          </li>
          <li>
            <figure>
              <img src={headphone3} alt="powerbank1"/>
              <figcaption><h3>Earbuds</h3></figcaption>
            </figure>
            <Link to="/headphones">Checkout Earbuds!</Link>
          </li>
        </ul>
      </section>
    </main>
    <footer>
     <Contact />
    </footer>
  </div>
  );
}

export default KafkaApp;



