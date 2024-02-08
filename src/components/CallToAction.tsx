import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const CallToAction = () => {
  return (
    <section className=" flex-col flexCenter overflow-hidden lg:mb-12 t py-24  lg:bg-slate-100 shadow-lg">
    <div className=' relative w-full flex justify-start items-end  shadow-m'>
      <div className='flex flex-1 lg:min-h-[600px] '>
    
      </div>
      <div className='hidden lg:block top-0'>
      <Image src="/Luizahero.png" 
        alt="profile" 
        width={500} 
        height={900}
        className='absolute bottom-0 left-0 drop-shadow-m '
        />
      </div>
      
  <div className='z-20 flex w-full flex-col lg:w-[60%] rounded-md drop-shadow-lg justify-center items-center'>
    <div className='relative '>
   
         <h2 className='bold-40 lg:bold-64 '></h2>
    </div>
    <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20 drop-shadow-md '>
      {FEATURES.map((feature) =>(
        <FeatureItem  title={feature.title}
        key={feature.title}
        icon={feature.icon}
       
        description={feature.description}
        />
      ))}
    </ul>
  
  </div>
    </div>
  
   </section>
    )
  }
  
  type FeatureItem = {
    title: string;
    icon: string;
    
    description: string;
  }
  
  const FeatureItem = ({title, icon, description } : FeatureItem) => {
    return (
      <li className='flex w-full flex-1 flex-col items-start'>
       <div className='rounded-full p-4 lg:p-7 bg-green-50'>
          <Image src={icon} 
          alt="map" 
          width={28} 
          height={28} />
  </div>
  <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>
  {title}
  </h2>
  <p className='regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>
    {description}
  </p>
      </li>
  )
}

export default CallToAction