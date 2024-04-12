import React from 'react'
import html from '../../public/html.png';
import css from '../../public/css.jpg';
import javascript from '../../public/javascript.png';
import oracle from '../../public/oracle.png';
import spring from '../../public/spring.png';
import java from '../../public/java.png';

function Experience() {
    const cardItem = [
        {
            id: 1,
            logo:spring,
            name:"Springboot"
        },
        {
            id: 2,
            logo:java,
            name:"java"
        },
        {
            id: 3,
            logo:oracle,
            name:"Oracle"
        },
        {
            id: 4,
            logo:javascript,
            name:"Javascript"
        },
        {
            id: 5,
            logo:css,
            name:"CSS"
        },
        {
            id: 6,
            logo:html,
            name:"HTML"
        }
    ]
  return (
    <>
    <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
    <div>
    <h1 className="text-3xl font-bold mb-5">Experiance</h1>
    <p className="">I've more than 2 years of experiance in below technologies.</p>
    <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3 '>
        {
            cardItem.map(({id,logo,name})=>(
                <div className="flex flex-col items-center justify-center border-[2px]  rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                    <img src={logo} className="w-[150px] p-1 rounded-full" alt='' />
                    <div className="">{name}</div>
                </div>
            ))
        }
    </div>
    </div>
    </div>
      
    </>
  )
}

export default Experience
