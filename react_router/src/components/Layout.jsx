import React from 'react';
import Navbar from './components/Navbar'; // Adjust the import path as necessary

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;
