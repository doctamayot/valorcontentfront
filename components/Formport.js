import React from 'react';
import imgform from "../public/images/portada.png";
import { css } from '@emotion/core';

const Formport = () => {
    return ( 
        
        <div className="mt-3 w-11/12 mr-auto ml-auto bg-yellow-500 p-2 rounded-md xl:mt-40 xl:flex xl:flex-wrap mt-16 shadow-xl">
          <h3 className="text-center text-base font-bold ml-auto mr-auto xl:w-full xl:text-3xl xxl:text-4xl "
            css={css`
            color: rgb(12, 46, 96);
            font-family: 'Poppins', sans-serif;
        `}
          >Recibe Contenido de Valor a tu correo</h3>  
          <img className="w-8/12 mt-3 mr-auto ml-auto sm:w-5/12 md:w-4/12 xl:w-3/12 xl:mb-4 "src={imgform} alt="contenapp suscribete" />
          <p className="text-sm text-center ml-auto mr-auto w-full mt-2 xl:w-1/2 xl:text-lg xl:mt-12 xxl:text-2xl xxl:mt-20"
            css={css`
            color:rgb(85, 97, 114);
            font-family: 'Poppins', sans-serif;
            `}
            >Suscribete para que recibas el último contenido de valor que encontremos para ti</p>
          <form className="w-full mt-3 xl:w-7/12 xl:fixed xxl:mt-24 "
            css={css`
            top: 15rem;
            right:7rem
            `}
          >
          
                <div className="flex items-center border-b border-b-2 border-black py-2 mt-2">
                    
                    <input className="appearance-none bg-transparent border-none w-full text-red-800 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Escribe acá tu Email" aria-label="Full name"/>
                    <button className="bg-yellow-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-blue-500 rounded xl:w-8/12 w-5/12 h-10 xxl:h-12 text-sm xxl:text-lg" type="button">
                    Suscríbete
                    </button>
                    
                </div>
            </form>  
        </div>

     );
}
 
export default Formport ;