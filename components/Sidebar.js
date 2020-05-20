import React from "react";
import { slide as Menu } from "react-burger-menu";
import { css } from '@emotion/core';

export default props => {
  return (
    // Pass on our props
          
    
    <div 
        id="outer-container"
        css={css`
                /* Our sidebar item styling */
                text-decoration: none;
                margin-bottom: 10px;
                transition: color 0.2s;
                
            }
            
                       
            /* The rest copied directly from react-burger-menu docs */
            
            /* Position and sizing of burger button */
            .bm-burger-button {
                position: fixed;
                width: 36px;
                height: 30px;
                left: 36px;
                top: 20px;
            }
            
            /* Color/shape of burger icon bars */
            .bm-burger-bars {
                background: #d69e2e;
            }
            
            /* Position and sizing of clickable cross button */
            .bm-cross-button {
                height: 24px;
                width: 24px;
            }
            
            /* Color/shape of close button cross */
            .bm-cross {
                background: #bdc3c7;
            }
            
            /* General sidebar styles */
            .bm-menu {
                background: #d69e2e;;
                padding: 2.5em 1.5em 0;
                font-size: 1.15em;
                
            }
            
            /* Morph shape necessary with bubble or elastic */
            .bm-morph-shape {
                fill: #d69e2e;
            }
            
            /* Wrapper for item list */
            .bm-item-list {
                color: #b8b7ad;
            }
            
            /* Styling of overlay */
            .bm-overlay {
                background:#d69e2e;
            }
            
            
        `}
    >
        <Menu width={" 150px "} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } className="flex" >
            <main id="page-wrap" className="flex flex-col text-white">
                <div className=" " href="/">
                    Home
                </div>

                <div className="py-2" href="/burgers">
                    Burgers
                </div>

                <div className="py-2" href="/pizzas">
                    Pizzas
                </div>

                <div className="py-2" href="/desserts">
                    Desserts
                </div>
            </main>
         </Menu>  
    </div>
  );
};