
export default function Home() {
  return (
    <section className="flex w-full items-start justify-center bg-cover bg-center bg-no-repeat">
      <div className="flex max-w-screen-2xl grow flex-col items-start justify-start gap-12 px-3 py-12 md:pt-24 lg:px-0 xl:flex-row">
        <div className="sm:pl-8 lg:pl-16 xl:pl-32 mb-0 flex flex-1 flex-col items-start gap-12 px-0 xl:mb-24">
          <div className="flex max-w-lg flex-col gap-2">
          <h1 className="max-w-xl mb-4 text-7xl text-[#102349] font-bold tracking-tight leading-none md:text-7xl xl:text-7xl dark:text-white">Learn Protein Modeling</h1>
         <p className="max-w-md mb-6 font-light text-gray-500 tracking-tight leading-tight lg:mb-8 md:text-md lg:text-md dark:text-gray-400">Dive into a wide range of educational resources, tutorials, and community-driven content designed to help you master Rosetta's powerful tools and applications.</p>
             <div className="flex flex-wrap gap-3">
       <a href="/documents/introduction" className="inline-flex items-center justify-center px-5 py-3 text-base text-white font-medium bg-[#078B9F] rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
         Get Started <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </a>
      <a href="/about" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-[#078B9F] border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
        Learn more
      </a>
    </div>
          </div>
          <div className="flex gap-4">
          </div>
        </div>
        <div
  className="relative flex flex-1 flex-col lg:px-16 xl:translate-x-1/4 xl:translate-y-1/5 xl:scale-[1.8] xl:px-0 min-[1440px]:translate-y-1/2 2xl:translate-x-1/2 2xl:translate-y-1/2 2xl:scale-[2] min-[1900px]:translate-x-[20%] min-[1900px]:translate-y-1/4 min-[1900px]:scale-150"
>
  <img
    src="/test2.svg"
    role="presentation"
    alt=""
    sizes="100vw"
    className="w-full h-auto 2xl:absolute 2xl:inset-0"
  />
</div>
      </div>
    </section>
  );
};

// const Home = () => {
//     return (
// <section className="">
// <div className="grid max-w-screen-xl px-3 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
//   <div className="place-self-center lg:col-span-5">
//   <h1 className="max-w-xl mb-4 text-7xl text-[#102349] font-bold tracking-tight leading-none md:text-7xl xl:text-7xl dark:text-white">Learn Protein Modeling</h1>
//             <p className="max-w-md mb-6 font-light text-gray-500 tracking-tight leading-tight lg:mb-8 md:text-md lg:text-md dark:text-gray-400">Dive into a wide range of educational resources, tutorials, and community-driven content designed to help you master Rosetta's powerful tools and applications.</p>
//     <div className="flex flex-wrap gap-3">
//       <a href="/documents/introduction" className="inline-flex items-center justify-center px-5 py-3 text-base text-white font-medium bg-[#078B9F] rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
//         Get started
//         <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//           <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
//         </svg>
//       </a>
//       <a href="/about" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-[#078B9F] border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
//         Learn more
//       </a>
//     </div>
//   </div>
//   <div className="mt-10 mx-auto lg:mt-0 lg:col-span-7 lg:flex">
//   <img src="/test2.svg" className="rounded-2xl w-full h-200 max-w-4xl" alt="mockup"></img>
// </div>
// </div>

// <br></br>
// <br></br>


//     <div className="max-w-7xl mt-6 mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
//   <div className="max-w-4xl mx-auto text-center mb-5 lg:mb-5">
//     <h2 className="lg:text-4xl md: text-3xl sm:text-5xl font-bold md:text-4xl md:leading-tight dark:text-white">One Tool, Many Users</h2>
//   </div>

//   <div className="grid sm:grid-cols-7 gap-8">
//   <a className="group sm:col-span-2 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10">
//     <div className="aspect-w-16 aspect-h-9">
//       <img className="w-full h-full object-cover rounded-xl" src="/card4.png" alt="Blog Image"></img>
//     </div>
//     <h1 className="mt-5 font-bold text-lg text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">For new and existing users.</h1>
//     <p className="mt-2 text-sm text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
//   </a>

//   <a className="group sm:col-span-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10">
//     <div className="aspect-w-16 aspect-h-9">
//       <img className="w-full h-xl object-cover rounded-xl" src="/card5.png" alt="Blog Image"></img>
//     </div>
//     <h1 className="mt-5 font-bold text-lg text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">Explore a variety of resources and modules.</h1>
//     <p className="mt-2 text-sm text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
//   </a>

//   <a className="group sm:col-span-2 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10">
//     <div className="aspect-w-16 aspect-h-9">
//       <img className="w-70 h-82 object-cover rounded-xl" src="/card4.png" alt="Blog Image"></img>
//     </div>
//     <h1 className="mt-5 font-bold text-lg text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">For new and existing users.</h1>
//     <p className="mt-2 text-sm text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
//   </a>
// </div>
// </div>



// </section>  );
// };

// export default Home;