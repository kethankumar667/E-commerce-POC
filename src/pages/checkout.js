/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetCart } from '../redux/Actions/productActions';
import MyDocument from '../components/MyDocument';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

const Checkout = () => {
  const [payment, setPayment] = useState('select');
  let authenticated = localStorage.getItem('user');
  let cartData = useSelector((state) => state.products.cartData);
  let userData = useSelector((state) => state.login.users);
  let date = new Date();
  let dispatch = useDispatch();
  let id = Math.floor(Math.random() * 9999898989);
  let cartTotal = cartData.reduce((accumulator, object) => {
    return accumulator + object.count * object.price;
  }, 0);

  return (
    <div className="container mt-5">
      {cartData.length > 0 ? (
        <>
          <div className="card">
            <div className="card-header">
              <div className="text-primary display-6">
                <h5>
                  Ordered By: <span className="text-muted">{authenticated}</span>
                </h5>
              </div>
            </div>
            <div className="card-body">
              <div>
                <h2>
                  Order Date:
                  <span className="text-secondary">
                    {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
                  </span>
                </h2>
                <h2>
                  Order Id:
                  <span className="text-secondary"> {id}</span>
                </h2>
              </div>
              {cartData.map((product, index) => (
                <React.Fragment key={index}>
                  <div className="mt-4">
                    <h3>
                      Name: <span className="text-muted">{product.title}</span>
                    </h3>
                    <h5>
                      Quantity: <span className="text-muted">{product.count}</span>
                    </h5>
                    <h5>
                      SubTotal:
                      <span className="text-muted">
                        $.{Math.floor(product.count * product.price)}
                      </span>
                    </h5>
                    <hr></hr>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-end">
                <div>
                  <h2>
                    Order Total:
                    <span className="text-secondary"> $.{Math.floor(cartTotal)}</span>
                  </h2>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <h5>Mode of Payment*:</h5>
                <span>
                  <div className="mr-2">
                    <select onChange={(e) => setPayment(e.target.value)}>
                      <option value="select">--select Payment Method--</option>
                      <option value="Cash on Delivery">Cash on Delivery</option>
                      <option value="UPI Payment">UPI Payment</option>
                      <option value="Debit card">Debit card</option>
                      <option value="Credit card" defaultValue>
                        Credit card
                      </option>
                      <option value="By Voucher">By Voucher</option>
                    </select>
                  </div>
                </span>
              </div>
              <div className="d-flex justify-content-end">
                {payment === 'select' ? (
                  <></>
                ) : (
                  <>
                    <PDFDownloadLink
                      document={
                        <MyDocument
                          data={cartData}
                          user={userData}
                          authenticated={authenticated}
                          orderid={id}
                          payment={payment}
                        />
                      }
                      fileName="Form">
                      {({ loading }) =>
                        loading ? (
                          <button>loading...</button>
                        ) : (
                          <button className="btn btn-info me-2">Invoice</button>
                        )
                      }
                    </PDFDownloadLink>
                  </>
                )}
                {payment === 'Cash on Delivery' ? (
                  <>
                    <Link
                      to="/thankyou"
                      variant="primary"
                      className=" btn btn-danger "
                      onClick={() => {
                        dispatch(resetCart());
                        localStorage.removeItem('items');
                      }}>
                      Place Order
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/thankyou"
                      variant="primary"
                      className=" btn btn-danger "
                      onClick={() => {
                        dispatch(resetCart());
                        localStorage.removeItem('items');
                      }}>
                      Pay Now
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {/* <PDFViewer height="500px">
        <MyDocument
          data={cartData}
          user={userData}
          authenticated={authenticated}
          orderid={id}
          payment={payment}
        />
      </PDFViewer> */}
    </div>
  );
};

export default Checkout;
