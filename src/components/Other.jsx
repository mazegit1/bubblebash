import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import footerimg from '../assets/img/Logo.png';
import { FaGithub } from "react-icons/fa6";
import { SiTelegram } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import portfolioimg from '../assets/img/portfolioimg.png';
import cardfirstimg from '../assets/img/uiuxdesigner.png';
import reviewcardimg from '../assets/img/reviewcardimg.png';

const Other = () => {
  return (
    <>
    <div className="others mt-[28%]">
    <div id='services' className="px-4 md:px-8 lg:px-16 py-6 transition-all ease-in-out duration-200 bg-[#f0f0f0]">
        <div className="text-center mb-8">
          <div className="text-2xl text-[#7d7d7d]">Our Services</div>
          <div className="text-3xl font-semibold">We Provide What You Need</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="service-card hover:bg-gray-50 hover:translate-y-[-5px] hover:shadow-[0px_7px_25px_0px_rgba(0,0,0,0.75)] transition-all ease-in-out duration-300 w-full py-8 px-6 rounded-xl bg-white flex items-center flex-col">
              <div className="card-img mb-4">
                <img src={cardfirstimg} className='w-16 h-16 object-cover' alt="" />
              </div>
              <h1 className='text-center mb-4 font-semibold text-2xl'>UI/UX Designer</h1>
              <p className='text-center font-light text-xl'>We are ready to make your<br /> website more friendly and <br /> efficient in the eyes of users</p>
            </div>
          ))}
        </div>
      </div>
      
      <div id='portfolio' className="my-20 px-4 md:px-8 lg:px-16">
        <div className="text-center mb-8">
          <div className="text-2xl text-[#7d7d7d]">Our Portfolio</div>
          <div className="text-3xl font-semibold">We Provide What You Need</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="portfolio-card flex flex-col items-start gap-4">
              <img src={portfolioimg} className='w-full object-cover rounded-lg' alt="" />
              <h1 className='text-2xl font-semibold text-black'>My Hospital</h1>
              <p className='text-xl font-light'>Create a hospital website with patient, <br /> doctor, and drug logistics features that <br /> help hospital operations</p>
            </div>
          ))}
        </div>
      </div>
      
      <div id='testimonial' className="my-20 px-4 md:px-8 lg:px-16">
        <div className="text-center mb-8">
          <div className="text-2xl text-[#7d7d7d]">Client Reviews</div>
          <div className="text-3xl font-semibold">What Our Happy Clients Say About Us</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="review-card hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all ease-in-out duration-200 hover:shadow-2xl border border-2 border-black w-full px-6 py-8 flex flex-col gap-4">
              <h1 className='text-2xl font-semibold'>Website My Hospital</h1>
              <p className='text-xl text-gray-600'>Very nice to work with Bubble Bash, a <br /> reliable and responsive team is very <br /> helpful</p>
              <div className="flex items-center gap-4">
                <img src={reviewcardimg} className='w-16 h-16 object-cover' alt="" />
                <div className="text-start">
                  <h1 className='text-xl font-semibold'>John Robert</h1>
                  <p className='text-gray-600 font-medium'>CEO My Hospital</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div id="contacts" className="flex items-center justify-center flex-col w-full py-14 bg-[#2F6B4F]">
        <h1 className='text-3xl md:text-4xl font-bold text-white text-center mb-4'>Have a project idea and <br /> want to make it come true?</h1>
        <p className='text-lg md:text-xl text-gray-200 text-center mb-8'>Please contact us and we will discuss your project. Don't forget we are <br /> always here for you</p>
        <div className='bg-white text-black py-3 px-6 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-100'>
          <h1 className='text-lg'>Contact Us</h1>
          <FaArrowRightLong />
        </div>
      </div>
      
      <div className="footer px-4 md:px-8 lg:px-16 py-8 bg-gray-100">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          <div className="footer-left flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img src={footerimg} className='w-16 h-auto' alt="" />
              <h1 className='text-xl lg:text-2xl font-medium text-black'>Bubble Bash | Mazegit</h1>
            </div>
            <p className='text-lg text-gray-600'>Introducing, We are Bubble Bash digital agency company with <br /> more than 6 years of experience. We are committed to serve <br /> with all our heart</p>
            <div className="flex gap-4">
              <a href="https://github.com/mazegit1"><FaGithub className='text-2xl hover:text-gray-500' /></a>
              <a href='https://t.me/mazegit'><SiTelegram className='text-2xl hover:text-gray-500' /></a>
              <a href="https://www.instagram.com/xelil_ovw/"><FaSquareInstagram className='text-2xl hover:text-gray-500' /></a>
            </div>
          </div>
          <div className="footer-right flex flex-col items-center lg:items-start">
            <h1 className='text-xl lg:text-2xl font-bold'>Huseyn Khalil | Mazegit</h1>
            <p className='text-lg text-gray-500'>Made with ReactJs, Tailwindcss</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Other;
