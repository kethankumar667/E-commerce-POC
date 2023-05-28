/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useMemo } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Logo from '../assets/images/download.png';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as Icon from 'react-bootstrap-icons';
import Modal from 'react-bootstrap/Modal';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { login } from '../redux/Actions/loginActions';
const Navigationbar = () => {
  let [selectedoption, setselectedoption] = useState('');
  const [search, setsearch] = useState('');
  const [show, setShow] = useState(false);
  const [Data, setData] = useState([]);
  const [errorMessage, seterrorMessage] = useState('');
  const [loginemail, setloginemail] = useState('');
  const [loginpassword, setloginpassword] = useState('');
  const [loginuser, setloginuser] = useState('Sign-in');
  let validuser = '';
  let users = useSelector((state) => state.login.users);
  let loggedin = useSelector((state) => state.login.loginuser);
  // setloginuser(loggedin);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [Filter, setFilter] = useState(Data);
  const fetchProducts = () => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setData(res.data);
      setFilter(res.data);
    });
  };
  const a = useMemo(() => fetchProducts, []);
  useEffect(() => {
    fetchProducts();
  }, [a]);
  let cartlength = useSelector((state) => state.products);
  let cartItems = cartlength.cartData;
  let [cartTotal, setcartTotal] = useState(0);
  useEffect(() => {
    setcartTotal(
      cartItems.reduce((accumulator, object) => {
        return accumulator + object.count;
      }, 0)
    );
  }, [cartlength]);

  const validation = () => {
    seterrorMessage(' !! Please Check the Credentials');
  };
  let authenticated = localStorage.getItem('user');
  const filterProduct = (item) => {
    selectedoption = item;
    if (selectedoption === 'All') {
      setFilter(Data);
    } else {
      const updatedList = Data.filter((x) => x.category === selectedoption);
      setFilter(updatedList);
    }
  };

  const handleOnSearch = (string) => {
    setsearch(string);
  };
  const handleOnSelect = (string) => {
    setsearch(string.title);
  };
  return (
    <>
      <>
        <Navbar bg="dark" expand="lg" className="navigationbar sticky-top">
          <Container>
            <Navbar.Brand className=" heading-1 text-info fw-bold">
              <Nav.Link as={Link} to="/">
                <div>
                  <img src={Logo} alt="Logo" className="logo_img" />
                </div>
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />
            <Navbar.Collapse id="navbarScroll" className="bg-dark">
              <Nav className="me-auto my-2 my-lg-0">
                <div className="search_bar">
                  <div className="select">
                    <select
                      onChange={(e) => {
                        filterProduct(e.target.value);
                      }}
                      className="category">
                      <option value="All">All</option>
                      <option value="electronics">electronics</option>
                      <option value="jewelery">jewelery</option>
                      <option value="men's clothing">men's clothing</option>
                      <option value="women's clothing">women's clothing</option>
                    </select>
                  </div>
                  <div className="search">
                    <ReactSearchAutocomplete
                      items={Filter}
                      fuseOptions={{ keys: ['title'] }}
                      resultStringKeyName="title"
                      onSearch={handleOnSearch}
                      onSelect={handleOnSelect}
                      showIcon={true}
                      styling={{
                        height: '34px',
                        width: '70%',
                        border: '1px solid black',
                        borderRadius: '4px',
                        backgroundColor: 'white',
                        boxShadow: 'none',
                        hoverBackgroundColor: 'lightgreen',
                        color: 'black',
                        fontSize: '12px',
                        iconColor: 'black',
                        lineColor: 'lightgreen',
                        placeholderColor: 'red',
                        clearIconMargin: '3px 8px 0 0',
                        zIndex: 2
                      }}
                    />
                  </div>
                  <div className="search_button">
                    <Link to="/search" state={{ data: search }}>
                      <Button variant="outline-info">Search</Button>
                    </Link>
                  </div>
                </div>
              </Nav>
              <div className="user_data">
                <Nav className="  px-4 text-green">
                  <Link to="/cart" className="text-white">
                    <Icon.Cart3 color="#0d6efd" size="35" title="cart" />
                    <span className="cart_count fw-bold">
                      {cartlength.length === 0 ? '0' : cartTotal}
                    </span>
                  </Link>
                </Nav>

                <Nav className="ml-5 outline-info">
                  <Icon.PersonBadge color="#0db5e3" size="40" title="cart" />
                  <Nav.Link className="heading-1 text-white">
                    {/* <b onClick={handleShow}>{authenticated ? authenticated : loginuser}</b> */}
                    <b onClick={handleShow}>{loggedin}</b>
                  </Nav.Link>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          const credentials = { email: loginemail, password: loginpassword };
                          validuser = users.some((element) => {
                            if (
                              element.email === credentials.email &&
                              element.password === credentials.password
                            ) {
                              validuser = element;
                              // setloginuser(validuser.username);
                              localStorage.setItem('user', validuser?.username);
                              dispatch(login(validuser.username));
                              setloginuser(loggedin);

                              handleClose();
                            } else if (
                              element.email !== credentials.email &&
                              element.password !== credentials.password
                            ) {
                              validation();
                            }
                          });
                        }}>
                        <div className="container">
                          <div className="row mt-4">
                            {loggedin[0] === 'Sign In' ? (
                              <div>
                                <div className="row">
                                  <div className="col-lg-12  h5 text-secondary">
                                    <Form.Group className="mb-3" controlId="mail">
                                      <FloatingLabel label="Email address" className="mb-3">
                                        <Form.Control
                                          type="email"
                                          placeholder="Enter email"
                                          autoComplete="off"
                                          value={loginemail}
                                          onChange={(e) => {
                                            setloginemail(e.target.value);
                                          }}
                                        />
                                      </FloatingLabel>
                                    </Form.Group>
                                    <p className="text-danger">{errorMessage}</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-12 col-md-4 h5 text-secondary">
                                    <Form.Group className="mb-3" controlId="password">
                                      <FloatingLabel label="Password" className="mb-3">
                                        <Form.Control
                                          type="password"
                                          placeholder="Enter Password"
                                          autoComplete="off"
                                          value={loginpassword}
                                          onChange={(e) => {
                                            setloginpassword(e.target.value);
                                          }}
                                        />
                                      </FloatingLabel>
                                    </Form.Group>
                                    <p className="text-danger">{errorMessage}</p>
                                  </div>
                                </div>
                                <Button
                                  type="submit"
                                  variant="primary"
                                  className=" btn btn-block btn-success">
                                  Login
                                </Button>
                                <div className="mt-2">
                                  <p>
                                    New to KartDeal <a href="/registration">ClickHere</a>
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <></>
                            )}

                            <div direction="horizontal" className="justify-content-center">
                              {loggedin[0] === 'Sign In' ? (
                                <></>
                              ) : (
                                <>
                                  <h5 className="text-center">
                                    Thank you <span className="text-info">{loggedin[0]}</span> for
                                    your Shopping
                                  </h5>
                                  <div className="text-center">
                                    <Link
                                      to="/signedout"
                                      variant="primary"
                                      className=" btn btn-danger "
                                      onClick={() => {
                                        localStorage.removeItem('user');
                                        handleClose();
                                        window.location.reload();
                                        Navigate('/');
                                      }}>
                                      Sign out
                                    </Link>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </Form>
                    </Modal.Body>
                  </Modal>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </>
  );
};

export default React.memo(Navigationbar);
