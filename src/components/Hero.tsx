import Image from 'next/image';



const Hero = () => {
  return (
    <section className=" w-full  shadow-m  lg:shadow-lg padding-container flex flex-col gap-20 pt-10 pb-32 md:gap-28 lg:py-20 xl:flex-row mx-auto mt-auto max-sm:mb-[-210px]">
      <div className="hero-map" />

      {/* Left */}
      <div className="relative z-20 flex flex-col xl:w-1/2 justify-end  bottom-0 -mb-22 ">
      <h1 className=' text-6xl font-extrabold tracking-tight text-[#1c2143] sm:text-6xl  text-center'><span >Luiza Weisberg</span><br /> your trusted Real estate advisor </h1>
        <div className=' h-6'>
          <div className='flex justify-center items-center'>
            
          </div>

        </div>
        <div className='bottom-0 right-0  flex flex-3 mx-auto'>
        <Image src="/Luizahero2.png" alt="home banner" width={600} height={500} className="z-[-20] flex-shrink mb-0 " />
        </div>
      
   
       
       
      </div>
      <div className="flex flex-col xl:w-1/2 justify-end  bottom-0 -mb-22 ">  
        <Image
          src="/house-banner.png"
          alt="home banner"
          width={1000}
          height={1000}
          className="z-[-20] hidden lg:block bottom:0  lg:shadow-md"
        />
      </div>
    </section>
  );
}

export default Hero
