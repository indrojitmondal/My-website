import React from 'react';
import '../css/styles.css'
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='font-roboto bg-about'>
      <header className="sticky top-0 z-50 bg-about">
        <div className="flex justify-between items-center w-11/12 lg:w-10/12 mx-auto pt-4 pb-4">
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
            className="hidden md:flex md:justify-around gap-7 text-[15px]"
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

          {/* Hamburger Menu for Mobile */}
          <div className="ml-2 md:hidden">
            <div className="btn btn-ghost border-1 lg:hidden lg:bg-primary text-lg">
              <i className="fa-solid fa-bars text-primary" id="bar"></i>
              <i className="fa-solid fa-x text-primary hidden" id="cross"></i>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <section className="w-11/12 lg:w-10/12 mx-auto md:hidden">
        <ul
          id="menuDropdown"
          className="hidden bg-white fixed z-[50] text-center space-y-4 w-full p-2 shadow text-base lg:flex lg:flex-col gap-5"
        >
          <li className="text-primary transition-colors ease-in-out duration-300">
            <a href="index.html">Home</a>
          </li>
          <li className="hover:text-primary transition-colors ease-in-out duration-300">
            <a href="about.html">About</a>
          </li>
          <li className="hover:text-primary transition-colors ease-in-out duration-300">
            <a href="projects.html">Projects</a>
          </li>
          <li className="hover:text-primary transition-colors ease-in-out duration-300">
            <a href="services.html">Services</a>
          </li>
          <li className="hover:text-primary transition-colors ease-in-out duration-300">
            <a href="blogs.html">Blogs</a>
          </li>
          <li className="hover:text-primary transition-colors ease-in-out duration-300">
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;