
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
 

const config = {
  logo: (
    <>
      <img src="/logo.png" alt="Logo" className="mr-2" style={{ width: '3em', height: '3em' }} />
      <h1 className="ml-2 text-lg text-gray-500 tracking-normal leading-none dark:text-white font-normal">Rosetta Commons Education Hub</h1>
    </>
  ),
  banner: {
    key: '2.0-release',
    text: (
      <div className="bg-blue-500">
      <a href="/documents/introduction">
        🎉 New Learning Module released. Read more →
      </a>
      </div>
    )
  },
  docsRepositoryBase: 'https://github.com/Mohnish2004/education-hub.git',
  primaryHue: 200,
  primarySaturation: 60,

  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://my-app.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Rosetta Commons'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Education Hub'}
        />
      </>
    )
  },
  project: {
    link: 'https://github.com/Mohnish2004/education-hub.git',
  },


  footer: {
    text: (
<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/logo.png" alt="Logo" className="mr-2" style={{ width: '3em', height: '3em' }} />
            <span className="self-center text-md font-normal whitespace-nowrap dark:text-white">Rosetta Commons Education Hub</span>
        </a>
        <ul className="flex flex-wrap items-center gap-6 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">Docs</a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">Socials</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <div className="flex flex-col mt-10 sm:flex-row justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Rosetta Commons™</a> All Rights Reserved</span>
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-right">
          Designed and Developed with ✨ by 
          <a href="https://jessfong.com/" className="hover:underline"> Jess Fong </a> and 
          <a href="https://mohnishgopi.com/" className="hover:underline"> Mohnish Gopi </a>
        </span>    </div>
</div>


    ),
  },
  
};

export default config;
