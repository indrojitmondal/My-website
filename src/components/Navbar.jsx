import React, { useState } from 'react';
import '../css/styles.css'
import { Link, NavLink } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenuBar = () => {

    setMenu(!menu);
  }
  return (
    <div className='font-roboto bg-about'>
      <nav className="sticky top-0 z-50 bg-about">
        <div className="flex justify-between items-center w-10/12 lg:w-10/12 mx-auto pt-4 pb-4">
          {/* Left Section: Logo */}
          <div>
            <Link to={'/'}>
              <h3 className="text-primary text-center text-[22px] md:text-[25px] font-extrabold tracking-wide flex items-center">
                <span className="text-primary">
                  INDR<span className="text-primary">O@</span>JIT
                </span>
              </h3>
            </Link>
          </div>

          {/* Right Section: Navigation for Desktop */}
          <div
            id="pc-nav-right-container"
            className="hidden lg:flex lg:justify-around gap-7 text-[15px]"
          >
            
            <NavLink
              id="lg-home"
              to="/"
              className="block nav-link relative"
            >
              {({ isActive }) => (
                <>
                  HOME
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary"></span>
                  )}
                </>
              )}
            </NavLink>
            <NavLink
              id="lg-about"
              to="/about"
              className="block nav-link relative"
            >
              {({ isActive }) => (
                <>
                  ABOUT ME
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary"></span>
                  )}
                </>
              )}
            </NavLink>
            <NavLink
              id="lg-projects"
              to="/projects"
              className="block nav-link relative"
            >
              {({ isActive }) => (
                <>
                 PROJECTS
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary"></span>
                  )}
                </>
              )}
            </NavLink>
            <NavLink
              id="lg-services"
              to="/services"
              className="block nav-link relative"
            >
              {({ isActive }) => (
                <>
                   SERVICES
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary"></span>
                  )}
                </>
              )}
            </NavLink>
            <NavLink
              id="lg-blogs"
              to="/blogs"
              className="block nav-link relative"
            >
              {({ isActive }) => (
                <>
                    BLOGS
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary"></span>
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              id="lg-contact"
              to="/contact"
              className="block nav-link relative"
            >
              {({ isActive }) => (
                <>
                    CONTACT ME
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary"></span>
                  )}
                </>
              )}
            </NavLink>
            
            
            
           
          </div>
          {/* Mobile Responsive menu */}
          <div onClick={handleMenuBar} className=" lg:hidden">
          <div className="btn btn-ghost border-1 lg:hidden lg:bg-orange-400 text-lg">

            <IoMdMenu className={` ${!menu? 'block text-primary': 'hidden'}  `} />
            
            <RxCross1 className={` ${menu? 'block text-primary': 'hidden'}  `} />
          </div>
        </div>
          
         
        </div>
      
      </nav>
      <div className='lg:hidden'>
        <section className={`${menu ? 'block ' : 'hidden'} `} >
          <ul
            id="menuDropdown"
            className="   text-center space-y-4 w-full p-2 shadow text-base lg:flex lg:flex-col gap-5"
          >

            {/* {links} */}

            <div className='flex flex-col  items-center text-lg gap-5'>
              <NavLink to={'/'}   className={({ isActive }) => (isActive ? "text-primary" : "")}>Home</NavLink>
              <NavLink to={'/about'} className={({isActive})=>(isActive?'text-primary':"")}>About Me</NavLink>
              <NavLink to={'/projects'} className={({isActive})=>(isActive?'text-primary':"")}>Projects</NavLink>
              <NavLink to={'/services'} className={({isActive})=>(isActive?'text-primary':"")}>Services</NavLink>
              <NavLink to={'/blogs'} className={({isActive})=>(isActive?'text-primary':"")}>Blogs</NavLink>
              <NavLink to={'/contact'}className={({isActive})=>(isActive?'text-primary':"")}>Contact Me</NavLink>
         
            </div>

          </ul>
        </section>
      </div>
    </div>
     
  );
};

export default Navbar;