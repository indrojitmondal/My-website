import React from 'react';
import contactImage from '../../icon/contactme.svg'
import ContactMe from './ContactMe';
import { Helmet } from 'react-helmet-async';
const Contact = () => {
    return (
        <div>
            <Helmet>
              <title>Contact – Indrojit Mondal </title>
              </Helmet>
            <section className="">
                <div className="w-10/12 mx-auto text-center flex flex-col lg:flex-row gap-8 pt-9 lg:px-14 pb-9">
                    <img src={contactImage} className="block h-40" alt="Contact Icon" />
                    <div className="text-center">
                        {/* <h1 className="font-bold text-primary pt-5">
                            <span className="text-primary"></span>MY CONTACT
                        </h1> */}
                        <p className="">
                        As a dedicated web developer and problem solver, he offers a comprehensive range of services tailored to meet your digital needs. From creating responsive, user-friendly, and visually appealing websites using modern front-end technologies to solving complex programming challenges with efficient logic, he is committed to delivering high-quality and reliable solutions. With a strong focus on performance, clean code, and user experience, he ensures that every project meets industry standards and adds real value to clients and businesses.
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