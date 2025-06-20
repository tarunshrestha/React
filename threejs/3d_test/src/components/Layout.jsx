import React from 'react';
import Navbar from "./Navbar"; // Direct import from the same folder


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