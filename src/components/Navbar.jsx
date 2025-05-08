import React, { useState } from 'react';
import '../css/styles.css';
import { Link, NavLink } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenuBar = () => setMenu(!menu);

  return (
    // Set `sticky top-0 z-50` on the **outermost wrapper**
    <div className='sticky top-0 z-50 bg-about '>
      <nav className="w-full">
        <div className="flex justify-between items-center w-10/12 mx-auto py-4">
          {/* Logo */}
          <Link to={'/'}>
            <h3 className="text-primary text-[22px] md:text-[25px] font-extrabold tracking-wide flex items-center">
              INDR<span className="text-primary">O@</span>JIT
             
            </h3>
            <br />
            {/* <span>_______Let's make the dream come true</span>
          */}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-7 text-[15px]">
            {["/", "/about", "/projects", "/services", "/blogs", "/contact"].map((path, i) => (
              <NavLink
                key={path}
                to={path}
                className="block relative nav-link"
              >
                {({ isActive }) => (
                  <>
                    {["HOME", "ABOUT ME", "PROJECTS", "SERVICES", "BLOGS", "CONTACT ME"][i]}
                    {isActive && <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary"></span>}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Button */}
          <div onClick={handleMenuBar} className="lg:hidden cursor-pointer">
            <div className="btn btn-ghost border text-lg">
              {!menu ? <IoMdMenu className="text-primary text-xl" /> : <RxCross1 className="text-primary text-xl" />}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menu && (
        <div className='lg:hidden'>
          <ul className="text-center space-y-4 w-full py-4 shadow bg-about">
            {["/", "/about", "/projects", "/services", "/blogs", "/contact"].map((path, i) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => `block text-lg ${isActive ? "text-primary" : ""}`}
              >
                {["Home", "About Me", "Projects", "Services", "Blogs", "Contact Me"][i]}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
