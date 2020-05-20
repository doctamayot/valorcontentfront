import React from 'react';
import portada from "../public/images/27833.png";
import { css } from '@emotion/core';

const Principal = () => {
    return (
    <div className="sm:flex sm:mt-12 xl:items-center xl:-mt-24 sm:w-11/12 sm:ml-auto xl:w-9/12 xl:ml-auto xl:mr-auto h-screen sm:mt-24 lg:mt-16 ">
        <div className="sm:w-1/2 flex-col items-start p-4 border-4 xl:border-4 md:border-none md:shadow-none rounded bg-yellow-500 shadow-xl bg-opacity-25 mx-2 xl:bg-yellow-500 xl:shadow-xl md:bg-white md:shadow xl:bg-opacity-25 mx-2  ">            
            <h5 
                className="xl:text-base sm:text-xs font-bold text-sm ml-auto mr-auto text-center"
                css={css`
                    color:rgb(85, 97, 114);
                    font-family: 'Poppins', sans-serif;
                `}
            >Te compartimos el mejor Contenido de Valor
            </h5>
            <h1
                 className="mt-6 font-black text-xl sm:text-3xl xl:text-3xl xxl:text-5xl xl:text-center leading-tight text-center "
                 css={css`
                    color: rgb(12, 46, 96);
                    font-family: 'Poppins', sans-serif;
                    
                 `}
            > CONTENIDO DE VALOR ESCOGIDO PARA TI</h1>
            <p
                className="leading-snug font-normal text-xs mt-3 xl:text-base text-center"
                css={css`
                    color:#777777;
                    font-family: 'Roboto', sans-serif;
                `}
            >Bienvenido a ContentApp, la plataforma web en donde encontrarás mucho contenido digital para generarte Valor, para que puedas alcanzar tus metas, y para que te estes formando cada vez como persona.</p>
            <div className="flex justify-center">   
                <button
                    className="transition duration-200 ease-in-out hover:text-yellow-700 xl:text-base text-xs mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    css={css`
                    background: rgb(255,255,255);
                    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(214,158,46,1) 0%, rgba(12,46,96,1) 81%);
                    `}
                >Empieza Ya!
                </button>
            
                <button
                    className="transition duration-200 ease-in-out hover:text-yellow-700 xl:text-base text-xs ml-4 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    css={css`
                    background: rgb(255,255,255);
                    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(12,46,96,1) 0%, rgba(214,158,46,1) 81%);
                    `}
                >Pregúntanos
                </button>
            </div>    
        </div>
        <div className="sm:w-1/2 xl:justify-start sm:items-center items-start">
            <img src={portada} alt="contenapp" className="sm:mr-16"
             />
        </div>        
    </div>
    
      );
}
 
export default Principal;