import React from 'react';
import navbarimg from '../assets/img/Logo.png';

const Navbar = () => {
  return (
    <div className="bg-[#2F6B4F] flex items-center justify-between py-4 px-6 md:px-12 lg:px-20">
      <a href='/' className="flex items-center gap-4">
        <img src={navbarimg} className='w-12 h-auto' alt="" />
        <h1 className='text-xl lg:text-2xl font-medium text-white'>Bubble Bash | Mazegit</h1>
      </a>
      <div className="hidden lg:flex items-center gap-8">
        <a className='text-white hover:border-b hover:border-b-white transition-all hover:font-semibold hover:scale-110 ease-in-out duration-300 font-light text-lg lg:text-xl' href="/">Home</a>
        <a className='text-white hover:border-b hover:border-b-white transition-all hover:font-semibold hover:scale-110 ease-in-out duration-300 font-light text-lg lg:text-xl' href="#services">Our Services</a>
        <a className='text-white hover:border-b hover:border-b-white transition-all hover:font-semibold hover:scale-110 ease-in-out duration-300 font-light text-lg lg:text-xl' href="#portfolio">Portfolio</a>
        <a className='text-white hover:border-b hover:border-b-white transition-all hover:font-semibold hover:scale-110 ease-in-out duration-300 font-light text-lg lg:text-xl' href="#testimonial">Testimonial</a>
        <a className='text-white hover:border-b hover:border-b-white transition-all hover:font-semibold hover:scale-110 ease-in-out duration-300 font-light text-lg lg:text-xl' href="#contacts">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
