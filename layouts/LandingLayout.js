import React from 'react';

const defaultThemeConfig = {
  navbar: 'Default Navbar',
  footer: 'Default Footer',
};

let themeConfig;
try {
  themeConfig = require('../config/themeConfig').default || defaultThemeConfig;
} catch (error) {
  themeConfig = defaultThemeConfig;
}

const LandingLayout = ({ children }) => {
  return (
    <div className="layout">
      <nav>{themeConfig?.navbar}</nav>
      <main>{children}</main>
      <footer>{themeConfig?.footer}</footer>
    </div>
  );
};

export default LandingLayout;