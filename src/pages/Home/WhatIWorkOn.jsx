import React from 'react';
import webImage from '../../images/web-development/web.jpg'
import mlImage from '../../images/ml.jpg'
import mobileAppImage from '../../images/mobileApp.jpg'
import roboticsImage from '../../images/machine-learning/ml.png'
import devOppImage from '../../images/DevOps Engineering/devOps.png'
import cyberSecurityImage from '../../images/CyberSecurity/cs.png'
const WhatIWorkOn = () => {
    return (
        <div>
            <section id="work" className="mt-8 w-11/12 lg:w-10/12 mx-auto">
                <h1 className="font-bold text-center text-2xl md:text-3xl py-5">
                    What We Work On
                </h1>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 p-4 border border-gray-300 rounded-xl items-center gap-4">
                    {/* Web */}
                    <a href="#webApp">
                        <div className="hover:rotate-1 flex flex-col border border-gray-300 rounded-lg">
                            <h1 className="text-xl font-bold text-center text-primary p-3">
                                Web Development
                            </h1>
                            <img
                                src={webImage}
                                className="object-cover w-full"
                                alt="Web Development"
                            />
                        </div>
                    </a>

                    {/* Machine Learning */}
                    <div className="hover:rotate-1 flex flex-col border border-gray-300 rounded-lg">
                        <h1 className="text-xl font-bold text-center text-primary p-3">
                            Machine Learning
                        </h1>
                        <img
                            src={mlImage}
                            className="object-cover w-full"
                            alt="Machine Learning"
                        />
                    </div>

                    {/* Mobile App */}
                    <div className="hover:rotate-1 flex flex-col border border-gray-300 rounded-lg">
                        <h1 className="text-xl font-bold text-center text-primary p-3">
                            Mobile App Development
                        </h1>
                        <img
                            src={mobileAppImage}
                            className="object-cover w-full"
                            alt="Mobile App Development"
                        />
                    </div>

                    {/* Robotics */}
                    <div className="hover:rotate-1 flex flex-col border border-gray-300 rounded-lg">
                        <h1 className="text-xl font-bold text-center text-primary p-3">
                            Robotics
                        </h1>
                        <img
                            src={roboticsImage}
                            className="object-cover w-full"
                            alt="Robotics"
                        />
                    </div>

                    {/* DevOps */}
                    <div className="hover:rotate-1 flex flex-col border border-gray-300 rounded-lg">
                        <h1 className="text-xl font-bold text-center text-primary p-3">
                            DevOps Engineering
                        </h1>
                        <img
                            src={devOppImage}
                            className="object-cover w-full"
                            alt="DevOps Engineering"
                        />
                    </div>

                    {/* Cybersecurity */}
                    <div className="hover:rotate-1 flex flex-col border border-gray-300 rounded-lg">
                        <h1 className="text-xl font-bold text-center text-primary p-3">
                            Cyber Security
                        </h1>
                        <img
                            src={cyberSecurityImage}
                            className="object-cover w-full"
                            alt="Cyber Security"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhatIWorkOn;