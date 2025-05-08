import React from 'react';
import HireMe from '../Home/HireMe';

import servicesImage from '../../icon/Layer_1.png'
import HTMLImage from '../../icon/html.png'
import CSSImage from '../../icon/css.png'
import ReactImage from '../../icon/react.png'
import JSImage from '../../icon/js.png'
import NodeJSImage from '../../icon/nodejs.png'
import MongoDBImage from '../../icon/mongodb.png'
import FigmaImage from '../../icon/figma.png'
import Group3Image from '../../icon/Group 3.png'
import PixsoImage from '../../icon/pixso.jpeg'
import { Helmet } from 'react-helmet-async';
const Services = () => {
    return (
        <div>
             <Helmet>
              <title>Services – Indrojit Mondal </title>
              </Helmet>
            <section className="">
                <div className="w-11/12 md:w-10/12 mx-auto text-center flex flex-col lg:flex-row gap-8 pt-9 md:px-14 pb-9">
                    <img
                        src={servicesImage}
                        className="block mx-auto md:ml-0 md:mr-0 h-40 w-40"
                        alt=""
                    />
                    <div className="text-center">
                        <h1 className=" font-bold text-primary pt-5">
                            <span className="text-primary font-bold">MY</span> SERVICES
                        </h1>
                        <p className=" text-justify text-base ">
                            As a dedicated web developer and problem solver, I offer a range of
                            services tailored to meet your digital needs. From creating responsive
                            and visually appealing websites using modern front-end technologies to
                            solving complex <span className="">programming challenges, I am committed
                                to delivering high-quality solutions. </span>
                        </p>
                    </div>
                </div>
                <hr className=" md:hidden border-gray-400" />
            </section>

            <div className="bg-white">
                <main className="w-11/12 md:w-10/12 mx-auto pt-4 pb-8 px-4 bg-white border border-primary rounded-md">
                    <div className="w-11/12 mx-auto mt-3 md:mt-5 ">
                        {/* card1 container */}
                        <div className="">
                            {/* heading */}
                            <div className="">
                                <div className="w-10/12 mx-auto">
                                    <h1 className=" text-center font-bold text-lg text-primary ">
                                        Web Application Development
                                    </h1>
                                    <p className="text-center text-base py-2">
                                        Web app development involves creating interactive apps for browsers
                                        using HTML, CSS, JS for the front end, and back-end tech like
                                        Node.js. It's key for modern businesses.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="web mt-4 space-y-5">
                        <div className="frontEnd">
                            <h3 className="text-primary text-lg text-bold ">Frontend Development</h3>
                            <div className=" grid grid-cols-1 md:grid-cols-2 ">
                                <div className="pt-2 pl-4 text-justify text-base">
                                    <h2>✓ I develop the user interface.</h2>
                                    <h2>✓ Web page development.</h2>
                                    <h2>✓ Understanding of HTML, CSS, and JavaScript.</h2>
                                    <h2>✓ Experience with JavaScript frameworks React.</h2>
                                    <h2>✓ Familiarity with browser developer tools.</h2>
                                    <h2>✓ Understanding of responsive design principles.</h2>
                                    <h2>✓ Experience with version control systems such as Git</h2>
                                </div>

                                <div className="flex justify-end gap-4 h-24">
                                    <img className="w-[95px]" src={HTMLImage} alt="" />
                                    <img className="w-[95px]" src={CSSImage} alt="" />
                                    <img className="w-[95px]" src={ReactImage}alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="backend">
                            <h3 className="text-primary text-lg text-bold">Backend Development</h3>
                            <div className=" grid grid-cols-1 md:grid-cols-2 justify-between">
                                <div className="pt-2 pl-4 text-justify text-base">
                                    <h2>✓ Create Server From scratch with NodeJS and ExpressJS.</h2>
                                    <h2>✓ With In Database Management system - MongoDB.</h2>
                                    <h2>✓ Understanding of RESTful API design principles.</h2>
                                    <h2>✓ Knowledge of server-side caching,and performance.</h2>
                                    <h2>✓ MongoDB CRUD Operations.</h2>
                                    <h2>✓ Enable Data security With JWT(JSON Web Token).</h2>
                                    <h2>✓ Work with Environment Variables.</h2>
                                    <h2>✓ NodeJS login authentication.</h2>
                                </div>

                                <div className="flex justify-end gap-4 h-24">
                                    <img className="w-[95px]" src={JSImage} alt="" />
                                    <img className="w-[95px]" src={NodeJSImage} alt="" />
                                    <img className="w-[95px]" src={MongoDBImage} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="UI/UX ">
                            <h3 className="text-primary text-lg text-bold">UI/UX Design</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 ">
                                <div className="pt-2 pl-4 text-lg ">
                                    <h2>
                                        ✓ Familiarity with design software such as Figma, Pixso, Abode XD
                                    </h2>
                                    <h2>
                                        ✓ Understanding of user-centered design principles and user
                                        experience (UX) design
                                    </h2>
                                    <h2>✓ Understanding of responsive design principles</h2>
                                    <h2>
                                        ✓ Knowledge of typography, color theory, and layout principles
                                    </h2>
                                    <h2>
                                        ✓ Experience with user research and testing methodologies.
                                    </h2>
                                    <h2>
                                        ✓ Strong attention to detail and ability to iterate on designs
                                        based on feedback.
                                    </h2>
                                </div>
                                <div className="flex justify-end gap-4 h-24">
                                    <img className="w-[95px]" src={FigmaImage} alt="" />
                                    <img className="w-[95px]" src={Group3Image} alt="" />
                                    <img className="w-[95px]" src={PixsoImage} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <HireMe></HireMe>
        </div>
    );
};

export default Services;