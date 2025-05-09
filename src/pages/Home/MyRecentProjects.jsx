import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyRecentProjects = () => {
    const [projects, setProjects]= useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get("webProjects.json")
            .then((res) => {
                setProjects(res.data);
                console.log(res.data);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false); // Stop loading even if an error occurs
            });
    }, []);

    return (
        <div>

            <section id="webApp" className="mt-8 w-11/12 lg:w-10/12 mx-auto">
                <h1 className="font-bold text-center text-2xl md:text-3xl py-5">
                    My Recent Projects
                </h1>

                <div className="mt-6 p-4 border border-b1 rounded-xl">
                    <h1 className="text-xl font-bold text-center text-primary p-3">
                        Web Development
                    </h1>

                    <div
                        id="web-application-container"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {/* Project Card Start */}
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="card card-compact p-4 border border-b1 hover:bg-hero1 hover:text-primary hover:shadow-xl"
                            >
                                <figure>
                                    <img src={project.img} alt={project.title} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title mx-auto">{project.title}</h2>
                                    <p className="mx-auto text-lg">{project.subtitle}</p>

                                    <div>
                                        <ul className="flex flex-wrap gap-4 text-black">
                                            {project.stack.map((tech, index) => (
                                                <li key={index}>{tech}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="card-actions mt-4 mx-auto flex gap-4 items-center">
                                        {project.links.map((link, i) => (
                                            <a href={link.url} key={i} target="_blank" rel="noreferrer">
                                                <button className="border flex gap-2 items-center  border-primary px-4 py-2    text-primary hover:text-white rounded-md hover:bg-primary">
                                                    <i className={`fa-solid ${link.icon}`} /> {link.label}
                                                </button>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Project Card End */}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default MyRecentProjects;