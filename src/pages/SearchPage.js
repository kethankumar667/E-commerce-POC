import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const item = location?.state?.data;
  const searchResults = () => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      if (res?.data) {
        let results = res?.data?.filter((item) => {
          if (
            item?.title?.includes(location?.state?.data) ||
            item?.category?.includes(location?.state?.data) ||
            item?.title?.toLowerCase().includes(location?.state?.data) ||
            item?.category?.toLowerCase().includes(location?.state?.data)
          ) {
            return item;
          }
        });
        setData(results);
      }
    });
  };
  useEffect(() => {
    searchResults();
  }, [item]);
  return (
    <>
      <div className="container">
        <div className="row">
          {data && data.length > 0 ? (
            data?.map((product, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="col-md-3 mb-3 mt-4" key={index}>
                    <div className="card h-100 text-center p-4">
                      <img
                        className="card-img-top"
                        src={product.image}
                        alt={product.title}
                        height="250px"
                      />
                      <div className="card-body">
                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                        <p className="card-text">₹{product.price}</p>
                        <Link to={`/product/${product.id}`} className="btn btn-outline-dark">
                          Go to Product{' '}
                        </Link>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })
          ) : (
            <>No Product Found....</>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
