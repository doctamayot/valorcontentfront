import React from 'react';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import facebook from "../public/images/face.png"
import instagram from "../public/images/instagram.png"
import twitter from "../public/images/twitter.png"

const Footer = () => {
    return (
        <div className="bg-gray-800 text-center sm:flex p-2 justify-center">
           <div className="flex justify-center">
                <img className="xl:w-8 xl:h-8 w-5 h-5 mx-3" src={facebook}/> 
                <img className="xl:w-8 xl:h-8 w-5 h-5 mx-3" src={instagram}/>
                <img className="xl:w-8 xl:h-8 w-5 h-5 mx-3" src={twitter}/>
           </div>    
            <p className="text-white text-xs mt-2"
                 css={css`                
                 font-family: 'Poppins', sans-serif;
             `}
            >ContenApp, todos los derechos reservados 2020 ©</p>
           </div>                                         
        
      );
}
 
export default Footer;