import React from 'react'
import { FaFacebook,FaLinkedin,FaInstagram,FaWhatsapp } from "react-icons/fa6";


function Footer() {
  return (
    <>
    <hr className='shadow-xl'/>
    <footer className='py-12'>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex space-x-4'>
            <FaFacebook size={24}/>
            <FaLinkedin size={24}/>
            <FaInstagram size={24}/>
            <FaWhatsapp size={24}/>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
            <p className="text-sm">&copy; 2024 Gaurav Rathore All rights reserved.</p>
            <p className="text-sm">Supportive Partner ❤️ Self</p>
        </div>
      </div>
    </div>
    </footer>
    </>
  )
}

export default Footer
