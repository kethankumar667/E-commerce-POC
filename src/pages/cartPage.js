import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { delItems, addSingleInctoItem, addSingleDectoItem } from '../redux/Actions/productActions';
const CartPage = () => {
  let cart = useSelector((state) => state.products);
  let cartlength = useSelector((state) => state.products.cartData);
  let cartTotal = cartlength.reduce((accumulator, object) => {
    return accumulator + object.count;
  }, 0);
  let dispatch = useDispatch();

  const itemInc = (item) => {
    dispatch(addSingleInctoItem(item));
  };

  const itemDec = (item) => {
    dispatch(addSingleDectoItem(item));
  };
  const removeitem = (Item) => {
    dispatch(delItems(Item));
    toast.error(' Item removed from the Cart');
  };
  return (
    <div>
      <div>
        <div className="container">
          {cart.cartData.length > 0 ? (
            cart.cartData.map((product, index) => (
              <React.Fragment key={index}>
                <div className="row">
                  <div className="card my-5 bg-white text-dark shadow ">
                    <h5 className="card-header d-flex flex-row justify-content-space-between">
                      Item.No:{index + 1}
                      <span className="text-capitalize font-weight-bold"> {product.category}</span>
                    </h5>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6 d-flex flex-row justify-content-center">
                          <img
                            src={product.image}
                            alt={product.title}
                            height="200px"
                            width="200px"
                            className="m-5"
                          />
                        </div>
                        <div className="col-md-6">
                          <h3>{product.title}</h3>
                          <p className="lead fw-bolder">
                            Rating : {product.rating && product.rating.rate}
                            <span className="m-2">
                              <i className="fa fa-star"></i>
                            </span>
                          </p>
                          <h6 className="lead fw-bold display-6  text-secondary">
                            ${product.price} X {product.count}= $
                            {(product.price * product.count).toFixed(2)}
                          </h6>
                          <p className="lead fw-bolder">Quantity:</p>
                          <button
                            className="btn btn-outline-dark"
                            onClick={() => {
                              itemInc(product);
                            }}>
                            <i className="fa fa-plus"></i>
                          </button>
                          {product.count > 0 ? (
                            <button className="btn btn-warning text-danger display-6 fw-bold m-2">
                              {product.count}
                            </button>
                          ) : (
                            <>
                              <button
                                className="btn btn-outline-danger m-2"
                                onClick={() => {
                                  removeitem(product);
                                }}>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                              </button>
                            </>
                          )}
                          {product.count === 0 ? (
                            <></>
                          ) : (
                            <button
                              className="btn btn-outline-dark me-4"
                              onClick={() => itemDec(product)}>
                              <i className="fa fa-minus"></i>
                            </button>
                          )}
                          <button
                            className="btn btn-outline-danger me-4"
                            onClick={() => removeitem(product)}>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))
          ) : (
            <div className="container mt-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Your Cart is Empty</h5>
                  <p className="card-text">Keep Shopping with Us.</p>
                  <Link to="/" className="btn btn-outline-dark bg-primary text-light">
                    Home
                  </Link>
                </div>
              </div>
            </div>
          )}
          {cart.cartData.length > 0 ? (
            <React.Fragment>
              <div>
                <Link to="/checkout" className="btn btn-primary w-100">
                  Proceed to Buy ({cartTotal} Items)
                </Link>
              </div>
            </React.Fragment>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
