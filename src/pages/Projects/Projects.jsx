import React, { useState } from 'react';
import HireMe from '../Home/HireMe';
import myProjectImage from '../../icon/Group 4.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../css/styles.css'
import { Helmet } from 'react-helmet-async';
import WebDevelopment from './WebDevelopment';
import MobileAppDevelopment from './MobileAppDevelopment';
import GameDevelopment from './GameDevelopment';
import DataStructure from './DataStructure';
import Algorithm from './Algorithm';
import ALL from './ALL';
const Projects = () => {
    
    const [webStatus, setWebStatus]=useState(false);
    const [mobileAppStatus, setMobileAppStatus]=useState(false);
    const [gameStatus, setGameStatus]=useState(false);
    const [dsStatus, setDsStatus]=useState(false);
    const [algorithmStatus, setAlgorithmStatus]=useState(false);
    const [allStatus, setAllStatus]=useState(true);

    const webChecker= ()=>{
        setWebStatus(true);
        setMobileAppStatus(false);
        setGameStatus(false);
        setDsStatus(false);
        setAlgorithmStatus(false);
        setAllStatus(false);
       
    }
    const mobileAppChecker= ()=>{
        setWebStatus(false);
        setMobileAppStatus(true);
        setGameStatus(false);
        setDsStatus(false);
        setAlgorithmStatus(false);
        setAllStatus(false);
        
       
    }
    const gameChecker= ()=>{
        setWebStatus(false);
        setMobileAppStatus(false);
        setGameStatus(true);
        setDsStatus(false);
        setAlgorithmStatus(false);
        setAllStatus(false);
    }
    const dsChecker= ()=>{
        setWebStatus(false);
        setMobileAppStatus(false);
        setGameStatus(false);
        setDsStatus(true);
        setAlgorithmStatus(false);
        setAllStatus(false);
    }
    const algorithmChecker= ()=>{
        setWebStatus(false);
        setMobileAppStatus(false);
        setGameStatus(false);
        setDsStatus(false);
        setAlgorithmStatus(true);
        setAllStatus(false);
    }
    const allChecker=()=>{
        setWebStatus(false);
        setMobileAppStatus(false);
        setGameStatus(false);
        setDsStatus(false);
        setAlgorithmStatus(false);
        setAllStatus(true);
    }


    return (
        <div>
            <Helmet>
              <title>Projects – Indrojit Mondal </title>
              </Helmet>
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
                        <div className='mt-6 flex flex-wrap lg:flex-row gap-4 lg:justify-between  '>

                            <button onClick={()=>webChecker()} className={`border-2 hover:bg-p1 hover:text-white  border-primary p-2 rounded-md   text-primary ${webStatus? 'bg-primary text-white': '' } `}>Web Development</button>
                            <button onClick={()=>mobileAppChecker()} className={`border-2 hover:bg-p1 hover:text-white  border-primary p-2  rounded-md  text-primary ${mobileAppStatus? 'bg-primary text-white': ''}  `}>Mobile App Development</button>
                            <button onClick={()=> gameChecker()} className={`border-2 hover:bg-p1 hover:text-white  border-primary p-2 rounded-md  text-primary ${gameStatus? 'bg-primary text-white': ''} `}>Game Development</button>
                            <button onClick={()=> dsChecker()} className={`border-2 hover:bg-p1 hover:text-white  border-primary p-2 rounded-md  text-primary ${dsStatus? 'bg-primary text-white': ''} `}>Data Structure</button>
                            <button onClick={()=> algorithmChecker()} className={`border-2 hover:bg-p1 hover:text-white  border-primary p-2 rounded-md  text-primary ${algorithmStatus? 'bg-primary text-white': ''}  `}>Algorithm</button>
                            <button onClick={()=> allChecker()} className={`border-2 hover:bg-p1 hover:text-white  border-primary p-2 rounded-md  text-primary ${allStatus? 'bg-primary text-white': ''}  `}>ALL</button>
                        </div>

                    </div>
                </div>
            </div>
            { webStatus && <WebDevelopment></WebDevelopment>
            }
            {
              mobileAppStatus && <MobileAppDevelopment></MobileAppDevelopment>
            }
            {
                gameStatus && <GameDevelopment></GameDevelopment>
            }
            {
                dsStatus && <DataStructure></DataStructure>
            }
            {
                algorithmStatus && <Algorithm></Algorithm>
            }
            {
                allStatus && <ALL></ALL>
            }


            <HireMe></HireMe>
        </div>
    );
};

export default Projects; 