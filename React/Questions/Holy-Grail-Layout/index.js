import React from 'react';
import './layout.css';
const Layout = function () {
  return (
    <div className="container">
      <div className="header">Header</div>
      <div className="left-side">Left Side</div>
      <main className="main">Main</main>
      <div className="right-side">Right Side</div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default Layout;
