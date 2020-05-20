import React from 'react';
import SideBar from "./Sidebar";
import logo from "../public/images/logocont.png"
import { css } from '@emotion/core';

    

const Header = () => {   

    return (
        <div className="sm:flex sm:w-9/12 ml-auto mr-auto sm:mt-32 md:mt-16 lg:mt-32 xl:mt-0 ">
            <div className="sm:hidden">
                <SideBar/>
            </div>              
            <div className="mt-12 sm:w-1/4 flex justify-center " >
                <img className="w-48 xl:w-64"src={logo} alt="contenapp" />
            </div> 
                
            <nav
                className=" sm:w-2/4 invisible sm:visible sm:flex xl:flex font-medium justify-end sm:ml-auto sm:mt-20 "
                css={css`
                    color: rgb(12, 46, 96);
                    font-family: 'Roboto', sans-serif;
                `}
            >
                <ul className="flex sm:text-xs xl:text-base xxl:text-lg">
                    <li className="cursor-pointer transition duration-200 ease-in-out hover:text-yellow-600  sm:mx-1 xl:mx-5  ">
                        Home
                    </li>
                    <li className="cursor-pointer transition duration-200 ease-in-out hover:text-yellow-600  sm:mx-1 xl:mx-5">
                        Info
                    </li>
                    <li className="cursor-pointer transition duration-200 ease-in-out hover:text-yellow-600 sm:mx-1 xl:mx-5 ">
                        Contenidos
                    </li>
                    <li className="cursor-pointer transition duration-200 ease-in-out hover:text-yellow-600  sm:mx-1 xl:mx-5  ">
                        Blog
                    </li>
                    <li className="cursor-pointer transition duration-200 ease-in-out hover:text-yellow-600  sm:mx-1 xl:mx-5  ">
                        Escríbenos
                    </li>                   
                </ul>    
            </nav>

            <div className=" fixed top-0 right-0 sm:w-1/6 sm:ml-auto sm:relative p-2 items-center sm:mt-8 text-center ">
                <p className="text-xs bg-yellow-600 hover:bg-yellow-400 text-white py-1 px-1 sm:w-12 xl:w-24 border-b-2 border-yellow-700 hover:border-yellow-500 rounded"
                  
                >Login</p>
            </div>
            
            
        </div>
      );
}
 
export default Header;