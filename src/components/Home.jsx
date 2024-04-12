import React from 'react'
import pic from '../../public/photo.avif';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-l md:text-4xl">
            <h1>Hello, I'm a &nbsp;</h1>
            {/* <span className="text-red-700 font-bold">Developer</span> */}
            <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
            />
            </div>
            <br/>
            <p className="text-sm md:text-md text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, recusandae consequatur. Accusamus sint libero eligendi laborum fuga repudiandae? Asperiores tempore eos animi dolores corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio cum delectus sit voluptatum aut ratione quaerat veniam aperiam!</p>
            <br />
            {/* Social Media icone */}
            <div className="flex flex-col items-center md:flex-row space-y-6 md:space-y-0 justify-between">
            <div className="space-y-2">
                <h1 className="font-bold md:text-left text-center">Available on</h1>
                <ul className="flex space-x-5">
                    <a href='https://facebook.com' target="_blank">
                <li><FaFacebookSquare className="text-xl md:text-3xl hover:scale-110 duretion-200 rounded-full border-[2px] cursor-pointer"/></li></a>
                <a href='https://linkedin.com' target="_blank">
                <li><FaLinkedin className="text-xl md:text-3xl hover:scale-110 duretion-200 rounded-full border-[2px] cursor-pointer"/></li></a>
                <a href='https://instagram.com' target="_blank">
                <li><FaInstagram className="text-xl md:text-3xl hover:scale-110 duretion-200 rounded-full border-[2px] cursor-pointer"/></li></a>
                <a href='https://whatsapp.com' target="_blank">
                <li><IoLogoWhatsapp className="text-xl md:text-3xl hover:scale-110 duretion-200 rounded-full border-[2px] cursor-pointer"/></li></a>
                </ul>
            </div>
            <div className="space-y-2">
                <h1 className="font-bold md:text-left text-center">Currently working on</h1>
                <ul className="flex space-x-5">
                <li><SiMongodb className="text-xl md:text-3xl hover:scale-110 duretion-200 rounded-full border-[2px] cursor-pointer"/></li>
                <li><SiExpress className="text-xl md:text-3xl hover:scale-110 duretion-200 rounded-full border-[2px] cursor-pointer"/></li>
                <li><FaReact className="text-xl md:text-3xl hover:scale-110 duretion-200 rounded-full border-[2px] cursor-pointer"/></li>
                <li><FaNode className="text-xl md:text-3xl hover:scale-110 duretion-200 rounded-full border-[2px] cursor-pointer"/></li>
                </ul>
            </div>
            </div>
        </div>
        <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img src={pic} className="rounded-full md:w-[450px] md:h-[450px]" alt="" />
        </div>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Home
