import React from 'react'
import heroImg from "../../assets/image1.jpg"
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative">
      <img 
        src={heroImg} 
        alt="Vacation" 
        className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover' 
      />
      <div className='absolute inset-0 bg-opacity-5 flex items-start justify-center pt-24 md:pt-40'>
        <div className='text-center text-white p-6'>
          <h1 className='text-4xl md:text-9xl font-bold tracking-tight uppercase mb-4'>
            Vacation <br /> Ready
          </h1>
          <p className="mb-6">Explore our vacation-ready outfits with fast worldwide shipping.</p>
          <Link to="#" className='bg-white text-gray-950 px-6 py-3 font-semibold rounded-sm text-lg'>
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;
