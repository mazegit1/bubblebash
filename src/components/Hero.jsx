import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import heroimg from '../assets/img/heroimg.png'
const Hero = () => {
  return (
    <>
    <div className="hero pt-[100px] pb-[350px] h-[100vh] bg-[#2F6B4F]">
        <div className="hero-top flex items-center justify-center flex-col">
            <h1 className='font-bold text-6xl text-center text-white'>Create Amazing Digital Product <br />
            For Your Business</h1>
            <p className='mt-12 text-xl text-[#c7c7c7] text-center'>We are a professional digital agency that has been established
                 since 2016, we present a variety of <br /> 
            digital services that can help you solve problems in your business</p>
            <div className='hero-button hover:bg-[#a4a4a4] rounded-lg active:bg-white mt-8 cursor-pointer active:translate-x-[-3px] transition-all ease-in-out duration-200 active:translate-y-[-3px] py-[18px] px-[28px] bg-white flex items-center gap-2'>
                <h1 className='text-black text-xl'>Get Started</h1>
                <FaArrowRightLong />
            </div>
        </div>
        <div className="hero-img">
            <img src={heroimg} className='hero-img mt-[5%] absolute scale-75 overflow-hidden rounded-md' alt="" />
        </div>
    </div>
    </>
  )
}

export default Hero
