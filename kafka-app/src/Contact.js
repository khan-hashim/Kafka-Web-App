import React from 'react';

import fbicon from './Images/facebookicon.png';
import instaicon from './Images/instagramicon.png';
import whatsicon from './Images/whatsappicon.png';
function Contact(){
    return <div>
        
     <h3><img src={whatsicon} alt="Call us on"/>0321-7991523</h3>
     <a href="https://www.instagram.com/kafkapakistan_/">
         <img src={instaicon} alt="Find us on Instagram"/>
     </a>
     <a href="https://www.facebook.com/kafkapakistan/">
         <img src={fbicon} alt="Find us on Facebook"/>
     </a>
      
    </div>;
  }

  export default Contact;  