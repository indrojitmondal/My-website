import React from 'react';
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaDatabase, FaJava } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiFirebase, SiVercel, SiCplusplus } from 'react-icons/si';

import { VscVscode } from 'react-icons/vsc';
const skills = [
  { icon: <FaReact size={40} className="text-blue-400" />, name: 'React.js' },
  { icon: <FaJs size={40} className="text-yellow-400" />, name: 'JavaScript' },
  { icon: <FaNodeJs size={40} className="text-green-500" />, name: 'Node.js' },
  { icon: <SiExpress size={40} className="text-gray-300" />, name: 'Express.js' },
  { icon: <SiMongodb size={40} className="text-green-400" />, name: 'MongoDB' },
  { icon: <FaHtml5 size={40} className="text-orange-500" />, name: 'HTML5' },
  { icon: <FaCss3Alt size={40} className="text-blue-500" />, name: 'CSS3' },
  { icon: <SiTailwindcss size={40} className="text-cyan-400" />, name: 'Tailwind CSS' },
  { icon: <SiFirebase size={40} className="text-orange-400" />, name: 'Firebase' },
  { icon: <SiVercel size={40} className="text-white" />, name: 'Vercel' },
  { icon: <FaGithub size={40} className="text-red-500" />, name: 'Git & GitHub' },
  { icon: <FaDatabase size={40} className="text-blue-400" />, name: 'Database Management' },
  { icon: <VscVscode size={40} className="text-blue-500" />, name: 'VS Code' },
  { icon: <SiCplusplus size={40} className="text-blue-700" />, name: 'C++' },
  { icon: <FaJava size={40} className="text-blue-700" />, name: 'Java' },
];

const Skills = () => {
  return (
    <div className=" py-12 text-black">
      
      <h2 className="text-2xl font-bold text-center mb-10">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className=" p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-md hover:scale-105 transition-transform duration-300"
          >
            {skill.icon}
            <p className="mt-4 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
