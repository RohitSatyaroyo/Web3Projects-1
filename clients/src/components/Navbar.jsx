
import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import  logo from '../../images/ssd.png';
import { useState } from 'react';
import React from 'react';


// const NavBarItem = ({ title, classprops }) => (
//     <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
//   );




const Navbar =()=>{
    return(
        <nav className="w-full  flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center ">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
          
      <h1 className="text-3xl sm:text-5xl   text-red-500  py-1     items-start flex justify-center ">UNSIN</h1>
            
            

            
          
     

        </nav>
    )
}
export default Navbar;