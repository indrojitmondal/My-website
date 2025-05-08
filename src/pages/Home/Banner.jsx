import React from 'react';
import gif from '../../gif/2.gif'
const Banner = () => {
    return (
        <div className='font-roboto bg-about'> 
            <section className="w-11/12 lg:w-10/12 mx-auto py-12">
                <div className="md:px-14">
                    <h1 className="font-bold pl-5 md:pl-0 text-center text-xl">
                        WELCOME TO{" "}
                        <span className="text-primary">
                            INDR<span className="text-primary">O@</span>JIT
                        
                        </span>
                    </h1>

                    <div className="grid items-center grid-cols-1 md:grid-cols-2 w-full text-center space-y-2">
                        <div className="order-2 md:order-1">
                            <h1 className="font-medium text-4xl text-primary pt-4">Indrojit Mondal</h1>

                            <h3 className="py-3 font-medium text-2xl">
                                Programmer | Full Stack Developer | MERN Developer
                            </h3>

                            <div className="flex gap-3 justify-center pb-4 text-xl">
                                <a
                                    href="https://docs.google.com/document/d/1hqWNarSvcF79h_sEN9XZyhvHr8jmTnX9z1vCtVR523A/edit?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-primary text-white px-2"
                                >
                                    Resume
                                </a>
                                <a
                                    href="https://docs.google.com/document/d/18BPN4SbpqSpByy9FXLHJ5_IaZi3icNlqP3pkmSeOfjI/edit?tab=t.0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-primary text-white px-2"
                                >
                                    CV
                                </a>
                            </div>

                            <div className="contactme">
                                <div className="flex justify-center gap-3">
                                    <a
                                        href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=indro.cse.bu@gmail.com"
                                        title="Email"
                                        className="block"
                                    >
                                        <i className="fa-solid fa-envelope text-5xl hover:text-primary"></i>
                                    </a>

                                    <a
                                        href="https://github.com/indrojitmondal"
                                        title="Github"
                                        className="block"
                                    >
                                        <i className="fa-brands fa-github text-5xl hover:text-primary"></i>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/indrojit-mondal-8a36b315a/"
                                        title="Linkedin"
                                        className="block"
                                    >
                                        <i className="fa-brands fa-linkedin text-5xl hover:text-primary"></i>
                                    </a>

                                    <a
                                        href="https://meet.google.com/vzp-rcgn-mhe"
                                        title="Google Meet"
                                        className="block"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fas fa-video text-5xl hover:text-primary"></i>
                                    </a>

                                    {/* <a
                                        href="https://join.skype.com/invite/q7lfzaKU09hL"
                                        title="Skype"
                                        className="block"
                                    >
                                        <i className="fa-brands fa-skype text-5xl hover:text-primary"></i>
                                    </a> */}

                                    <a
                                        href="https://wa.me/8801966796110"
                                        title="WhatsApp"
                                        className="block"
                                    >
                                        <i className="fa-brands fa-whatsapp text-5xl hover:text-primary"></i>
                                    </a>
                                </div>
                            </div>

                            <a href="#contact">
                                <button className="mt-4 font-bold text-lg border px-5 py-3 rounded-xl border-primary hover:bg-primary bg-hello text-white">
                                    Hire Me
                                </button>
                            </a>
                        </div>

                        <div className="order-1 md:order-2">
                            <img src={gif} alt="Animated Profile" className="object-cover w-full h-fit" />
                        </div>
                    </div>
                </div>

                <a href="#work">
                    <button className="mt-5 hover:bg-primary hover:text-white text-lg border px-5 py-3 rounded-xl text-primary font-bold border-primary">
                        See My Work
                    </button>
                </a>

                <hr className="md:hidden border-gray-400" />
            </section>

        </div>
    );
};

export default Banner;