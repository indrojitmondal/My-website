import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from '../Main';

import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';

import Projects from '../../pages/Projects/Projects';
import Services from '../../pages/Services/Services';
import Blogs from '../../pages/Blogs/Blogs';
import Contact from '../../pages/Contact/Contact';


export const  router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main> ,
    children: [
      {
        path:'',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }

    ]
  },
]);


