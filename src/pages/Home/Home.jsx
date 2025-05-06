import React from 'react';
import Banner from './Banner';
import TechnologiesIWorkWith from './TechnologiesIworkWith';
import WhatIWorkOn from './WhatIWorkOn';
import MyRecentProjects from './MyRecentProjects';
import HireMe from './HireMe';


const Home = () => {
    return (
        <div >
              <Banner></Banner>
              <TechnologiesIWorkWith></TechnologiesIWorkWith>
              <WhatIWorkOn></WhatIWorkOn>
              <MyRecentProjects></MyRecentProjects>
              <HireMe></HireMe>
              
        </div>
    );
};

export default Home;