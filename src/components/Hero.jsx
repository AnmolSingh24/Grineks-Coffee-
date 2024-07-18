import React from 'react'
import HeroImg from "../assets/HeroCoffeeImg.png"
import { FiArrowRightCircle } from "react-icons/fi";
import { HEROCONTENT } from '../constants/data.js';

const Hero = () => {
    return (
        <div className='pb-4'>
            <div className='flex flex-wrap'>
                <div className='w-full mt-4 flex items-center justify-center gap-10'>
                    <img src={HeroImg} alt="Coffee-Image" className='w-[48rem] h-[35rem] mt-28' />
                    <div className='w-[40rem] pr-10'>
                        {HEROCONTENT.map((content, index) => (
                            <div key={index}>
                                <h1 className='font-normal text-7xl text-yellow-900'>{content.title}</h1>
                                {content.subTitle && <h3 className='font-normal text-4xl text-yellow-900'>" {content.subTitle} "</h3>}
                                <p className='text-yellow-900 pb-6'>{content.description}</p>
                            </div>
                        ))}
                        <div className='w-40 flex items-center justify-center gap-4 bg-yellow-900 p-3 rounded-full text-white'>Order Now
                            <button>
                                <FiArrowRightCircle className='w-6 h-6' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero