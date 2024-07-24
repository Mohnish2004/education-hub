
const config = {
  logo: (
    <>
      <img src="/logo.png" alt="Logo" style={{ width: '3em', height: '3em' }} />
    </>
  ),
  banner: {
    key: '2.0-release',
    text: (
      <a href="/documents/introduction">
        🎉 New Learning Module released. Read more →
      </a>
    )
  },
  docsRepositoryBase: 'https://github.com/Mohnish2004/education-hub.git',

  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
        dark: 'Dark',
        system: 'System'
      }
    }
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Education Hub'
    }
  },
  sidebar: {
    toggleButton: true,
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
