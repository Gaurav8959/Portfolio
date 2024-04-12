import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
function Contact() {
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
      const onSubmit = async (data) => {
        const userInfo = {
            username: data.username,
            email: data.email,
            message: data.message
        };
        try {
           await axios.post("https://getform.io/f/qbloqjva", userInfo);
           toast.success("Your message has been send");
        } catch (error) {
            toast.success("Something went wrong");
        }
      };

  return (
    <>
      <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <span className="">Please fill out the form below to contact me.</span>
      <div className='flex flex-col items-center justify-center mt-8'>
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-200 w-90 md:w-96 px-8 py-6 rounded-xl"
        //action="https://getform.io/f/qbloqjva" 
        //</div>method="POST"
        >
            <h1 className="text-xl font-semibold mb-4">Send your Message</h1>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Full Name</label>
                <input 
                {...register("username", { required: true })}
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username" type="text" placeholder="Enter Your Full Name" />
                {errors.username && <span className='text-red-700'>This field is required</span>}
            </div>    
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Email</label>
                <input 
                {...register("email", { required: true })}
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" id="username" type="email" placeholder="Enter Your Email" />
                {errors.email && <span className='text-red-700'>This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Message</label>
                <textarea 
                {...register("message", { required: true })}
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message" id="username" type="text" placeholder="Enter Your Message" />
                {errors.message && <span className='text-red-700'>This field is required</span>}
            </div>
            <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
        </form>
      </div>
      </div>
    </>
  )
}

export default Contact
