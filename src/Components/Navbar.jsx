import { useState } from "react";
import { assets } from "../Assets/assets";
function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);
  function menuToggle() {
    setMenuOpened(!menuOpened);
  }
  return (
    <div className="text-white">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-5 flex justify-between items-center">
        <img src={assets.logo} className="cursor-pointer" alt="Logo" />
        <ul className="hidden md:flex items-center space-x-10">
          <li>
            <a
              className="text-[18px] duration-300 hover:text-[#bebebe]"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-[18px] duration-300 hover:text-[#bebebe]"
              href="#About"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-[18px] duration-300 hover:text-[#bebebe]"
              href="#Projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-[18px] duration-300 hover:text-[#bebebe]"
              href="#Testimonials"
            >
              Testimonals
            </a>
          </li>
        </ul>
        <button className="hidden md:block bg-white px-6 py-2 rounded-full text-black text-[18px] cursor-pointer border-2 border-white duration-300 hover:bg-transparent hover:text-white">
          Sign Up
        </button>
        <div className="md:hidden cursor-pointer w-[30px]" onClick={menuToggle}>
          {menuOpened ? (
            <img src={assets.cross_icon} />
          ) : (
            <img src={assets.menu_icon} className="text-white" />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed bg-white left-0 top-0 pt-40 text-black h-full w-[300px] z-10 text-[25px] transition-transform duration-300 ${
            menuOpened ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center space-y-10">
            <li>
              <a
                className="text-[18px] duration-300 hover:text-[#bebebe]"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-[18px] duration-300 hover:text-[#bebebe]"
                href="#About"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-[18px] duration-300 hover:text-[#bebebe]"
                href="#Projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="text-[18px] duration-300 hover:text-[#bebebe]"
                href="#Testimonals"
              >
                Testimonals
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
