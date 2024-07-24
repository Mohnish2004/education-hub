
const config = {
  logo: (
    <>
      <img src="/logo.png" alt="Logo" style={{ width: '3em', height: '3em' }} />
    </>
  ),
  project: {
    link: 'https://github.com/Mohnish2004/education-hub.git',
  },
  docsRepositoryBase: 'https://github.com/Mohnish2004/education-hub.git',
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
