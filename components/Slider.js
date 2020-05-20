import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import { css } from '@emotion/core';

const Slider = () => {
    
  
    return (
      <div className="xl:mt-32 -mb-64 mt-16 ">
        <h2 className="font-semibold text-center text-lg xl:text-4xl "
          css={css`
          color: rgb(12, 46, 96);
          font-family: 'Poppins', sans-serif;
      `}
        >Contenido Más Popular</h2>
        <Carousel className="mt-6" infiniteLoop={true} transitionTime={1000} showThumbs={false}  dynamicHeight={false}
            css={css`
            /********************************************
             BREAKPOINT WIDTHS
         ********************************************/
         /********************************************
             FONTS
         ********************************************/
         /********************************************
             COLOURS
         ********************************************/
         .carousel .control-arrow, .carousel.carousel-slider .control-arrow {
           -webkit-transition: all 0.25s ease-in;
           -moz-transition: all 0.25s ease-in;
           -ms-transition: all 0.25s ease-in;
           -o-transition: all 0.25s ease-in;
           transition: all 0.25s ease-in;
           opacity: 0.4;
           filter: alpha(opacity=40);
           position: absolute;
           z-index: 2;
           top: 20px;
           background: none;
           border: 0;
           font-size: 32px;
           cursor: pointer; }
           .carousel .control-arrow:hover {
             opacity: 1;
             filter: alpha(opacity=100); }
           .carousel .control-arrow:before, .carousel.carousel-slider .control-arrow:before {
             margin: 0 5px;
             display: inline-block;
             border-top: 8px solid transparent;
             border-bottom: 8px solid transparent;
             content: ''; }
           .carousel .control-disabled.control-arrow {
             opacity: 0;
             filter: alpha(opacity=0);
             cursor: inherit;
             display: none; }
           .carousel .control-prev.control-arrow {
             left: 0; }
             .carousel .control-prev.control-arrow:before {
               border-right: 8px solid #fff; }
           .carousel .control-next.control-arrow {
             right: 0; }
             .carousel .control-next.control-arrow:before {
               border-left: 8px solid #fff; }
         
         .carousel-root {
           outline: none; }
         
         .carousel {
           position: relative;
           width: 100%;
          }
           .carousel * {
             -webkit-box-sizing: border-box;
             -moz-box-sizing: border-box;
             box-sizing: border-box; }
           
           .carousel .carousel {
             position: relative; }
           .carousel .control-arrow {
             outline: 0;
             border: 0;
             background: none;
             top: 50%;
             
             font-size: 18px; }
           .carousel .thumbs-wrapper {
             margin: 20px;
             overflow: hidden; }
           .carousel .thumbs {
             -webkit-transition: all 0.15s ease-in;
             -moz-transition: all 0.15s ease-in;
             -ms-transition: all 0.15s ease-in;
             -o-transition: all 0.15s ease-in;
             transition: all 0.15s ease-in;
             -webkit-transform: translate3d(0, 0, 0);
             -moz-transform: translate3d(0, 0, 0);
             -ms-transform: translate3d(0, 0, 0);
             -o-transform: translate3d(0, 0, 0);
             transform: translate3d(0, 0, 0);
             position: relative;
             list-style: none;
             white-space: nowrap; }
           .carousel .thumb {
             -webkit-transition: border 0.15s ease-in;
             -moz-transition: border 0.15s ease-in;
             -ms-transition: border 0.15s ease-in;
             -o-transition: border 0.15s ease-in;
             transition: border 0.15s ease-in;
             display: inline-block;
             margin-right: 6px;
             white-space: nowrap;
             overflow: hidden;
             border: 3px solid #fff;
             padding: 2px; }
             .carousel .thumb:focus {
               border: 3px solid #ccc;
               outline: none; }
             .carousel .thumb.selected, .carousel .thumb:hover {
               border: 3px solid #333; }
             .carousel .thumb img {
               vertical-align: top; }
           .carousel.carousel-slider {
             position: relative;
             margin: 0;
             overflow: hidden; }
             .carousel.carousel-slider .control-arrow {
               top: 0;
               color: black;
               font-size: 26px;
               bottom: 0;
               margin-top: 0;
               padding: 5px; }
               .carousel.carousel-slider .control-arrow:hover {
                 background: rgba(0, 0, 0, 0.2); }
           .carousel .slider-wrapper {
             overflow: hidden;
             margin: auto;
             width: 100%;
             -webkit-transition: height 0.15s ease-in;
             -moz-transition: height 0.15s ease-in;
             -ms-transition: height 0.15s ease-in;
             -o-transition: height 0.15s ease-in;
             transition: height 0.15s ease-in; }
             .carousel .slider-wrapper.axis-horizontal .slider {
               -ms-box-orient: horizontal;
               display: -webkit-box;
               display: -moz-box;
               display: -ms-flexbox;
               display: -moz-flex;
               display: -webkit-flex;
               display: flex; }
               .carousel .slider-wrapper.axis-horizontal .slider .slide {
                 flex-direction: column;
                 flex-flow: column; }
             .carousel .slider-wrapper.axis-vertical {
               -ms-box-orient: horizontal;
               display: -webkit-box;
               display: -moz-box;
               display: -ms-flexbox;
               display: -moz-flex;
               display: -webkit-flex;
               display: flex; }
               .carousel .slider-wrapper.axis-vertical .slider {
                 -webkit-flex-direction: column;
                 flex-direction: column; }
           .carousel .slider {
             margin: 0;
             padding: 0;
             position: relative;
             list-style: none;
             width: 100%; }
             .carousel .slider.animated {
               -webkit-transition: all 0.35s ease-in-out;
               -moz-transition: all 0.35s ease-in-out;
               -ms-transition: all 0.35s ease-in-out;
               -o-transition: all 0.35s ease-in-out;
               transition: all 0.35s ease-in-out; }
           .carousel .slide {
             min-width: 100%;
             margin: 0;
             position: relative;
             text-align: center;
             background: #fff; }
             .carousel .slide img {
               width: 100%;
               vertical-align: top;
               border: 0; }
             .carousel .slide iframe {
               display: inline-block;
               width: calc(100% - 80px);
               margin: 0 40px 40px;
               border: 0; }
             .carousel .slide .legend {
               -webkit-transition: all 0.5s ease-in-out;
               -moz-transition: all 0.5s ease-in-out;
               -ms-transition: all 0.5s ease-in-out;
               -o-transition: all 0.5s ease-in-out;
               transition: all 0.5s ease-in-out;
               position: absolute;
               bottom: 40px;
               left: 50%;
               margin-left: -45%;
               width: 90%;
               border-radius: 10px;
               background: #000;
               color: #fff;
               padding: 10px;
               font-size: 12px;
               text-align: center;
               opacity: 0.25;
               -webkit-transition: opacity 0.35s ease-in-out;
               -moz-transition: opacity 0.35s ease-in-out;
               -ms-transition: opacity 0.35s ease-in-out;
               -o-transition: opacity 0.35s ease-in-out;
               transition: opacity 0.35s ease-in-out; }
           .carousel .control-dots {
             position: absolute;
             bottom: 0;
             margin: 10px 0;
             text-align: center;
             width: 100%; }
             @media (min-width: 960px) {
               .carousel .control-dots {
                 bottom: 0; } }
             .carousel .control-dots .dot {
               -webkit-transition: opacity 0.25s ease-in;
               -moz-transition: opacity 0.25s ease-in;
               -ms-transition: opacity 0.25s ease-in;
               -o-transition: opacity 0.25s ease-in;
               transition: opacity 0.25s ease-in;
               opacity: 0.3;
               filter: alpha(opacity=30);
               box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
               background: black;
               border-radius: 50%;
               width: 8px;
               height: 8px;
               cursor: pointer;
               display: inline-block;
               margin: 0 8px; }
               .carousel .control-dots .dot.selected, .carousel .control-dots .dot:hover {
                 opacity: 1;
                 filter: alpha(opacity=100); }
           .carousel .carousel-status {
             position: absolute;
             top: 0;
             right: 0;
             padding: 5px;
             font-size: 10px;
             
             color: black; }
           .carousel:hover .slide .legend {
             opacity: 1; }
         
            `}
        >
        <div className="mr-auto ml-auto xl:w-9/12 p-4 shadow-2xl flex flex-col  xl:mt-4 ">
          <div className="sm:flex block ">
            <div className="sm:flex xl:w-1/2 w-9/12 border-2 border-yellow-800 rounded shadow-lg ml-auto mr-auto">
              <img className="object-cover " src="/images/27833.png" alt="Slider" />
            </div>
            <div className="xl:w-3/4 p-4">
              <h2 className="font-bold xl:text-2xl text-shadow-lg mb-2 text-lg border-2 rounded xl:w-11/12 shadow-lg text-yellow-800 p-2 bg-yellow-500 shadow-xl bg-opacity-25"
                css={css`                
                font-family: 'Poppins', sans-serif;
            `}
              >Curso Completo de Css de cero a Experto</h2>
              <p className="text-black xl:text-xl text-left text-sm break-all mt-4 xl:mt-8 shadow-lg p-4 mx-2"
                css={css`
                
                font-family: 'Roboto', sans-serif;
            `}
              >kñjfdkldñadkslñdkalñdfkjgdksfj jkdlñadjklñasdklñsadkaslñ lñjkdlñakdlñasdklñkfkjfkofjasñd slfnhjadkljsdkljdfsdklñfjdñkfjkdjsñdjasklfjsdkfhjklñasklasmflasjkdlñasdjsdjsdlfaskljsdkñgjsdkfhjasklfhdjkfhajkdñhasfjhaskldhjkfhdlmhddfhjkldhdfjkhaskljdklñfjdklñfjasfklñsdfkoñdjflñsjfkdssklfjasmklfjsdmklñfjasmklñfdfjdlñfjk  asdklñasdkaslñdkslñdkalñdkñdlk ksdlñk alñd klñdk asdkaslñdklñ dk</p>
              <p className="text-gray-900 leading-none text-left xl:text-lg mt-2 text-xs italic xl:mt-12"
                css={css`                
                font-family: 'Poppins', sans-serif;
            `}
              >Autor</p>
              <button className="bg-yellow-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-blue-500 rounded text-xs"
                 css={css`
                 
                 font-family: 'Roboto', sans-serif;
             `}
              >Ver Contenido</button>
            </div>
          </div>
        </div>       
        <div className="mr-auto ml-auto xl:w-9/12 p-4 shadow-2xl flex flex-col ">
          <div className="sm:flex block ">
            <div className="sm:flex xl:w-1/2">
              <img className="object-cover" src="/images/27833.png" alt="Slider" />
            </div>
            <div className="xl:w-3/4 p-4">
              <h2 className="font-bold xl:text-4xl mb-2 text-lg">Titulo del contenido</h2>
              <p className="text-gray-700 xl:text-2xl text-left text-sm break-all">kñjfdkldñadkslñdkalñdfkjgdksfj jkdlñadjklñasdklñsadkaslñ lñjkdlñakdlñasdklñkfkjfkofjasñd slfnhjadkljsdkljdfsdklñfjdñkfjkdjsñdjasklfjsdkfhjklñasklasmflasjkdlñasdjsdjsdlfaskljsdkñgjsdkfhjasklfhdjkfhajkdñhasfjhaskldhjkfhdlmhddfhjkldhdfjkhaskljdklñfjdklñfjasfklñsdfkoñdjflñsjfkdssklfjasmklfjsdmklñfjasmklñfdfjdlñfjk  asdklñasdkaslñdkslñdkalñdkñdlk ksdlñk alñd klñdk asdkaslñdklñ dk</p>
              <p className="text-gray-900 text-left xl:text-lg mt-2 text-xs italic"
                 css={css`                
                 font-family: 'Poppins', sans-serif;
             `}
              >Autor</p>
              <button>Ver Contenido</button>
            </div>
          </div>
        </div> 
        
        <div className="mr-auto ml-auto xl:w-9/12 p-4 shadow-2xl flex flex-col ">
          <div className="sm:flex block ">
            <div className="sm:flex xl:w-1/2">
              <img className="object-fill " src="/images/27833.png" alt="Slider" />
            </div>
            <div className="xl:w-3/4 p-4">
              <h2 className="font-bold xl:text-4xl mb-2 text-lg">Titulo del contenido</h2>
              <p className="text-gray-700 xl:text-2xl text-left text-sm break-all">kñjfdkldñadkslñdkalñdfkjgdksfj jkdlñadjklñasdklñsadkaslñ lñjkdlñakdlñasdklñkfkjfkofjasñd slfnhjadkljsdkljdfsdklñfjdñkfjkdjsñdjasklfjsdkfhjklñasklasmflasjkdlñasdjsdjsdlfaskljsdkñgjsdkfhjasklfhdjkfhajkdñhasfjhaskldhjkfhdlmhddfhjkldhdfjkhaskljdklñfjdklñfjasfklñsdfkoñdjflñsjfkdssklfjasmklfjsdmklñfjasmklñfdfjdlñfjk  asdklñasdkaslñdkslñdkalñdkñdlk ksdlñk alñd klñdk asdkaslñdklñ dk</p>
              <p className="text-gray-900 leading-none text-left xl:text-lg mt-2 text-xs">Autor</p>
              <button>Ver Contenido</button>
            </div>
          </div>
        </div> 
    </Carousel>
    </div> 
    )
}
 
export default Slider;
