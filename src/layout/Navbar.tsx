import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, TextAlignEnd } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "ABOUT", path: "/about", icon: "" },
    { name: "EVENT", path: "/event", icon: "" },
    { name: "SERMONS", path: "/sermon" },
    { name: "MAP", path: "/map", icon: "" },
    { name: "GIVE", path: "/give", icon: "" },
  ];
  const navLinksMobile = [
    { name: "HOME", path: "/", icon: "" },
    { name: "ABOUT", path: "/about", icon: "" },
    { name: "EVENT", path: "/event", icon: "" },
    { name: "SERMONS", path: "/sermon" },
    { name: "MAP", path: "/map", icon: "" },
    { name: "GIVE", path: "/give", icon: "" },
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
                    `group relative text-[13px] font-medium lato transition-colors tracking-[2px] duration-300 ${
                      isActive
                        ? "text-gray-300"
                        : "text-white hover:text-white-900"
                    } ${isOpen?"hidden":"flex"}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <h2 className="flex ">{link.name}</h2>
                      {!isActive && (
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gray-300 transition-all duration-300 group-hover:w-full" />
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

      {/* Mobile Menu */}
      <div
        className={` overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-12 mt-20 tracking-[2px] py-2 space-y-2">
          {navLinksMobile.map((link) => {
            return (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-bold transition viga text-5xl py-[10px] ${
                    isActive
                      ? "text-primary"
                        : "text-white hover:text-[#E80F1A]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
