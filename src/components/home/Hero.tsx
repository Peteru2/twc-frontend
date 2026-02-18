import { Globe } from 'lucide-react';

const Hero = () => {
  return (
    <div className='mt-18'>
    <div className="relative h-screen w-full flex items-center justify-center">
  
  <img 
    src="/homeHero.jpg" 
    alt="Hero Background"
    className="absolute inset-0 h-full w-full object-cover" 
  />


  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

  <div className="relative z-10 text-center">
    <div className='w-full justify-center items-center flex'>
    <div className='bg-gray-50/30 flex rounded-full items-center mb-4 justify-between px-6 py-[6px]'> 
        <Globe className='text-[#E80F1A] mr-2' />
        <h4 className='lato text-gray-100 text-[12px]'> OUR VISION</h4>
    </div>
    </div>
    <h1 className="text-4xl font-bold text-white ">We Evangelize the World to <span className='text-[#E80F1A]'>Receive <br /> Christ</span> And Disciple the Church to <br /> <span className='text-[#E80F1A]'>Reflect Christ.</span></h1>
  </div>
</div>

    </div>
  )
}

export default Hero