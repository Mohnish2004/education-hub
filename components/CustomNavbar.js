import React from 'react';

const CustomNavbar = () => {
  return (



<nav class="bg-white border-gray-200">
  <div class="max-w-screen-xl flex flex-wrap items-center border-b-2 border-gray-100 justify-between mx-auto p-2">
    <a href="/" class="flex items-cente justify-startr space-x-3 rtl:space-x-reverse">
        <img src="/logo.png" style={{ width: '3em', height: '3em' }} class="h-8 justify-start" alt="Logo" />
        <span class="self-center text-2xl font-light whitespace-nowrap ">Rosetta education hub</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-normal text-sm flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">

        <li>
          <a href="about" class="block py-2  text-gray-700 rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0">About</a>
        </li>
        <li>
          <a href="#" class="block py-2  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 ">Contact</a>
        </li>
        <li>
        <a href="/modules/introduction" className="rounded-md bg-cyan-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



  );
};

export default CustomNavbar;
