import Image from 'next/image';
import Button from './Button';


const Hero = () => {
  return (
    <section className=" w-full padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 ">
      <div className="hero-map" />

      {/* Left */}
      <div className="relative z-20 flex flex-col xl:w-1/2 border-2 justify-center ">
        <div className='justify-center items-center border-2 w-full h-40'>
          div
        </div>
 
        
       
        

      </div>
      <div className="relative flex flex-1 h-full items-start b pt-20 ">
    
     
        
        <Image src='/house-banner.png' alt='home banner' width={1000} height={1000}  className='z-[-20]  bottom:0  shadow-md' />


       
      </div>
    </section>
  );
}

export default Hero
