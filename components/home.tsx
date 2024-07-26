const Home = () => {
    return (
<section className="">
<div className="grid max-w-screen-xl px-3 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
  <div className="place-self-center lg:col-span-7">
  <h1 className="max-w-xl mb-4 text-6xl text-[#102349] font-bold tracking-tight leading-none md:text-6xl xl:text-6xl dark:text-white">Learn Protein Modeling</h1>
            <p className="max-w-md mb-6 font-light text-gray-500 tracking-tight leading-tight lg:mb-8 md:text-md lg:text-md dark:text-gray-400">Dive into a wide range of educational resources, tutorials, and community-driven content designed to help you master Rosetta's powerful tools and applications.</p>
    <div className="flex flex-wrap gap-3">
      <a href="/documents/introduction" className="inline-flex items-center justify-center px-5 py-3 text-base text-white font-medium bg-[#078B9F] rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
        Get started
        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </a>
      <a href="/about" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-[#078B9F] border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
        Learn more
      </a>
    </div>
  </div>
  <div className="mt-10 mx-auto lg:mt-0 lg:col-span-5 lg:flex">
    <img src="/group.jpeg" className="rounded-2xl" alt="mockup"></img>
  </div>
</div>

<br></br>
<br></br>


    <div className="max-w-7xl mt-6 mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
  <div className="max-w-4xl mx-auto text-center mb-5 lg:mb-5">
    <h2 className="lg:text-4xl md: text-3xl sm:text-5xl font-bold md:text-4xl md:leading-tight dark:text-white">One Tool, Many Users</h2>
  </div>

  <div className="grid sm:grid-cols-7 gap-8">
  <a className="group sm:col-span-2 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10">
    <div className="aspect-w-16 aspect-h-9">
      <img className="w-full h-full object-cover rounded-xl" src="/card4.png" alt="Blog Image"></img>
    </div>
    <h1 className="mt-5 font-bold text-lg text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">For new and existing users.</h1>
    <p className="mt-2 text-sm text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
  </a>

  <a className="group sm:col-span-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10">
    <div className="aspect-w-16 aspect-h-9">
      <img className="w-full h-xl object-cover rounded-xl" src="/card5.png" alt="Blog Image"></img>
    </div>
    <h1 className="mt-5 font-bold text-lg text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">Explore a variety of resources and modules.</h1>
    <p className="mt-2 text-sm text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
  </a>

  <a className="group sm:col-span-2 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10">
    <div className="aspect-w-16 aspect-h-9">
      <img className="w-70 h-82 object-cover rounded-xl" src="/card4.png" alt="Blog Image"></img>
    </div>
    <h1 className="mt-5 font-bold text-lg text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">For new and existing users.</h1>
    <p className="mt-2 text-sm text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
  </a>
</div>
</div>

<br></br>
<br></br>
<br></br>


<div className="py-2 px-4 mb-20 mt-10 max-w-screen-7xl sm:py-1 lg:px-1">
  <div className="mx-auto max-w-screen-lg text-left p-6 bg-[#F2FBFC] dark:bg-[#052529] rounded-2xl">
    <h2 className="mb-10 text-4xl tracking-tight font-extrabold leading-tight text-[#196A76] dark:text-[#ffffff]">
      Getting Started
    </h2>
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <p className="mb-4 sm:mb-0 max-w-3xl leading-light tracking-light font-normal text-gray-500 dark:text-gray-100 md:text-lg">
        New to Rosetta Commons? Check out the getting started guides that contain an introduction to Rosetta Common’s main concepts and links to and resources.
      </p>
      <a
        href="/documents/introduction"
        className="text-white bg-[#078B9F] dark:bg-[#078B9F] dark:white hover:bg-gray-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 sm:mt-0 sm:ml-4 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
      >
        View Guides
      </a>
    </div>
  </div>
</div>


</section>  );
};

export default Home;