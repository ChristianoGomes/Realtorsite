import Card from '@/components/Card'
import Image from 'next/image'
import React from 'react'

const Listings = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-[#1c2143] sm:text-4xl">My Active listings</h2>
      
      <p className="mt-2 text-lg leading-8 text-gray-600">Availability subject to change act fast. </p>
    </div>
    <Card />
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
         
          
        </div>
        
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              London Foster
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-2xl text-gray-600">"Explore my current active listings and discover the perfect property for you. Contact me today for more info."</p>
        </div>
        
        <div className="relative mt-8 flex items-center gap-x-4">
          <Image src="/Luizahero.png" alt="small"  height={30} width={30} className="h-10 w-10 rounded-full " />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Luiza Weisberg
              </a>
            </p>
            <p className="text-gray-600">Realtor Sales Associate</p>
          </div>
        </div>
      </article>

      
    </div>
  </div>
</div>
  )
}

export default Listings