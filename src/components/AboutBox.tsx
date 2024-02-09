import Image from 'next/image'
import React from 'react'

const AboutBox = () => {
    return (
        <section
          id="about"
          aria-labelledby="about-title"
          className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16 shadow-md"
        >
          <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)] rounded-md">
           
          </div>
          <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
            <div className="bg-slate-50 pt-px sm:rounded-6xl rounded-lg">
              <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/Luizahero.png"
                  alt="profile"
                  width={30}
                  height={30}
                  sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
                />
              </div>
              <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
               
                <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                  <span className="block text-[#f3cd74]">Luiza Weisberg –</span> "Hello
                  there, I’m an industry expert here to help with all your real estate related needs".
                </p>
                <p className="mt-4 text-xl tracking-tight text-slate-700">
                I am a Brazilian born U.S. citizen with over 20 years of real estate experience in South Florida.
My U.S. real estate career started after owning a large international travel company based in Joao Pessoa, Brazil that lead me on extensive world wide travels.
I'm a graduate of the University of Paraíba, I immigrated to the US in 1997 where I developed my skills and followed my passion for real estate by working at FL REO gaining valuable knowledgeable working with banks and establishing home values.
Today, I am a leading experienced provider of all real estate services with close well established connections that include banks, attorneys and developers providing concierge services to an international array of clients.
                </p>
           
              </div>
            </div>
          </div>
        </section>
      )
}

export default AboutBox