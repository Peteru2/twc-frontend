import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Instagram, Twitter, Youtube, Linkedin, X, TextAlignEnd } from "lucide-react";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [isOpen]);

  const navLinks = [
    { name: "ABOUT", path: "/about", icon: "" },
    { name: "EVENT", path: "/event", icon: "" },
    { name: "SERMONS", path: "/sermons" },
    { name: "PASTORAL TEAM", path: "/pastoralteam", icon: "" },
    { name: "GIVE", path: "/give", icon: "" },
  ];
  const navLinksMobile = [
    { name: "HOME", path: "/", icon: "" },  
    { name: "ABOUT", path: "/about", icon: "" },
    { name: "EVENT", path: "/event", icon: "" },
    { name: "SERMONS", path: "/sermons" },
    { name: "PASTORAL TEAM", path: "/pastoralteam", icon: "" },
    { name: "GIVE", path: "/give", icon: "" },
  ];
  const footerLinks = [
    { name: "Become a member", path: "/members",  },  
    { name: "Prayer Request", path: "/prayer",},
    { name: "First Timers", path: "/firsttimer",},
    { name: "Online Community", path: "/map",  },
    { name: "Celebrations", path: "/give", },
  ];

  return (
    <nav className="fixed w-full z-50  transition-colors duration-300 bg-[#000000]">
      <div className="max-w-7xl w-full mx-auto px-2 md:px-2 flex items-center justify-between h-[72px] ">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/fullLogo.png" alt="Twc Logo" className="h-10" />
        </Link>

        <div className="hidden md:flex items-center space-x-6 relative">
          {navLinks.map((link) => {
            return (
              <div key={link.name} className="relative">
                <NavLink
  to={link.path}
  className={({ isActive }) =>
    `group relative text-[14px] font-extrabold lato tracking-[1px]
    pb-1 transition-all duration-300 ${
      isActive
        ? "text-white border-b-[3px] rounded-[2px]   border-red-600"
        : "text-white hover:text-white"
    } ${isOpen ? "hidden" : "flex"}`
  }
>
  {({ isActive }) => (
    <>
      <h2>{link.name}</h2>

      {!isActive && (
        <span className="absolute left-0 -bottom-[1px]  rounded-full h-[3px] pt-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
      )}
    </>
  )}
</NavLink>
              </div>
            );
          })}
        </div>
        <div className=" cursor-pointer mr-[2px]">
          <button
            className="cursor-pointer text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <TextAlignEnd size={24} />}
          </button>
        </div>
      </div>

      {/* For all screen Menu */}
      {isOpen && (
  <div className="fixed inset-0 bg-black z-40 flex overflow-y-auto scroll-smooth transition-opacity duration-500">
    
    {/* Close Button */}
    <div className="absolute top-5 right-2 md:right-14">
      <button
        onClick={() => setIsOpen(false)}
        className="text-white cursor-pointer"
      >
        <X size={32} />
      </button>
    </div>
    <div className="absolute top-4 left-2 md:left-14">
      <img
      src="/fullLogo.png"
        className="md:w-24 w-26"
      />
      

    </div>

    {/* Left Big Navigation */}
    <div className="w-full grid md:grid-cols-2  justify-start md:mt-28 mt-24 md:px-28 px-4">
      <div className="flex flex-col space-y-4">
        {navLinksMobile.map((link, index) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-4xl md:text-5xl font-extrabold pb-8 viga tracking-wide transition-all duration-500 transform ${
                isActive
                  ? "text-red-600"
                  : "text-white hover:text-red-500"
              }`
            }
            style={{
              animation: `slideIn 0.4s ease forwards`,
              animationDelay: `${index * 0.08}s`,
              opacity: 0,
            }}
          >
            {link.name}
          </NavLink>
        ))}
      </div>


      {/* Right Side */}
      <div>
        <div>
          <img
              src="/fullLogo.png"
          />
        </div>
      <div className="grid grid-cols-2 text-white">

        
        {/* Connect */}
        <div className="flex md:justify-center">
            <div>
            <h3 className="text-gray-400 mb-4 font-medium">Connect</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link, index) => (
                <Link 
                 onClick={() => setIsOpen(false)}
                to={link.path}>
                <li
                  key={index}
                  className="hover:text-white mb-2 transition duration-300 cursor-pointer"
                >
                  {link.name}
                </li>
                </Link>
              ))}
            </ul>
            </div>
          </div>
{/* Media */}
                    <div>
            <h3 className="text-gray-400 mb-4 font-medium">Media</h3>
            <ul className="space-y-3 text-sm">
              {["Watch Online", "Sermons"].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-white transition duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </div>
          

          <div className="flex flex-col py-6 md:pl-10 md:flex-row justify-between items-center gap-6">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} True Worshippers Church. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {[Instagram, Twitter, Youtube, Linkedin].map(
              (Icon, index) => (
                <div
                key={index}
                  className="text-gray-500 hover:text-white transition duration-300 cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              )
            )}
          </div>
        </div>

      </div>
    </div>

  </div>
)}
    </nav>
  );
};

export default Navbar;
