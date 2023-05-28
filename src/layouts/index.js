import React from 'react';
import Footer from './Footer';
import Navigationbar from './Navbar';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/navstyles.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navigationbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
