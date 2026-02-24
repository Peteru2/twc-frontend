import {  Globe } from "lucide-react"
import Hero from "../common/Hero"


const Giving = () => {
  return (
    <div>
        <Hero img={"/give.png"} />  
        <div className="flex justify-center pt-10">
       <div className="bg-red-300 flex lato  w-[100px] mb-2 rounded-full items-center font-bold justify-between px-4 py-[4px]">
              <Globe className="text-[#E80F1A] mr-2 text-[14px]" />
              <h4 className="lato text-black text-[11px]"> GIVING</h4>
            </div>
            </div>
        <div  className="flex justify-center  mb-8 w-full">
        <div>
         <h2 className="md:text-2xl text-xl font-bold text-center mb-2 viga tracking-wide">
        Ways to <span className="text-red-600">Give</span>
      </h2>
      <div>
        <img src="/line.png" className="mt-2  w-60 md:w-80 origin-center" />
      </div>
      </div>
      </div>
    </div>
  )
}

export default Giving