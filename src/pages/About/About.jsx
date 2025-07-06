import React, { useEffect, useState } from 'react';
// import  '../../js/dob.js'
import indrojitImage from '../../images/indrojit.jpg'
import professionalCoder from '../../icon/Layer_1.png'
import reactImage from '../../icon/reactjs.png'
import realLifeImage from '../../images/1713456677748.jpeg'
import leetCodeImage from '../../images/leetcode.png'
import codeforcesImage from '../../images/codeforces.png'
import uvaImage from '../../images/uvaonline.jpeg'
import HireMe from '../Home/HireMe';
import { Helmet } from 'react-helmet-async';
import Skills from './Skills';


const About = () => {

   
        const [age, setAge] = useState('');
      
        useEffect(() => {
          const today = new Date();
          const todayDate = today.getDate();
          const todayMonth = today.getMonth() + 1;
          const todayYear = today.getFullYear();
      
          const dobDate = 5;
          const dobMonth = 10;
          const dobYear = 1996;
      
          const calculateDob = (dobDate, dobMonth, dobYear) => {
            let tempTodayDate = todayDate;
            let tempTodayMonth = todayMonth;
            let tempTodayYear = todayYear;
      
            if (tempTodayDate < dobDate) {
              tempTodayDate += 30;
              tempTodayMonth -= 1;
            }
            if (tempTodayMonth < dobMonth) {
              tempTodayMonth += 12;
              tempTodayYear -= 1;
            }
      
            const ageDate = tempTodayDate - dobDate;
            const ageMonth = tempTodayMonth - dobMonth;
            const ageYear = tempTodayYear - dobYear;
      
            return `${ageYear} years ${ageMonth} months ${ageDate} days.`;
          };
      
          const calculatedAge = calculateDob(dobDate, dobMonth, dobYear);
          setAge(calculatedAge);
        }, []);
    return (
        <div>
            <Helmet>
              <title>Indrojit Mondal | Programmer | Full Stack Developer</title>
            </Helmet>
            <main className="w-11/12 md:w-10/12 bg-about py-10 mx-auto ">
                <div className="about-conatiner pb-12 w-full h-auto grid gap-6 grid-cols-1 lg:grid-cols-12 lg:grid-rows-12 ">
                    {/* left */}
                    <div className="about-left border rounded-b-md shadow-md  lg:col-span-4 lg:row-span-12">
                        {/* <img src="images/indrojit@ku.jpg" className="w-full rounded-sm " alt="indrojit"> */}
                        <img src={indrojitImage} className="w-full rounded-sm " alt="indrojit" />

                        <div className="w-full text-center ">
                            {/* <h1>Indrojit Mondal</h1> */}
                            <h1 className="text-2xl pt-4">
                                {' '}
                                <span>Indrojit</span> <span>Mondal </span>
                            </h1>
                            <span className="text-primary">indro.cse.bu</span>@
                            <span className="text-primary">gmail.com </span>
                            <p className="pb-2 text-lg">Programmer | MERN Stack Developer</p>

                            <div className="flex  gap-3 justify-center pb-2  ">
                                <button className="block bg-primary text-white text-lg px-2">
                                    {' '}
                                    <a
                                        href="https://docs.google.com/document/d/1hqWNarSvcF79h_sEN9XZyhvHr8jmTnX9z1vCtVR523A/edit?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Resume{' '}
                                    </a>{' '}
                                </button>
                                <button className="block bg-primary text-white text-lg px-2">
                                    <a
                                        href="https://docs.google.com/document/d/18BPN4SbpqSpByy9FXLHJ5_IaZi3icNlqP3pkmSeOfjI/edit?tab=t.0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        CV{' '}
                                    </a>
                                </button>
                            </div>
                            <div className="contactme pb-2">
                                <div className="flex justify-center gap-3">
                                    <a
                                        href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=indro.cse.bu@gmail.com"
                                        title="Email"
                                        className="block"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-solid fa-envelope text-3xl hover:text-primary"></i>
                                    </a>

                                    <a
                                        href="https://github.com/indrojitmondal"
                                        title="Github"
                                        className="block"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-brands fa-github text-3xl hover:text-primary"></i>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/indrojit-mondal-8a36b315a/"
                                        title="Linkedin"
                                        className="block"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-brands fa-linkedin text-3xl hover:text-primary"></i>
                                    </a>

                                   

                                    <a
                                        href="https://meet.google.com/vzp-rcgn-mhe"
                                        title="Google Meet"
                                        className="block"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fas fa-video text-3xl lg:text-3xl hover:text-primary"></i>
                                    </a>

                                    <div className>
                                        <a
                                            href="https://wa.me/8801966796110"
                                            title="WhatsApp"
                                            className="block"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa-brands fa-whatsapp text-3xl hover:text-primary "></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <hr />
                        </div>

                        <div className="progrss  p-2">
                            <p className="text-justify  text-base">
                                As a Computer Science and Engineering graduate and a passionate programmer, I stay up-to-date with emerging technologies and embrace challenges to adapt and solve real-world problems effectively. I specialize in web application development using the MERN stack, combining technical expertise with a passion for innovation. Becoming an engineer has been my dream since childhood, and I am proud to be on this journey, continually striving to turn my aspirations into reality.
                            </p>

                            {/* Working Interest */}
                            <div className="Working-Interest">
                                <div className="pt-2 pb-1">
                                    <i className="fa-solid fa-computer"></i>
                                    <h1 className="inline-block font-medium">My Working Interest:</h1>
                                </div>

                                <div className="pl-20">
                                    <div className="flex items-center ">
                                     

                                        <h2>✓ Web Application Development</h2>
                                    </div>

                                    <div className="flex items-center ">
                                    
                                        <a
                                            href="https://www.leewayhertz.com/what-is-custom-software-development/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <h2 className> ✓ Custom Software Development</h2>
                                        </a>
                                    </div>

                                    <div className="flex items-center ">
                                 

                                        <h2>✓ Mobile Application Development</h2>
                                    </div>

                                    <div className="flex items-center ">
                                     

                                        <h2>✓ Quality Assurance & Testing</h2>
                                    </div>
                                    <div className="flex items-center ">
                                       
                                        <h2>✓ DevOps Engineering</h2>
                                    </div>
                                    <div className="flex items-center ">
                                     

                                        <h2>✓ Cybersecurity</h2>
                                    </div>
                                    <div className="flex items-center ">
                                    

                                        <h2>✓ Computer Networking</h2>
                                    </div>
                                    <div className="flex items-center ">
                                     

                                        <h2>✓ Machine Learning</h2>
                                    </div>

                                    <div className="flex items-center">
                                  

                                        <h2>✓ Robotics</h2>
                                    </div>

                                    <div className="flex items-center">
                                     

                                        <h2>✓ Internet of Things(IoT)</h2>
                                    </div>
                                    <div className="flex items-center">
                                        
                                        <h2>✓ Embedded Systems</h2>
                                    </div>
                                </div>
                            </div>

                            {/* Age */}

                            <div className="Age">
                                <div className="pt-3 pb-1">
                                    {/* <i className="fa-solid fa-house"></i> */}
                                    <i className="fas fa-user"></i>
                                    <h1 className="inline-block font-medium">Age: &nbsp;</h1>
                                    <h2 className="inline-block" id="age-calculation">{age}</h2>
                                    {/* <script src="js/dob.js"></script> */}
                                </div>
                            </div>
                          
                            {/* Home */}

                            <div className="LivesIn">
                                <div className="pt-3 pb-1">
                                    <i className="fa-solid fa-house"></i>
                                    <h1 className="inline-block font-medium">Home: </h1>{' '}
                                    <a
                                        href="https://maps.app.goo.gl/SoqjTH11UWKLgeRc6"
                                        target="_blank"
                                        className=" hover:underline"
                                        rel="noopener noreferrer"
                                    >
                                        Paikgacha, Khulna, Bangladesh
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="about-right p-4 border rounded-sm border-gray-300 lg:col-span-8 lg:row-span-12 ">
                       

                        <p className=" text-justify  text-base">
                            {' '}
                            <span>Greetings!</span> <br /> I am <span className="text-primary">Indrojit Mondal</span>, a passionate software engineer dedicated to building innovative software. I hold a Bachelor's degree in{' '}
                            <span className="text-primary">Computer Science and Engineering(CSE) </span> from the{' '}
                            <a target="_blank" href="https://bu.ac.bd/" className="text-primary hover:underline " rel="noopener noreferrer">
                                University of Barishal
                            </a>
                            . With 5 month of experience in ReactJS and NodeJS, alongside solving 400+ problems with 7 years experience and solving basic problem solving related to mathematics, algorithms, and data structures, I bring a strong technical foundation and a creative mindset to the table. My experience in software development has equipped me to tackle real-world challenges effectively.
                            I'm actively seeking a software engineering role where I can apply my skills, grow professionally, and contribute to impactful projects.
                            Beyond programming, I have a deep sense of empathy. In my personal time, I often visit hospitals to observe and reflect on patients' situations, drawing inspiration for solutions that can make a difference.
                            Feel free to explore my problem-solving profiles below. I look forward to connecting and collaborating!
                            {/* flex flex-col md:flex-row gap-4 */}
                            <div className="flex flex-col md:flex-row gap-8 justify-between my-8">
                                <img src={professionalCoder} className="h-44 block" title="Professional Coder" alt="" />
                                <img src={reactImage} title="ReactJS" className="h-44  block" alt="" />
                                <img src={realLifeImage} className="h-44  block" title="Real Life Problem Solution" alt="" />
                            </div>
                        </p>

                        <h2 className="pb-2 text-justify  text-base">
                            My areas of expertise include <span className="text-primary">ReactJS, NodeJS, and MongoDB</span>. In free time, I enjoy solving problems on LeetCode and Codeforces to enhance my skills.
                        </h2>

                        <div className="flex gap-2 md:gap-5 pt-3">
                           

                            

                            <a href="https://leetcode.com/u/user6457sK/" target="_blank"
                                className="block text-primary hover:underline"
                                rel="noopener noreferrer"
                            >
                                <img src={leetCodeImage} className="w-11 h-11" alt="cf" />
                                LeetCode
                            </a>

                            <a
                                href="https://codeforces.com/profile/Zerotoinfinity"
                                target="_blank"
                                className="block text-primary hover:underline"
                                rel="noopener noreferrer"
                            >
                                <img src={codeforcesImage} className="w-11 h-11" alt="cf" />
                                Codeforces
                            </a>

                            <a
                                href="https://uhunt.onlinejudge.org/id/774977"
                                target="_blank"
                                className="block text-primary hover:underline"
                                rel="noopener noreferrer"
                            >
                                <img src={uvaImage} className="w-11 h-11" alt="cf" />
                                Uva Online Judge
                            </a>
                        </div>

                        <div className="skills">
                            {/* <h1 className="text-black text-lg mt-3 mb-3 font-bold">Skills</h1> */}

                            <h1 className="text-black relative mt-3 mb-3 font-bold">
                                SKILLS
                                <span className="absolute left-0 bottom-0 w-[50px] h-[2px] bg-primary  "></span>
                            </h1>

                            <p className="text-justify  text-base">
                                With a focus on continuous learning and innovation, I stay up-to-date with the latest technologies to deliver top-quality solutions across my projects. I continuously strive to improve my expertise across various domains of web development and programming. Below is a visual representation of my current proficiency in key skills:
                            </p>

                            <div className="w-full lg:w-1/2 pl-11 pt-6">
                                <div className="w-full flex justify-between ">
                                    <h2>HTML/CSS</h2>
                                    <h2>90%</h2>
                                </div>
                                <progress className="progress progress-info w-ful" value="90" max="100"></progress> <br />
                                <div className="w-full flex justify-between ">
                                    <h2>JavaScript</h2>
                                    <h2>80%</h2>
                                </div>
                                <progress className="progress progress-primary w-full" value="80" max="100"></progress> <br />
                                <div className="w-full flex justify-between ">
                                    <h2>ReactJS</h2>
                                    <h2>90%</h2>
                                </div>
                                <progress className="progress progress-secondary  w-full" value="85" max="100"></progress> <br />

                                <div className="w-full flex justify-between ">
                                    <h2>NodeJS/C++/Java/Python</h2>
                                    <h2>80%</h2>
                                </div>
                                <progress className="progress progress-error w-full" value="70" max="100"></progress>

                                <div className="w-full flex justify-between ">
                                    <h2>Problem Solving</h2>
                                    <h2>70%</h2>
                                </div>
                                <progress className="progress progress-success  w-full" value="70" max="100"></progress>
                                <div className="w-full flex justify-between ">
                                    <h2>Responsive Design</h2>
                                    <h2>90%</h2>
                                </div>
                                <progress className="progress  progress-accent  w-full" value="85" max="100"></progress>

                                <div className="w-full flex justify-between ">
                                    <h2>Version Control (GiT)</h2>
                                    <h2>75%</h2>
                                </div>
                                <progress className="progress progress-warning w-full" value="75" max="100"></progress>
                            </div>
                        </div>

                        <div className='mt-3'>
                        <Skills ></Skills>
                        </div>
                        
                    </div>
                </div>
            </main>
            
            <HireMe></HireMe>
        </div>
    );
};

export default About;