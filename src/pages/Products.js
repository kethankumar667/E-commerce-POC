import React, { useState, useEffect, useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Products = () => {
  const [Data, setData] = useState([]);
  const [Filter, setFilter] = useState(Data);
  const [categories, setcategories] = useState([]);
  const fetchProducts = () => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setData(res.data);
      setFilter(res.data);
    });
  };
  const fetchCategories = () => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then((res) => setcategories(res.data))
      .catch((err) => console.log(err));
  };
  const a = useMemo(() => {
    Data, categories;
  }, []);
  useEffect(() => {
    fetchProducts(), fetchCategories();
  }, [a]);

  const itemselection = () => {
    setFilter(Data);
  };
  const filterProduct = (cat) => {
    const updatedList = Data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="light"
        className="category_bar shadow outline-dark">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />
          <Navbar.Collapse id="navbarScroll" className="px-2 me-auto bg-dark">
            <Nav className=" d-flex justify-content-space-around">
              <Nav.Link
                className="text-white fw-bold"
                onClick={() => {
                  itemselection();
                }}>
                All
              </Nav.Link>
              {categories.map((el, index) => (
                <Nav key={index} className="me-auto">
                  <Nav.Link
                    className="text-white text-capitalize fw-bold "
                    onClick={() => filterProduct(el)}
                    key={index}>
                    {el}
                  </Nav.Link>
                </Nav>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        <div className="row">
          {Data ? (
            Filter.map((product, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="col-lg-3 mb-3 mt-4 col-md-6 col-sm-12" key={index}>
                    <div className="card h-100 text-center p-4">
                      <img
                        className="card-img-top"
                        src={product.image}
                        alt={product.title}
                        height="250px"
                      />
                      <div className="card-body">
                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                        <p className="card-text">$.{product.price}</p>
                        <Link to={`/product/${product.id}`} className="btn btn-outline-dark">
                          Go to Product
                        </Link>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })
          ) : (
            <>loading....</>
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(Products);
