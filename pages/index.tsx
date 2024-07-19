// components/LandingPage.js

import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
const LandingPage = () => {
  return (
<section className="bg-white">
  <CustomNavbar/>

    <div className="mx-auto max-w-2xl py-10 sm:py-10 lg:py-10">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        New educational modules are released <a href="#" className="font-semibold text-cyan-800"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-medium tracking-tight text-gray-900 sm:text-6xl">Empowering the 

</h1>
<h1 className="text-4xl font-medium tracking-tight text-gray-900 sm:text-6xl"> Future of Education

</h1>
        <p className="mt-6 text-sm leading-5 text-gray-600">Dive into a wide range of educational resources, tutorials, and community-driven content designed to help you master Rosetta's powerful tools and applications. Whether you're a beginner or an experienced user, you'll find something to enhance your skills and knowledge.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-cyan-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>

</section>

  );
};

export default LandingPage;
