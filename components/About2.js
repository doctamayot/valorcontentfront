import React from 'react';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import about2 from "../public/images/never.jpg";



const About2 = () => {
    return (
        <div className="mt-3 sm:mt-32 xl:mt-48 xl:flex justify-around mt-16 sm:border-2 sm:p-2 xl:mx-8 bg-yellow-500 shadow-xl bg-opacity-25 mx-2">
            <div className="w-11/12 mr-auto ml-auto xl:w-5/12 xl:ml-0 xl:mr-0 xl:mt-3 py-4 md:w-7/12">
                <img src={about2} alt="contenapp"></img>
            </div>
            <div className="w-11/12 mr-auto ml-auto xl:ml-6 xl:w-5/12 xl:ml-3 xl:mr-0">
                <h2 className="mt-2 text-xl xl:text-3xl font-bold md:text-center"
                     css={css`
                     color: rgb(12, 46, 96);
                     font-family: 'Poppins', sans-serif;                     
                  `}
                >Metodología Never Stop Learning</h2>
                <p className="mt-2 text-justify xl:text-lg"
                     css={css`
                     color:#777777;
                     font-family: 'Roboto', sans-serif;
                 `}
                >Aplicando la metodología "Never Stop Learning" conseguirás tus metas en un futuro a mediano plazo, la metodología consiste en: </p>
                 <div className="flex xl:-mt-1 ">
                    <FontAwesomeIcon className="xl:mt-6 md:mt-0"
                        icon={"book-open"}
                        fixedWidth 
                        size="3x"
                        css={css`
                            padding: 10px;
                            color:#777777; 
                                                
                        `}                     
                        />
                    <p className="text-sm xl:text-lg py-3 xl:mt-6"
                        css={css`
                        color:#777777;
                        font-family: 'Roboto', sans-serif;
                    `}
                    >Nunca pares de aprender cosas, siempre debes estar aprendiendo algo nuevo o reforzando algo que ya sepas</p>
                </div>

                <div className="flex xl:-mt-1">
                    <FontAwesomeIcon className="xl:mt-6 md:mt-0"
                        icon={"chart-line"}
                        fixedWidth 
                        size="3x"
                        css={css`
                            padding: 10px;
                            color:#777777;                                               
                        `}                     
                        />
                    <p className=" text-sm xl:text-lg py-3 xl:mt-6"
                        css={css`
                        color:#777777;
                        font-family: 'Roboto', sans-serif;
                    `}
                    >Si debes pagar por algun material debes verlo como una inversión que rendirá frutos mas rapido de lo que te imaginas.</p>
                </div>

                <div className="flex xl:-mt-1">
                    <FontAwesomeIcon className="xl:mt-6 md:mt-0"
                        icon={"check-circle"}
                        fixedWidth 
                        size="3x"
                        css={css`
                            padding: 10px;
                            color:#777777; 
                           `}                     
                        />
                    <p className=" text-sm xl:text-lg py-3 xl:mt-6"
                        css={css`
                        color:#777777;
                        font-family: 'Roboto', sans-serif;
                    `}
                    >Nunca pares de aprender, y acá en Contenapp te seleccionamos el mejor contenido para que apliques esta metodología.</p>
                </div>
            </div>
        </div>
      );
}
 
export default About2;