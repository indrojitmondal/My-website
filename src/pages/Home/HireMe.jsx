import React, { useEffect, useState } from 'react';
// import '../../js/contact.js'
import mobileImage from '../../images/mobile.png'
import emailImage from '../../images/mail.png'
import locationImage from '../../images/location.png'
import handShakeImage from '../../icon/icons8-handshake-48.png'

import emailjs from "@emailjs/browser";



const HireMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [confirmationVisible, setConfirmationVisible] = useState(false);

  useEffect(() => {
    emailjs.init("oGCU2mz3HIGdXP8Wo"); // Replace with your public key
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_wxrhj2d", "template_rtx9u1s", {
        from_name: formData.name,
        from_company: formData.company,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
      })
      .then(
        () => {
          setConfirmationVisible(true);
          document.getElementById('my_modal').showModal();
          // Reset form fields
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
          });

          // Hide message after 5 seconds
          setTimeout(() => setConfirmationVisible(false), 5000);
        },
        () => {
          alert("Failed to send email.");
        }
      );
  };
    return (
        <div>

            <section id="contact" className="mt-10 w-11/12 lg:w-10/12 mx-auto">
                <h1 className="font-bold text-center text-p2 mt-1 md:text-xl">HIRE ME</h1>
                
                <h1 className="font-bold text-center text-3xl md:text-3xl py-3">
                    Let's Start A New Project
                </h1>

                {/* formContainer */}
                <div className="mt-2 up-conatainer grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="contact-description flex flex-col gap-8">
                        <div className="flex gap-4">
                            <img src={mobileImage} className="w-12 h-14 hover:text-primary" alt="" />
                            <div>
                                <h3 className="text-xl">Give me a call</h3>
                                <p>
                                    +880-1966796110 <br />
                                    +880-1577147931
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <img src={emailImage} className="w-12 h-14 hover:text-primary" alt="" />
                            <div>
                                <h3 className="text-xl">Send me an email</h3>
                                <p>indro.cse.bu@gmail.com<br /></p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <img src={locationImage} className="w-12 h-14 hover:text-primary" alt="" />
                            <div>
                                <h3 className="text-xl">Location</h3>
                                <p>
                                    Paikgacha Municipality 9280<br />
                                    Khulna, Bangladesh
                                </p>
                            </div>
                        </div>

                        <div className="contact">
                            <div className="pb-6 flex gap-3 lg:gap-5">
                                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=indro.cse.bu@gmail.com" title="Email" target="_blank" rel="noopener noreferrer" className="block">
                                    <i className="fa-solid fa-envelope text-5xl lg:text-5xl hover:text-primary"></i>
                                </a>
                                <a href="https://github.com/indrojitmondal" title="Github" target="_blank" rel="noopener noreferrer" className="block">
                                    <i className="fa-brands fa-github text-5xl lg:text-5xl hover:text-primary"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/indrojit-mondal-8a36b315a/" title="Linkedin" className="block" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin text-5xl lg:text-5xl hover:text-primary"></i>
                                </a>

                                <a href="https://meet.google.com/vzp-rcgn-mhe" title="Google Meet" className="block" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-video text-5xl lg:text-5xl hover:text-primary"></i>
                                </a>
                                <div>
                                    <a href="https://wa.me/8801966796110" title="WhatsApp" target="_blank" rel="noopener noreferrer" className="block">
                                        <i className="fa-brands fa-whatsapp text-5xl lg:text-5xl hover:text-primary"></i>
                                    </a>
                                </div>
                            </div>

                            <p className="text-justify">
                                The best way to contact us is via{" "}
                                <a
                                    href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=indro.cse.bu@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-primary hover:underline"
                                >
                                    email
                                </a>. I try to respond to every message.
                            </p>
                        </div>
                    </div>

                    {/* <form id="input-container" className="input-container flex flex-col gap-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-control">
                                <input
                                    required={true}
                                    className="block w-full h-16 border border-p3 outline-none p-4 text-black"
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    required={true}
                                    className="block w-full h-16 border border-p3 outline-none p-4 text-black"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    className="block w-full h-16 border border-p3 outline-none p-4 text-black"
                                    type="phone"
                                    name="phone"
                                    id="phone"
                                    placeholder="Your Phone"
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    className="block w-full h-16 border border-p3 outline-none p-4 text-black"
                                    type="text"
                                    name="company"
                                    id="company"
                                    placeholder="Your Subject"
                                />
                            </div>
                        </div>

                        <div className="form-control">
                            <textarea
                                required={true}
                                name="message"
                                id="message"
                                cols="30"
                                rows="5"
                                className="border w-full border-p3 outline-none p-4 text-black"
                                placeholder="Start Writing Message here"
                            ></textarea>
                        </div>

                        <div className="form-control">
                            <button
                                className="block w-2/4 h-14 md:h-16 border hover:border-primary border-primary bg-primary hover:text-primary hover:bg-white text-white outline-none p-2 md:text-xl"
                                type="submit"
                                name="submit"
                                id="sendButton"
                            >
                                HIRE NOW
                            </button>
                        </div>

                        <p id="formConfirmation" className="hidden px-4 py-2 border border-green-500">
                            Thank you for your message. It has been sent.
                        </p>
                    </form> */}
                    <form onSubmit={sendEmail} className="input-container flex flex-col gap-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-control">
                                <input
                                    required
                                    className="block w-full h-16 border border-p3 outline-none p-4 text-black"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    required
                                    className="block w-full h-16 border border-p3 outline-none p-4 text-black"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    className="block w-full h-16 border border-p3 outline-none p-4 text-black"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Your Phone"
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    className="block w-full h-16 border border-p3 outline-none p-4 text-black"
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Your Subject"
                                />
                            </div>
                        </div>

                        <div className="form-control">
                            <textarea
                                required
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                cols="30"
                                rows="5"
                                className="border w-full border-p3 outline-none p-4 text-black"
                                placeholder="Start Writing Message here"
                            ></textarea>
                        </div>

                        <div className="form-control">
                            <button
                                className="block w-2/4 h-14 md:h-16 border hover:border-primary border-primary bg-primary hover:text-primary hover:bg-white text-white outline-none p-2 md:text-xl"
                                type="submit"
                            >
                                SEND
                            </button>
                        </div>

                        {confirmationVisible && (
                            <p className="px-4 py-2 border border-green-500">
                                Thank you for your message. It has been sent.
                            </p>
                        )}
                    </form>
                </div>

                <dialog id="my_modal" className="modal modal-middle">
                    <div className="modal-box w-80">
                        <img className="mx-auto" src={handShakeImage} alt="" />
                        <h2 className="text-2xl font-bold text-center">Conformation!</h2>
                        <div className="text-center">
                            <p>Thank you for your message. It has been sent.</p>
                            <h3 className="text-lg font-semibold pt-3 pb-3">Successfully</h3>
                            <form method="dialog">
                                <button className="btn text-center">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>


            </section>



        </div>
    );
};

export default HireMe;