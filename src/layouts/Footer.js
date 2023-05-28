import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Footer = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <footer id="main-footer" className=" container-fluid bg-dark mt-5">
        <div className="container">
          <div className="row">
            <div className="col text-center pt-2">
              <p className="heading-4 text-light">
                copyright &copy; <span>1996-2022, KartDeal.com, Inc. or its affiliates</span>
              </p>
            </div>
          </div>
        </div>

        <div className=" container-fluid bg-secondary text-light  ">
          <div className="row">
            <div className="col-md-3 mt-3">
              <h4>Get to Know Us</h4>
              <div className="pl-2">
                <p> About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p> KartDeal Cares</p>
                <p>Gift a Smile</p>
                <p> KartDeal Science</p>
              </div>
            </div>
            <div className="col-md-3  mt-3">
              <h4>Product Categories</h4>
              <div className="pl-2">
                <p>Electronics</p>
                <p>Clothing</p>
                <p>Beauty</p>
                <p>Home Appliances</p>
                <p>Study</p>
              </div>
            </div>
            <div className="col-md-3  mt-3">
              <h4>Make Money</h4>
              <div className="pl-2">
                <p> Sell on KartDeal</p>
                <p>Sell under KartDeal Accelerator</p>
                <p>KartDeal Global Selling</p>
                <p> Fulfilment by KartDeal</p>
                <p> Advertise Your Products</p>
                <p> KartDeal Pay on Merchants</p>
              </div>
            </div>
            <div className="col-md-3  mt-3">
              <h4>Let Us Help You</h4>
              <div className="pl-2">
                <p>KartDeal App Download</p>
                <p>Your Account</p>
                <p>Returns Centre</p>
                <p>100% Purchase Protection</p>
                <p>KartDeal Assistant Download</p>
                <p>Help</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </footer>
    </div>
  );
};

export default Footer;
