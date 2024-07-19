import React from 'react';

// Provide a default themeConfig if the import fails
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
      {/* Render Navbar */}
      <nav>{themeConfig?.navbar}</nav>
      <main>{children}</main>
      {/* Render Footer */}
      <footer>{themeConfig?.footer}</footer>
    </div>
  );
};

export default LandingLayout;