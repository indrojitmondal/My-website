import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HireMe from '../Home/HireMe';
import myBlogsImage from '../../images/myBlog.png'
import { Helmet } from 'react-helmet-async';
const Blogs = () => {
    const [blogs, setBlogs]=useState([]);
    useEffect(() => {
        axios.get("blogs.json")
            .then((res) => {
                setBlogs(res.data);
                
              })
            .catch((error) => {
                console.error("Error fetching data:", error);
                 });
    }, []);
    return (
  
      <div>
        <Helmet>
              <title>Blogs – Indrojit Mondal </title>
          </Helmet>
            <section className="">
        <div className="w-8/12 mx-auto text-center flex flex-col lg:flex-row gap-8 pt-9 pb-9">
          <img src={myBlogsImage} className="block h-40" alt="Blog" />
          <div className="text-center">
            <h1 className="font-bold text-primary pt-5">
              <span className="text-primary font-bold">MY</span> BLOGS
            </h1>
            <p>
              Welcome to my Blogs. Here I have shared some important development questions that might be helpful for developers.
            </p>
          </div>
        </div>
        <hr className="md:hidden border-gray-400" />
      </section>

      <menu className="lg:pt-10 lg:pb-10 pt-8 pb-8 bg-white lg:text-xl font-medium">
        <section className="w-10/12 mx-auto">
          <div className="flex gap-1 items-center">
            <h3 className="text-xl font-bold">Important FAQ</h3>
            <i className="fa-solid fa-comment-medical"></i>
          </div>
        </section>
      </menu>

      <main className="w-10/12 mx-auto space-y-8 pt-5">
        {blogs.map((faq, index) => (
          <div key={index} className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked={index === 0} />
            <div className="collapse-title text-xl font-medium">{faq.title}</div>
            <div className="collapse-content">
              <p className="text-lg" style={{ whiteSpace: 'pre-line' }}>{faq.content}</p>
            </div>
          </div>
        ))}
      </main>
        <HireMe></HireMe>
      </div>
    );
};

export default Blogs;