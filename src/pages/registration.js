import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';
import registeruser from '../redux/Actions/loginActions';

const Registration = () => {
  const [FisrtName, setFisrtName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [Address, setAddress] = useState('');
  const [state, setstate] = useState('');
  const [pincode, setpincode] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  let username = '';
  const users = useSelector((state) => state.login.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
  ];
  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password || !FisrtName || !LastName || !phone || !Address || !pincode) {
      return window.alert('Please Fill all the Fields');
    } else if (password === cpassword) {
      username = FisrtName + LastName;
      const data = { username, email, password, phone, Address, state, pincode };
      dispatch(registeruser(data));
      toast.success('User registered successfully');
      navigate('/');
    } else {
      window.alert('Please check the password');
    }
  };
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center my-4 text-primary justify-content-center"></h1>
        <div className="col-md-6  mx-auto">
          <Card className=" bg-light text-primary">
            <Card.Header>User Registration Form</Card.Header>
            <Card.Body>
              <Form onSubmit={submitHandler}>
                <div className="container">
                  <div className="row mt-4">
                    <div className="col-lg-6 col-md-4 h5 text-secondary">
                      <Form.Group className="mb-3" controlId="firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter First Name"
                          autoComplete="off"
                          value={FisrtName}
                          onChange={(e) => {
                            setFisrtName(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-lg-6 col-md-4 h5 text-secondary">
                      <Form.Group className="mb-3" controlId="lastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Last Name"
                          autoComplete="off"
                          value={LastName}
                          onChange={(e) => {
                            setLastName(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-4 h5 text-secondary">
                        <Form.Group className="mb-3" controlId="mail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => {
                              setemail(e.target.value);
                            }}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-4 h5 text-secondary">
                        <Form.Group className="mb-3" controlId="password">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter Phone Number"
                            autoComplete="off"
                            value={phone}
                            onChange={(e) => {
                              setphone(e.target.value);
                            }}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-4 h5 text-secondary">
                        <Form.Group className="mb-3" controlId="password">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Address"
                            autoComplete="off"
                            value={Address}
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                          />
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12 col-md-4 h5 text-secondary">
                        <Form.Group className="mb-3" controlId="password">
                          <Form.Label>State:</Form.Label>
                          <select
                            onChange={(e) => {
                              setstate(e.target.value);
                            }}
                            className="category">
                            {states.map((state, index) => (
                              <option value={state} key={index}>
                                {state}
                              </option>
                            ))}
                          </select>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-4 h5 text-secondary">
                        <Form.Group className="mb-3" controlId="password">
                          <Form.Label>PinCode</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Pincode"
                            autoComplete="off"
                            value={pincode}
                            onChange={(e) => {
                              setpincode(e.target.value);
                            }}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-4 h5 text-secondary">
                        <Form.Group className="mb-3" controlId="password">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Enter password"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => {
                              setpassword(e.target.value);
                            }}
                          />
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12 col-md-4 h5 text-secondary">
                        <Form.Group className="mb-3" controlId="confirmpassword">
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Confirm password"
                            autoComplete="off"
                            // value={number}
                            onChange={(e) => {
                              setcpassword(e.target.value);
                            }}
                          />
                        </Form.Group>
                      </div>
                    </div>

                    <Stack direction="horizontal" gap={2}>
                      <Button
                        type="submit"
                        variant="primary"
                        className=" btn btn-block btn-success d-flex">
                        Add user
                      </Button>
                      <Link to="/" variant="primary" className=" btn btn-block btn-danger d-flex">
                        cancel
                      </Link>
                    </Stack>
                  </div>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Registration;
