const Home = () => {
    return (
<section className="">
    <div className="grid max-w-screen-xl px-3 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-6xl text-black font-bold tracking-tight leading-none md:text-6xl xl:text-6xl dark:text-white">Learn Protein Modeling</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Dive into a wide range of educational resources, tutorials, and community-driven content designed to help you master Rosetta's powerful tools and applications.</p>
            <a href="/documents/introduction" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-gray-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="/about" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Learn more
            </a> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/group.jpeg" className="rounded-md" alt="mockup"></img>
        </div>                
    </div>


    <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
  <div className="max-w-4xl mx-auto text-center mb-5 lg:mb-5">
    <h2 className="text-4xl font-medium md:text-4xl md:leading-tight dark:text-white">What is Rosetta Commons Education Hub ?</h2>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

  <a className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10" >
      <div className="aspect-w-16 aspect-h-9">
        <img className="w-full h-full object-cover rounded-xl" src="/card3.webp" alt="Blog Image"></img>
      </div>
      <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">Empowering the Future of Protein Design through Education and Collaboration</h3>

    </a>

    <a className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10" >
      <div className="aspect-w-16 aspect-h-9">
        <img className="w-full h-full object-cover rounded-xl" src="/card1.jpeg" alt="Blog Image"></img>
      </div>
      <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">Building Tomorrow's Protein Scientists Today</h3>

    </a>


    <a className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10" >
      <div className="aspect-w-16 aspect-h-9">
        <img className="w-full h-full object-cover rounded-xl" src="/card2.webp" alt="Blog Image"></img>
      </div>
      <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">Innovating Protein Science: Learn, Collaborate, Excel</h3>

    </a>
  </div>
</div>



    <section className="bg-white dark:bg-gray-900">
    <div className="py-2 px-4 mx-auto max-w-screen-xl sm:py-10 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center p-6 rounded-3xl border-2 border-gray-100">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Getting Started</h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">New to Rosetta Commons? Check out the getting started guides that contain an introduction to Rosetta Common’s main concepts and links to and resources.</p>
            <a href="#" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">View Guides</a>
        </div>
    </div>
</section>

</section>  );
};

export default Home;