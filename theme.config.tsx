import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/Footer';

const config = {
  logo: (
    <>
      <img src="/logo.png" alt="Logo" style={{ width: '3em', height: '3em' }} />

    </>
  ),
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    component: CustomFooter,

  },
  
};

export default config;
