import React from 'react';
import contactImage from '../../icon/contactme.svg'
import ContactMe from './ContactMe';
const Contact = () => {
    return (
        <div>
            <section className="">
                <div className="w-10/12 mx-auto text-center flex flex-col lg:flex-row gap-8 pt-9 lg:px-14 pb-9">
                    <img src={contactImage} className="block h-40" alt="Contact Icon" />
                    <div className="text-center">
                        <h1 className="font-bold text-primary pt-5">
                            <span className="text-primary"></span>MY CONTACT
                        </h1>
                        <p className="">
                            As a dedicated web developer and problem solver, I offer a range of
                            services tailored to meet your digital needs. From creating responsive
                            and visually appealing websites using modern front-end technologies to
                            solving complex{" "}
                            <span className="">
                                programming challenges, I am committed to delivering high-quality
                                solutions.
                            </span>
                        </p>
                    </div>
                </div>
                <hr className="md:hidden border-gray-400" />
            </section>
              <ContactMe></ContactMe>
        </div>
    );
};

export default Contact;