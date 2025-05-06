import React from 'react';
import Banner from './Banner';
import TechnologiesIWorkWith from './TechnologiesIworkWith';
import WhatIWorkOn from './WhatIWorkOn';
import MyRecentProjects from './MyRecentProjects';

const Home = () => {
    return (
        <div className="min-h-screen" >
              <Banner></Banner>
              <TechnologiesIWorkWith></TechnologiesIWorkWith>
              <WhatIWorkOn></WhatIWorkOn>
              <MyRecentProjects></MyRecentProjects>
        </div>
    );
};

export default Home;