import React, { useState } from 'react'
import pic from '../../public/photo.avif';
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import {Link} from "react-scroll";
function Navbar() {
    const [menu, setMenu] = useState(false);
    const navitem = [
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experience"
        },
        {
            id:5,
            text:"Contact"
        }

    ]
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-white'>
     <div className="flex justify-between items-center h-16">
        <div className='flex space-x-2'>
            <img src={pic} className="h-12 w-12 rounded-full" alt='' />
            <h1 className="font-semibold text-2xl cursor-pointer ">GAU<span className="text-green-500 text-2xl">RAV</span>
            <p className="text-sm">Web Developer</p>
            </h1>
        </div>
        {/* Desktop Navbar */}
        <div>
            <ul className="hidden md:flex space-x-12">
                {navitem.map(({id,text})=>(
                    <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
                    <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    >{text}</Link>
                    </li>
                    
                ))}
            </ul>
            <div onClick={()=>setMenu(!menu)} className="md:hidden">
                    {menu ? <IoMdClose size={24} /> : <FiMenu size={24} />}
            </div>
        </div>
     </div>
{/* Mobile Navbar */}
{menu && (
        <div className='bg-white'>
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
            {navitem.map(({id,text})=>(
                    <li className="hover:scale-105 duration-200 font-semibold cursor-pointer" key={id}>
                    <Link
                    onClick={()=>setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    >{text}</Link>
                    </li>
                ))}
            </ul>
     </div>
    )}
    </div>
    </>
  );
}

export default Navbar
