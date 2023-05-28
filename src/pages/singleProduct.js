import React, { useState, useEffect, useMemo } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { additemstocart } from '../redux/Actions/productActions';
import axios from 'axios';

const SingleProduct = () => {
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);
  const [count, setcount] = useState(1);
  const [imageUrl, setimageUrl] = useState('');
  let loggedinuser = useSelector((state) => state.login.loginuser);
  let dispatch = useDispatch();
  const { id } = useParams();
  const getproduct = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setproduct(res.data);
      setimageUrl(res.data.image);
      setloading(false);
    });
  };
  const a = useMemo(() => product, []);

  useEffect(() => {
    getproduct();
  }, [a]);
  const itemInc = () => {
    setcount(count + 1);
  };
  const itemDec = () => {
    count > 1 ? setcount(count - 1) : count;
  };
  const Loading = () => {
    <>
      <div className="col-md-6">
        <Skeleton height={400} />
      </div>
      <div className="col-md-6" style={{ lineHeight: '2' }}>
        <Skeleton height={50} width={300} />
        <Skeleton height={75} />
        <Skeleton height={25} width={150} />
        <Skeleton height={50} width={300} />
        <Skeleton height={150} />
        <Skeleton height={150} />
        <Skeleton height={50} width={100} style={{ marginLeft: '6px' }} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
    </>;
  };
  const additem = (products) => {
    products['count'] = count;
    dispatch(additemstocart(products));
    toast.success('Item added to cart Successfully!');
  };
  const ShowProduct = () => {
    return (
      <div>
        <div className="row">
          <div className="col-md-4  col-lg-12 mb-4 mx-1 text-center">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: product.title,
                  src: imageUrl,
                  width: 400,
                  height: 400
                },
                largeImage: { alt: product.title, src: imageUrl, width: 1000, height: 1000 }
              }}
            />
          </div>
          <div className="col-md-8 col-lg-12">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bolder">
              Rating {product.rating && product.rating.rate}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">$.{product.price}</h3>
            <p className="lead">{product.description}</p>
            <p className="lead fw-bolder display-6">Quantity</p>
            <button
              className="btn btn-outline-dark m-2"
              onClick={() => {
                itemDec();
              }}>
              <i className="fa fa-minus"></i>
            </button>
            <button className="btn btn-outline-dark m-2">{count}</button>
            <button
              className="btn btn-outline-dark m-2"
              onClick={() => {
                itemInc();
              }}>
              <i className="fa fa-plus"></i>
            </button>
            {loggedinuser[0] === 'Sign In' ? (
              <>
                <p className="lead text-danger fw-bold">
                  Please Login to the Application to add Items to Cart
                </p>
              </>
            ) : (
              <>
                <button className="btn btn-outline-dark" onClick={() => additem(product)}>
                  Add to Cart
                </button>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-3">
                  Go to Cart
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className=" container py-4">
        <div className="row py-4">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </>
  );
};
export default SingleProduct;
