import React from 'react';
import reactIcon from '../../icon/react4.png'
import nodeIcon from '../../icon/nodejs.png'
import mongoDBIcon from '../../icon/mongoDb2.png'
import nextJSIcon from '../../icon/nextJs.png'
import expressJSIcon from '../../icon/expressJs.png'
import gitIcon from '../../icon/git.png'
import cPlusPlusIcon from '../../icon/rszC++.png'
import javaIcon from '../../icon/java3.png'
const TechnologiesIWorkWith = () => {
    return (
        <div>
            <section className="w-11/12 lg:w-10/12 mx-auto">
                <h1 className="font-bold text-center text-2xl md:text-3xl py-5">
                    Technologies We Work With
                </h1>

                <div className="mt-6 grid hover:rotate-1 grid-cols-2 border p-4 border-gray-300 rounded-xl lg:grid-cols-4 items-center gap-5">
                    <img src={reactIcon} className="h-28" alt="reactJs" />
                    <img src={nodeIcon} className="h-20" alt="nodeJs" />
                    <img src={mongoDBIcon} className="h-16" alt="MongoDB" />
                    <img src={nextJSIcon} className="h-28" alt="nextJs" />
                    <img src={expressJSIcon} className="h-20" alt="expressJs" />
                    <img src={gitIcon} className="h-32" alt="git" />
                    <img src={cPlusPlusIcon} className="h-16" alt="C++" />
                    <img src={javaIcon} className="h-28" alt="java" />
                </div>
            </section>
        </div>
    );
};

export default TechnologiesIWorkWith;