import { Globe } from "lucide-react";

const Hero = () => {
  return (
    <div className="mt-18">
      <div className="relative h-screen w-full flex items-center justify-center">
        <img
          src="/homeHero.jpg"
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="relative z-10 text-center">
          <div className="w-full justify-center items-center flex">
            <div className="bg-gray-50/30 flex rounded-full items-center  justify-between px-6 py-[6px]">
              <Globe className="text-[#E80F1A] mr-2" />
              <h4 className="lato text-gray-100 text-[12px]"> OUR VISION</h4>
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white  my-8">
            We Evangelize the World to{" "}
            <span className="text-[#E80F1A]">
              Receive <br /> Christ
            </span>{" "}
            And Disciple the Church to <br />{" "}
            <span className="text-[#E80F1A]">Reflect Christ.</span>
          </h1>

          <div className="flex justify-center lora mt-20">
            <h2 className="text-[15px] hover:bg-[#E80F1A] transition-colors duration-300 cursor-pointer hover:text-white tracking-[4px] mr-4 bg-white text-black rounded-full py-6 px-6">
              WATCH A SERMON
            </h2>
            <h2 className="text-[15px] bg-Transparent tracking-[4px] hover:bg-[#E80F1A] hover:border-0 transition-colors duration-300 cursor-pointer hover:text-white  text-white border border-white rounded-full py-6 px-6">
              REQUEST PRAYER
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
