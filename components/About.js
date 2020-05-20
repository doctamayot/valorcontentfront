import React from 'react';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const About = () => {
    return (
        <div className="sm:flex sm:flex-wrap xl:mt-64 lg:mt-20 "
            css={css`
            @media (min-width: 800px) and (max-width: 1000px){
                margin-top: 100px;
            }

            @media (min-width: 700px) and (max-width: 800px){
                margin-top: -300px;
            }

            @media (min-width: 501px) and (max-width: 620px){
                margin-top: 100px;
            }

            @media (min-width: 640px) and (max-width: 700px){
                margin-top: 400px;
            }

            @media (max-width: 500px)  {
                margin-top: 250px;
            }
                
            `}
        >           
            <div className=" xl:w-1/6 xl:ml-auto sm:w-2/5 sm:ml-auto">
                
                <div className="px-2 py-4 text-left w-full ">
                    <div className="font-black xl:text-2xl xxl:text-3xl mb-2 leading-8 text-center"
                        css={css`
                        color: rgb(12, 46, 96);
                        font-family: 'Poppins', sans-serif;
                        word-wrap: break-word;
                    `}
                    >ESPECTACULAR MÉTODO</div>
                    <p className="text-gray-700 text-base text-center">
                        Simplemente te organizamos el mejor contenido de valor de internet, y te lo ponemos a tu alcance.
                    </p>
                </div>
                <button
                    className="flex ml-auto mr-auto sm:transition duration-200 ease-in-out hover:text-blue-900 xl:text-base text-xs mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    css={css`
                    background: rgb(255,255,255);
                    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(214,158,46,1) 0%, rgba(12,46,96,1) 81%);
                    `}
                >
                Lee más...
                </button>
            </div>

            <div className="sm:w-2/5 transition duration-100 ease-in-out hover:border-yellow-700 border-2 xl:mx-4 xl:w-1/6 shadow-lg  w-11/12 ml-auto mr-auto sm:mr-auto mt-2"
                    css={css`
                    p:hover ~ li{
                    background-color: #d69e2e;
                    }
                    
                `} 
                >                    
                    <p className="xl:w-1/6 xl:h-64 xl:mt-2 xl:mr-4 sm:absolute">                    
                    </p>
                    <li className="mt-6 justify-center flex w-16 h-16 ml-auto mr-auto rounded-full" >
                        <FontAwesomeIcon
                        icon={"paper-plane"}
                        fixedWidth 
                        size="4x"
                         css={css`                            
                            padding: 10px 
                                                
                        `}
                        />
                    </li>
                
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center">Un mejor futuro</div>
                        <p className="text-gray-700 text-base text-center">
                        Capacitándote y entrenándote lograras habilidades que de permitirán tener un mejor futuro.
                        </p>
                    </div>
               
            </div> 

            <div className="sm:w-2/5 sm:mt-6 transition duration-100 ease-in-out hover:border-yellow-700 border-2 xl:mx-4 xl:w-1/6 rounded shadow-lg mt-2 xl:mt-0 w-11/12 ml-auto mr-auto sm:ml-auto"
                css={css`
                 p:hover ~ li{
                 background-color: #d69e2e;
                 }
                
             `} 
            >                    
                <p className="xl:w-1/6 xl:h-64 xl:mt-2 xl:mr-4 sm:absolute">                 
                </p>
                <li className="mt-6 justify-center flex w-16 h-16 ml-auto mr-auto rounded-full" >
                    <FontAwesomeIcon
                     icon={"book"}
                     fixedWidth 
                     size="4x"
                     css={css`
                        padding: 10px 
                                               
                     `}
                    />
                </li>
               
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center">Contenido escogido</div>
                    <p className="text-gray-700 text-base text-center">
                    Acá encontraras contenido escogido para que te especializes en distintos campos, muchos son gratis y en otros deberás invertir algo de dinero.
                    </p>
                </div>
               
            </div> 

            <div className="sm:w-2/5 sm:mt-6 sm:mr-12 md:mr-16 xl:mr-auto  transition duration-100 ease-in-out hover:border-yellow-700 border-2 xl:mx-4  xl:w-1/6  rounded shadow-lg mt-2 xl:mt-0 w-11/12 ml-auto mr-auto sm:w-1/3 sm:ml-auto"
                css={css`
                 p:hover ~ li{
                 background-color: #d69e2e;
                 }
                
             `} 
            >                    
                <p className="xl:w-1/6 xl:h-64 xl:mt-2 xl:mr-4 sm:absolute">                    
                </p>
                <li className="mt-6 justify-center flex w-16 h-16 ml-auto mr-auto rounded-full " >
                    <FontAwesomeIcon
                     icon={"chalkboard-teacher"}
                     fixedWidth 
                     size="4x"
                     css={css`
                        width: 55px;
                        padding: 10px 
                                               
                     `}
                    />
                </li>
               
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center">Un mejor trabajo</div>
                    <p className="text-gray-700 text-base text-center">
                    Capacitándote y estudiando podras aspirar a conseguir un mejor trabajo y tendrás nuevas oportunidades como profesional en el campo que desees. 
                    </p>
                </div>
               
            </div>    

            

        </div>
      );
}
 
export default About;