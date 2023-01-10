import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import KafkaApp from './KafkaApp';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter , Route } from 'react-router-dom';
import Headphones from './Headphones';
import SmartWatches from './Smartwatches';
import PowerBanks from './Powerbanks';
import BeatsSolo3 from './headphones/BeatsSolo3';
import BoseQc35 from './headphones/BoseQc35';
import BeatsStudio3 from './headphones/BeatsStudio3';
import NiaQ1 from './headphones/NiaQ1';
import NiaQ8 from './headphones/NiaQ8';
import NiaX2 from './headphones/NiaX2';
import AppleAirpods from './headphones/AppleAirpods';
import AppleAirpodsPro from './headphones/AppleAirpodsPro';
import AppleEarpods from './headphones/AppleEarpods';
import Archeer from './headphones/Archeer';
import BeatsX from './headphones/BeatsX';
import BluedioTM from './headphones/BluedioTM';
import Jbl from './headphones/Jbl';
import JoyroomPro from './headphones/JoyroomPro';
import PowerBeats3 from './headphones/PowerBeats3';
import PowerBeatsPro from './headphones/PowerBeatsPro';
import RedmiAirdots from './headphones/RedmiAirdots';
import Remax512 from './headphones/Remax512';
import Remax610 from './headphones/Remax610';
import RemaxS8 from './headphones/RemaxS8';
import SamsungGalaxyBuds from './headphones/SamsungGalaxyBuds';
import T5 from './smartwatches/T5';
import D13 from './smartwatches/D13';
import DT78 from './smartwatches/DT78';
import D18 from './smartwatches/D18';
import MiBand4 from './smartwatches/MiBand4';
import RomossSense9 from './powerbanks/RomossSense9';
import Aspor  from './powerbanks/Aspor';
import RomossOm10 from './powerbanks/RomossOm10';
import XiaomiRedmi10000 from './powerbanks/XiaomiRedmi10000';
import XiaomiRedmi20000 from './powerbanks/XiaomiRedmi20000';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
//import Contact from './Contact';
import cartReducer from './reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const store = createStore(cartReducer);


function App() {
  return <KafkaApp />
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={App} />
      <Route path="/headphones" component={Headphones} />
      <Route path="/smartwatches" component={SmartWatches} />
      <Route path="/powerbanks" component={PowerBanks} />
      <Route path="/cart" component={Cart} />
      <Route path="/beats-solo3" component={BeatsSolo3} />
      <Route path="/beats-studio3" component={BeatsStudio3} />
      <Route path="/bose-qc35" component={BoseQc35} />
      <Route path="/nia-q1" component={NiaQ1} />
      <Route path="/nia-q8" component={NiaQ8} />
      <Route path="/nia-x2" component={NiaX2} />
      <Route path="/apple-airpods" component={AppleAirpods} />
      <Route path="/apple-airpods-pro" component={AppleAirpodsPro} />
      <Route path="/apple-earpods" component={AppleEarpods} />
      <Route path="/archeer" component={Archeer} />
      <Route path="/beats-x" component={BeatsX} />
      <Route path="/bluedio-tm" component={BluedioTM} />
      <Route path="/jbl" component={Jbl} />
      <Route path="/joyroom-pro" component={JoyroomPro} />
      <Route path="/power-beats-3" component={PowerBeats3} />
      <Route path="/power-beats-pro" component={PowerBeatsPro} />
      <Route path="/redmi-airdots" component={RedmiAirdots} />
      <Route path="/remax-512" component={Remax512} />
      <Route path="/remax-610" component={Remax610} />
      <Route path="/remax-s8" component={RemaxS8} />
      <Route path="/samsung-galaxy-buds" component={SamsungGalaxyBuds} />
      <Route path="/t5" component={T5} />
      <Route path="/d13" component={D13} />
      <Route path="/d18" component={D18} />
      <Route path="/dt78" component={DT78} />
      <Route path="/miband4" component={MiBand4} />
      <Route path="/romoss-sense-9" component={RomossSense9} />
      <Route path="/romoss-om-10" component={RomossOm10} />
      <Route path="/aspor" component={Aspor} />
      <Route path="/xiaomi-redmi-10000" component={XiaomiRedmi10000} />
      <Route path="/xiaomi-redmi-20000" component={XiaomiRedmi20000} />
      <Route path="/checkout" component={Checkout} />
      
    </React.Fragment>  
    </BrowserRouter>
  </Provider>  
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
