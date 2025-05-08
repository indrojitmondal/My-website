import React from 'react';
import Banner from './Banner';
import TechnologiesIWorkWith from './TechnologiesIworkWith';
import WhatIWorkOn from './WhatIWorkOn';
import MyRecentProjects from './MyRecentProjects';
import HireMe from './HireMe';
import Sliders from './Sliders';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div >
              <Helmet>
              <title>Indrojit Mondal | Programmer | Full Stack Developer</title>
              </Helmet>
              <Banner></Banner>
              {/* <Sliders></Sliders> */}
              <TechnologiesIWorkWith></TechnologiesIWorkWith>
              <WhatIWorkOn></WhatIWorkOn>
              <MyRecentProjects></MyRecentProjects>
              <HireMe></HireMe>
              
        </div>
    );
};

export default Home;