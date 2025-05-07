import React, { useState } from 'react';
import HireMe from '../Home/HireMe';
import myProjectImage from '../../icon/Group 4.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../css/styles.css'
const Projects = () => {



    return (
        <div>
            <section className="bg-projects">
                <div className="w-11/12 md:w-10/12 mx-auto grid md:grid-cols-2 pt-5 md:px-14">
                    <h1></h1>
                    <h1 className="text-lg font-medium text-primary text-center">
                        <span>MY</span> PROJECTS
                    </h1>
                </div>
            </section>
            <div className="lg:sticky top-[80px] lg:top-[68px] z-[60] bg-projects">
                <div className="w-9/12 mx-auto lg:grid lg:grid-cols-12">
                    <div className="lg:col-span-3">
                        <img
                            src={myProjectImage}
                            className="h-28 mx-auto lg:ml-0 lg:mr-0"
                            alt=""
                        />
                    </div>
                    <div className="lg:col-span-9">
                        {/* <div
                            className="mt-6 flex flex-wrap lg:flex-row gap-4 lg:justify-between"
                            id="projects-container"
                        >
                           
                        </div> */}
                        <Tabs>
                            <TabList>
                                <Tab>Web Application</Tab>
                                <Tab>Mobile Application</Tab>
                                <Tab>Game Development</Tab>
                            </TabList>

                            <TabPanel>
                            <h2>Any content 1</h2>
                             </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 3</h2>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>


           <HireMe></HireMe>
        </div>
    );
};

export default Projects;