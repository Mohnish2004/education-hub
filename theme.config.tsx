
const config = {
  logo: (
    <>
      <img src="/logo.png" alt="Logo" className="mr-2" style={{ width: '3em', height: '3em' }} />
      <h1 className="ml-2 text-lg text-gray-500 font-medium">Rosetta Commons Education Hub</h1>
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

  useNextSeoProps() {
    return {
      titleTemplate: '%s – Education Hub'
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: true
  },
  project: {
    link: 'https://github.com/Mohnish2004/education-hub.git',
  },
  footer: {
      text: (
        <span>
      <img src="/logo.png" alt="Logo"  className="mb-4" style={{ width: '3em', height: '3em' }} />
          MIT {new Date().getFullYear()} ©{' '}
          <a href="https://nextra.site" target="_blank">
            Rosetta
          </a>
          .
        </span>
    ),
  },
  
};

export default config;
